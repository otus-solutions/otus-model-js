describe('IntegerQuestionFactory', function() {
  var Mock = {};
  var factory, question,
    TEMPLATE_ID = 'TEMPLATE_ID',
    PROTOTYPE = { "objectType" : "SurveyItem"},
    EXPECTED_VALIDATORS_LIST = ['mandatory', 'distinct', 'lowerLimit', 'upperLimit', 'precision', 'in'];

  beforeEach(function() {
    angular.mock.module('otusjs');
    angular.mock.inject(function (_$injector_) {
      factory = _$injector_.get('IntegerQuestionFactory');
    });

    Mock.integerQuestionItemJson = Test.utils.data.integerQuestionItem;

    mockJsonObject();

  });

  it('factoryExistence check', function () {
    expect(factory).toBeDefined();
  });

  it('methodFactoryExistence check', function () {
    expect(factory.create).toBeDefined();
    expect(factory.fromJsonObject).toBeDefined();
  });

  describe('methods of object fromJsonObject', function() {

    beforeEach(function () {
      question = factory.fromJsonObject(Mock.integerQuestionItemJson);
    });

    it('should create an instance with the same values of Mock.integerQuestionItemJson', function() {
      expect(JSON.stringify(question.toJSON())).toEqual(JSON.stringify(Mock.integerQuestionItemJson));
    });

    it('should throw an error when receives a string', function() {
        var ERROR_MESSAGE = 'otusjs.model.misc.model.IntegerQuestionFactory.fromJsonObject() ' +
          'method expects to receive a object instead a String';

        var fromJsonObjectFunction = function() {
          factory.fromJsonObject(JSON.stringify(Mock.integerQuestionItemJson));
        };

        expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
      });

  });

  describe('methods of object integer', function() {

    beforeEach(function () {
      question = factory.create(TEMPLATE_ID, PROTOTYPE);
    });

    it('isQuestionMethod should return positive', function(){
      expect(question.isQuestion()).toBeTruthy();
    });

    it('validatorsMethod should return Array', function(){
      expect(question.validators()).toEqual(EXPECTED_VALIDATORS_LIST);
    });

    it('toJsonMethod should of create return jsonObject', function(){
      var questionJson = question.toJSON();
      expect(JSON.stringify(questionJson.unit)).toEqual(JSON.stringify(Mock.unit));
    });

  });

  function mockJsonObject() {

    Mock.ptBR = {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.enUS = {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.esES = {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.unit = {
      "ptBR": Mock.ptBR,
      "enUS": Mock.enUS,
      "esES": Mock.esES
    };
  }

});
