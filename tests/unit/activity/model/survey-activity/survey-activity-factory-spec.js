xdescribe('ActivitySurveyFactory', function() {

  var Mock = {};
  var Injections = {};
  var activity;
  var ACTIVITY = 'Activity';
  var CATEGORY = 'category_test';
  var GROUP = 'group_test';
  var TEMPLATE_IOD = '123456';
  var ACTIVITY_ID = 1;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      /* Test data */
      mockSurveyTemplate();
      mockJson();

      /* Injectable mocks */
      mockStatusHistoryManagerService(_$injector_);
      mockFillingManagerService(_$injector_);
      mockNavigationStackFactory(_$injector_);
      factory = _$injector_.get('otusjs.model.activity.ActivitySurveyFactory', Injections);
      activity = factory.create(Mock.surveyTemplate);
    });
  });

  describe('create method', function() {

    it('should return an object of type Activity', function() {
      expect(activity.objectType).toEqual(ACTIVITY);
    });

    it('should return id activity equal a one', function() {
      expect(activity.activityID).toEqual(ACTIVITY_ID);
    });

    it('should return attribute template equal to contructor paramenter', function() {
      expect(activity.surveyForm.surveyTemplate).toEqual(Mock.surveyTemplate);
    });

    it('should return attribute fillContainer equal to FillingManagerService', function() {
      expect(activity.fillContainer).toEqual(Mock.FillingManagerService);
    });

    it('should return attribute statusHistory equal to StatusHistoryManagerService', function() {
      expect(activity.statusHistory).toEqual(Mock.StatusHistoryManagerService);
    });

    it('should return attribute navigationStack equal to navigationStack', function() {
      expect(activity.navigationStack).toEqual(Mock.navigationStack);
    });

  });

  describe('toJson method', function() {

    it('should return a well formatted json', function() {
      expect(activity.toJson()).toEqual(Mock.json);
    });

  });

  function mockJson() {
    Mock.json = JSON.stringify({
      objectType: 'Activity',
      activityID: 1,
      template: Mock.surveyTemplate.toJson(),
      fillContainer: Mock.FillingManagerService,
      statusHistory: Mock.StatusHistoryManagerService
    });
  }

  function mockSurveyTemplate() {
    Mock.surveyTemplate = {};
    Mock.surveyTemplate.toJson = function () {};
  }

  function mockStatusHistoryManagerService($injector) {
    Mock.StatusHistoryManagerService = $injector.get('otusjs.model.activity.StatusHistoryManagerService');
    Injections.StatusHistoryManagerService = Mock.StatusHistoryManagerService;
  }

  function mockFillingManagerService($injector) {
    Mock.FillingManagerService = $injector.get('otusjs.model.activity.FillingManagerService');
    Injections.FillingManagerService = Mock.FillingManagerService;
  }

  function mockNavigationStackFactory($injector) {
    Mock.NavigationStackFactory = $injector.get('otusjs.model.navigation.NavigationPathFactory');
    Mock.navigationStack = Mock.NavigationStackFactory.create();
    spyOn(Mock.NavigationStackFactory, 'create').and.returnValue(Mock.navigationStack);
    Injections.NavigationStackFactory = Mock.NavigationStackFactory;
  }
});
