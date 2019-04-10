(function () {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationMovementTaskService', Service);

  Service.$inject = [
    'otusjs.model.navigation.DefaultRouteCreationTaskService',
    'otusjs.model.navigation.NavigationRemovalTaskService',
    'otusjs.model.navigation.RouteRemovalTaskService',
    'otusjs.model.navigation.NavigationInsertionTask'
  ];

  function Service(DefaultRouteCreationTaskService, NavigationRemovalTaskService, RouteRemovalTaskService, NavigationInsertionTask) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(templateID, destination) {
      let navigationToMove = _container.getNavigationByOrigin(templateID);
      let originalPosition = _container.getNavigationPosition(navigationToMove);

      if (originalPosition === destination + 2 ) {
        return;
      }

      NavigationRemovalTaskService.execute(templateID);
      NavigationInsertionTask.execute(navigationToMove, originalPosition, destination);
    }
  }
}());
