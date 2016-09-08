describe('RouteCondition', function() {

  var Mock = {};
  var condition;
  var DIFF_OBJECT_TYPE = 'DIFF_OBJECT_TYPE';
  var CONDITION_NAME = 'CONDITION_NAME';
  var DIFF_CONDITION_NAME = 'DIFF_CONDITION_NAME';
  var QID1 = 'QID1';
  var QID2 = 'QID2';
  var EQUAL = 'equal';
  var GREATER = 'greater';
  var ANSWER = 1;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockRules(_$injector_);

      factory = _$injector_.get('otusjs.model.navigation.RouteConditionFactory');
    });

    mockJson();

    condition = factory.create(CONDITION_NAME);
  });

  describe('addRule method', function() {

    it('should put a rule in rule list', function() {
      condition.addRule(Mock.ruleA);

      expect(condition.listRules().length).toBe(1);
    });

    it('should not put a rule twice', function() {
      condition.addRule(Mock.ruleA);
      condition.addRule(Mock.ruleB);

      condition.addRule(Mock.ruleA);
      condition.addRule(Mock.ruleB);

      expect(condition.listRules().length).toBe(2);
    });

  });

  describe('removeRule method', function() {

    beforeEach(function() {
      condition.addRule(Mock.ruleA);
      condition.addRule(Mock.ruleB);
    });

    it('should remove the rule from rule list', function() {
      condition.removeRule(Mock.ruleA);

      expect(condition.listRules().length).toBe(1);
    });

    it('should remove exactly the specified rule from rule list', function() {
      condition.removeRule(Mock.ruleB);

      expect(condition.getRuleByIndex(0)).toEqual(Mock.ruleA);
    });

  });

  describe('equals method', function() {

    it('should return true when two objects have the same properties and equal values', function() {
      var conditionA = factory.create(CONDITION_NAME);
      conditionA.addRule(Mock.ruleA);

      var conditionB = factory.create(CONDITION_NAME);
      conditionB.addRule(Mock.ruleA);

      expect(conditionA.equals(conditionB)).toBe(true);
    });

    it('should return false when two objects have different objectType value', function() {
      var conditionA = factory.create(CONDITION_NAME);
      var conditionB = factory.create(CONDITION_NAME);
      conditionB.objectType = DIFF_OBJECT_TYPE;

      expect(conditionA.equals(conditionB)).toBe(false);
    });

    it('should return false when two objects have different name value', function() {
      var conditionA = factory.create(CONDITION_NAME);
      var conditionB = factory.create(DIFF_CONDITION_NAME);

      expect(conditionA.equals(conditionB)).toBe(false);
    });

    it('should return false when two objects have different size of rule list', function() {
      var conditionA = factory.create(CONDITION_NAME);
      conditionA.addRule(Mock.ruleA);

      var conditionB = factory.create(CONDITION_NAME);

      expect(conditionA.equals(conditionB)).toBe(false);
    });

    it('should return false when two objects have same size of rule list but not equals rules', function() {
      var conditionA = factory.create(CONDITION_NAME);
      conditionA.addRule(Mock.ruleA);

      var conditionB = factory.create(CONDITION_NAME);
      conditionB.addRule(Mock.ruleB);

      expect(conditionA.equals(conditionB)).toBe(false);
    });

    it('should return false when two objects have same rules in the list but in different order', function() {
      var conditionA = factory.create(CONDITION_NAME);
      conditionA.addRule(Mock.ruleA);
      conditionA.addRule(Mock.ruleB);

      var conditionB = factory.create(CONDITION_NAME);
      conditionB.addRule(Mock.ruleB);
      conditionB.addRule(Mock.ruleA);

      expect(conditionA.equals(conditionB)).toBe(false);
    });

  });

  describe('selfsame method', function() {

    it('should call Object.is', function() {
      spyOn(Object, 'is').and.callThrough();

      var conditionA = factory.create(CONDITION_NAME);
      conditionA.addRule(Mock.ruleA);

      var conditionB = factory.create(CONDITION_NAME);
      conditionB.addRule(Mock.ruleA);

      var resultA = conditionA.selfsame(conditionA);
      var resultB = conditionA.selfsame(conditionB);

      expect(Object.is).toHaveBeenCalled();
      expect(resultA).toBe(true);
      expect(resultB).toBe(false);
    });

  });

  describe('clone method', function() {

    it('should call Object.assign', function() {
      spyOn(Object, 'assign').and.callThrough();

      var conditionA = factory.create(CONDITION_NAME);
      conditionA.addRule(Mock.ruleA);
      var clone = conditionA.clone();

      expect(Object.assign).toHaveBeenCalled();
      expect(conditionA.equals(clone)).toBe(true);
      expect(conditionA.selfsame(clone)).toBe(false);
    });

  });

  describe('toJson method', function() {

    beforeEach(function() {
      condition.addRule(Mock.ruleA);
    });

    xit('should return a well formatted json based on RouteCondition', function() {
      expect(condition.toJson()).toEqual(Mock.json);
    });

  });

  function mockRules($injector) {
    Mock.RuleFactory = $injector.get('otusjs.model.navigation.RuleFactory');

    Mock.ruleA = Mock.RuleFactory.create(QID1, EQUAL, ANSWER);
    Mock.ruleA.equal(1, 10);

    Mock.ruleB = Mock.RuleFactory.create(QID1, GREATER, ANSWER);
    Mock.ruleB.equal([10, 20]);
  }

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: 'StudioObject',
      objectType: 'RouteCondition',
      name: CONDITION_NAME,
      rules: [Mock.ruleA.toJson()]
    }).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
  }

});
