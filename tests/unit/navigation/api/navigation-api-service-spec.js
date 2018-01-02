describe('NavigationApiService', function() {

  var Mock = {};
  var service = {};

  var injections = {};
  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      mockRuleData();
      mockRouteData();
      mockNavigation(_$injector_);
      mockRouteConditionFactory(_$injector_);
      mockRuleFactory(_$injector_);

      // mockRouteFactory(_$injector_);
      service = _$injector_.get(
        'otusjs.model.navigation.NavigationApiService');
    });
  });
  describe("resolveNavigation method", function() {
    beforeEach(function() {});
    it("should resolve navigation", function() {
      // Mock.navigation.routes.length = 1;

      var container = service.resolveNavigation(Mock.CurrentItemService,
        Mock.navigation);
      expect(container).not.toBeDefined();
    });
  });
  xdescribe('addRoute method', function() {

    xit('should call RouteFactory.create', function() {
      service.addRoute(Mock.routeData, Mock.navigation);

      expect(Mock.RouteFactory.create).toHaveBeenCalled();
    });

    xit('should call Navigation.addRoute', function() {
      service.addRoute(Mock.routeData, Mock.navigation);

      expect(Mock.navigation.addRoute).toHaveBeenCalled();
    });

  });

  xdescribe('addRouteCondition method', function() {

    it('should call RouteConditionFactory.create', function() {
      service.addRouteCondition('CONDIÇÃO', Mock.route);

      expect(Mock.RouteConditionFactory.create).toHaveBeenCalled();
    });

    it('should call Route.addCondition', function() {
      service.addRouteCondition('CONDIÇÃO', Mock.route);

      expect(Mock.route.addCondition).toHaveBeenCalled();
    });
    navigation

  });

  xdescribe('addConditionRule method', function() {

    it('should call RuleFactory.create', function() {
      service.addConditionRule(Mock.ruleData, Mock.routeCondition);

      expect(Mock.RuleFactory.create).toHaveBeenCalled();
    });

    it('should call Route.addCondition', function() {
      service.addConditionRule(Mock.ruleData, Mock.routeCondition);

      expect(Mock.routeCondition.addRule).toHaveBeenCalled();
    });

  });

  function mockRouteFactory($injector) {
    Mock.RouteFactory = $injector.get(
      'otusjs.model.navigation.RouteFactory');

    Mock.route = Mock.RouteFactory.create(Mock.routeData.name, Mock.routeData
      .origin, Mock.routeData.destination);


    injections.RouteFactory = Mock.RouteFactory;

  }

  function mockRouteConditionFactory($injector) {
    Mock.RouteConditionFactory = $injector.get(
      'otusjs.model.navigation.RouteConditionFactory');

    Mock.routeCondition = Mock.RouteConditionFactory.create('CONDIÇÃO');


    injections.RouteConditionFactory = Mock.RouteConditionFactory;

  }

  function mockRuleFactory($injector) {
    Mock.RuleFactory = $injector.get('otusjs.model.navigation.RuleFactory');
    injections.RuleFactory = Mock.RuleFactory;

  }

  function mockNavigation($injector) {
    Mock.CurrentItemService = {
      filling: ""
    }
    var navigationFactory = $injector.get(
      'otusjs.model.navigation.NavigationFactory');
    Mock.navigation = navigationFactory.create('N1', 'N2');

  }

  function mockRouteData() {
    Mock.routeData = {};
    Mock.routeData.name = 'ROTA 1';
    Mock.routeData.origin = 'N1';
    Mock.routeData.destination = 'N2';

  }

  function mockRuleData() {
    Mock.ruleData = {};
    Mock.ruleData.when = 'N1';
    Mock.ruleData.operator = 'contains';
    Mock.ruleData.destination = 'answer';
  }

});
