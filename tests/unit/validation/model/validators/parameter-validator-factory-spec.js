describe('ParameterValidatorFactory validator suite:', function() {

  var factory;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    module('otusjs.validation');

    inject(function(_$injector_) {
      factory = _$injector_.get('ParameterValidatorFactory');
    });

  });

  describe('ParameterValidatorFactory.create()', function() {

    beforeEach(function() {
      validator = factory.create();
    });

    it('should return an validator with property reference with empty string', function() {
      expect(validator.reference).toBe('');
    });

  });

  describe("ParameterValidatorFactory.fromJson(json)", function() {

    beforeEach(function() {
      validator = factory.fromJson(Mock.json);
    });

    it('should return an validator with reference equal to json value property', function() {
      expect(validator.reference).toBe(Mock.json.reference);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.ParameterValidatorFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  Mock.json = {
    "reference": '',
  };

});
