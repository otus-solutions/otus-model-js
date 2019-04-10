(function () {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationMovementTaskService', Service);

  Service.$inject = [
    'otusjs.model.navigation.DefaultRouteCreationTaskService',
    'otusjs.model.navigation.NavigationRemovalTaskService',
    'otusjs.model.navigation.RouteRemovalTaskService'
  ];

  function Service(DefaultRouteCreationTaskService, NavigationRemovalTaskService, RouteRemovalTaskService) {
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

      navigationToMove.clearNavigation();

      _container.insertNavigation(navigationToMove, destination);
      let newPosition = _container.getNavigationPosition(navigationToMove);
      let navigationToUpdate = _container.getNextOf(newPosition);
      let routeData = _getRouteData(navigationToMove.origin, navigationToUpdate.origin);
      DefaultRouteCreationTaskService.execute(routeData, navigationToMove);

      if (destination === 0) {
        let beginNodeOriginName = "BEGIN NODE";
        let beginNode = _container.getNavigationByOrigin(beginNodeOriginName);
        let beginNodeRoute = _getRouteData(beginNodeOriginName, navigationToUpdate.origin);
        RouteRemovalTaskService.execute(beginNodeRoute, beginNode);
        let newBeginNodeRoute = _getRouteData(beginNodeOriginName, navigationToMove.origin);
        DefaultRouteCreationTaskService.execute(newBeginNodeRoute, beginNode);
      }
      _reorderIndexInNavigation(originalPosition, newPosition);
    }

    function _reorderIndexInNavigation(originalPosition, newPosition) {
      var i;
      if (originalPosition > newPosition) {
        for (i = newPosition; i <= originalPosition; i++) {
          _container.getNavigationList()[i].index = i;
        }
      } else {
        for (i = originalPosition; i < _container.getNavigationList().length; i++) {
          _container.getNavigationList()[i].index = i;
        }
      }
    }

    function _getRouteData(origin, destination) {
      var routeData = {};
      routeData.isDefault = true;
      routeData.name = origin + "_" + destination;
      routeData.origin = origin;
      routeData.destination = destination;
      return routeData;
    }

  }
}());
