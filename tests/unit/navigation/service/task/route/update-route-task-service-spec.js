xdescribe('UpdateRouteTaskService', function() {

  var Mock = {};
  var service = {};
  var injections = {};
  var CAD1 = 'CAD1';
  var CAD2 = 'CAD2';
  var CAD3 = 'CAD3';
  var CAD4 = 'CAD4';

  beforeEach(function() {
    angular.mock.module('otusjs.model');

    inject(function(_$injector_) {
      injections = {
        'RuleFactory': mockRuleFactory(_$injector_),
        'RouteConditionFactory': mockRouteConditionFactory(
          _$injector_),
        'RouteFactory': mockRouteFactory(_$injector_),
        'DefaultRouteCreationTaskService': mockCreateDefaultRouteTaskService(
          _$injector_)
      }

      mockNavigationContainerService(_$injector_);
      mockCreateDefaultRouteTaskService(_$injector_);
      mockAddAlternativeRouteTaskService(_$injector_);
      mockNavigation(_$injector_);
      mockRoute(_$injector_);



      service = _$injector_.get(
        'otusjs.model.navigation.RouteUpdateTaskService',
        injections);
    });
  });

  describe('execute method', function() {

    xdescribe(
      'when route to update is the current default route of navigation',
      function() {

        it('should throw an Error', function() {
          expect(function() {
            service.execute(Mock.routeDataCAD1_CAD2, Mock.navigationA);
          }).toThrow(new Error(
            'Is not possible update a default route.'));
        });

      });

    describe(
      'when route to update is the new default route of navigation',
      function() {

        beforeEach(function() {
          Mock.routeDataCAD1_CAD3.isDefault = true;
          Mock.routeDataCAD1_CAD3.conditions = [];
        });

        xit('should throw an Error', function() {
          spyOn(Mock.CreateDefaultRouteTaskService, 'execute');

          service.execute(Mock.routeDataCAD1_CAD3, Mock.navigationA);

          expect(Mock.CreateDefaultRouteTaskService.execute).toHaveBeenCalledWith(
            Mock.routeDataCAD1_CAD3, Mock.navigationA);
        });


      });


    describe('when is an alternative route', function() {

      it('should create an alternative route based on route data',
        function() {
          spyOn(Mock.RouteFactory, 'createAlternative').and.callThrough();

          service.execute(Mock.routeDataCAD1_CAD3, Mock.navigationA);

          expect(Mock.RouteFactory.createAlternative).toHaveBeenCalled();
        });

      it(
        'should instance a RouteCondition for each condition in routeData',
        function() {
          spyOn(Mock.RouteConditionFactory, 'create');

          service.execute(Mock.routeDataCAD1_CAD3, Mock.navigationA);

          expect(Mock.RouteConditionFactory.create).toHaveBeenCalled();
        });

      it('should instance a Rule for each rule in routeData',
        function() {
          spyOn(Mock.RuleFactory, 'create');

          service.execute(Mock.routeDataCAD1_CAD3, Mock.navigationA);

          expect(Mock.RuleFactory.create).toHaveBeenCalled();
        });

      it('should update the route with updated route data',
        function() {
          spyOn(Mock.navigationA, 'updateRoute');

          service.execute(Mock.routeDataCAD1_CAD3, Mock.navigationA);

          expect(Mock.navigationA.updateRoute).toHaveBeenCalled();
        });

      it('should notify the alternative navigation', function() {
        spyOn(Mock.NavigationContainerService,
          'getNavigationByOrigin').and.returnValue(Mock.navigationB);
        spyOn(Mock.navigationB, 'updateInNavigation');

        service.execute(Mock.routeDataCAD1_CAD3, Mock.navigationA);

        expect(Mock.navigationB.updateInNavigation).toHaveBeenCalled();
      });

    });

  });

  function mockNavigation(_$injector_) {
    Mock.NavigationFactory = _$injector_.get(
      'otusjs.model.navigation.NavigationFactory');
    Mock.navigationA = Mock.NavigationContainerService.createNavigationTo(
      CAD1);
    Mock.navigationB = Mock.NavigationContainerService.createNavigationTo(
      CAD2);
    Mock.navigationC = Mock.NavigationContainerService.createNavigationTo(
      CAD3);
    Mock.navigationD = Mock.NavigationContainerService.createNavigationTo(
      CAD4);
  }

  function mockRoute(_$injector_) {
    Mock.RouteFactory = _$injector_.get(
      'otusjs.model.navigation.RouteFactory');
    Mock.RuleFactory = _$injector_.get(
      'otusjs.model.navigation.RuleFactory');
    Mock.RouteConditionFactory = $injector.get(
      'otusjs.model.navigation.RouteConditionFactory');

    Mock.routeDataCAD1_CAD2 = {
      'origin': 'CAD1',
      'destination': 'CAD2'
    };
    Mock.condition = Mock.RouteConditionFactory.create(CAD1 + '_' + CAD3 +
      '_CONDITION', [Mock.RuleFactory.create(CAD1, 'equal', 1)]);
    Mock.routeDataCAD1_CAD3 = {
      'origin': 'CAD1',
      'destination': 'CAD3',
      'conditions': [Mock.condition]
    };
    Mock.condition = Mock.RouteConditionFactory.create(CAD1 + '_' + CAD4 +
      '_CONDITION', [Mock.RuleFactory.create(CAD1, 'equal', 1)]);
    Mock.routeDataCAD1_CAD4 = {
      'origin': 'CAD1',
      'destination': 'CAD4',
      'conditions': [Mock.condition]
    };


    Mock.CreateDefaultRouteTaskService.execute(Mock.routeDataCAD1_CAD2,
      Mock.navigationA);
    Mock.AddAlternativeRouteTaskService.execute(Mock.routeDataCAD1_CAD3,
      Mock.navigationA);
    Mock.AddAlternativeRouteTaskService.execute(Mock.routeDataCAD1_CAD4,
      Mock.navigationA);


    Mock.routeDataCAD2_CAD3 = {
      'origin': 'CAD2',
      'destination': 'CAD3'
    };
    Mock.routeCAD2_CAD3 = Mock.CreateDefaultRouteTaskService.execute(Mock.routeDataCAD2_CAD3,
      Mock.navigationB);

    Mock.condition = Mock.RouteConditionFactory.create(CAD2 + '_' + CAD4 +
      '_CONDITION', [Mock.RuleFactory.create(CAD2, 'equal', 1)]);
    Mock.routeDataCAD2_CAD4 = {
      'origin': 'CAD2',
      'destination': 'CAD4',
      'conditions': [Mock.condition]
    };
    Mock.routeCAD2_CAD4 = Mock.AddAlternativeRouteTaskService.execute(Mock.routeDataCAD2_CAD4,
      Mock.navigationB);

    Mock.routeCAD3_CAD4 = Mock.RouteFactory.createDefault(CAD3, CAD4);
  }

  function mockNavigationContainerService(_$injector_) {
    Mock.NavigationContainerService = _$injector_.get(
      'otusjs.model.navigation.NavigationContainerService');
  }

  function mockAddAlternativeRouteTaskService(_$injector_) {
    Mock.AddAlternativeRouteTaskService = _$injector_.get(
      'otusjs.model.navigation.AlternativeRouteCreationTaskService');
  }

  function mockRuleFactory(_$injector_) {
    Mock.RuleFactory = _$injector_.get(
      'otusjs.model.navigation.RuleFactory');
    return Mock.RuleFactory;
  }

  function mockRouteConditionFactory(_$injector_) {
    Mock.RouteConditionFactory = _$injector_.get(
      'otusjs.model.navigation.RouteConditionFactory');
    return Mock.RouteConditionFactory;
  }

  function mockRouteFactory(_$injector_) {
    Mock.RouteFactory = _$injector_.get(
      'otusjs.model.navigation.RouteFactory');
    return Mock.RouteFactory;
  }

  function mockCreateDefaultRouteTaskService(_$injector_) {
    Mock.CreateDefaultRouteTaskService = _$injector_.get(
      'otusjs.model.navigation.DefaultRouteCreationTaskService');
    return Mock.CreateDefaultRouteTaskService;
  }
});
