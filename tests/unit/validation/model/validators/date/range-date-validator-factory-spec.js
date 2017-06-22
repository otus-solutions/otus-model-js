xdescribe('RangeDateValidatorFactory validator suite:', function() {

  var factory;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    module('otusjs.validation');

    mockDate();
    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('RangeDateValidatorFactory');
    });

  });

  describe('create method', function() {

    beforeEach(function() {
      validator = factory.create();
    });

    it('should return an validator with property reference with value Mock.jsonObject', function() {
      expect(validator.reference.initial.getTime()).toEqual(Mock.jsonObject.reference.initial.getTime());
      expect(validator.reference.end.getTime()).toEqual(Mock.jsonObject.reference.end.getTime());
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
      }).toThrowError("otusjs.model.misc.model.RangeDateValidatorFactory.fromJsonObject() " +
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
      "reference": {
        'initial': Mock.now,
        'end': Mock.now
      }
    };
  }

});
