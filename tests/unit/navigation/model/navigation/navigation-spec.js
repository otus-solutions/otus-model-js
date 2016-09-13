describe('Navigation', function() {

  var Mock = {};
  var injections = {};
  var navigation;
  var EXTENTS = 'SurveyTemplateObject';
  var OBJECT_TYPE = 'Navigation';
  var DIFF_OBJECT_TYPE = 'DIFF_OBJECT_TYPE';
  var ORIGIN = 'CAD1';
  var DIFF_ORIGIN = 'DIFF_ORIGIN';
  var DESTINATION1 = 'CAD2';
  var DESTINATION2 = 'CAD3';
  var DESTINATION3 = 'CAD4';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockRouteFactory(_$injector_);
      mockRoute(_$injector_);
      mockJson();

      factory = _$injector_.get('otusjs.model.navigation.NavigationFactory');
    });

    navigation = factory.create(ORIGIN, DESTINATION1);
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

  describe('updateRoute method', function() {

    describe('when updated route is the current default', function() {

      it('should update default route when still default', function() {
        Mock.defaultRoute.destination = DESTINATION2;
        navigation.updateRoute(Mock.defaultRoute);

        expect(navigation.listRoutes().length).toBe(1);
        expect(navigation.getDefaultRoute().destination).toEqual(DESTINATION2);
      });

      it('should remove default route when is not default', function() {
        Mock.defaultRoute.isDefault = false;
        navigation.updateRoute(Mock.defaultRoute);

        expect(navigation.listRoutes().length).toBe(0);
        expect(navigation.getDefaultRoute()).toBe(null);
      });

      it('should change default route to alternative when updated data is not default', function() {
        Mock.defaultRoute.isDefault = false;
        Mock.defaultRoute.addCondition(Mock.condition);

        navigation.updateRoute(Mock.defaultRoute);

        expect(navigation.listRoutes().length).toBe(1);
        expect(navigation.listRoutes()[0].equals(Mock.defaultRoute)).toBe(true);
      });

    });

    describe('when updated route is not the current default', function() {

      it('should update default route with updated data when it is default', function() {
        Mock.routeB.isDefault = true;
        navigation.updateRoute(Mock.routeB);

        expect(navigation.listRoutes().length).toBe(1);
        expect(navigation.getDefaultRoute().destination).toEqual(DESTINATION2);
      });

      it('should remove updated route as alternative when it is default', function() {
        navigation.createAlternativeRoute(Mock.routeA);
        expect(navigation.listRoutes().length).toBe(2);

        Mock.routeA.isDefault = true;
        navigation.updateRoute(Mock.routeA);

        expect(navigation.listRoutes().length).toBe(1);
        expect(navigation.getDefaultRoute()).toEqual(Mock.routeA);
        expect(navigation.getDefaultRoute().isDefault).toBe(true);
      });

      it('should change route to alternative is not default', function() {
        navigation.createAlternativeRoute(Mock.routeA);
        expect(navigation.listRoutes().length).toBe(2);

        Mock.routeA.destination = DESTINATION2;
        navigation.updateRoute(Mock.routeA);

        expect(navigation.listRoutes().length).toBe(2);
        expect(navigation.listRoutes()[1]).toEqual(Mock.routeA);
        expect(navigation.listRoutes()[1].isDefault).toBe(false);
      });

    });

  });

  describe('from new instance', function() {

    describe('listRoutes method', function() {

      var navigation;

      beforeEach(function() {
        navigation = factory.create(ORIGIN, DESTINATION1);
      });

      it('should return an array of routeBs with size equal to 1', function() {
        expect(navigation.listRoutes().length).toBe(1);
      });

      it('should return a clone of original array of routeBs', function() {
        var clone = navigation.listRoutes();

        clone.push(jasmine.any(Object));

        expect(clone.length).not.toBe(navigation.listRoutes().length);
      });

    });

  });

  describe('equals method', function() {

    it('should return true when two objects have the same properties and equal values', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION1);
      var navigationB = factory.create(ORIGIN, DESTINATION1);
      expect(navigationA.equals(navigationB)).toBe(true);

      navigationA.createAlternativeRoute(Mock.routeA);
      navigationB.createAlternativeRoute(Mock.routeA);
      expect(navigationA.equals(navigationB)).toBe(true);
    });

    it('should return true when two objects have same rules in the list but in different order', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION1);
      navigationA.createAlternativeRoute(Mock.routeA);
      navigationA.createAlternativeRoute(Mock.routeB);

      var navigationB = factory.create(ORIGIN, DESTINATION1);
      navigationB.createAlternativeRoute(Mock.routeA);
      navigationB.createAlternativeRoute(Mock.routeB);

      expect(navigationA.equals(navigationB)).toBe(true);
    });

    it('should return true when two objects have same rules in the list but in different order', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION1);
      navigationA.createAlternativeRoute(Mock.routeA);
      navigationA.createAlternativeRoute(Mock.routeB);

      var navigationB = factory.create(ORIGIN, DESTINATION1);
      navigationB.createAlternativeRoute(Mock.routeB);
      navigationB.createAlternativeRoute(Mock.routeA);

      expect(navigationA.equals(navigationB)).toBe(true);
    });

    it('should return false when two objects have different objectType value', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION1);
      var navigationB = factory.create(ORIGIN, DESTINATION1);
      navigationB.objectType = DIFF_OBJECT_TYPE;

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have different origins', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION1);
      var navigationB = factory.create(DIFF_ORIGIN, DESTINATION1);

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have different destinations', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION1);
      var navigationB = factory.create(ORIGIN, DESTINATION2);

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have different indexes', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION1);
      navigationA.index = 1;
      var navigationB = factory.create(ORIGIN, DESTINATION1);
      navigationB.index = 2;

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    it('should return false when two objects have different size of condition list', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION1);
      navigationA.createAlternativeRoute(Mock.routeA);

      var navigationB = factory.create(ORIGIN, DESTINATION1);

      expect(navigationA.equals(navigationB)).toBe(false);
    });

    xit('should return false when two objects have different size of condition list', function() {
      var navigationA = factory.create(ORIGIN, DESTINATION);
      navigationA.createAlternativeRoute(Mock.routeA);

      var navigationB = factory.create(ORIGIN, DESTINATION);
      navigationB.createAlternativeRoute(Mock.routeB);

      expect(navigationA.equals(navigationB)).toBe(false);
    });

  });

  describe('selfsame method', function() {

    it('should call Object.is', function() {
      spyOn(Object, 'is').and.callThrough();

      var navigationA = factory.create(ORIGIN, DESTINATION1);
      navigationA.createAlternativeRoute(Mock.routeA);

      var navigationB = factory.create(ORIGIN, DESTINATION1);
      navigationB.createAlternativeRoute(Mock.routeA);

      var resultA = navigationA.selfsame(navigationA);
      var resultB = navigationA.selfsame(navigationB);

      expect(Object.is).toHaveBeenCalled();
      expect(resultA).toBe(true);
      expect(resultB).toBe(false);
    });

  });

  describe('clone method', function() {

    it('should call Object.assign', function() {
      spyOn(Object, 'assign').and.callThrough();

      var navigationA = factory.create(ORIGIN, DESTINATION1);
      navigationA.createAlternativeRoute(Mock.routeA);
      var clone = navigationA.clone();

      expect(Object.assign).toHaveBeenCalled();
      expect(navigationA.equals(clone)).toBe(true);
      expect(navigationA.selfsame(clone)).toBe(false);
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

  function mockRouteFactory($injector) {
    Mock.RouteFactory = $injector.get('otusjs.model.navigation.RouteFactory');
    injections.RouteFactory = Mock.RouteFactory;
  }

  function mockRoute($injector) {
    var rule = $injector.get('otusjs.model.navigation.RuleFactory').create(ORIGIN, 'equal', 1);
    var conditionFactory = $injector.get('otusjs.model.navigation.RouteConditionFactory');

    Mock.condition = conditionFactory.create(ORIGIN, [rule]);
    Mock.defaultRoute = Mock.RouteFactory.createDefault(ORIGIN, DESTINATION1);
    Mock.routeA = Mock.RouteFactory.createAlternative(ORIGIN, DESTINATION3, [Mock.condition]);
    Mock.routeB = Mock.RouteFactory.createDefault(ORIGIN, DESTINATION2);
  }

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: EXTENTS,
      objectType: OBJECT_TYPE,
      origin: ORIGIN,
      index: 1,
      isDefault: true,
      inNavigations: [],
      routes: [Mock.defaultRoute.toJson()]
    }).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
  }
});
