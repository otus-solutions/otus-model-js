describe('MinDateValidatorFactory validator suite:', function() {

  var factory, validator;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs');

    mockDate();
    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('MinDateValidatorFactory',
        _$injector_.get('otusjs.utils.ImmutableDate'));
    });

  });

  describe('create method', function() {

    beforeEach(function() {
      validator = factory.create();
      spyOn(factory, "create").and.callThrough();
    });

    it(
      'should return an validator with property reference with value Mock.now',
      function() {
        expect(factory.create.calls.any()).toEqual(false);
        factory.create();
        expect(factory.create.calls.any()).toEqual(true);
        expect(factory.create).toHaveBeenCalled();

      });

  });

  describe("fromJsonObject method", function() {

    beforeEach(function() {
      validator = factory.fromJsonObject(Mock.jsonObject);
    });

    it(
      'should return an validator with reference equal to json value property',
      function() {
        expect(validator.reference).toBe(Mock.jsonObject.reference);
      });

    it("should call method fromJsonObject", function() {
      spyOn(factory, "fromJsonObject").and.callThrough();
      factory.fromJsonObject(Mock.jsonObject);
      expect(factory.fromJsonObject).toHaveBeenCalled();
      expect(factory.fromJsonObject).toHaveBeenCalledWith(Mock.jsonObject);

    });
  });

  describe("fromJsonObject throw", function() {
    beforeEach(function() {
      factory.fromJsonObject(Mock.jsonObject);
      spyOn(factory, "fromJsonObject").and.callThrough();
    });
    it("should throw a error if the method receive a string", function() {
      var item = "item"
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject))
      }).toThrowError(Error,
        "otusjs.model.misc.model.MinDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String"
      );
    });
  });


  function mockDate() {
    var baseTime = new Date(2013, 9, 23);
    jasmine.clock().mockDate(baseTime);
    Mock.now = baseTime;
  }

  function mockJsonObject() {
    Mock.jsonObject = {
      "reference": Mock.now,
    };
    Mock.jsonObjectComplete = Test.utils.data.SurveyTemplate;
  }

});
