describe('CalendarQuestionFactory', function() {
  var Mock = {};
  var calendar, factory;
  var TEMPLATE_ID = 'TPL_ID';
  var PROTOTYPE = { "objectType" : "SurveyItem"};
  var LABEL = {"ptBR": {}};
  var METADATA = { "extents": "StudioObject", "objectType": "MetadataGroup", "options": []};
  var FILLING_RULES = { "extends": "StudiObject", "objectType": "FillingRules", "options": {}}
  var EXPECTED_VALIDATORS_LIST = [ 'mandatory', 'minDate', 'maxDate', 'rangeDate','futureDate', 'pastDate'];

  beforeEach(function() {
    angular.mock.module('otusjs');
    angular.mock.inject(function (_$injector_) {
      factory = _$injector_.get('CalendarQuestionFactory');
      // otusRestResourceContext = _$injector_.get('OtusRestResourceContext');
      // headerBuilderFactory = _$injector_.get('otus.client.HeaderBuilderFactory');
      // spyOn(otusRestResourceContext, 'getRestPrefix').and.callThrough();
      // spyOn(otusRestResourceContext, 'getSecurityToken');
      // spyOn(headerBuilderFactory, 'create').and.callThrough();
      // httpBackend = _$injector_.get('$httpBackend');
      // httpBackend.when(METHOD_GET_VALUE, REST_PREFIX + SUFFIX + LIST_SX).respond(200, DATA);
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
      var calendarJson = calendar.toJson();
      expect(JSON.stringify(calendarJson)).toEqual(JSON.stringify(Mock.calendarItemJson));
    });

  });

  describe('methods of object fromJsonObject', function() {

    beforeEach(function () {
      calendar = factory.fromJsonObject(Mock.calendarItemJson);
    });

    it("should create an instance with the same values of Mock.jsonObject", function() {
      expect(calendar.toJson()).toEqual(Mock.calendarItemJson);
    });

    // it("should call LabelFactory.fromJsonObject method with Mock.label", function() {
    //   expect(Mock.LabelFactory.fromJsonObject).toHaveBeenCalledWith(Mock.label);
    // });
    //
    // it("should call MetadataGroupFactory.fromJsonObject method with Mock.metadata", function() {
    //   expect(Mock.MetadataGroupFactory.fromJsonObject).toHaveBeenCalledWith(Mock.metadata);
    // });
    //
    // it("should call FillingRulesOptionFactory.fromJsonObject method with Mock.fillingRules", function() {
    //   expect(Mock.FillingRulesOptionFactory.fromJsonObject).toHaveBeenCalledWith(Mock.fillingRules);
    // });

    // it("should throw an error when receives a string", function() {
    //   var ERROR_MESSAGE = "otusjs.model.misc.model.CalendarQuestionFactory.fromJsonObject() " +
    //     "method expects to receive a object instead a String";
    //
    //   function fromJsonObjectFunction() {
    //     factory.fromJsonObject(JSON.stringify(Mock.calendarItemJson);
    //   };
    //
    //   expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    // });

  });

});