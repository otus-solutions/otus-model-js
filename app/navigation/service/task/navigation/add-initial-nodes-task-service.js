(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.InitialNodesAddService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService',
    'SurveyItemContainerService',
    'otusjs.model.navigation.UpdateRouteTaskService',
    'otusjs.model.navigation.CreateDefaultRouteTaskService'
  ];

  function service(NavigationContainerService, SurveyItemContainerService, UpdateRouteTaskService, CreateDefaultRouteTaskService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute() {
      NavigationContainerService.setInitialNodes();

      var routeData = {
        'origin': NavigationContainerService.getNavigationList()[0].origin,
        'destination': NavigationContainerService.getNavigationList()[1].origin
      };

      CreateDefaultRouteTaskService.execute(routeData, NavigationContainerService.getNavigationList()[0]);
    }
  }
}());
