describe('RouteConditionFactory', function() {

  var Mock = {};
  var routeCondition;
  var EXTENTS = 'SurveyTemplateObject';
  var OBJECT_TYPE = 'RouteCondition';
  var CONDITION_NAME = 'CONDITION_NAME';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockRule(_$injector_);
      factory = _$injector_.get('otusjs.model.navigation.RouteConditionFactory');
    });

    routeCondition = factory.create(CONDITION_NAME, [Mock.rule]);
  });

  describe('create method', function() {

    it('should return a RouteCondition object with extents value equal to SurveyTemplateObject', function() {
      expect(routeCondition.extents).toBe(EXTENTS);
    });

    it('should return a RouteCondition object with objectType value equal to RouteCondition', function() {
      expect(routeCondition.objectType).toBe(OBJECT_TYPE);
    });

    it('should return a RouteCondition object with a name value', function() {
      expect(routeCondition.name).toEqual(CONDITION_NAME);
    });

    it('should return a RouteCondition object with list of rules with at least one rule', function() {
      expect(routeCondition.listRules()).toEqual(jasmine.any(Array));
      expect(routeCondition.listRules().length).toBe(1);
    });

    it('should return a null object when no rule is passed as parameter', function() {
      routeCondition = factory.create(CONDITION_NAME);
      expect(routeCondition).toBe(null);
    });

  });

  describe('fromJson method', function() {

    beforeEach(function() {
      mockJson();
      routeCondition = factory.fromJson(Mock.json);
    });

    it('should return a RouteCondition object with extends value equal to StudioObject', function() {
      expect(routeCondition.extents).toBe(EXTENTS);
    });

    it('should return a RouteCondition object with objectType value equal to RouteCondition', function() {
      expect(routeCondition.objectType).toBe(OBJECT_TYPE);
    });

    it('should return a RouteCondition object with a name value', function() {
      expect(routeCondition.name).toEqual(CONDITION_NAME);
    });

    it('should return a RouteCondition object with a list of rules', function() {
      expect(routeCondition.listRules()).toBeDefined();
      expect(routeCondition.listRules().length).toBe(2);
    });

  });

  function mockJson() {
    Mock.json = JSON.stringify({
      name: CONDITION_NAME,
      rules: [{
        extents: 'SurveyTemplateObject',
        objectType: 'Rule',
        when: 'QID1',
        operator: 'equal',
        answer: 1
      }, {
        extents: 'SurveyTemplateObject',
        objectType: 'Rule',
        when: 'QID2',
        operator: 'greater',
        answer: 1
      }]
    });
  }

  function mockRule($injector) {
    var RuleFactory = $injector.get('otusjs.model.navigation.RuleFactory');
    Mock.rule = RuleFactory.create('QID1', 'equal', 1);
  }

});
