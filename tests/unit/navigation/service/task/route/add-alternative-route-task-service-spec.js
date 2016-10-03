describe('CreateDefaultRouteTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};
  var CAD1 = 'CAD1';
  var CAD2 = 'CAD2';
  var CAD3 = 'CAD3';
  var CAD4 = 'CAD4';

  beforeEach(function() {
    module('otusjs.model.navigation');

    inject(function(_$injector_) {
      mockRoute(_$injector_);
      mockNavigation(_$injector_);
      mockNavigationContainerService(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.AddAlternativeRouteTaskService', injections);
    });
  });

  describe('execute method', function() {

    xit('should create an alternative route based on route data', function() {
      spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationB);
      spyOn(Mock.RouteFactory, 'createAlternative').and.callThrough();

      service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

      expect(Mock.RouteFactory.createAlternative).toHaveBeenCalled();
    });

    xit('should create an alternative route on navigation', function() {
      spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationB);
      spyOn(Mock.navigationA, 'createAlternativeRoute').and.callThrough();

      service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

      expect(Mock.navigationA.createAlternativeRoute).toHaveBeenCalled();
    });

    xit('should notify new alternative navigation', function() {
      spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationB);
      spyOn(Mock.navigationB, 'updateInNavigation');

      service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

      expect(Mock.navigationB.updateInNavigation).toHaveBeenCalledWith(Mock.navigationA);
    });

  });

  function mockNavigation($injector) {
    Mock.NavigationFactory = $injector.get('otusjs.model.navigation.NavigationFactory');
    Mock.navigationA = Mock.NavigationFactory.create(CAD1, CAD2);
    Mock.navigationB = Mock.NavigationFactory.create(CAD2, CAD3);
    Mock.navigationC = Mock.NavigationFactory.create(CAD3, CAD4);
  }

  function mockRoute($injector) {
    Mock.RouteFactory = $injector.get('otusjs.model.navigation.RouteFactory');
    Mock.RuleFactory = $injector.get('otusjs.model.navigation.RuleFactory');
    Mock.RouteConditionFactory = $injector.get('otusjs.model.navigation.RouteConditionFactory');

    Mock.condition = Mock.RouteConditionFactory.create(CAD1, [Mock.RuleFactory.create(CAD1, 'equal', 1)]);

    Mock.routeCAD1_CAD2 = Mock.RouteFactory.createDefault(CAD1, CAD2);
    Mock.routeCAD1_CAD3 = Mock.RouteFactory.createAlternative(CAD1, CAD3, [Mock.condition]);
    Mock.routeCAD1_CAD4 = Mock.RouteFactory.createAlternative(CAD1, CAD4, [Mock.condition]);

    Mock.routeCAD2_CAD3 = Mock.RouteFactory.createDefault(CAD2, CAD3);
    Mock.routeCAD2_CAD4 = Mock.RouteFactory.createAlternative(CAD2, CAD4, [Mock.condition]);

    Mock.routeCAD3_CAD4 = Mock.RouteFactory.createDefault(CAD3, CAD4);
  }

  function mockNavigationContainerService($injector) {
    Mock.NavigationContainerService = $injector.get('otusjs.model.navigation.NavigationContainerService');
  }
});
