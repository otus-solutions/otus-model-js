(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.RemoveRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService'
  ]

  function service(NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      navigation.removeRoute(routeData.name);
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
      nextNavigation.removeInNavigation(routeData.origin);
    }
  }
}());
