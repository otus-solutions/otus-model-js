(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationAddService', service);

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
      var origin = SurveyItemContainerService.getLastItem();

      var _newNavigation = NavigationContainerService.createNavigationTo(origin.templateID);
      var _previousNavigation;

      if (_newNavigation.index === 2) {
        _previousNavigation = NavigationContainerService.getPreviousOf(_newNavigation.index - 1);
      } else {
        _previousNavigation = NavigationContainerService.getPreviousOf(_newNavigation.index);
      }

      var routeData = {
        'origin': _newNavigation.origin,
        'destination': _previousNavigation.getDefaultRoute().destination
      };

      console.log(routeData.origin);
      CreateDefaultRouteTaskService.execute(routeData, _newNavigation);


      var updateRouteData = {
        'origin': _previousNavigation.origin,
        'destination': _newNavigation.origin,
        'isDefault': true
      };

      // console.info('on update');
      // console.log('origin: ' + updateRouteData.origin);
      // console.log('destination: ' + updateRouteData.destination);
      UpdateRouteTaskService.execute(updateRouteData, _previousNavigation);
    }
  }
}());
