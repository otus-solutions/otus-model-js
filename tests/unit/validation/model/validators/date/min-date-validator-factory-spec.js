xdescribe('MinDateValidatorFactory validator suite:', function() {

  var factory, validator;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs.validation');

    inject(function(_$injector_) {
      factory = _$injector_.get('MinDateValidatorFactory');
    });

    mockDate();

  });

  describe('create method', function() {

    beforeEach(function() {
      validator = factory.create();
    });

    it('should return an validator with property reference with value Mock.now', function() {
      expect(validator.reference).toEqual(Mock.now);
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
      }).toThrowError("otusjs.model.misc.model.MinDateValidatorFactory.fromJsonObject() " +
        "method expects to receive a object instead a String");
    });

  });

  Mock.jsonObject = {
    "reference": Mock.now,
  };

  function mockDate() {
    Mock.now = new Date();
    spyOn(Date, 'now').and.returnValue(Mock.now);
  }

});
