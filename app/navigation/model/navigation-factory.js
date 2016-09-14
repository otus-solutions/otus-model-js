(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationFactory', factory);

  factory.$inject = [
    'otusjs.model.navigation.RouteFactory'
  ];

  var Inject = {
    RouteFactory: null
  };

  function factory(RouteFactory) {
    var self = this;

    Inject.RouteFactory = RouteFactory;

    self.create = create;
    self.fromJson = fromJson;

    function create(origin, destination) {
      if (!origin || !destination) {
        return null;
      }

      var defaultRoute = RouteFactory.createDefault(origin, destination);
      if (!defaultRoute) {
        return null;
      }

      defaultRoute.index = 0;
      return new Navigation(origin, defaultRoute);
    }

    function fromJson(json) {
      var jsonObj = _parse(json);

      if (!jsonObj.routes || !jsonObj.routes.length) {
        return null;
      }

      var navigation = create(jsonObj.origin, jsonObj.routes[0].destination);

      if (navigation) {
        navigation.index = jsonObj.index;
        navigation.inNavigations = jsonObj.inNavigations;
        navigation.isDefault = jsonObj.isDefault;
        navigation.routes = jsonObj.routes.map(function(route) {
          return RouteFactory.fromJson(JSON.stringify(route));
        });
      }

      return navigation;
    }

    function _parse(json) {
      if (typeof json === 'string') {
        return JSON.parse(json);
      } else if (typeof json === 'object') {
        return JSON.parse(JSON.stringify(json));
      }
    }

    return self;
  }

  function Navigation(origin, defaultRoute) {
    var self = this;
    var _defaultRoute = defaultRoute;

    /* Object properties */
    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Navigation';
    self.origin = origin;
    self.index = null;
    self.isDefault = true;
    self.inNavigations = [];
    self.routes = [defaultRoute];

    /* Public methods */
    self.listRoutes = listRoutes;
    self.getRoute = getRoute;
    self.getDefaultRoute = getDefaultRoute;
    self.setupDefaultRoute = setupDefaultRoute;
    self.createAlternativeRoute = createAlternativeRoute;
    self.removeRouteByName = removeRouteByName;
    self.updateRoute = updateRoute;
    self.hasRoute = hasRoute;
    self.addInNavigation = addInNavigation;
    self.removeInNavigation = removeInNavigation;
    self.updateInNavigation = updateInNavigation;
    self.isOrphan = isOrphan;
    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJson = toJson;

    function listRoutes() {
      var clone = [];

      clone = self.routes.map(function(route) {
        if (route) {
          return route.clone();
        } else {
          return null;
        }
      });

      return clone;
    }

    function getRoute(routeData) {
      var routeToReturn = null;

      self.routes.some(function(route) {
        if (route.name === routeData.name) {
          routeToReturn = route;
          return true;
        } else {
          return false;
        }
      });

      return routeToReturn.clone();
    }

    function getDefaultRoute() {
      if (!_defaultRoute) {
        return null;
      } else {
        return _defaultRoute.clone();
      }
    }

    function createAlternativeRoute(routeData) {
      var origin = routeData.origin;
      var destination = routeData.destination;
      var conditions = routeData.conditions;
      var route = Inject.RouteFactory.createAlternative(origin, destination, conditions);

      if (route && route.conditions.length && !_routeExists(route)) {
        routeData.conditions.map(route.addCondition);
        route.isDefault = false;
        self.routes.push(route);
      }
    }

    function removeRouteByName(name) {
      self.routes.some(function(route, index) {
        if (route.name === name) {
          self.routes.splice(index, 1);
          if (route.isDefault) {
            _defaultRoute = null;
          }
          return true;
        }
      });
    }

    function updateRoute(route) {
      self.routes.some(function(currentRoute, index) {
        if (_isCurrentDefaultRoute(route)) {
          if (route.isDefault) {
            _updateDefaultRoute(route);
          } else {
            _removeDefaultRoute();
            createAlternativeRoute(route);
          }
          return true;
        } else {
          if (route.isDefault) {
            self.routes.splice(index, 1);
            setupDefaultRoute(route);
          } else {
            self.routes[index] = route;
          }
        }
      });
    }

    function setupDefaultRoute(route) {
      if (self.routes[0]) {
        if (!self.routes[0].isDefault) {
          self.routes.unshift(route);
        } else {
          updateRoute(route);
        }
      } else {
        _defaultRoute = route;
        self.routes.push(_defaultRoute);
      }
    }

    function hasRoute(routeData) {
      if (routeData.name) {
        return self.routes.some(function(route) {
          return route.name === routeData.name;
        });
      } else if (routeData.origin && routeData.destination) {
        return self.routes.some(function(route) {
          return (route.origin === routeData.origin && route.destination === routeData.destination);
        });
      } else {
        // TODO Lançar uma exceção aqui porque ficou impossível de determinar
        return undefined;
      }
    }

    function addInNavigation(navigation) {
      self.inNavigations.push(navigation);
      _calculateNavigationType();
    }

    function removeInNavigation(origin) {
      self.inNavigations.some(function(navigation, index) {
        if (navigation.origin === origin) {
          self.inNavigations.splice(index, 1);
          return true;
        }
      });

      _calculateNavigationType();
    }

    function updateInNavigation(navigation) {
      self.inNavigations.some(function(inNavigation, index) {
        if (inNavigation.origin === navigation.origin) {
          self.inNavigations[index] = navigation;
          return true;
        }
      });

      _calculateNavigationType();
    }

    function isOrphan() {
      return !self.inNavigations.length && self.index > 0;
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.index !== self.index) {
        return false;
      }

      if (other.routes.length === self.routes.length) {

        if (self.routes.length > 0) {
          var hasEqualRoutes = other.routes.some(function(otherRoute) {
            return self.routes.some(function(selfRoute) {
              return selfRoute.equals(otherRoute);
            });
          });

          if (!hasEqualRoutes) {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }

      return true;
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function clone() {
      return Object.assign(new Navigation(), self);
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.index = self.index;
      json.isDefault = self.isDefault;
      json.inNavigations = self.inNavigations;
      json.routes = self.routes.map(function(route) {
        return route.toJson();
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }

    function _routeExists(newRoute) {
      return self.routes.some(function(route) {
        return route && newRoute.equals(route);
      });
    }

    function _isCurrentDefaultRoute(route) {
      return (_defaultRoute && route.name === _defaultRoute.name);
    }

    function _updateDefaultRoute(route) {
      _defaultRoute = route;
      _defaultRoute.conditions = [];
      self.routes[0] = _defaultRoute;
    }

    function _removeDefaultRoute() {
      _defaultRoute = null;
      self.routes.shift();
    }

    function _calculateNavigationType() {
      self.isDefault = self.inNavigations.some(function(inNavigation) {
        return inNavigation.isDefault && (inNavigation.getDefaultRoute() && inNavigation.getDefaultRoute().isDefault);
      });
    }
  }
}());
