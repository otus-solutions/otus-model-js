describe('UpdateRouteTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};

  beforeEach(function() {
    module('otusjs.model.navigation');

    inject(function(_$injector_) {
      mockRouteData();
      mockNavigation();
      mockRule(_$injector_);
      mockRouteCondition(_$injector_);
      mockRoute(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.UpdateRouteTaskService', injections);
    });
  });

  describe('execute method', function() {

    describe('when is a default route', function() {

      beforeEach(function() {
        Mock.routeData.isDefault = true;
        service.execute(Mock.routeData, Mock.navigation);
      });

      it('should instance a Route', function() {
        expect(Mock.RouteFactory.createDefault).toHaveBeenCalledWith(Mock.routeData.origin, Mock.routeData.destination);
      });

      it('should update route', function() {
        expect(Mock.navigation.updateRoute).toHaveBeenCalledWith(Mock.route);
      });

      it('should call setupDefaultRoute from Navigation', function() {
        expect(Mock.navigation.setupDefaultRoute).toHaveBeenCalledWith(Mock.route);
      });

    });

    describe('when is not a default route', function() {

      beforeEach(function() {
        Mock.routeData.isDefault = false;
        service.execute(Mock.routeData, Mock.navigation);
      });

      it('should instance a RouteCondition for each condition in routeData', function() {
        expect(Mock.RouteConditionFactory.create).toHaveBeenCalledWith(Mock.conditionData.name, Mock.rules);
      });

      it('should instance a RouteCondition for each condition in routeData', function() {
        expect(Mock.RuleFactory.create).toHaveBeenCalled();
      });
    });

  });

  function mockRule($injector) {
    Mock.RuleFactory = $injector.get('otusjs.model.navigation.RuleFactory');
    Mock.rule = Mock.RuleFactory.create(Mock.ruleData.when.customID, Mock.ruleData.operator.type);
    Mock.rules = [Mock.rule];

    spyOn(Mock.RuleFactory, 'create').and.returnValue(Mock.rule);

    injections.RuleFactory = Mock.RuleFactory;
  }

  function mockRouteCondition($injector) {
    Mock.RouteConditionFactory = $injector.get('otusjs.model.navigation.RouteConditionFactory');
    Mock.RouteCondition = Mock.RouteConditionFactory.create(Mock.conditionData.name, [Mock.rule]);

    spyOn(Mock.RouteConditionFactory, 'create').and.returnValue(Mock.RouteCondition);
    spyOn(Mock.RouteCondition, 'addRule');

    injections.RouteConditionFactory = Mock.RouteConditionFactory;
  }

  function mockRoute($injector) {
    Mock.RouteFactory = $injector.get('otusjs.model.navigation.RouteFactory');
    Mock.route = Mock.RouteFactory.createDefault(Mock.routeData.origin, Mock.routeData.destination);

    spyOn(Mock.RouteFactory, 'createDefault').and.returnValue(Mock.route);
    spyOn(Mock.route, 'addCondition');

    injections.RouteFactory = Mock.RouteFactory;
  }

  function mockRouteData() {
    Mock.routeData = {}
    Mock.routeData.origin = 'Q2';
    Mock.routeData.destination = 'Q4';
    Mock.routeData.conditions = [];

    Mock.conditionData = {};
    Mock.conditionData.name = 'CONDITION_NAME';
    Mock.conditionData.rules = [];

    Mock.ruleData = {};
    Mock.ruleData.when = {};
    Mock.ruleData.when.customID = 'Q1';
    Mock.ruleData.operator = {};
    Mock.ruleData.operator.type = 'equal';
    Mock.ruleData.answer = {};
    Mock.ruleData.answer.option = {};
    Mock.ruleData.answer.option.value = 1;

    Mock.routeData.conditions.push(Mock.conditionData);
    Mock.conditionData.rules.push(Mock.ruleData);
  }

  function mockNavigation() {
    Mock.navigation = {};
    Mock.navigation.updateRoute = jasmine.createSpy('updateRoute');
    Mock.navigation.setupDefaultRoute = jasmine.createSpy('setupDefaultRoute');
  }

});
