(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationRemoveService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService'
  ];

  function service(NavigationContainerService) {
    var self = this;

    /* Public methods */  
    self.execute = execute;

    function execute(templateID) {
      var navigationToRecicle = NavigationContainerService.getNavigationByOrigin(templateID);
      var navigationPosition = NavigationContainerService.getNavigationPosition(navigationToRecicle);
      var navigationToUpdate = NavigationContainerService.getPreviousOf(navigationPosition);
      navigationToUpdate.routes[0].destination = navigationToRecicle.routes[0].destination;
      navigationToUpdate.routes[0].name = navigationToUpdate.routes[0].origin + '_' + navigationToUpdate.routes[0].destination;
      NavigationContainerService.removeNavigationOf(templateID);
    }
  }

}());
