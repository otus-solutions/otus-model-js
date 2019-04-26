(function () {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationInsertionTask', Service);

  Service.$inject = [
    'otusjs.model.navigation.DefaultRouteCreationTaskService',
    'otusjs.model.navigation.RouteRemovalTaskService'
  ];

  function Service(DefaultRouteCreationTaskService, RouteRemovalTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(navigationToMove, originalPosition, destination) {

      navigationToMove.clearNavigation();
      let newPosition = _container.insertNavigation(navigationToMove, originalPosition,  destination);

      let navigationToUpdate = _container.getNextOf(newPosition);
      let routeData = _getRouteData(navigationToMove.origin, navigationToUpdate.origin);
      DefaultRouteCreationTaskService.execute(routeData, navigationToMove);

      if (destination === 0) {
        _adjustToFirstPosition(navigationToUpdate, navigationToMove)
      }

      _reorderIndexInNavigation();
    }

    function _adjustToFirstPosition(navigationToUpdate, navigationToMove) {
      const beginNodeOriginName = "BEGIN NODE";

      let beginNode = _container.getNavigationByOrigin(beginNodeOriginName);
      let beginNodeRoute = _getRouteData(beginNodeOriginName, navigationToUpdate.origin);
      RouteRemovalTaskService.execute(beginNodeRoute, beginNode);

      let newBeginNodeRoute = _getRouteData(beginNodeOriginName, navigationToMove.origin);
      DefaultRouteCreationTaskService.execute(newBeginNodeRoute, beginNode);
    }

    function _reorderIndexInNavigation() {
        _container.reorderNavigationIndex(origin,destination);
    }

    function _getRouteData(origin, destination) {
      let routeData = {};

      routeData.isDefault = true;
      routeData.name = origin + "_" + destination;
      routeData.origin = origin;
      routeData.destination = destination;
      return routeData;
    }
  }
}());
