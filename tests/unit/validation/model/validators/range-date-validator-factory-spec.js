describe('RangeDateValidatorFactory validator suite:', function() {

  var factory;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    module('otusjs.validation');

    mockDate();
    mockJson();

    inject(function(_$injector_) {
      factory = _$injector_.get('RangeDateValidatorFactory');
    });

  });

  describe('RangeDateValidatorFactory.create()', function() {

    beforeEach(function() {
      validator = factory.create();
    });

    it('should return an validator with property reference with value Mock.json', function() {
      expect(validator.reference.initial.getTime()).toEqual(Mock.json.reference.initial.getTime());
      expect(validator.reference.end.getTime()).toEqual(Mock.json.reference.end.getTime());
    });

  });

  describe("RangeDateValidatorFactory.fromJson(json)", function() {

    beforeEach(function() {
      validator = factory.fromJson(Mock.json);
    });

    it('should return an validator with reference equal to json value property', function() {
      expect(validator.reference).toBe(Mock.json.reference);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.RangeDateValidatorFactory.fromJson() " +
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
      "reference": {
        'initial': Mock.now,
        'end': Mock.now
      }
    };
  }

});
