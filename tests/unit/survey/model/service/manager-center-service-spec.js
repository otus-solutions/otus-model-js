describe("SurveyDictionaryService_TestSuite", function () {
  var service;
  var Mock = {};

  beforeEach(function () {
    angular.mock.module('otusjs');


    inject(function (_$injector_) {
      mock(_$injector_);
      service = _$injector_.get('otusjs.survey.ManagerCenterService');
    });
  });

  describe('the service initialization and getters', function () {
    beforeEach(function () {
      Mock.surveyItemManager = Mock.SurveyItemManagerFactory.create();
      Mock.navigationManager = Mock.NavigationManagerFactory.create();
      Mock.surveyItemGroupManager = Mock.SurveyItemGroupManagerFactory.create();

      service.initialize(Mock.surveyItemManager, Mock.navigationManager, Mock.surveyItemGroupManager);

    });

    it('serviceExistence_check', function () {
      expect(service).toBeDefined();
    });

    it('should provide the surveyItemManager', function () {
      expect(service.getSurveyItemManager()).toEqual(Mock.surveyItemManager);
    });

    it('should provide the navigationManager', function () {
      expect(service.getNavigationManager()).toEqual(Mock.navigationManager);

    });

    it('should provide the surveyItemGroupManager', function () {
      expect(service.getSurveyItemGroupManager()).toEqual(Mock.surveyItemGroupManager);

    });
  });



  function mock(_$injector_) {
    Mock.SurveyItemManagerFactory = _$injector_.get('SurveyItemManagerFactory');
    Mock.NavigationManagerFactory = _$injector_.get('otusjs.model.navigation.NavigationManagerFactory');
    Mock.SurveyItemGroupManagerFactory = _$injector_.get('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory');

  }
});