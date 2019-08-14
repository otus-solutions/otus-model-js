fdescribe('the SurveyItemGroupManagerFactory', function () {
  var factory;
  var Mock = {};

  beforeEach(function () {
    angular.mock.module('otusjs');


    inject(function (_$injector_) {
      mock(_$injector_);
      factory = _$injector_.get('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory');
    });
  });

  describe('the creation and load method', function () {
    var manager;
    beforeEach(function () {
      manager = factory.create();

      Mock.navigationContainer = Mock.navigationContainerFactory.create();
      Mock.surveyItemContainer = Mock.surveyItemContainerFactory.create();

      Mock.navigationContainer.loadJsonData(Mock.template.navigationList);
      Mock.surveyItemContainer.loadFromItemContainerObject(Mock.template.itemContainer);

      manager.setNavigationContainer(Mock.navigationContainer);
      manager.setSurveyItemContainer(Mock.surveyItemContainer);
    });

    it('should create an defined object', function () {
      expect(manager).toBeDefined();
    });

    it('should provide the candidates for a group', function () {
      expect(manager.getGroupCandidates('DIC1')).toEqual(['DIC2', 'DIC3']);
      expect(manager.getGroupCandidates('DIC8')).toEqual(['DIC9', 'DIC12', 'DIC13']);
      expect(manager.getGroupCandidates('DIC5')).toEqual(['DIC6']);
      expect(manager.getGroupCandidates('DIC15')).toEqual(['DIC4', 'DIC11']);
      expect(manager.getGroupCandidates('DIC14')).toEqual(['DIC16']);
    });

    it('should create a new group', function () {
      expect(manager.createGroup(['DIC8', 'DIC9'])).not.toBeDefined();
    });

    it('should throw error when pass impossible group', function () {
      expect(function () {
        manager.createGroup(['DIC8', 'DIC9', 'DIC11']);
      }).toThrowError();
    });

  });


  function mock(_$injector_) {
    Mock.template = Test.utils.data.templateExampleWithAllQuestionsAndValidations;

    Mock.surveyItemContainerFactory = _$injector_.get('SurveyItemContainerFactory');
    Mock.navigationContainerFactory = _$injector_.get('otusjs.model.navigation.NavigationContainerFactory');

  }


});