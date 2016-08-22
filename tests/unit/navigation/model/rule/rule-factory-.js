describe('RuleFactory', function() {

  var Mock = {};
  var rule;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('RuleFactory');
    });
  });

  describe('create method', function() {

    beforeEach(function() {
      rule = factory.create('QUESTION_ID');
    });

    it('should return a defined object', function() {
      expect(rule).toBeDefined();
    });

    it('should return a RuleCondition object with extends value equal to "StudioObject"', function() {
      expect(rule.extents).toBe('StudioObject');
    });

    it('should return a RuleCondition object with objectType value equal to "RuleCondition"', function() {
      expect(rule.objectType).toBe('Rule');
    });

    it('should return a RuleCondition object with a valid when value', function() {
      expect(rule.when).toEqual('QUESTION_ID');
    });

  });

  describe('fromJson method', function() {

    beforeEach(function() {
      mockJson();
      rule = factory.fromJson(Mock.json);
    });

    it('should return a defined object', function() {
      expect(rule).toBeDefined();
    });

    it('should return a RuleCondition object with extends value equal to "StudioObject"', function() {
      expect(rule.extents).toBe('StudioObject');
    });

    it('should return a RuleCondition object with objectType value equal to "RuleCondition"', function() {
      expect(rule.objectType).toBe('Rule');
    });

    it('should return a RuleCondition object with a valid when value', function() {
      expect(rule.when).toEqual('QUESTION_ID');
    });

    it('should return a RuleCondition object with a valid answer', function() {
      expect(rule.answer).toBeDefined();
      expect(rule.answer.contains).toBeDefined();
      expect(rule.answer.contains).toBe('ANSWER');
    });

  });

  function mockJson() {
    Mock.json = JSON.stringify({
      when: 'QUESTION_ID',
      answer: {
        contains: 'ANSWER'
      }
    });
  }

});
