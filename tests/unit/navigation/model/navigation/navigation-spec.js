xdescribe('Navigation:', function() {

  var Mock = {};
  var injections = {};
  var navigationA, navigationB, navigationC;
  var EXTENTS = 'SurveyTemplateObject';
  var OBJECT_TYPE = 'Navigation';
  var DIFF_OBJECT_TYPE = 'DIFF_OBJECT_TYPE';
  var CAD1 = 'CAD1';
  var CAD2 = 'CAD2';
  var CAD3 = 'CAD3';
  var CAD4 = 'CAD4';
  var CAD5 = 'CAD5';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockNavigations(_$injector_);
      mockRouteFactory(_$injector_);
      mockRoutes(_$injector_);
      mockJson();
    });
  });

  describe('addInNavigation method', function() {

    it('should add the "self" navigation as out navigation of parent navigation', function() {
      spyOn(navigationA, 'addOutNavigation');

      navigationB.addInNavigation(navigationA);

      expect(navigationA.addOutNavigation).toHaveBeenCalledWith(navigationB);
    });

    it('should put a navigation in inNavigations list', function() {
      navigationB.addInNavigation(navigationA);

      expect(navigationB.inNavigations[0].equals(navigationA)).toBe(true);
    });

  });

  describe('addOutNavigation method', function() {

    it('should put a navigation in inNavigations list', function() {
      navigationA.addOutNavigation(navigationB);

      expect(navigationA.outNavigations[0].equals(navigationB)).toBe(true);
    });

  });

  xdescribe('clone method', function() {

    it('should call Object.assign', function() {
      var clone = navigationA.clone();

      expect(navigationA.equals(clone)).toBe(true);
      expect(navigationA.selfsame(clone)).toBe(false);

      clone.createAlternativeRoute(Mock.routeCAD3_CAD4);

      expect(navigationA.equals(clone)).toBe(false);
      expect(navigationA.selfsame(clone)).toBe(false);
    });

  });

  describe('createAlternativeRoute method', function() {

    it('should put a new route in route list', function() {
      navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);

      expect(navigationA.listRoutes().length).toBe(2);
    });

    it('should not put a route twice', function() {
      navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
      navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
      navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
      navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
      navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);

      expect(navigationA.listRoutes().length).toBe(2);
    });

    it('should not put a new route without conditions', function() {
      expect(function() {
        navigationA.createAlternativeRoute(Mock.routeCAD3_CAD4);
      })
      .toThrow(new Error('No conditions created for alternative route.'));
    });

  });

  describe('equals method', function() {

    describe('true cases', function() {

      it('should return true when two objects have the same properties and equal values', function() {
        var navigationB = Mock.NavigationFactory.create(CAD1, CAD2);
        expect(navigationA.equals(navigationB)).toBe(true);

        navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
        navigationB.createAlternativeRoute(Mock.routeCAD1_CAD3);
        expect(navigationA.equals(navigationB)).toBe(true);
      });

      it('should return true when two objects have same routes in the list but in different order', function() {
        navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
        navigationA.createAlternativeRoute(Mock.routeCAD1_CAD4);

        var navigationB = Mock.NavigationFactory.create(CAD1, CAD2)
        navigationB.createAlternativeRoute(Mock.routeCAD1_CAD4);
        navigationB.createAlternativeRoute(Mock.routeCAD1_CAD3);

        expect(navigationA.equals(navigationB)).toBe(true);
      });

    });

    describe('false cases', function() {

      it('should return false when two objects have different objectType value', function() {
        navigationB.objectType = DIFF_OBJECT_TYPE;

        expect(navigationA.equals(navigationB)).toBe(false);
      });

      it('should return false when two objects have different origins', function() {
        var navigationB = Mock.NavigationFactory.create(CAD5, CAD2);

        expect(navigationA.equals(navigationB)).toBe(false);
      });

      it('should return false when two objects have different indexes', function() {
        navigationA.index = 0;
        var navigationB = Mock.NavigationFactory.create(CAD1, CAD2);
        navigationB.index = 1;

        expect(navigationA.equals(navigationB)).toBe(false);
      });

      it('should return false when two objects have different size of condition list', function() {
        navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);

        var navigationB = Mock.NavigationFactory.create(CAD1, CAD2);

        expect(navigationA.equals(navigationB)).toBe(false);
      });

      it('should return false when two objects have equal size of condition list but with different conditions', function() {
        navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);

        var navigationB = Mock.NavigationFactory.create(CAD1, CAD2);
        navigationB.createAlternativeRoute(Mock.routeCAD1_CAD4);

        expect(navigationA.equals(navigationB)).toBe(false);
      });

    });

  });

  describe('getRouteByName method', function() {

    it('should return a cloned route', function() {
      var clone1 = navigationA.getRouteByName(Mock.routeCAD1_CAD2.name);
      var clone2 = navigationA.getRouteByName(Mock.routeCAD1_CAD2.name);

      expect(clone1.equals(clone2)).toBe(true);
      expect(clone1.selfsame(clone2)).toBe(false);

      clone1.isDefault = false;

      expect(clone1.equals(clone2)).toBe(false);
      expect(clone1.selfsame(clone2)).toBe(false);
    });

  });

  describe('listRoutes method', function() {

    it('should return a list of cloned routes', function() {
      var cloneZero = navigationA.listRoutes()[0];
      cloneZero.name = 'AN_INVALID_NAME';

      expect(navigationA.getRouteByName(cloneZero.name)).toBe(null);
      expect(navigationA.getRouteByName(Mock.routeCAD1_CAD2.name).name).toBe('CAD1_CAD2');
    });

  });

  describe('removeRouteByName method', function() {

    beforeEach(function() {
      navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
    });

    it('should remove the route from route list by the name', function() {
      navigationA.removeRouteByName(Mock.routeCAD1_CAD2.name);
      navigationA.removeRouteByName(Mock.routeCAD1_CAD3.name);

      expect(navigationA.listRoutes().length).toBe(0);
    });

  });

  describe('selfsame method', function() {

    it('should call Object.is', function() {
      spyOn(Object, 'is').and.callThrough();

      var navigationA = factory.create(CAD1, CAD2);
      navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);

      var navigationB = factory.create(CAD1, CAD2);
      navigationB.createAlternativeRoute(Mock.routeCAD1_CAD3);

      var resultA = navigationA.selfsame(navigationA);
      var resultB = navigationA.selfsame(navigationB);

      expect(Object.is).toHaveBeenCalled();
      expect(resultA).toBe(true);
      expect(resultB).toBe(false);
    });

  });

  describe('setupDefaultRoute method', function() {

    it('should put the route at the index zero of route list', function() {
      navigationA.setupDefaultRoute(Mock.routeCAD1_CAD4);

      expect(navigationA.listRoutes()[0].equals(Mock.routeCAD1_CAD4)).toBe(true);
    });

    it('should set default route with value of new route', function() {
      navigationA.setupDefaultRoute(Mock.routeCAD1_CAD4);

      expect(navigationA.getDefaultRoute().equals(Mock.routeCAD1_CAD4)).toBe(true);
    });

    it('should not preserve the previous default route', function() {
      navigationA.setupDefaultRoute(Mock.routeCAD1_CAD4);

      expect(navigationA.listRoutes().length).toBe(1);
      expect(navigationA.getRouteByName(Mock.routeCAD1_CAD4)).toBe(null);
    });

    it('should force the route to not have conditions', function() {
      navigationA.setupDefaultRoute(Mock.routeCAD1_CAD4);

      expect(navigationA.listRoutes()[0].conditions.length).toBe(0);
    });

  });

  xdescribe('toJson method', function() {

    beforeEach(function() {
      navigationA.index = 1;
    });

    it('should return a well formatted json based on Navigation', function() {
      navigationA.setupDefaultRoute(Mock.routeCAD1_CAD2);
      expect(navigationA.toJson()).toEqual(Mock.json);
    });

  });

  describe('updateRoute method', function() {

    describe('when updated route is the current default', function() {

      it('should do nothing', function() {
        Mock.routeCAD1_CAD2.isDefault = false;
        navigationA.updateRoute(Mock.routeCAD1_CAD2);

        expect(navigationA.getDefaultRoute().equals(Mock.routeCAD1_CAD2)).toBe(true);
      });

    });

    describe('when updated route is not the current default', function() {

      describe('and updated route is configured to be default', function() {

        beforeEach(function() {
          navigationA.createAlternativeRoute(Mock.routeCAD1_CAD3);
          Mock.routeCAD2_CAD3.isDefault = true;
        });

        it('should remove the current default route', function() {
          navigationA.updateRoute(Mock.routeCAD1_CAD3);

          expect(navigationA.getRouteByName(Mock.routeCAD1_CAD2.name)).toBe(null);
        });

        it('should replace current default route with updated route data', function() {
          navigationA.updateRoute(Mock.routeCAD1_CAD3);

          expect(navigationA.listRoutes().length).toBe(1);
          expect(navigationA.listRoutes()[0].equals(Mock.routeCAD2_CAD3)).toBe(true);
          expect(navigationA.getDefaultRoute().destination).toEqual(Mock.routeCAD2_CAD3.destination);
        });

      });

      describe('and updated route is configured to not be default', function() {

        beforeEach(function() {
          navigationA.createAlternativeRoute(Mock.routeCAD2_CAD3);
        });

        it('should just replace the current route with updated route data', function() {
          navigationA.updateRoute(Mock.routeCAD2_CAD3);

          expect(navigationA.listRoutes()[1].equals(Mock.routeCAD2_CAD3)).toBe(true);
        })

      });

    });

  });

  function mockRouteFactory($injector) {
    Mock.RouteFactory = $injector.get('otusjs.model.navigation.RouteFactory');
    injections.RouteFactory = Mock.RouteFactory;
  }

  function mockRoutes($injector) {
    var RuleFactory = $injector.get('otusjs.model.navigation.RuleFactory');
    var conditionFactory = $injector.get('otusjs.model.navigation.RouteConditionFactory');

    Mock.condition = conditionFactory.create(CAD1, [RuleFactory.create(CAD1, 'equal', 1)]);

    Mock.routeCAD1_CAD2 = Mock.RouteFactory.createDefault(CAD1, CAD2);
    Mock.routeCAD1_CAD3 = Mock.RouteFactory.createAlternative(CAD1, CAD3, [Mock.condition]);
    Mock.routeCAD1_CAD4 = Mock.RouteFactory.createAlternative(CAD1, CAD4, [Mock.condition]);
    Mock.routeCAD1_CAD5 = Mock.RouteFactory.createAlternative(CAD1, CAD5, [Mock.condition]);

    Mock.routeCAD2_CAD3 = Mock.RouteFactory.createDefault(CAD2, CAD3);
    Mock.routeCAD2_CAD4 = Mock.RouteFactory.createAlternative(CAD2, CAD4, [Mock.condition]);
    Mock.routeCAD2_CAD5 = Mock.RouteFactory.createAlternative(CAD2, CAD5, [Mock.condition]);

    Mock.routeCAD3_CAD4 = Mock.RouteFactory.createDefault(CAD3, CAD4);
    Mock.routeCAD3_CAD5 = Mock.RouteFactory.createAlternative(CAD3, CAD5, [Mock.condition]);

    Mock.routeCAD4_CAD5 = Mock.RouteFactory.createDefault(CAD4, CAD5);
  }

  function mockNavigations($injector) {
    Mock.NavigationFactory = $injector.get('otusjs.model.navigation.NavigationFactory');

    navigationA = Mock.NavigationFactory.create(CAD1, CAD2);
    navigationB = Mock.NavigationFactory.create(CAD2, CAD3);
    navigationC = Mock.NavigationFactory.create(CAD3, CAD4);
    navigationD = Mock.NavigationFactory.create(CAD4, CAD5);
  }

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: EXTENTS,
      objectType: OBJECT_TYPE,
      origin: CAD1,
      index: 0,
      isDefault: true,
      inNavigations: [],
      routes: [Mock.routeCAD1_CAD2.toJson()]
    }).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
  }
});
