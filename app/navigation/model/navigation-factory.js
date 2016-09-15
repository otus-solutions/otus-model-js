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

    function fromJson(json, inNavigations) {
      var jsonObj = _parse(json);

      if (!jsonObj.routes || !jsonObj.routes.length) {
        return null;
      }

      var navigation = create(jsonObj.origin, jsonObj.routes[0].destination);

      if (navigation) {
        navigation.index = jsonObj.index;
        navigation.inNavigations = inNavigations;
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
    self.addInNavigation = addInNavigation;
    self.clone = clone;
    self.createAlternativeRoute = createAlternativeRoute;
    self.equals = equals;
    self.getDefaultRoute = getDefaultRoute;
    self.getRouteByName = getRouteByName;
    self.hasRoute = hasRoute;
    self.isOrphan = isOrphan;
    self.listRoutes = listRoutes;
    self.removeInNavigation = removeInNavigation;
    self.removeRouteByName = removeRouteByName;
    self.selfsame = selfsame;
    self.setupDefaultRoute = setupDefaultRoute;
    self.toJson = toJson;
    self.updateInNavigation = updateInNavigation;
    self.updateRoute = updateRoute;

    function addInNavigation(navigation) {
      self.inNavigations.push(navigation);
      _calculateNavigationType();
    }

    function clone() {
      var clone = new self.constructor(self.origin, _defaultRoute);
      self.inNavigations.map(clone.addInNavigation);
      self.routes.map(clone.createAlternativeRoute);
      return clone;
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

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.index !== self.index) {
        return false;
      }

      if (other.isDefault !== self.isDefault) {
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

    function getDefaultRoute() {
      if (!_defaultRoute) {
        return null;
      } else {
        return _defaultRoute.clone();
      }
    }

    function getRouteByName(name) {
      var routeToReturn = null;

      self.routes.some(function(route) {
        if (route.name === name) {
          routeToReturn = route.clone();
          return true;
        }
      });

      return routeToReturn;
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

    function isOrphan() {
      return !self.inNavigations.length && self.index > 0;
    }

    function listRoutes() {
      var clones = [];

      clones = self.routes.map(function(route) {
        if (route) {
          return route.clone();
        } else {
          return null;
        }
      });

      return clones;
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

    function selfsame(other) {
      return Object.is(self, other);
    }

    function setupDefaultRoute(route) {
      removeRouteByName(route.name);

      if (_existsRouteAtIndex(0)) {
        if (self.routes[0].isDefault) {
          self.routes[0] = route;
        } else {
          self.routes.unshift(route);
        }
      } else {
        self.routes.push(route);
      }

      _defaultRoute = route;
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

    function updateInNavigation(navigation) {
      self.inNavigations.some(function(inNavigation, index) {
        if (inNavigation.origin === navigation.origin) {
          self.inNavigations[index] = navigation;
          return true;
        }
      });

      _calculateNavigationType();
    }

    function updateRoute(routeToUpdate) {
      var existentRoute = getRouteByName(routeToUpdate.name);

      if (existentRoute.isDefault) {
        if (!routeToUpdate.isDefault) {
          _removeDefaultRoute();
          createAlternativeRoute(routeToUpdate);
        }
      } else {
        if (routeToUpdate.isDefault) {
          removeRouteByName(existentRoute.name);
          setupDefaultRoute(routeToUpdate);
        } else {
          _applyRouteUpdate(routeToUpdate);
        }
      }
    }

    function _routeExists(newRoute) {
      return self.routes.some(function(route) {
        return route && newRoute.equals(route);
      });
    }

    function _isCurrentDefaultRoute(route) {
      return (_defaultRoute && route.name === _defaultRoute.name);
    }

    function _applyRouteUpdate(routeToUpdate) {
      self.routes.some(function(route, index) {
        if (route.name === routeToUpdate.name) {
          self.routes[index] = routeToUpdate;
          return true;
        }
      });
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
        return inNavigation.isDefault && (inNavigation.getDefaultRoute() && inNavigation.getDefaultRoute().destination === self.origin);
      });
    }

    function _existsRouteAtIndex(index) {
      return (self.routes[index]) ? true : false;
    }
  }
}());
