describe('ActivitySurveyFactory', function() {

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
      mockSurveyTemplate();
      mockJson();
      mockStatusHistoryManagerService(_$injector_);
      mockFillingManagerService(_$injector_);
      factory = _$injector_.get('ActivitySurveyFactory', Injections);
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
      expect(activity.template).toEqual(Mock.surveyTemplate);
    });

    it('should return attribute fillContainer equal of FillingManagerService', function() {
      expect(activity.fillContainer).toEqual(Mock.FillingManagerService);
    });

    it('should return attribute statusHistory equal of StatusHistoryManagerService', function() {
      expect(activity.statusHistory).toEqual(Mock.StatusHistoryManagerService);
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
    Mock.surveyTemplate.toJson = () => {};
  }

  function mockStatusHistoryManagerService($injector) {
    Mock.StatusHistoryManagerService = $injector.get('StatusHistoryManagerService');
    return Mock.StatusHistoryManagerService;
  }

  function mockFillingManagerService($injector) {
    Mock.FillingManagerService = $injector.get('FillingManagerService');
    return Mock.FillingManagerService;
  }
});
