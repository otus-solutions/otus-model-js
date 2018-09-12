describe('CalendarQuestionFactory', function() {
  var Mock = {};
  var calendar, factory;
  var TEMPLATE_ID = 'TPL_ID';
  var PROTOTYPE = {"objectType" : "SurveyItem"};
  var LABEL = {"ptBR": {}, "enUS": {}, "esES": {}};
  var METADATA = { "extents": "StudioObject", "objectType": "MetadataGroup", "options": []};
  var FILLING_RULES = { "extends": "StudiObject", "objectType": "FillingRules", "options": {}}
  var EXPECTED_VALIDATORS_LIST = [ 'mandatory', 'minDate', 'maxDate', 'rangeDate','futureDate', 'pastDate'];

  beforeEach(function() {
    angular.mock.module('otusjs');
    angular.mock.inject(function (_$injector_) {
      factory = _$injector_.get('CalendarQuestionFactory');
    });

    Mock.calendarItemJson = Test.utils.data.calendarItemJson;

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
      calendar = factory.fromJsonObject(Mock.calendarItemJson);
    });

    it("should create an instance with the same values of Mock.calendarItemJson", function() {
      expect(JSON.stringify(calendar.toJSON())).toEqual(JSON.stringify(Mock.calendarItemJson));
    });

    it("should throw an error when receives a string", function() {
      var ERROR_MESSAGE = "otusjs.model.misc.model.CalendarQuestionFactory.fromJsonObject() " +
        "method expects to receive a object instead a String";

      function fromJsonObjectFunction() {
        factory.fromJsonObject(JSON.stringify(Mock.calendarItemJson));
      };

      expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    });

  });

  describe('methods of object calendar', function() {

    beforeEach(function () {
      calendar = factory.create(TEMPLATE_ID, PROTOTYPE, LABEL, METADATA, FILLING_RULES);
    });

    it('isQuestionMethod should return positive', function(){
      expect(calendar.isQuestion()).toBeTruthy();
    });

    it('validatorsMethod should return Array', function(){
      expect(calendar.validators()).toEqual(EXPECTED_VALIDATORS_LIST);
    });

    it('toJsonMethod should return jsonObject', function(){
      var calendarJson = calendar.toJSON();
      expect(JSON.stringify(calendarJson)).toEqual(JSON.stringify(Mock.calendarItemJson));
    });

  });

});
