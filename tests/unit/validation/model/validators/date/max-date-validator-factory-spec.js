xdescribe('MaxDateValidatorFactory validator suite:', function() {

  var factory, validator;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs.validation');

    mockDate();
    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('MaxDateValidatorFactory');
    });

  });

  describe('create method', function() {

    beforeEach(function() {
      validator = factory.create();
    });

    it('should return an validator with property reference with value Mock.now', function() {
      expect(validator.reference.getTime()).toEqual(Mock.jsonObject.reference.getTime());
    });

  });

  describe("fromJsonObject method", function() {

    beforeEach(function() {
      validator = factory.fromJsonObject(Mock.jsonObject);
    });

    it('should return an validator with reference equal to json value property', function() {
      expect(validator.reference).toBe(Mock.jsonObject.reference);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      }).toThrowError("otusjs.model.misc.model.MaxDateValidatorFactory.fromJsonObject() " +
        "method expects to receive a object instead a String");
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
  }

});
