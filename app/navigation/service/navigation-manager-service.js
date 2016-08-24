(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationManagerService', service);

  service.$inject = [
    'SurveyItemManagerService',
    'otusjs.model.navigation.NavigationContainerService',
    'otusjs.model.navigation.NavigationAddService',
    'otusjs.model.navigation.NavigationRemoveService',
    'otusjs.model.navigation.RouteAddService'
  ];

  function service(SurveyItemManagerService, NavigationContainerService, NavigationAddService, NavigationRemoveService, RouteAddService) {
    var self = this;
    var _selectedNavigation = null;

    /* Public interface */
    self.init = init;
    self.loadJsonData = loadJsonData;
    self.getNavigationList = getNavigationList;
    self.selectNavigationByOrigin = selectNavigationByOrigin;
    self.selectedNavigation = selectedNavigation;
    self.addNavigation = addNavigation;
    self.removeNavigation = removeNavigation;
    self.getAvaiableRuleCriterionTargets = getAvaiableRuleCriterionTargets;

    function init() {
      NavigationContainerService.init();
    }

    function loadJsonData(data) {
      NavigationContainerService.loadJsonData(data);
    }

    function getNavigationList() {
      return NavigationContainerService.getNavigationList();
    }

    function selectNavigationByOrigin(origin) {
      _selectedNavigation = NavigationContainerService.getNavigationByOrigin(origin);
      return _selectedNavigation;
    }

    function selectedNavigation() {
      return _selectedNavigation;
    }

    function addNavigation() {
      NavigationAddService.execute();
    }

    function addRoute(routeData) {
      return RouteAddService.execute(routeData, _selectedNavigation);
    }

    function removeNavigation(templateID) {
      NavigationRemoveService.execute(templateID);
    }

    function getAvaiableRuleCriterionTargets(referenceItemID) {
      var referenceItemIndex = SurveyItemManagerService.getItemPosition(referenceItemID);
      var allItems = SurveyItemManagerService.getItemList();

      var avaiableItems = allItems.filter(function(item, index) {
        return index < referenceItemIndex;
      });

      return avaiableItems;
    }
  }

}());
