xdescribe('NavigationFactory', function() {

  var Mock = {};
  var EXTENTS = 'SurveyTemplateObject';
  var OBJECT_TYPE = 'Navigation';
  var ORIGIN = 'CAD1';
  var DESTINATION = 'CAD2';
  var INDEX = 1;

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.model.navigation.NavigationFactory');
    });
  });

  describe('create method', function() {

    var navigation;

    it('should return an object that extends SurveyTemplateObject', function() {
      navigation = factory.create(ORIGIN, DESTINATION);

      expect(navigation.extents).toEqual(EXTENTS);
    });

    it('should return an object of Navigation type', function() {
      navigation = factory.create(ORIGIN, DESTINATION);

      expect(navigation.objectType).toEqual(OBJECT_TYPE);
    });

    it('should return an object with a valid origin defined', function() {
      navigation = factory.create(ORIGIN, DESTINATION);

      expect(navigation.origin).toBeDefined();
    });

    it('should return an object with an array of routes with size equal to one', function() {
      navigation = factory.create(ORIGIN, DESTINATION);

      expect(navigation.listRoutes().length).toBe(1);
    });

    it('should return null when origin is not set', function() {
      navigation = factory.create(null, DESTINATION);

      expect(navigation).toBe(null);
    });

    it('should return null when destination is not set', function() {
      navigation = factory.create(ORIGIN, null);

      expect(navigation).toBe(null);
    });

  });

  describe('fromJson method', function() {

    beforeEach(function() {
      mockJson();
    });

    it('should return an object that extends StudioObject', function() {
      var navigation = factory.fromJson(Mock.json);

      expect(navigation.extents).toEqual(EXTENTS);
    });

    it('should return an object of Navigation type', function() {
      var navigation = factory.fromJson(Mock.json);

      expect(navigation.objectType).toEqual(OBJECT_TYPE);
    });

    it('should return an object with a valid origin defined', function() {
      var navigation = factory.fromJson(Mock.json);

      expect(navigation.origin).toBeDefined();
    });

    it('should return an object with an array with at least one element', function() {
      navigation = factory.create(ORIGIN, DESTINATION);

      expect(navigation.listRoutes().length).toBeGreaterThan(0);
    });

    it('should return null when origin is not set', function() {
      var navigation = factory.fromJson(Mock.jsonWithoutOrigin);

      expect(navigation).toBe(null);
    });

    it('should return null when is json without route', function() {
      var navigation = factory.fromJson(Mock.jsonWithoutRoute);

      expect(navigation).toBe(null);
    });

    it('should return null when is json without destination', function() {
      var navigation = factory.fromJson(Mock.jsonWithoutRoute);

      expect(navigation).toBe(null);
    });

  });

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: EXTENTS,
      objectType: OBJECT_TYPE,
      origin: ORIGIN,
      index: INDEX,
      isDefault: true,
      routes: [{
        extents: EXTENTS,
        objectType: 'Route',
        origin: ORIGIN,
        destination: 'CAD2',
        name: ORIGIN + '_' + DESTINATION,
        isDefault: true,
        conditions: []
      }]
    });

    Mock.jsonWithoutOrigin = JSON.stringify({
      extents: EXTENTS,
      objectType: OBJECT_TYPE,
      index: INDEX,
      isDefault: true,
      routes: [{
        extents: EXTENTS,
        objectType: 'Route',
        origin: ORIGIN,
        destination: 'CAD2',
        name: ORIGIN + '_' + DESTINATION,
        isDefault: true,
        conditions: []
      }]
    });

    Mock.jsonWithoutDestination = JSON.stringify({
      extents: EXTENTS,
      objectType: OBJECT_TYPE,
      origin: ORIGIN,
      index: INDEX,
      isDefault: true,
      routes: [{
        extents: EXTENTS,
        objectType: 'Route',
        origin: ORIGIN,
        name: ORIGIN + '_' + DESTINATION,
        isDefault: true,
        conditions: []
      }]
    });

    Mock.jsonWithoutRoute = JSON.stringify({
      extents: EXTENTS,
      objectType: OBJECT_TYPE,
      origin: ORIGIN,
      index: INDEX,
      isDefault: true,
      routes: []
    });
  }

});
