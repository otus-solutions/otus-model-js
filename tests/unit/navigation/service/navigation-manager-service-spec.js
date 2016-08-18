describe('NavigationManagerService', function() {
  var Mock = {};
  var service;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockQuestions(_$injector_);

      service = _$injector_.get('NavigationManagerService', {
        NavigationContainerService: mockNavigationContainerService(_$injector_),
        NavigationAddService: mockNavigationAddService(_$injector_),
        NavigationRemoveService: mockNavigationRemoveService(_$injector_)
      });
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
      service.getNavigationByOrigin(Mock.questionOne.templateID);

      expect(Mock.NavigationContainerService.getNavigationByOrigin).toHaveBeenCalledWith(Mock.questionOne.templateID);
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
      service.removeNavigation(Mock.questionOne);

      expect(Mock.NavigationRemoveService.execute).toHaveBeenCalled();
    });

  });

  function mockQuestions($injector) {
    Mock.questionOne = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
    Mock.questionTwo = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q2');
    Mock.questionThree = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q3');
  }

  function mockNavigationContainerService($injector) {
    Mock.NavigationContainerService = $injector.get('NavigationContainerService');
    Mock.NavigationContainerService.manageNavigation([Mock.questionOne, Mock.questionTwo, Mock.questionThree]);

    spyOn(Mock.NavigationContainerService, 'getNavigationList').and.callThrough();
    spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.callThrough();
    spyOn(Mock.NavigationContainerService, 'init');

    return Mock.NavigationContainerService;
  }

  function mockNavigationAddService($injector) {
    Mock.NavigationAddService = $injector.get('NavigationAddService');

    spyOn(Mock.NavigationAddService, 'execute');

    return Mock.NavigationAddService;
  }

  function mockNavigationRemoveService($injector) {
    Mock.NavigationRemoveService = $injector.get('NavigationRemoveService');

    spyOn(Mock.NavigationRemoveService, 'execute');

    return Mock.NavigationRemoveService;
  }

});
