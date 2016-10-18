describe('RulesFactory', function() {
  var Mock = {};
  var factory;

  beforeEach(function() {
    module('otusjs');

    mockRule();
    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('RulesFactory');
    });
  });


  describe('create method', function() {

    beforeEach(function() {
      rule = factory.create('upperCase');
    });

    it('should create a new rule given specific type', function() {
      expect(JSON.stringify(rule)).toBe(Mock.rule);
    });

  });

  describe('fromJsonObject method', function() {

    beforeEach(function() {
      rule = factory.fromJsonObject(Mock.jsonObject);
    });

    it('should return a validator equal to json ', function() {
      expect(JSON.stringify(rule)).toBe(JSON.stringify(Mock.jsonObject));
    });

  });

  function mockRule() {
    Mock.rule = JSON.stringify({
      extends: 'StudioObject',
      objectType: 'Rule',
      validatorType: 'upperCase',
      data: {
        reference: true
      }
    });
  }

  function mockJsonObject() {
    Mock.jsonObject = {
      "extends": "StudioObject",
      "objectType": "Rule",
      "validatorType": "mandatory",
      "data": {
        "reference": true
      }
    };
  }

});
