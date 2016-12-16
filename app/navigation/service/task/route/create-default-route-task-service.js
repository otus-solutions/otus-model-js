(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.CreateDefaultRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.NavigationContainerService'
  ];

  function service(RouteFactory, NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

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
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(currentDefaultRoute.destination);
      nextNavigation.removeInNavigation(navigation);
    }

    function _notifyNewDefaultNavigation(newDefaultRoute, navigation) {
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(newDefaultRoute.destination);
      nextNavigation.updateInNavigation(navigation);
    }
  }
}());
