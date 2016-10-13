describe('RulesFactory', function() {
  var Mock = {};
  var factory;

  beforeEach(function() {
    module('otusjs');

    mockRule();
    mockJson();

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

  describe('fromJson method', function() {

    beforeEach(function() {
      rule = factory.fromJson(Mock.json);
    });

    it('should return a validator equal to json ', function() {
      expect(JSON.stringify(rule)).toBe(JSON.stringify(Mock.json));
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

  function mockJson() {
    Mock.json = {
      "extends": "StudioObject",
      "objectType": "Rule",
      "validatorType": "mandatory",
      "data": {
        "reference": true
      }
    };
  }

});
