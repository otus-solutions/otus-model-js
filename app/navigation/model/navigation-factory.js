(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationFactory', factory);

  factory.$inject = [
    'otusjs.model.navigation.RouteFactory'
  ];

  function factory(RouteFactory) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(index, origin, destination) {
      var navigation = new Navigation(origin);

      if (destination) {
        var defaultRoute = RouteFactory.create(navigation.origin, destination);
        navigation.addRoute(defaultRoute);
      }

      return navigation;
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        var jsonObj = JSON.parse(json);
      } else if (typeof json === 'object') {
        var jsonObj = JSON.parse(JSON.stringify(json));
      }

      var navigation = new Navigation(jsonObj.index, jsonObj.origin);

      jsonObj.routes.forEach(function(route) {
        var newRoute = RouteFactory.fromJson(JSON.stringify(route));
        navigation.addRoute(newRoute);
      });

      navigation.inNavigations = jsonObj.inNavigations;
      navigation.isDefault = jsonObj.isDefault;

      return navigation;
    }

    return self;
  }

  function Navigation(index, origin) {
    var self = this;
    var _defaultRoute = null;

    /* Object properties */
    self.extents = 'StudioObject';
    self.objectType = 'Navigation';
    self.origin = origin;
    self.index = index;
    self.isDefault = true;
    self.routes = [];
    self.inNavigations = [];

    /* Public methods */
    self.listRoutes = listRoutes;
    self.getRoute = getRoute;
    self.getDefaultRoute = getDefaultRoute;
    self.addRoute = addRoute;
    self.removeRoute = removeRoute;
    self.updateRoute = updateRoute;
    self.hasRoute = hasRoute;
    self.removeInNavigation = removeInNavigation;
    self.isOrphan = isOrphan;
    self.toJson = toJson;

    function listRoutes() {
      var clone = [];

      self.routes.forEach(function(route) {
        clone.push(route);
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

      return routeToReturn;
    }

    function getDefaultRoute() {
      return _defaultRoute;
    }

    function addRoute(route) {
      if (route.getConditionSetSize() === 0) {
        _defaultRoute = route;
        _defaultRoute.isDefault = true;
      }
      self.routes.push(route);
    }

    function removeRoute(name) {
      var routeToRemove = self.routes.filter(function(route) {
        return route.name === name;
      });

      var indexToRemove = self.routes.indexOf(routeToRemove[0]);
      if (indexToRemove > -1) {
        self.routes.splice(indexToRemove, 1);
      }

      return routeToRemove[0];
    }

    function updateRoute(route) {
      self.routes.forEach(function(currentRoute, index) {
        if (currentRoute.name === route.name) {
          self.routes[index] = route;
        }
      });
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

    function removeInNavigation(origin) {
      self.inNavigations.some(function(navigation, index) {
        if (navigation === origin) {
          self.inNavigations.splice(index, 1);
          return true;
        }
      });
    }

    function isOrphan() {
      return !self.inNavigations.length && self.index > 0;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.index = self.index;
      json.inNavigations = [];
      self.inNavigations.forEach(function(navigation) {
        json.inNavigations.push(navigation);
      });
      json.isDefault = self.isDefault;
      json.routes = [];
      self.routes.forEach(function(route) {
        json.routes.push(route.toJson());
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }
}());
