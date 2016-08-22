describe('RouteFactory', function() {
  var Mock = {};
  var route;

  beforeEach(function() {
    module('otusjs');

    mockOrigin();
    mockDestination();
    mockRoutName();

    inject(function(_$injector_) {
      mockCondition(_$injector_);
      factory = _$injector_.get('RouteFactory');
    });

    route = factory.create(Mock.ROUTE_NAME, Mock.ORIGIN, Mock.DESTINATION);
  });

  describe('create method', function() {

    it('should return a defined object', function() {
      expect(route).toBeDefined();
    });

    it('should return a Route object with extends value equal to "StudioObject"', function() {
      expect(route.extents).toBe('StudioObject');
    });

    it('should return a Route object with objectType value equal to "Route"', function() {
      expect(route.objectType).toBe('Route');
    });

    it('should return a Route object with a valid origin value', function() {
      expect(route.origin).toEqual(Mock.ORIGIN);
    });

    it('should return a Route object with a valid destination value', function() {
      expect(route.destination).toEqual(Mock.DESTINATION);
    });

    it('should return a Route object with a valid name value', function() {
      expect(route.name).toEqual(Mock.ROUTE_NAME);
    });

    it('should return a Route object with a defined condition set', function() {
      expect(route.getConditionSet()).toBeDefined();
    });

  });

  describe('fromJson method', function() {

    beforeEach(function() {
      mockJson();
      route = factory.fromJson(Mock.json);
    });

    it('should return a defined object', function() {
      expect(route).toBeDefined();
    });

    it('should return a Route object with extends value equal to "StudioObject"', function() {
      expect(route.extents).toBe('StudioObject');
    });

    it('should return a Route object with objectType value equal to "Route"', function() {
      expect(route.objectType).toBe('Route');
    });

    it('should return a Route object with a valid origin value', function() {
      expect(route.origin).toEqual(Mock.ORIGIN);
    });

    it('should return a Route object with a valid destination value', function() {
      expect(route.destination).toEqual(Mock.DESTINATION);
    });

    it('should return a Route object with a valid name value', function() {
      expect(route.name).toEqual(Mock.ROUTE_NAME);
    });

    it('should return a Route object with a defined condition set', function() {
      expect(route.getConditionSet()).toBeDefined();
      expect(route.getConditionSetSize()).toBe(1);
    });

  });

  function mockOrigin() {
    Mock.ORIGIN = 'ORIGIN_ID';
  }

  function mockDestination() {
    Mock.DESTINATION = 'DESTINATION_ID';
  }

  function mockRoutName() {
    Mock.ROUTE_NAME = 'ROUTE_NAME';
  }

  function mockCondition($injector) {
    var conditionFactory = $injector.get('RouteConditionFactory');
    Mock.FakeRouteCondition = conditionFactory.create('Fake Condition');
    Mock.NoRealRouteCondition = conditionFactory.create('No Real Condition');
  }

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: 'StudioObject',
      objectType: 'Route',
      name: Mock.ROUTE_NAME,
      origin: Mock.ORIGIN,
      destination: Mock.DESTINATION,
      conditionSet: [Mock.FakeRouteCondition.toJson()]
    });
  }

});
