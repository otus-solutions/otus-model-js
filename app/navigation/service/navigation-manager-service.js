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
    'otusjs.model.navigation.CreateDefaultRouteTaskService',
    'otusjs.model.navigation.AddAlternativeRouteTaskService',
    'otusjs.model.navigation.RemoveRouteTaskService',
    'otusjs.model.navigation.UpdateRouteTaskService',
    'otusjs.model.navigation.NavigationValidatorService',
    'otusjs.model.navigation.InitialNodesAddService'
  ];

  function service(SurveyItemManagerService, NavigationContainerService, NavigationAddService, NavigationRemoveService, CreateDefaultRouteTaskService,
    AddAlternativeRouteTaskService, RemoveRouteTaskService, UpdateRouteTaskService, NavigationValidatorService, InitialNodesAddService) {

    var self = this;
    var _selectedNavigation = null;

    /* Public interface */
    self.init = init;
    self.loadJsonData = loadJsonData;
    self.getNavigationList = getNavigationList;
    self.getDefaultNavigationPath = getDefaultNavigationPath;
    self.selectNavigationByOrigin = selectNavigationByOrigin;
    self.selectedNavigation = selectedNavigation;
    self.addNavigation = addNavigation;
    self.applyRoute = applyRoute;
    self.deleteRoute = deleteRoute;
    self.removeNavigation = removeNavigation;
    self.getAvaiableRuleCriterionTargets = getAvaiableRuleCriterionTargets;
    self.listOrphanNavigations = listOrphanNavigations;
    self.generateNavigation = generateNavigation;

    function init() {
      NavigationContainerService.init();
      //TODO survey.NavigationManager.setInitialNodes
    }

    function loadJsonData(data) {
      NavigationContainerService.loadJsonData(data);
    }

    function getNavigationList() {
      return NavigationContainerService.getNavigationList();
    }

    function getDefaultNavigationPath() {
      var navigations = getNavigationList();
      var currentPathState = navigations[0];
      var defaultPath = [currentPathState];

      navigations.forEach(function(navigation) {
        if (navigation.origin === currentPathState.getDefaultRoute().destination) {
          defaultPath.push(navigation);
          currentPathState = navigation;
        }
      });

      return defaultPath;
    }

    function selectNavigationByOrigin(origin) {
      _selectedNavigation = NavigationContainerService.getNavigationByOrigin(origin);
      return _selectedNavigation;
    }

    function selectedNavigation() {
      return _selectedNavigation;
    }

    function addNavigation() {
      if (!NavigationContainerService.getNavigationListSize()) {
         generateNavigation();
      }
      _selectedNavigation = NavigationAddService.execute();

    }

    function generateNavigation() {
      InitialNodesAddService.execute();
    }

    function applyRoute(routeData) {
      if (_selectedNavigation.hasRoute(routeData)) {
        return UpdateRouteTaskService.execute(routeData, _selectedNavigation);
      } else if (routeData.isDefault) {
        CreateDefaultRouteTaskService.execute(routeData, _selectedNavigation);
      } else {
        AddAlternativeRouteTaskService.execute(routeData, _selectedNavigation);
      }
    }

    function deleteRoute(routeData) {
      RemoveRouteTaskService.execute(routeData, _selectedNavigation);
    }

    function removeNavigation(templateID) {
      NavigationRemoveService.execute(templateID);
    }

    function getAvaiableRuleCriterionTargets(referenceItemID) {
      var referenceItemIndex = SurveyItemManagerService.getItemPosition(referenceItemID);
      var allItems = SurveyItemManagerService.getItemList();

      var avaiableItems = allItems.filter(function(item, index) {
        return index <= referenceItemIndex;
      });

      return avaiableItems;
    }

    function listOrphanNavigations() {
      return NavigationContainerService.getOrphanNavigations();
    }
  }
}());
