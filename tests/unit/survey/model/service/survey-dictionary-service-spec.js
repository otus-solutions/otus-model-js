describe("SurveyDictionaryService_TestSuite", function () {
  var service;
  var Mock = {};
  
  beforeEach(function () {
    angular.mock.module('otusjs.survey');
    angular.mock.inject(function ($injector) {
      service = $injector.get('SurveyDictionaryService');
      Mock.jsonObject = Test.utils.data.templateExampleWithAllQuestionsAndValidations;
    });
  });

  it('serviceExistence_check', function () {
    expect(service).toBeDefined();
  });

  it('serviceMethodsExistence_check', function () {
    expect(service.dictionaryConstructionByExtractionId).toBeDefined();
  });

  describe('internalSuite for expected behaviors', function () {
    beforeEach(function () {
      Mock.dicionary = service.dictionaryConstructionByExtractionId(Mock.jsonObject);
    });

    it('dictionaryConstructionByExtractionIdMethod_should_extract_checkboxInstances_by_extract id', function () {
      let checkBoxListSize = 4;
      expect(checkBoxListSize).toBe(Mock.dicionary.filter(dic => dic.objectType == 'CheckboxQuestion').length);
    });

    it('dictionaryConstructionByExtractionIdMethod_should_extract_gridTextQuestionInstances_by_extract id', function () {
      let gridTextListSize = 3;
      expect(gridTextListSize).toBe(Mock.dicionary.filter( dic => dic.objectType == 'GridTextQuestion').length);
    });

    it('dictionaryConstructionByExtractionIdMethod_should_extract_gridIntegerQuestionInstances_by_extract id', function () {
      let gridTextListSize = 3;
      expect(gridTextListSize).toBe(Mock.dicionary.filter( dic => dic.objectType == 'GridIntegerQuestion').length);
    });

    it('dictionaryConstructionByExtractionIdMethod_should_extract_noArrayQuestionInstances_by_extract id', function () {
      let gridTextListSize = 14;
      expect(gridTextListSize).toBe(Mock.dicionary.filter(
        dic => dic.objectType != 'GridIntegerQuestion'
            && dic.objectType != 'CheckboxQuestion'
            && dic.objectType != 'GridIntegerQuestion'
      ).length);
    });
  });
});