describe('NavigationManagerService', function() {

  var Mock = {};
  var service;
  var injections = {};

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockQuestions(_$injector_);
      mockNavigationContainerService(_$injector_);
      mockNavigationAddService(_$injector_);
      mockNavigationRemoveService(_$injector_);
      mockSurveyItemContainerService(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.NavigationManagerService', injections);
    });
  });

  describe('init method', function() {

    it('should be defined in service', function() {
      expect(service.init).toBeDefined();
    });

    it('should call NavigationContainerService.init method', function() {
      service.init();

      expect(Mock.NavigationContainerService.init).toHaveBeenCalled();
    });

  });

  describe('loadJsonData method', function() {

    it('should call NavigationContainerService.loadJsonData', function() {
      spyOn(Mock.NavigationContainerService, 'loadJsonData');

      service.loadJsonData([]);

      expect(Mock.NavigationContainerService.loadJsonData).toHaveBeenCalled();
    });

  });

  describe('getNavigationList method', function() {

    it('should be defined in service', function() {
      expect(service.getNavigationList).toBeDefined();
    });

    it('should call NavigationContainerService.getNavigationList method', function() {
      service.getNavigationList();

      expect(Mock.NavigationContainerService.getNavigationList).toHaveBeenCalled();
    });

    it('should return an array', function() {
      var returnedValue = service.getNavigationList();

      expect(returnedValue).toEqual(jasmine.any(Array));
    });

  });

  describe('getNavigationByOrigin method', function() {

    it('should be defined in service', function() {
      expect(service.getNavigationByOrigin).toBeDefined();
    });

    it('should call NavigationContainerService.getNavigationByOrigin method with origin', function() {
      service.getNavigationByOrigin(Mock.Q1.templateID);

      expect(Mock.NavigationContainerService.getNavigationByOrigin).toHaveBeenCalledWith(Mock.Q1.templateID);
    });

  });

  describe('addNavigation method', function() {

    it('should call NavigationAddService.execute method', function() {
      service.addNavigation();

      expect(Mock.NavigationAddService.execute).toHaveBeenCalled();
    });

  });

  describe('removeNavigation method', function() {

    it('should call NavigationRemove.execute method', function() {
      service.removeNavigation(Mock.Q1);

      expect(Mock.NavigationRemoveService.execute).toHaveBeenCalled();
    });

  });

  describe('getAvaiableRuleCriterionTargets method', function() {

    var avaiableItems = [];

    beforeEach(function() {
      avaiableItems = service.getAvaiableRuleCriterionTargets(Mock.Q4.customID);
    });

    it('should get all items of survey', function() {
      expect(Mock.SurveyItemManagerService.getItemList).toHaveBeenCalled();
    });

    it('should get the item index of respective navigation', function() {
      expect(Mock.SurveyItemManagerService.getItemPosition).toHaveBeenCalled();
    });

    it('should filter all previous item of parameter item', function() {
      expect(avaiableItems.length).toBe(3);
      expect(avaiableItems[0]).toBe(Mock.Q1);
      expect(avaiableItems[1]).toBe(Mock.Q2);
      expect(avaiableItems[2]).toBe(Mock.Q3);
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

  function mockNavigationContainerService($injector) {
    Mock.NavigationContainerService = $injector.get('otusjs.model.navigation.NavigationContainerService');
    Mock.NavigationContainerService.manageNavigation(Mock.questions);
    injections.NavigationContainerService = Mock.NavigationContainerService;

    spyOn(Mock.NavigationContainerService, 'getNavigationList').and.callThrough();
    spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.callThrough();
    spyOn(Mock.NavigationContainerService, 'init');
  }

  function mockNavigationAddService($injector) {
    Mock.NavigationAddService = $injector.get('otusjs.model.navigation.NavigationAddService');
    injections.NavigationAddService = Mock.NavigationAddService;
    spyOn(Mock.NavigationAddService, 'execute');
  }

  function mockNavigationRemoveService($injector) {
    Mock.NavigationRemoveService = $injector.get('otusjs.model.navigation.NavigationRemoveService');
    injections.NavigationRemoveService = Mock.NavigationRemoveService;
    spyOn(Mock.NavigationRemoveService, 'execute');
  }

  function mockSurveyItemContainerService($injector) {
    Mock.SurveyItemManagerService = $injector.get('SurveyItemManagerService');
    injections.SurveyItemManagerService = Mock.SurveyItemManagerService;
    spyOn(Mock.SurveyItemManagerService, 'getItemList').and.returnValue(Mock.questions);
    spyOn(Mock.SurveyItemManagerService, 'getItemPosition').and.returnValue(3);
  }

});
