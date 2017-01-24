fdescribe('NavigationManager', function() {

  var Mock = {};
  var manager;
  var Injections = {};

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      /* Test data */
      mockQuestions(_$injector_);
      mockNavigations(_$injector_);

      /* Injectable mocks */
      mockNavigationContainerService(_$injector_);
      mockSurveyItemContainerService(_$injector_);
      mockNavigationAddService(_$injector_);
      mockNavigationRemoveService(_$injector_);
      mockNavigationValidatorService(_$injector_);
      mockRouteData();

      var factory = _$injector_.get('otusjs.model.navigation.NavigationManagerFactory', Injections);
      manager = factory.create();
    });
  });

  fdescribe('init method', function() {

    it('should be defined in manager', function() {
      expect(manager.init).toBeDefined();
    });

    it('should call NavigationContainerService.init method', function() {
      manager.init();

      expect(Mock.NavigationContainerService.init).toHaveBeenCalled();
    });

  });

  describe('loadJsonData method', function() {

    it('should call NavigationContainerService.loadJsonData', function() {
      spyOn(Mock.NavigationContainerService, 'loadJsonData');

      manager.loadJsonData([]);

      expect(Mock.NavigationContainerService.loadJsonData).toHaveBeenCalled();
    });

  });

  describe('getNavigationList method', function() {

    it('should be defined in manager', function() {
      expect(manager.getNavigationList).toBeDefined();
    });

    it('should call NavigationContainerService.getNavigationList method', function() {
      manager.getNavigationList();

      expect(Mock.NavigationContainerService.getNavigationList).toHaveBeenCalled();
    });

    it('should return an array', function() {
      var returnedValue = manager.getNavigationList();

      expect(returnedValue).toEqual(jasmine.any(Array));
    });

  });

  describe('selectNavigationByOrigin method', function() {

    it('should be defined in manager', function() {
      expect(manager.selectNavigationByOrigin).toBeDefined();
    });

    it('should call NavigationContainerService.getNavigationByOrigin method with origin', function() {
      manager.selectNavigationByOrigin(Mock.Q1.templateID);

      expect(Mock.NavigationContainerService.getNavigationByOrigin).toHaveBeenCalledWith(Mock.Q1.templateID);
    });

    it('should store a reference to requested navigation', function() {
      manager.selectNavigationByOrigin(Mock.Q1.templateID);
      var selectedNavigation = manager.selectedNavigation();

      expect(selectedNavigation.origin).toEqual(Mock.Q1.templateID);
    });

  });

  describe('addNavigation method', function() {

    it('should call NavigationAddService.execute method', function() {
      manager.addNavigation();

      expect(Mock.NavigationAddService.execute).toHaveBeenCalled();
    });

  });

  describe('applyRoute method', function() {

    xit('should called method isRouteValid', function() {
      manager.applyRoute(Mock.routeData);

      expect(Mock.NavigationValidatorService.isRouteValid).toHaveBeenCalled();
    });

  });

  describe('removeNavigation method', function() {

    it('should call NavigationRemove.execute method', function() {
      manager.removeNavigation(Mock.Q1);

      expect(Mock.NavigationRemoveService.execute).toHaveBeenCalled();
    });

  });

  describe('getAvaiableRuleCriterionTargets method', function() {

    var avaiableItems = [];

    beforeEach(function() {
      avaiableItems = manager.getAvaiableRuleCriterionTargets(Mock.Q4.customID);
    });

    it('should get all items of survey', function() {
      expect(Mock.SurveyItemManagerService.getItemList).toHaveBeenCalled();
    });

    it('should get the item index of respective navigation', function() {
      expect(Mock.SurveyItemManagerService.getItemPosition).toHaveBeenCalled();
    });

    it('should filter all previous item of parameter item', function() {
      expect(avaiableItems.length).toBe(4);
      expect(avaiableItems[0]).toBe(Mock.Q1);
      expect(avaiableItems[1]).toBe(Mock.Q2);
      expect(avaiableItems[2]).toBe(Mock.Q3);
      expect(avaiableItems[3]).toBe(Mock.Q4);
    });

  });

  function mockQuestions($injector) {
    Mock.Q1 = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
    Mock.Q2 = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q2');
    Mock.Q3 = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q3');
    Mock.Q4 = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q4');
    Mock.Q5 = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q5');
    Mock.Q6 = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q6');
    Mock.Q7 = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q7');
    Mock.questions = [Mock.Q1, Mock.Q2, Mock.Q3, Mock.Q4, Mock.Q5, Mock.Q6, Mock.Q7];
  }

  function mockNavigations($injector) {
    var NavigationFactory = $injector.get('otusjs.model.navigation.NavigationFactory');
    Mock.NQ1 = NavigationFactory.create(Mock.Q1.templateID, Mock.Q2.templateID);
    Mock.NQ2 = NavigationFactory.create(Mock.Q2.templateID, Mock.Q3.templateID);
    Mock.NQ3 = NavigationFactory.create(Mock.Q3.templateID, Mock.Q4.templateID);
    Mock.NQ4 = NavigationFactory.create(Mock.Q4.templateID, Mock.Q5.templateID);
    Mock.NQ5 = NavigationFactory.create(Mock.Q5.templateID, Mock.Q6.templateID);
    Mock.NQ6 = NavigationFactory.create(Mock.Q6.templateID, Mock.Q7.templateID);
    Mock.navigations = [Mock.NQ1, Mock.NQ2, Mock.NQ3, Mock.NQ4, Mock.NQ5, Mock.NQ6];
  }

  function mockRouteData() {
    Mock.routeData = {};
    Mock.routeData.origin = 'Q2';
    Mock.routeData.destination = 'Q4';
    Mock.routeData.conditions = [];
  }

  function mockNavigationContainerService($injector) {
    Mock.NavigationContainerService = $injector.get('otusjs.model.navigation.NavigationContainerService');
    Mock.NavigationContainerService.manageNavigation(Mock.navigations);
    Injections.NavigationContainerService = Mock.NavigationContainerService;

    spyOn(Mock.NavigationContainerService, 'getNavigationList').and.callThrough();
    spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.callThrough();
    spyOn(Mock.NavigationContainerService, 'init');
  }

  function mockNavigationAddService($injector) {
    Mock.NavigationAddService = $injector.get('otusjs.model.navigation.NavigationCreationTaskService');
    Injections.NavigationAddService = Mock.NavigationAddService;
    spyOn(Mock.NavigationAddService, 'execute');
  }

  function mockNavigationRemoveService($injector) {
    Mock.NavigationRemoveService = $injector.get('otusjs.model.navigation.NavigationRemovalTaskService');
    Injections.NavigationRemoveService = Mock.NavigationRemoveService;
    spyOn(Mock.NavigationRemoveService, 'execute');
  }

  function mockSurveyItemContainerService($injector) {
    Mock.SurveyItemManagerService = $injector.get('SurveyItemManagerService');
    Injections.SurveyItemManagerService = Mock.SurveyItemManagerService;
    spyOn(Mock.SurveyItemManagerService, 'getItemList').and.returnValue(Mock.questions);
    spyOn(Mock.SurveyItemManagerService, 'getItemPosition').and.returnValue(3);
  }

  function mockNavigationValidatorService($injector) {
    Mock.NavigationValidatorService = $injector.get('otusjs.model.navigation.NavigationValidatorService');
    Injections.NavigationValidatorService = Mock.NavigationValidatorService;
    spyOn(Mock.NavigationValidatorService, 'isRouteValid');
  }

});
