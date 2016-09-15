describe('Navigation:', function() {

  var Mock = {};
  var injections = {};
  var navigation;
  var EXTENTS = 'SurveyTemplateObject';
  var OBJECT_TYPE = 'Navigation';
  var DIFF_OBJECT_TYPE = 'DIFF_OBJECT_TYPE';
  var CAD7 = 'CAD7';
  var CAD1 = 'CAD1';
  var CAD2 = 'CAD2';
  var CAD3 = 'CAD3';
  var CAD4 = 'CAD4';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockRouteFactory(_$injector_);
      mockRoute(_$injector_);
      mockJson();

      factory = _$injector_.get('otusjs.model.navigation.NavigationFactory');
    });

    navigation = factory.create(CAD1, CAD2);
  });

  describe('addInNavigation method', function() {

    it('should put a navigation in inNavigations list', function() {
      navigation2 = factory.create(CAD2, CAD3);
      navigation2.addInNavigation(navigation);

      expect(navigation2.inNavigations[0].equals(navigation)).toBe(true);
    });

    describe('is default path calculation', function() {

      describe('when the in navigation is default path and route is default', function() {

        describe('and route from in navigation is default', function() {

          it('navigation should be default path too', function() {
            var navigation2 = factory.create(CAD2, CAD3);
            navigation2.addInNavigation(navigation);

            expect(navigation2.isDefault).toBe(true);
          });

        });

        describe('and route from in navigation is not default', function() {

          it('navigation should be alternative path', function() {
            var routeToNav2 = navigation.getDefaultRoute();
            routeToNav2.isDefault = false;
            navigation.updateRoute(routeToNav2);

            var navigation2 = factory.create(CAD2, CAD3);
            navigation2.addInNavigation(navigation);

            expect(navigation2.isDefault).toBe(false);
          });

        });


      });

    });

  });

  describe('clone method', function() {

    it('should call Object.assign', function() {
      var navigationA = factory.create(CAD1, CAD2);
      var clone = navigationA.clone();

      expect(navigationA.equals(clone)).toBe(true);
      expect(navigationA.selfsame(clone)).toBe(false);

      clone.createAlternativeRoute(Mock.routeA);

      expect(navigationA.equals(clone)).toBe(false);
      expect(navigationA.selfsame(clone)).toBe(false);
    });

  });

  describe('createAlternativeRoute method', function() {

    it('should put a new route in route list', function() {
      navigation.createAlternativeRoute(Mock.routeA);

      expect(navigation.listRoutes().length).toBe(2);
    });

    it('should not put a route twice', function() {
      navigation.createAlternativeRoute(Mock.routeA);
      navigation.createAlternativeRoute(Mock.routeA);
      navigation.createAlternativeRoute(Mock.routeA);
      navigation.createAlternativeRoute(Mock.routeA);
      navigation.createAlternativeRoute(Mock.routeA);

      expect(navigation.listRoutes().length).toBe(2);
    });

    it('should not put a new route without conditions', function() {
      navigation.createAlternativeRoute(Mock.routeB);

      expect(navigation.listRoutes().length).toBe(1);
    });

  });

  describe('equals method', function() {

    it('should return true when two objects have the same properties and equal values', function() {
      var navigationA = factory.create(CAD1, CAD2);
      var navigationB = factory.create(CAD1, CAD2);
      expect(navigationA.equals(navigationB)).toBe(true);

      navigationA.createAlternativeRoute(Mock.routeA);
      navigationB.createAlternativeRoute(Mock.routeA);
      expect(navigationA.equals(navigationB)).toBe(true);
    });

    it('should return true when two objects have same rules in the list but in different order', function() {
      var navigationA = factory.create(CAD1, CAD2);
      navigationA.createAlternativeRoute(Mock.routeA);
      navigationA.createAlternativeRoute(Mock.routeB);

      var navigationB = factory.create(CAD1, CAD2);
      navigationB.createAlternativeRoute(Mock.routeA);
      navigationB.createAlternativeRoute(Mock.routeB);

      expect(navigationA.equals(navigationB)).toBe(true);
    });

    it('should return true when two objects have same rules in the list but in different order', function() {
      var navigationA = factory.create(CAD1, CAD2);
      navigationA.createAlternativeRoute(Mock.routeA);
      navigationA.createAlternativeRoute(Mock.routeB);

      var navigationB = factory.create(CAD1, CAD2);
      navigationB.createAlternativeRoute(Mock.routeB);
      navigationB.createAlternativeRoute(Mock.routeA);

      expect(navigationA.equals(navigationB)).toBe(true);
    });

    it('should return false when two objects have different objectType value', function() {
      var navigationA = factory.create(CAD1, CAD2);
      var navigationB = factory.create(CAD1, CAD2);
      navigationB.objectType = DIFF_OBJECT_TYPE;

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have different origins', function() {
      var navigationA = factory.create(CAD1, CAD2);
      var navigationB = factory.create(CAD7, CAD2);

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have different destinations', function() {
      var navigationA = factory.create(CAD1, CAD2);
      var navigationB = factory.create(CAD1, CAD3);

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have different indexes', function() {
      var navigationA = factory.create(CAD1, CAD2);
      navigationA.index = 1;
      var navigationB = factory.create(CAD1, CAD2);
      navigationB.index = 2;

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have different size of condition list', function() {
      var navigationA = factory.create(CAD1, CAD2);
      navigationA.createAlternativeRoute(Mock.routeA);

      var navigationB = factory.create(CAD1, CAD2);

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have equal size of condition list but with different conditions', function() {
      var navigationA = factory.create(CAD1, CAD1);
      navigationA.createAlternativeRoute(Mock.routeA);

      var navigationB = factory.create(CAD1, CAD1);
      navigationB.createAlternativeRoute(Mock.routeB);

      expect(navigationA.equals(navigationB)).toBe(false);
    });

  });

  describe('getRouteByName method', function() {

    it('should return a cloned route', function() {
      var clone1 = navigation.getRouteByName(Mock.defaultRoute.name);
      var clone2 = navigation.getRouteByName(Mock.defaultRoute.name);

      expect(clone1.equals(clone2)).toBe(true);
      expect(clone1.selfsame(clone2)).toBe(false);

      clone1.isDefault = false;

      expect(clone1.equals(clone2)).toBe(false);
      expect(clone1.selfsame(clone2)).toBe(false);
    });

  });

  describe('listRoutes method', function() {

    it('should return a list of cloned routes', function() {
      var cloneZero = navigation.listRoutes()[0];
      cloneZero.name = 'AN_INVALID_NAME';

      expect(navigation.getRouteByName(cloneZero.name)).toBe(null);
      expect(navigation.getRouteByName(Mock.defaultRoute.name).name).toBe('CAD1_CAD2');
    });

  });

  describe('removeRouteByName method', function() {

    beforeEach(function() {
      navigation.createAlternativeRoute(Mock.routeA);
    });

    it('should remove the route from route list by the name', function() {
      navigation.removeRouteByName(Mock.defaultRoute.name);
      navigation.removeRouteByName(Mock.routeA.name);

      expect(navigation.listRoutes().length).toBe(0);
    });

  });

  describe('selfsame method', function() {

    it('should call Object.is', function() {
      spyOn(Object, 'is').and.callThrough();

      var navigationA = factory.create(CAD1, CAD2);
      navigationA.createAlternativeRoute(Mock.routeA);

      var navigationB = factory.create(CAD1, CAD2);
      navigationB.createAlternativeRoute(Mock.routeA);

      var resultA = navigationA.selfsame(navigationA);
      var resultB = navigationA.selfsame(navigationB);

      expect(Object.is).toHaveBeenCalled();
      expect(resultA).toBe(true);
      expect(resultB).toBe(false);
    });

  });

  describe('setupDefaultRoute method', function() {

    describe('when does not exist route at the first index of route list', function() {

      beforeEach(function() {
        navigation.removeRouteByName(Mock.defaultRoute.name);
      })

      it('should put the route at the index zero of route list', function() {
        navigation.setupDefaultRoute(Mock.defaultRoute);

        expect(navigation.listRoutes().length).toBe(1);
        expect(navigation.listRoutes()[0].equals(Mock.defaultRoute)).toBe(true);
      });

      it('should set default route with value of new route', function() {
        navigation.setupDefaultRoute(Mock.defaultRoute);

        expect(navigation.getDefaultRoute().equals(Mock.defaultRoute)).toBe(true);
      });

    });

    describe('when exists route at the first index of route list', function() {

      describe('and the route is not default', function() {

        beforeEach(function() {
          Mock.defaultRoute.isDefault = false;
          navigation.updateRoute(Mock.defaultRoute);
          navigation.createAlternativeRoute(Mock.routeA);
        })

        it('should put the route at the index zero of route list', function() {
          Mock.routeB.isDefault = true;
          navigation.setupDefaultRoute(Mock.routeB);

          expect(navigation.listRoutes()[0].equals(Mock.routeB)).toBe(true);
        });

        it('should move the previous route from the index zero to index one', function() {
          Mock.routeB.isDefault = true;
          navigation.setupDefaultRoute(Mock.routeB);

          expect(navigation.listRoutes()[1].equals(Mock.routeA)).toBe(true);
        });

        it('should set default route with value of new route', function() {
          Mock.routeB.isDefault = true;
          navigation.setupDefaultRoute(Mock.routeB);

          expect(navigation.getDefaultRoute().equals(Mock.routeB)).toBe(true);
        });

      });

      describe('and the route is default', function() {

        it('should put the route at the index zero of route list', function() {
          Mock.routeB.isDefault = true;
          navigation.setupDefaultRoute(Mock.routeB);
          expect(navigation.listRoutes()[0].equals(Mock.routeB)).toBe(true);
        });

        it('should not preserve the previous default route', function() {
          Mock.routeB.isDefault = true;
          navigation.setupDefaultRoute(Mock.routeB);

          expect(navigation.listRoutes().length).toBe(1);
          expect(navigation.getRouteByName(Mock.defaultRoute)).toBe(null);
        });

        it('should set default route with value of new route', function() {
          Mock.routeB.isDefault = true;
          navigation.setupDefaultRoute(Mock.routeB);

          expect(navigation.getDefaultRoute().equals(Mock.routeB)).toBe(true);
        });

      });

    });

  });

  describe('toJson method', function() {

    beforeEach(function() {
      navigation.index = 1;
    });

    it('should return a well formatted json based on Navigation', function() {
      expect(navigation.toJson()).toEqual(Mock.json);
    });

  });

  describe('updateRoute method', function() {

    describe('when updated route is the current default', function() {

      describe('and updated route is configured to not be default', function() {

        beforeEach(function() {
          Mock.defaultRoute.isDefault = false;
          Mock.defaultRoute.addCondition(Mock.condition);
        });

        it('should set remove default route', function() {
          navigation.updateRoute(Mock.defaultRoute);

          expect(navigation.getDefaultRoute()).toBe(null);
        });

        it('should replace default route with an alterantive route based on updated route data in the list', function() {
          navigation.updateRoute(Mock.defaultRoute);

          expect(navigation.listRoutes().length).toBe(1);
          expect(navigation.listRoutes()[0].equals(Mock.defaultRoute)).toBe(true);
        });

      });

      describe('and updated route is configured to be default', function() {

        it('should not touch the default route', function() {
          navigation.updateRoute(Mock.defaultRoute);

          expect(navigation.getDefaultRoute().destination).toEqual(CAD2);
        });

        it('should not touch the route list', function() {
          navigation.updateRoute(Mock.defaultRoute);

          expect(navigation.listRoutes().length).toBe(1);
        });

      });

    });

    describe('when updated route is not the current default', function() {

      describe('and updated route is configured to be default', function() {

        beforeEach(function() {
          navigation.createAlternativeRoute(Mock.routeA);
          Mock.routeA.isDefault = true;
        });

        it('should remove the current default route', function() {
          navigation.updateRoute(Mock.routeA);

          expect(navigation.getRouteByName(Mock.defaultRoute.name)).toBe(null);
        });

        it('should replace current default route with updated route data', function() {
          navigation.updateRoute(Mock.routeA);

          expect(navigation.listRoutes().length).toBe(1);
          expect(navigation.listRoutes()[0].equals(Mock.routeA)).toBe(true);
          expect(navigation.getDefaultRoute().destination).toEqual(Mock.routeA.destination);
        });

      });

      describe('and updated route is configured to not be default', function() {

        beforeEach(function() {
          navigation.createAlternativeRoute(Mock.routeA);
        });

        it('should just replace the current route with updated route data', function() {
          navigation.updateRoute(Mock.routeA);

          expect(navigation.listRoutes()[1].equals(Mock.routeA)).toBe(true);
        })

      });

    });

  });

  function mockRouteFactory($injector) {
    Mock.RouteFactory = $injector.get('otusjs.model.navigation.RouteFactory');
    injections.RouteFactory = Mock.RouteFactory;
  }

  function mockRoute($injector) {
    var rule = $injector.get('otusjs.model.navigation.RuleFactory').create(CAD1, 'equal', 1);
    var conditionFactory = $injector.get('otusjs.model.navigation.RouteConditionFactory');

    Mock.condition = conditionFactory.create(CAD1, [rule]);
    Mock.defaultRoute = Mock.RouteFactory.createDefault(CAD1, CAD2);
    Mock.routeA = Mock.RouteFactory.createAlternative(CAD1, CAD4, [Mock.condition]);
    Mock.routeB = Mock.RouteFactory.createDefault(CAD1, CAD3);
  }

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: EXTENTS,
      objectType: OBJECT_TYPE,
      origin: CAD1,
      index: 1,
      isDefault: true,
      inNavigations: [],
      routes: [Mock.defaultRoute.toJson()]
    }).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
  }
});
