describe('MaxLengthValidatorFactory validator suite:', function() {

  var factory;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    module('otusjs.validation');

    inject(function(_$injector_) {
      factory = _$injector_.get('MaxLengthValidatorFactory');
    });

  });

  describe('create method', function() {

    beforeEach(function() {
      validator = factory.create();
    });

    it('should return an validator with property reference with value null', function() {
      expect(validator.reference).toBe(null);
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
      }).toThrowError("otusjs.model.misc.model.MaxLengthValidatorFactory.fromJsonObject() " +
        "method expects to receive a object instead a String");
    });

  });

  Mock.jsonObject = {
    "reference": null,
  };

});
