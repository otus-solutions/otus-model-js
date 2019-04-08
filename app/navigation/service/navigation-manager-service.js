(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.model.navigation.NavigationContainerFactory',
    'otusjs.model.navigation.ContainerInitializationTaskService',
    'otusjs.model.navigation.InitialNodesCreationTaskService',
    'otusjs.model.navigation.NavigationCreationTaskService',
    'otusjs.model.navigation.NavigationRemovalTaskService',
    'otusjs.model.navigation.NavigationMovementTaskService',
    'otusjs.model.navigation.DefaultRouteCreationTaskService',
    'otusjs.model.navigation.AlternativeRouteCreationTaskService',
    'otusjs.model.navigation.RouteRemovalTaskService',
    'otusjs.model.navigation.RouteUpdateTaskService'
  ];

  var Inject = {};

  function Factory(
    NavigationContainerFactory,
    ContainerInitializationTask,
    InitialNodesCreationTask,
    NavigationCreationTask,
    NavigationRemovalTask,
    NavigationMovementTaskService,
    DefaultRouteCreationTaskService,
    AlternativeRouteCreationTaskService,
    RouteRemovalTaskService,
    RouteUpdateTaskService
  ) {
    var self = this;

    self.create = create;

    function create(surveyTemplate) {
      var container = NavigationContainerFactory.create();
      _setupTaskServices(container);

      return new NavigationManager(surveyTemplate, container);
    }

    function _setupTaskServices(container) {
      ContainerInitializationTask.setContainer(container);
      NavigationCreationTask.setContainer(container);
      NavigationRemovalTask.setContainer(container);
      NavigationMovementTaskService.setContainer(container);
      DefaultRouteCreationTaskService.setContainer(container);
      AlternativeRouteCreationTaskService.setContainer(container);
      RouteRemovalTaskService.setContainer(container);
      RouteUpdateTaskService.setContainer(container);
      InitialNodesCreationTask.setContainer(container);

      Inject.ContainerInitializationTask = ContainerInitializationTask;
      Inject.NavigationCreationTask = NavigationCreationTask;
      Inject.NavigationRemovalTask = NavigationRemovalTask;
      Inject.NavigationMovementTaskService = NavigationMovementTaskService;
      Inject.DefaultRouteCreationTaskService = DefaultRouteCreationTaskService;
      Inject.AlternativeRouteCreationTaskService = AlternativeRouteCreationTaskService;
      Inject.RouteRemovalTaskService = RouteRemovalTaskService;
      Inject.RouteUpdateTaskService = RouteUpdateTaskService;
      Inject.InitialNodesCreationTask = InitialNodesCreationTask;
    }

    return self;
  }

  function NavigationManager(surveyTemplate, container) {
    var self = this;
    var _selectedNavigation = null;

    /* Public interface */
    self.initialize = initialize;
    self.loadJsonData = loadJsonData;
    self.addNavigation = addNavigation;
    self.removeNavigation = removeNavigation;
    self.moveNavigation = moveNavigation;
    self.applyRoute = applyRoute;
    self.deleteRoute = deleteRoute;
    self.getNavigationList = getNavigationList;
    self.getExportableList = getExportableList;
    self.getDefaultNavigationPath = getDefaultNavigationPath;
    self.getAvaiableRuleCriterionTargets = getAvaiableRuleCriterionTargets;
    self.listOrphanNavigations = listOrphanNavigations;
    self.selectNavigationByOrigin = selectNavigationByOrigin;
    self.selectedNavigation = selectedNavigation;

    function initialize() {
      Inject.ContainerInitializationTask.execute();
    }

    function loadJsonData(data) {
      container.loadJsonData(data);
    }

    function addNavigation() {
      _ensuresInitialNodes();
      _selectedNavigation = Inject.NavigationCreationTask.execute(surveyTemplate.SurveyItemManager.getLastItem());
    }

    function moveNavigation(templateID, position) {
      Inject.NavigationMovementTaskService.execute(templateID, position);
    }

    function removeNavigation(templateID) {
      Inject.NavigationRemovalTask.execute(templateID);
    }

    function applyRoute(routeData) {
      if (_selectedNavigation.hasRoute(routeData)) {
        return Inject.RouteUpdateTaskService.execute(routeData, _selectedNavigation);
      } else if (routeData.isDefault) {
        Inject.DefaultRouteCreationTaskService.execute(routeData, _selectedNavigation);
      } else {
        Inject.AlternativeRouteCreationTaskService.execute(routeData, _selectedNavigation);
      }
    }

    function deleteRoute(routeData) {
      Inject.RouteRemovalTaskService.execute(routeData, _selectedNavigation);
    }

    function getNavigationList() {
      return container.getNavigationList();
    }

    function getExportableList() {
      var fullList = container.getNavigationList();
      return fullList.slice(2, fullList.length);
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

    function getAvaiableRuleCriterionTargets(referenceItemID) {
      var referenceItemIndex = surveyTemplate.SurveyItemManager.getItemPosition(referenceItemID);
      var allItems = surveyTemplate.SurveyItemManager.getItemList();

      var avaiableItems = allItems.filter(function(item, index) {
        return index <= referenceItemIndex;
      });

      return avaiableItems;
    }

    function listOrphanNavigations() {
      return NavigationContainer.getOrphanNavigations();
    }

    function selectNavigationByOrigin(origin) {
      _selectedNavigation = container.getNavigationByOrigin(origin);
      return _selectedNavigation;
    }

    function selectedNavigation() {
      return _selectedNavigation;
    }

    function _ensuresInitialNodes() {
      if (!container.getNavigationListSize()) {  //TODO remove?
        Inject.InitialNodesCreationTask.execute();
      }
    }
  }
}());
