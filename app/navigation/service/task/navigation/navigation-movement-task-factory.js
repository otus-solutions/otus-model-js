(function () {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationMovementTaskService', Service);

  Service.$inject = [
    'otusjs.model.navigation.DefaultRouteCreationTaskService',
    'otusjs.model.navigation.NavigationRemovalTaskService'
  ];

  function Service(DefaultRouteCreationTaskService, NavigationRemovalTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(templateID, destination) {
      var navigationToMove = _container.getNavigationByOrigin(templateID);

      NavigationRemovalTaskService.execute(templateID);

      navigationToMove.clearNavigation();

      _container.insertNavigation(navigationToMove, destination);

      let position = _container.getNavigationPosition(navigationToMove);
      let navigationToUpdate = _container.getNextOf(position);

      let routeData = _getRouteData(navigationToUpdate, navigationToMove);
      DefaultRouteCreationTaskService.execute(routeData, navigationToMove);


    }

    function _getRouteData(navigationToUpdate, navigationToMove) {
      var routeData = {};
      routeData.isDefault = true;
      routeData.origin = navigationToMove.origin;
      routeData.destination = navigationToUpdate.origin;
      return routeData;
    }
  }
}());
