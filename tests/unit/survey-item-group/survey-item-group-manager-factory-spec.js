fdescribe('the SurveyItemGroupManagerFactory', function () {
  var factory;
  var Mock = {};

  beforeEach(function () {
    angular.mock.module('otusjs.surveyItemGroup');

    mock();

    inject(function (_$injector_) {
      factory = _$injector_.get('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory');
    });
  });

  describe('the creation and load method', function () {
    var manager;
    beforeEach(function () {
      manager = factory.create();
      manager.setSurveyItemManager(Mock.itemManager);
      manager.setNavigationManager(Mock.navigationManager);
    });

    it('should create an defined object', function () {
      expect(manager).toBeDefined();
    });

  });

  function mock() {
    Mock.template = Test.utils.data.latestSurveyTemplate;
    Mock.template2 = Test.utils.data.templateExampleWithAllQuestionsAndValidations;
    Mock.template.itemContainer.forEach(item => {
      console.log(item.templateID);
    });

    console.log('====');

    Mock.template.navigationList.forEach(nav => {
      console.log(nav.origin);
      console.log(nav.routes.length);
    });

    Mock.template2.itemContainer.forEach(item => {
      console.log(item.templateID);
    });

    console.log('====');

    Mock.template2.navigationList.forEach(nav => {
      console.log(nav.origin);
      console.log(nav.routes.length);
    });

    Mock.navigationManager = { };
    Mock.itemManager = { };


  }


});