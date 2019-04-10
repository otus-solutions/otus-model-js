(function () {
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
      var navigationToRecycle = _container.getNavigationByOrigin(templateID);
      let position = _container.getNavigationPosition(navigationToRecycle);
      let inNavigations = navigationToRecycle.inNavigations;

      angular.copy(inNavigations).forEach(inNavigation => {
        console.log(inNavigation.origin);

        let navigationToUpdate = _container.getNavigationByOrigin(inNavigation.origin);

        if (navigationToUpdate) {
          if (navigationToUpdate.isDefaultRoute(templateID)) {
            updateRoute(navigationToUpdate, navigationToRecycle)
          } else {
            deleteRoute(inNavigation, templateID);
          }
        }
      });

      function updateRoute(navigationToUpdate, navigationToRecycle) {
        let routeData = _getRouteData(navigationToUpdate, navigationToRecycle);
        RouteUpdateTaskService.execute(routeData, navigationToUpdate);
      }

      function deleteRoute(inNavigation, templateID) {
        let navigation = _container.getNavigationByOrigin(inNavigation.origin);
        navigation.removeRouteByDestination(templateID);
      }

      //todo remove conditions that take navigationToRecycle into account

      _container.removeNavigationOf(templateID);
      _reorderIndexInNavigation(position);
    }

    function _reorderIndexInNavigation(position) {
      for (var i = position; i < _container.getNavigationList().length; i++) {
        _container.getNavigationList()[i].index = i;
      }
    }

    function _getRouteData(navigationToUpdate, navigationToRecicle) {
      var routeData = {};
      routeData.isDefault = true;
      routeData.origin = navigationToUpdate.routes[0].origin;
      routeData.destination = navigationToRecicle.routes[0].destination;

      if (navigationToUpdate.origin === "BEGIN NODE") {
        let newDestination = _container.getNextOf(_container.getNavigationPosition(navigationToRecicle));
        routeData.destination = newDestination.origin;
      }

      return routeData;
    }

    function _updateRoutes(navigationToUpdate, navigationToRecicle) {
      navigationToUpdate.routes[0].destination = navigationToRecicle.routes[0].destination;
      navigationToUpdate.routes[0].name = navigationToUpdate.routes[0].origin + '_' + navigationToUpdate.routes[0].destination;
    }
  }
}());
