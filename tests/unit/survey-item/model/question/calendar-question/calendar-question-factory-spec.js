describe('CalendarQuestionFactory', function() {
  var Mock = {};
  var question, factory,
    TEMPLATE_ID = 'TPL_ID',
    PROTOTYPE = { "objectType" : "SurveyItem"},
    EXPECTED_VALIDATORS_LIST = [ 'mandatory', 'minDate', 'maxDate', 'rangeDate','futureDate', 'pastDate'];

  beforeEach(function() {
    angular.mock.module('otusjs');
    angular.mock.inject(function (_$injector_) {
      factory = _$injector_.get('CalendarQuestionFactory');
    });

    Mock.calendarQuestionItemJson = Test.utils.data.calendarQuestionItem;

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
      question = factory.fromJsonObject(Mock.calendarQuestionItemJson);
    });

    it('should create an instance with the same values of Mock.calendarItemJson', function() {
      expect(JSON.stringify(question.toJSON())).toEqual(JSON.stringify(Mock.calendarQuestionItemJson));
    });

    it('should throw an error when receives a string', function() {
      var ERROR_MESSAGE = 'otusjs.model.misc.model.CalendarQuestionFactory.fromJsonObject() ' +
        'method expects to receive a object instead a String';

      function fromJsonObjectFunction() {
        factory.fromJsonObject(JSON.stringify(Mock.calendarQuestionItemJson));
      };

      expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    });

  });

  describe('methods of object calendar', function() {

    beforeEach(function () {
      question = factory.create(TEMPLATE_ID, PROTOTYPE);
    });

    it('returned object should have extends equal to objectType', function() {
      expect(question.extents).toBe('SurveyItem');
    });

    it('isQuestionMethod should return positive', function(){
      expect(question.isQuestion()).toBeTruthy();
    });

    it('validatorsMethod should return Array', function(){
      expect(question.validators()).toEqual(EXPECTED_VALIDATORS_LIST);
    });

    it('toJsonMethod should of create return jsonObject', function(){
      var questionJson = question.toJSON();
      expect(JSON.stringify(questionJson.label)).toEqual(JSON.stringify(Mock.label));
    });

  });

  function mockJsonObject() {

    Mock.ptBR = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.enUS = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.esES = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.label = {
      "ptBR": Mock.ptBR,
      "enUS": Mock.enUS,
      "esES": Mock.esES
    };
  }

});
