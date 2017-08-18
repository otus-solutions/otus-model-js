describe('RouteFactory', function () {

  var Mock = {};
  var route;
  var ORIGIN = 'ORIGIN';
  var DESTINATION = 'DESTINATION';
  var ROUTE_NAME = 'ORIGIN_DESTINATION';

  beforeEach(function () {
    module('otusjs');

    inject(function (_$injector_) {
      mockCondition(_$injector_);
      factory = _$injector_.get('otusjs.model.navigation.RouteFactory');
    });
  });

  describe('createAlternative method', function () {

    describe('when condition list is a valid list', function () {

      beforeEach(function () {
        route = factory.createAlternative(ORIGIN, DESTINATION, [Mock.conditionA]);
      });

      it("should exist route.extents", function () {
        expect(route.extents).not.toBeNull();
      });

      it('should return a Route object with extends value equal to "SurveyTemplateObject"', function () {
        expect(route.extents).toBe('SurveyTemplateObject');
      });

      it("should exist route.objectType", function () {
        expect(route.objectType).not.toBeNull();
      });

      it('should return a Route object with objectType value equal to "Route"', function () {
        expect(route.objectType).toBe('Route');
      });

      it("should exist route.origin", function () {
        expect(route.origin).not.toBeNull();
      });

      it('should return a Route object with a valid origin value', function () {
        expect(route.origin).toEqual(ORIGIN);
      });

      it("should exist route.destination", function () {
        expect(route.destination).not.toBeNull();
      });

      it('should return a Route object with a valid destination value', function () {
        expect(route.destination).toEqual(DESTINATION);
      });

      it("should exist route.name", function () {
        expect(route.name).not.toBeNull();
      });

      it('should return a Route object with a valid name value', function () {
        expect(route.name).toEqual(ROUTE_NAME);
      });

      it('should return a Route object with isDefault equals false', function () {
        expect(route.isDefault).toEqual(false);
      });

      it('should return a Route object with a condition list with at least one condition', function () {
        expect(route.listConditions()).toEqual(jasmine.any(Array));
        expect(route.listConditions().length).toBe(1);
      });

    });

    describe('when condition list is an empty list', function () {

      beforeEach(function () {
        route = factory.createAlternative(ORIGIN, DESTINATION, []);
      });

      it('should return a null object', function () {
        expect(route).toBe(null);
      });

    });

    describe('when condition list undefined or null', function () {

      it('should return a null object', function () {
        route = factory.createAlternative(ORIGIN, DESTINATION, null);

        expect(route).toBe(null);
      });

      it('should return a null object', function () {
        route = factory.createAlternative(ORIGIN, DESTINATION);

        expect(route).toBe(null);
      });

    });

  });

  describe('createDefault method', function () {

    describe('when factory can create a route', function () {

      beforeEach(function () {
        route = factory.createDefault(ORIGIN, DESTINATION);
      });

      it('should return a Route object with extends value equal to "SurveyTemplateObject"', function () {
        expect(route.extents).toBe('SurveyTemplateObject');
      });

      it('should return a Route object with objectType value equal to "Route"', function () {
        expect(route.objectType).toBe('Route');
      });

      it('should return a Route object with a valid origin value', function () {
        expect(route.origin).toEqual(ORIGIN);
      });

      it('should return a Route object with a valid destination value', function () {
        expect(route.destination).toEqual(DESTINATION);
      });

      it('should return a Route object with a valid name value', function () {
        expect(route.name).toEqual(ROUTE_NAME);
      });

      it('should return a Route object with isDefault equals true', function () {
        expect(route.isDefault).toEqual(true);
      });

      it('should return a Route object with a empty condition list', function () {
        expect(route.listConditions()).toEqual(jasmine.any(Array));
        expect(route.listConditions().length).toBe(0);
      });

    });

    describe('when factory can not create a route', function () {

      it('should return a null value', function () {
        route = factory.createDefault(ORIGIN);

        expect(route).toBe(null);
      });

      it('should return a null value', function () {
        route = factory.createDefault(null, DESTINATION);

        expect(route).toBe(null);
      });

    });

  });

  describe('fromJson method', function () {

    beforeEach(function () {
      mockJson();
    });

    describe('when is a json of default route', function () {

      beforeEach(function () {
        route = factory.fromJson(Mock.defaultRouteJson);
      });

      it('should return a Route object with extends value equal to "SurveyTemplateObject"', function () {
        expect(route.extents).toBe('SurveyTemplateObject');
      });

      it('should return a Route object with objectType value equal to "Route"', function () {
        expect(route.objectType).toBe('Route');
      });

      it('should return a Route object with a valid origin value', function () {
        expect(route.origin).toEqual(ORIGIN);
      });

      it('should return a Route object with a valid destination value', function () {
        expect(route.destination).toEqual(DESTINATION);
      });

      it('should return a Route object with a valid name value', function () {
        expect(route.name).toEqual(ROUTE_NAME);
      });

      it('should return a Route object with isDefault attribute equal to true', function () {
        expect(route.isDefault).toEqual(true);
      });

      it('should return a Route object with a condition list without conditions', function () {
        expect(route.listConditions()).toBeDefined();
        expect(route.listConditions().length).toBe(0);
      });

    });

    describe('when is a json of alternative route', function () {

      beforeEach(function () {
        route = factory.fromJson(JSON.stringify(Mock.alternativeRouteJson));
      });

      it('should return a Route object with extends value equal to "SurveyTemplateObject"', function () {
        expect(route.extents).toBe('SurveyTemplateObject');
      });

      it('should return a Route object with objectType value equal to "Route"', function () {
        expect(route.objectType).toBe('Route');
      });

      it('should return a Route object with a valid origin value', function () {
        expect(route.origin).toEqual(ORIGIN);
      });

      it('should return a Route object with a valid destination value', function () {
        expect(route.destination).toEqual(DESTINATION);
      });

      it('should return a Route object with a valid name value', function () {
        expect(route.name).toEqual(ROUTE_NAME);
      });

      it('should return a Route object with isDefault attribute equal to false', function () {
        expect(route.isDefault).toEqual(false);
      });

      it('should return a Route object with a condition list with one condition', function () {
        expect(route.listConditions()).toBeDefined();
        expect(route.listConditions().length).toBe(1);
      });

    });

  });

  function mockCondition($injector) {
    var RuleFactory = $injector.get('otusjs.model.navigation.RuleFactory');
    var rule = RuleFactory.create('QID1', 'equal', 1);
    var conditionFactory = $injector.get('otusjs.model.navigation.RouteConditionFactory');
    Mock.conditionA = conditionFactory.create('CONDITION_A', [rule]);
    Mock.conditionB = conditionFactory.create('CONDITION_A', [rule]);
  }

  function mockJson() {
    Mock.defaultRouteJson = JSON.stringify({
      extents: 'SurveyTemplateObject',
      objectType: 'Route',
      name: ROUTE_NAME,
      origin: ORIGIN,
      destination: DESTINATION,
      isDefault: true,
      conditions: []
    });
    Mock.alternativeRouteJson = {
      extents: 'SurveyTemplateObject',
      objectType: 'Route',
      name: ROUTE_NAME,
      origin: ORIGIN,
      destination: DESTINATION,
      isDefault: false,
      conditions: [Mock.conditionA.toJson()]
    };
  }
});
