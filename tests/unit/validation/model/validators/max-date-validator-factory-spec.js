describe('MaxDateValidatorFactory validator suite:', function() {

  var factory;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    module('otusjs.validation');

    mockDate();
    mockJson();

    inject(function(_$injector_) {
      factory = _$injector_.get('MaxDateValidatorFactory');
    });

  });

  describe('MaxDateValidatorFactory.create()', function() {

    beforeEach(function() {
      validator = factory.create();
    });

    it('should return an validator with property reference with value Mock.now', function() {
      expect(validator.reference.getTime()).toEqual(Mock.json.reference.getTime());
    });

  });

  describe("MaxDateValidatorFactory.fromJson(json)", function() {

    beforeEach(function() {
      validator = factory.fromJson(Mock.json);
    });

    it('should return an validator with reference equal to json value property', function() {
      expect(validator.reference).toBe(Mock.json.reference);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.MaxDateValidatorFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockDate() {
    var baseTime = new Date(2013, 9, 23);
    jasmine.clock().mockDate(baseTime);
    Mock.now = baseTime;
  }

  function mockJson() {
    Mock.json = {
      "reference": Mock.now,
    };
  }

});
