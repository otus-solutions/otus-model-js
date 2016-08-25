describe('NavigationValidatorService', function() {
  var Mock = {};

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {

      mockQuestions(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.NavigationValidatorService', {
        SurveyItemContainerService: mockSurveyItemContainerService(_$injector_),
        ExceptionService: mockExceptionService(_$injector_)
      });

    });

  });

  describe('init', function() {
    it('should called method getItemList', function() {
      service.init();

      expect(Mock.SurveyItemContainerService.getItemList).toHaveBeenCalled();
    });
  });

  describe('isRouteValid', function() {

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

    it('should return exception when destination is a question previous a origin ', function() {
      expect(function() {
        service.isRouteValid(Mock.questionTwo.templateID, Mock.questionOne.templateID);
      }).toThrowError(Mock.ExceptionService.InvalidStateError);
    });

    it('should return true when destination is a question after a origin', function() {
      var result = service.isRouteValid(Mock.questionOne.templateID, Mock.questionTwo.templateID);

      expect(result).toEqual(true);
    });

  });

  function mockQuestions($injector) {
    Mock.questionOne = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
    Mock.questionTwo = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q2');
    Mock.questionThree = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q3');
    Mock.questionFour = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q4');
    Mock.questions = [Mock.questionOne, Mock.questionTwo, Mock.questionThree, Mock.questionFour];
  }

  function mockSurveyItemContainerService($injector) {
    Mock.SurveyItemContainerService = $injector.get('SurveyItemContainerService');

    spyOn(Mock.SurveyItemContainerService, 'getItemList').and.returnValue(Mock.questions);

    return Mock.SurveyItemContainerService;
  }

  function mockExceptionService($injector) {
    Mock.ExceptionService = $injector.get('otusjs.model.navigation.ExceptionService');
    return Mock.ExceptionService;
  }

});
