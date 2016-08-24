describe('NavigationValidatorService', function() {
  var Mock = {};


  beforeEach(function() {
    module('otusjs');

    mockNavigationProperties();

    inject(function(_$injector_) {
      mockQuestions(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.NavigationValidatorService', {
        NavigationContainerService: mockNavigationContainerService(_$injector_),
        ExceptionService: mockExceptionService(_$injector_)
      });
    });

  });

  describe('init', function() {
    it('should called method getNavigationList', function() {
      service.init();

      expect(Mock.NavigationContainerService.getNavigationList).toHaveBeenCalled();
    });
  });

  describe('isRouteValid', function() {

    beforeEach(function() {
      Mock.NavigationContainerService.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      Mock.NavigationContainerService.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);
    });

    it('should return exception when origin and destination is equal', function() {
      expect(function() {
        service.isRouteValid(Mock.questionOne.templateID, Mock.questionOne.templateID);
      }).toThrowError(Mock.ExceptionService.InvalidStateError);
    });

    it('should not return exception when origin and destination are different', function() {
      expect(function() {
        service.isRouteValid(Mock.questionOne.templateID, Mock.questionTwo.templateID);
      }).not.toThrowError(Mock.ExceptionService.InvalidStateError);
    });

  });

  function mockNavigationContainerService($injector) {
    Mock.NavigationContainerService = $injector.get('otusjs.model.navigation.NavigationContainerService');

    spyOn(Mock.NavigationContainerService, 'getNavigationList').and.callThrough();

    return Mock.NavigationContainerService;
  }

  function mockExceptionService($injector) {
    Mock.ExceptionService = $injector.get('otusjs.model.navigation.ExceptionService');
    return Mock.ExceptionService;
  }

  function mockQuestions($injector) {
    Mock.questionOne = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
    Mock.questionTwo = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q2');
    Mock.questionThree = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q3');
    Mock.questionFour = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q4');
  }

  function mockNavigationProperties() {
    Mock.ORIGIN = 'ORIGIN';
    Mock.DESTINATION = 'DESTINATION';
  }
});
