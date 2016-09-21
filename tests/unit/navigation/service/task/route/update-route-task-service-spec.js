describe('UpdateRouteTaskService', function() {

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
      mockNavigation(_$injector_);
      mockRoute(_$injector_);
      mockNavigationContainerService(_$injector_);
      mockCreateDefaultRouteTaskService(_$injector_);

      service = _$injector_.get('otusjs.model.navigation.UpdateRouteTaskService', injections);
    });
  });

  describe('execute method', function() {

    describe('when route to update is the current default route of navigation', function() {

      it('should throw an Error', function() {
        expect(function() {
          service.execute(Mock.routeCAD1_CAD2, Mock.navigationA);
        }).toThrow(new Error('Is not possible update a default route.'));
      });

    });

    describe('when route to update is the new default route of navigation', function() {

      beforeEach(function() {
        Mock.navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
        Mock.routeCAD1_CAD3.isDefault = true;
        Mock.routeCAD1_CAD3.conditions = [];
      });

      it('should throw an Error', function() {
        spyOn(Mock.CreateDefaultRouteTaskService, 'execute');

        service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

        expect(Mock.CreateDefaultRouteTaskService.execute).toHaveBeenCalledWith(Mock.routeCAD1_CAD3, Mock.navigationA);
      });


    });


    describe('when is an alternative route', function() {

      it('should create an alternative route based on route data', function() {
        spyOn(Mock.RouteFactory, 'createAlternative').and.callThrough();

        service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

        expect(Mock.RouteFactory.createAlternative).toHaveBeenCalled();
      });

      it('should instance a RouteCondition for each condition in routeData', function() {
        spyOn(Mock.RouteConditionFactory, 'create');

        service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

        expect(Mock.RouteConditionFactory.create).toHaveBeenCalled();
      });

      it('should instance a Rule for each rule in routeData', function() {
        spyOn(Mock.RuleFactory, 'create');

        service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

        expect(Mock.RuleFactory.create).toHaveBeenCalled();
      });

      it('should update the route with updated route data', function() {
        spyOn(Mock.navigationA, 'updateRoute');

        service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

        expect(Mock.navigationA.updateRoute).toHaveBeenCalled();
      });

      it('should notify the alternative navigation', function() {
        spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin').and.returnValue(Mock.navigationB);
        spyOn(Mock.navigationB, 'updateInNavigation');

        service.execute(Mock.routeCAD1_CAD3, Mock.navigationA);

        expect(Mock.navigationB.updateInNavigation).toHaveBeenCalled();
      });

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

    Mock.condition = Mock.RouteConditionFactory.create(CAD1 + '_' + CAD3 + '_CONDITION', [Mock.RuleFactory.create(CAD1, 'equal', 1)]);

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

  function mockCreateDefaultRouteTaskService($injector) {
    Mock.CreateDefaultRouteTaskService = $injector.get('otusjs.model.navigation.CreateDefaultRouteTaskService');
  }
});
