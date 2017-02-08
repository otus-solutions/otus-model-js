(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationRemovalTaskService', Service);

  Service.$inject = [
    'otusjs.model.navigation.RouteUpdateTaskService'
  ];

  function Service(RouteUpdateTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(templateID) {
      var navigationToRecicle = _container.getNavigationByOrigin(templateID);
      var navigationPosition = _container.getNavigationPosition(navigationToRecicle);
      var navigationToUpdate = _container.getPreviousOf(navigationPosition);

      if (navigationToRecicle.inNavigations.indexOf(navigationToUpdate) > -1) {
        var routeData = _getRouteData(navigationToUpdate, navigationToRecicle);
        RouteUpdateTaskService.execute(routeData, navigationToUpdate);
      }

      _container.removeNavigationOf(templateID);
    }

    function _getRouteData(navigationToUpdate, navigationToRecicle){
      var routeData = {};
      routeData.isDefault = true;
      routeData.origin = navigationToUpdate.routes[0].origin;
      routeData.destination = navigationToRecicle.routes[0].destination;
      return routeData;
    }

    function _updateRoutes(navigationToUpdate, navigationToRecicle){
      navigationToUpdate.routes[0].destination = navigationToRecicle.routes[0].destination;
      navigationToUpdate.routes[0].name = navigationToUpdate.routes[0].origin + '_' + navigationToUpdate.routes[0].destination;
    }
  }
}());
