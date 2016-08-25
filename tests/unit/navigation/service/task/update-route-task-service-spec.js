describe('UpdateRouteTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};

  beforeEach(function() {
    module('otusjs.model.navigation');

    inject(function(_$injector_) {
      mockNavigation();
      mockRouteData();
      mockRoute(_$injector_);
      mockRouteCondition(_$injector_);
      mockRule(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.UpdateRouteTaskService', injections);
    });
  });

  describe('execute method', function() {

    beforeEach(function() {
      service.execute(Mock.routeData, Mock.navigation);
    });

    it('should instance a Route', function() {
      expect(Mock.RouteFactory.create).toHaveBeenCalledWith(Mock.routeData.origin, Mock.routeData.destination);
    });

    it('should update route', function() {
      expect(Mock.navigation.updateRoute).toHaveBeenCalledWith(Mock.Route);
    });

    it('should instance a RouteCondition for each condition in routeData', function() {
      expect(Mock.RouteConditionFactory.create).toHaveBeenCalledWith(Mock.conditionData.name);
    });

    it('should add the new RouteCondition into new Route', function() {
      expect(Mock.Route.addCondition).toHaveBeenCalledWith(Mock.RouteCondition);
    });

    it('should instance a Rule for each rule in condition', function() {
      expect(Mock.RuleFactory.create).toHaveBeenCalledWith(Mock.ruleData.when.customID, Mock.ruleData.operator.type);
    });

    it('should add the new Rule into new RouteCondition', function() {
      expect(Mock.RouteCondition.addRule).toHaveBeenCalledWith(Mock.Rule);
    });

  });

  function mockRoute($injector) {
    Mock.RouteFactory = $injector.get('otusjs.model.navigation.RouteFactory');
    Mock.Route = Mock.RouteFactory.create(Mock.routeData.origin, Mock.routeData.destination);

    spyOn(Mock.RouteFactory, 'create').and.returnValue(Mock.Route);
    spyOn(Mock.Route, 'addCondition');

    injections.RouteFactory = Mock.RouteFactory;
  }

  function mockRouteCondition($injector) {
    Mock.RouteConditionFactory = $injector.get('otusjs.model.navigation.RouteConditionFactory');
    Mock.RouteCondition = Mock.RouteConditionFactory.create(Mock.conditionData.name);

    spyOn(Mock.RouteConditionFactory, 'create').and.returnValue(Mock.RouteCondition);
    spyOn(Mock.RouteCondition, 'addRule');

    injections.RouteConditionFactory = Mock.RouteConditionFactory;
  }

  function mockRule($injector) {
    Mock.RuleFactory = $injector.get('otusjs.model.navigation.RuleFactory');
    Mock.Rule = Mock.RuleFactory.create(Mock.ruleData.when.customID, Mock.ruleData.operator.type);

    spyOn(Mock.RuleFactory, 'create').and.returnValue(Mock.Rule);

    injections.RuleFactory = Mock.RuleFactory;
  }

  function mockRouteData() {
    Mock.routeData = {}
    Mock.routeData.origin = 'Q2';
    Mock.routeData.destination = 'Q4';
    Mock.routeData.conditionSet = [];

    Mock.conditionData = {};
    Mock.conditionData.name = 'CONDITION_NAME';
    Mock.conditionData.rules = [];

    Mock.ruleData = {};
    Mock.ruleData.when = {};
    Mock.ruleData.customID = 'Q1';
    Mock.ruleData.operator = {};
    Mock.ruleData.operator.type = 'equal';

    Mock.routeData.conditionSet.push(Mock.conditionData);
    Mock.conditionData.rules.push(Mock.ruleData);
  }

  function mockNavigation() {
    Mock.navigation = {};
    Mock.navigation.updateRoute = jasmine.createSpy('updateRoute');
  }

});
