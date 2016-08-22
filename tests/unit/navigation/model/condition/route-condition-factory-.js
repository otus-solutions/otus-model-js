describe('RuleFactory', function() {
  var Mock = {};
  var routeCondition;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('RouteConditionFactory');
    });

    routeCondition = factory.create('CONDITION_NAME');
  });

  describe('create method', function() {

    it('should return a defined object', function() {
      expect(routeCondition).toBeDefined();
    });

    it('should return a RouteCondition object with extends value equal to StudioObject', function() {
      expect(routeCondition.extents).toBe('StudioObject');
    });

    it('should return a RouteCondition object with objectType value equal to RouteCondition', function() {
      expect(routeCondition.objectType).toBe('RouteCondition');
    });

    it('should return a RouteCondition object with a name value', function() {
      expect(routeCondition.name).toEqual('CONDITION_NAME');
    });

    it('should return a RouteCondition object with a valid conditions map', function() {
      expect(routeCondition.listRules()).toBeDefined();
    });

  });

  describe('fromJson method', function() {

    beforeEach(function() {
      mockJson();
      routeCondition = factory.fromJson(Mock.json);
    });

    it('should return a defined object', function() {
      expect(routeCondition).toBeDefined();
    });

    it('should return a RouteCondition object with extends value equal to StudioObject', function() {
      expect(routeCondition.extents).toBe('StudioObject');
    });

    it('should return a RouteCondition object with objectType value equal to RouteCondition', function() {
      expect(routeCondition.objectType).toBe('RouteCondition');
    });

    it('should return a RouteCondition object with a name value', function() {
      expect(routeCondition.name).toEqual('CONDITION_NAME');
    });

    it('should return a RouteCondition object with a valid conditions map', function() {
      expect(routeCondition.listRules()).toBeDefined();
      expect(routeCondition.listRules().length).toBe(2);
    });

  });

  function mockJson() {
    Mock.json = JSON.stringify({
      name: 'CONDITION_NAME',
      rules: [{
        when: 'QUESTION_ID',
        answer: {
          contains: 'ANSWER'
        }
      }, {
        when: 'QUESTION_ID',
        answer: {
          lower: 'ANSWER'
        }
      }]
    });
  }

});
