(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationCreationTaskService', Service);

  Service.$inject = [
    'otusjs.model.navigation.RouteUpdateTaskService',
    'otusjs.model.navigation.DefaultRouteCreationTaskService'
  ];

  function Service(RouteUpdateTaskService, DefaultRouteCreationTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(originItem) {
      var _newNavigation = _container.createNavigationTo(originItem.templateID);
      var _previousNavigation;

      if (_newNavigation.index === 2) {
        _previousNavigation = _container.getPreviousOf(_newNavigation.index - 1);
      } else {
        _previousNavigation = _container.getPreviousOf(_newNavigation.index);
      }

      var routeData = {
        'origin': _newNavigation.origin,
        'destination': _previousNavigation.getDefaultRoute().destination
      };

      DefaultRouteCreationTaskService.execute(routeData, _newNavigation);

      var updateRouteData = {
        'origin': _previousNavigation.origin,
        'destination': _newNavigation.origin,
        'isDefault': true
      };

      RouteUpdateTaskService.execute(updateRouteData, _previousNavigation);
    }
  }
}());
