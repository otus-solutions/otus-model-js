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
    self.createInitial = createInitial;
    self.fromJson = fromJson;

    function create(origin) {
      if (!origin) {
        return null;
      }

      return new Navigation(origin);
    }

    function createInitial(origin, destination) {
      var initialNavigation = new Navigation(origin, destination);

      if (origin === 'BEGIN NODE') {
         initialNavigation.index = 0;
      }
      
      return initialNavigation;
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

  function Navigation(origin) {
    var self = this;

    /* Object properties */
    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Navigation';
    self.origin = origin;
    self.index = null;
    self.inNavigations = [];
    self.outNavigations = [];
    self.routes = [];

    /* Public methods */
    self.addInNavigation = addInNavigation;
    self.addOutNavigation = addOutNavigation;
    self.clone = clone;
    self.createAlternativeRoute = createAlternativeRoute;
    self.equals = equals;
    self.getDefaultRoute = getDefaultRoute;
    self.getRouteByName = getRouteByName;
    self.hasRoute = hasRoute;
    self.hasDefaultRoute = hasDefaultRoute;
    self.isOrphan = isOrphan;
    self.hasOrphanRoot = hasOrphanRoot;
    self.listRoutes = listRoutes;
    self.removeInNavigation = removeInNavigation;
    self.removeRouteByName = removeRouteByName;
    self.selfsame = selfsame;
    self.setupDefaultRoute = setupDefaultRoute;
    self.toJson = toJson;
    self.updateInNavigation = updateInNavigation;
    self.updateRoute = updateRoute;

    function addInNavigation(navigation) {
      navigation.addOutNavigation(self);
      self.inNavigations.push(navigation);
    }

    function addOutNavigation(navigation) {
      self.outNavigations.push(navigation);
    }

    function clone() {
      var clone = new self.constructor(self.origin, self.routes[0]);
      self.inNavigations.map(clone.addInNavigation);
      self.outNavigations.map(clone.addOutNavigation);
      var routes = self.listRoutes();
      routes.shift();
      routes.map(clone.createAlternativeRoute);
      return clone;
    }

    function createAlternativeRoute(routeData) {
      if (!routeData.conditions || !routeData.conditions.length) {
        throw new Error('There are no conditions for this route.', 'navigation-factory.js', 123);
      }

      if (getRouteByName(routeData.origin + '_' + routeData.destination)) {
        throw new Error('Route already exists.', 'navigation-factory.js', 127);
      }

      _createAlternativeRoute(routeData);
    }

    function _createAlternativeRoute(routeData) {
      var route = Inject.RouteFactory.createAlternative(self.origin, routeData.destination, routeData.conditions);
      routeData.conditions.map(route.addCondition);
      route.isDefault = false;
      self.routes.push(route);
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
          var hasEqualRoutes = other.routes.every(function(otherRoute) {
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

    function _existsRouteAtIndex(index) {
      return (self.routes[index]) ? true : false;
    }

    function getDefaultRoute() {
      return self.routes[0].clone();
    }

    function hasDefaultRoute() {
      return !self.routes[0] ? false : true
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
      return self.routes.some(function(route) {
        return (getRouteByName(routeData.name) || route.origin === routeData.origin && route.destination === routeData.destination);
      });
    }

    function _isCurrentDefaultRoute(route) {
      return (self.routes[0] && route.name === self.routes[0].name);
    }

    function hasOrphanRoot() {
      var result = false;

      if (self.index === 0) {
        return result;
      }

      result = self.inNavigations.every(function(navigation) {
        return navigation.isOrphan() || navigation.hasOrphanRoot();
      });

      return result;
    }

    function isOrphan() {
      if (self.index !== 0 && !self.inNavigations.length) {
        return true;
      } else {
        return false;
      }
    }

    function listRoutes() {
      var clones = [];

      clones = self.routes.map(function(route) {
        return route.clone();
      });

      return clones;
    }

    function removeInNavigation(navigationToRemove) {
      self.inNavigations.some(function(navigation, index) {
        if (navigation.origin === navigationToRemove.origin) {
          self.inNavigations.splice(index, 1);
          return true;
        }
      });
    }

    function removeRouteByName(name) {
      self.routes.some(function(route, index) {
        if (route.name === name) {
          self.routes.splice(index, 1);
          if (route.isDefault) {
            self.routes[0] = null;
          }
          return true;
        }
      });
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function setupDefaultRoute(route) {
      if (!route) {
        throw new TypeError('Default route should not be undefined or null.', 'navigation-factory.js', 285);
      }

      removeRouteByName(route.name);
      route.conditions = [];
      self.routes[0] = route;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.index = self.index;
      json.inNavigations = _buildJsonInNavigations();
      json.routes = self.routes.map(function(route) {
        return route.toJson();
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }

    function _buildJsonInNavigations() {
      return self.inNavigations.map(function(element) {
        return {
          origin: element.origin
        };
      });
    }

    function _updateDefaultRoute(route) {
      self.routes[0] = route;
      self.routes[0].conditions = [];
    }

    function updateInNavigation(navigation) {
      var wasUpdated = self.inNavigations.some(function(inNavigation, index) {
        if (inNavigation.origin === navigation.origin) {
          self.inNavigations[index] = navigation;
          return true;
        }
      });

      if (!wasUpdated) {
        self.inNavigations.push(navigation);
      }
    }

    function updateRoute(routeToUpdate) {
      if (!_isCurrentDefaultRoute(routeToUpdate)) {
        if (routeToUpdate.isDefault) {
          setupDefaultRoute(routeToUpdate);
        } else {
          _updateRoute(routeToUpdate);
        }
      }
    }

    function _updateRoute(routeToUpdate) {
      self.routes.some(function(route, index) {
        if (route.name === routeToUpdate.name) {
          self.routes[index] = routeToUpdate;
          return true;
        }
      });
    }
  }
}());
