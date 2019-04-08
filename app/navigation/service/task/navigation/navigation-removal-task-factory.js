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
      // var navigationPosition = _container.getNavigationPosition(navigationToRecycle);

      let inNavigations = navigationToRecycle.inNavigations;

      inNavigations.forEach(inNavigation => {
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


      // var navigationToUpdate = _container.getPreviousOf(navigationPosition); //should be all that are default to navigationToRecycle
      //
      // if (inNavigations.indexOf(navigationToUpdate) > -1) {
      //   var routeData = _getRouteData(navigationToUpdate, navigationToRecycle);
      //   RouteUpdateTaskService.execute(routeData, navigationToUpdate);
      // }

      //todo delete routes that lead to given navigationToRecycle
      //maybe remove to a task service

      // if (inNavigations.length) {
      //   inNavigations.forEach(inNavigation => {
      //     let navigation = _container.getNavigationByOrigin(inNavigation.origin);
      //     navigation.removeRouteByDestination(templateID);
      //   });
      // }

      //todo remove conditions that take navigationToRecycle into account

      _container.removeNavigationOf(templateID);
    }

    function _getRouteData(navigationToUpdate, navigationToRecicle) {
      var routeData = {};
      routeData.isDefault = true;
      routeData.origin = navigationToUpdate.routes[0].origin;
      routeData.destination = navigationToRecicle.routes[0].destination;
      return routeData;
    }

    function _updateRoutes(navigationToUpdate, navigationToRecicle) {
      navigationToUpdate.routes[0].destination = navigationToRecicle.routes[0].destination;
      navigationToUpdate.routes[0].name = navigationToUpdate.routes[0].origin + '_' + navigationToUpdate.routes[0].destination;
    }
  }
}());
