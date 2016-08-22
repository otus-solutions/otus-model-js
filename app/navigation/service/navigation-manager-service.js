(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationManagerService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService',
    'otusjs.model.navigation.NavigationAddService',
    'otusjs.model.navigation.NavigationRemoveService'
  ];

  function service(NavigationContainerService, NavigationAddService, NavigationRemoveService) {
    var self = this;

    /* Public interface */
    self.init = init;
    self.loadJsonData = loadJsonData;
    self.getNavigationList = getNavigationList;
    self.getNavigationByOrigin = getNavigationByOrigin;
    self.addNavigation = addNavigation;
    self.removeNavigation = removeNavigation;

    function init() {
      NavigationContainerService.init();
    }

    function loadJsonData(data) {
      NavigationContainerService.loadJsonData(data);
    }

    function getNavigationList() {
      return NavigationContainerService.getNavigationList();
    }

    function getNavigationByOrigin(origin) {
      return NavigationContainerService.getNavigationByOrigin(origin);
    }

    function addNavigation() {
      NavigationAddService.execute();
    }

    function removeNavigation(templateID) {
      NavigationRemoveService.execute(templateID);
    }
  }

}());
