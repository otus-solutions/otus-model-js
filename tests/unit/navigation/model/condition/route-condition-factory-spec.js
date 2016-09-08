describe('RuleFactory', function() {

  var Mock = {};
  var routeCondition;
  var EXTENTS = 'SurveyTemplateObject';
  var OBJECT_TYPE = 'RouteCondition';
  var CONDITION_NAME = 'CONDITION_NAME';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.model.navigation.RouteConditionFactory');
    });

    routeCondition = factory.create(CONDITION_NAME);
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

    it('should return a RouteCondition object with a empty list of rules', function() {
      expect(routeCondition.listRules()).toEqual(jasmine.any(Array));
      expect(routeCondition.listRules().length).toBe(0);
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

});
