(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.DefaultRouteCreationTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.RouteFactory'
  ];

  function service(RouteFactory) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(routeData, navigation) {
      var route;
      if (navigation.hasDefaultRoute()) {
         var currentDefaultRoute = navigation.getDefaultRoute();
         route = RouteFactory.createDefault(routeData.origin, routeData.destination);
         navigation.setupDefaultRoute(route);

         _notifyPreviousDefaultNavigation(currentDefaultRoute, navigation);
         _notifyNewDefaultNavigation(route, navigation);
      } else {
         route = RouteFactory.createDefault(routeData.origin, routeData.destination);
         navigation.setupDefaultRoute(route);
         _notifyNewDefaultNavigation(route, navigation);
      }
    }

    function _notifyPreviousDefaultNavigation(currentDefaultRoute, navigation) {
      var nextNavigation = _container.getNavigationByOrigin(currentDefaultRoute.destination);
      nextNavigation.removeInNavigation(navigation);
    }

    function _notifyNewDefaultNavigation(newDefaultRoute, navigation) {
      var nextNavigation = _container.getNavigationByOrigin(newDefaultRoute.destination);
      nextNavigation.updateInNavigation(navigation);
    }
  }
}());
