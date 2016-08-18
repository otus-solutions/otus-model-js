describe('NavigationFactory', function() {
  var Mock = {};

  beforeEach(function() {
    module('otusjs');

    mockNavigationProperties();

    inject(function(_$injector_) {
      factory = _$injector_.get('NavigationFactory');
    });
  });

  describe('create method', function() {

    var navigation;

    it('should return an object that extends StudioObject', function() {
      navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);

      expect(navigation.extents).toEqual(Mock.STUDIO_OBJECT);
    });

    it('should return an object of Navigation type', function() {
      navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);

      expect(navigation.objectType).toEqual(Mock.NAVIGATION);
    });

    it('should return an object with a valid origin defined', function() {
      navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);

      expect(navigation.origin).toBeDefined();
    });

    describe('when destination exists', function() {

      it('should return an object with an array of routes with size equal to one', function() {
        navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);

        expect(navigation.listRoutes().length).toBe(1);
      });

    });

    describe('when destination does not exists', function() {

      it('should return an object with an array of routes with size equal to zero', function() {
        navigation = factory.create(Mock.ORIGIN);

        expect(navigation.listRoutes().length).toBe(0);
      });

    });

  });

  describe('create method', function() {

    var navigation;

    beforeEach(function() {
      mockJson();
      navigation = factory.fromJson(Mock.json);
    });

    it('should return an object that extends StudioObject', function() {
      expect(navigation.extents).toEqual(Mock.STUDIO_OBJECT);
    });

    it('should return an object of Navigation type', function() {
      expect(navigation.objectType).toEqual(Mock.NAVIGATION);
    });

    it('should return an object with a valid origin defined', function() {
      expect(navigation.origin).toBeDefined();
    });

  });

  function mockNavigationProperties() {
    Mock.STUDIO_OBJECT = 'StudioObject';
    Mock.NAVIGATION = 'Navigation';
    Mock.ORIGIN = 'ORIGIN';
    Mock.DESTINATION = 'DESTINATION';
  }

  function mockJson() {
    Mock.json = JSON.stringify({
      extents: 'StudioObject',
      objectType: 'Navigation',
      origin: Mock.ORIGIN,
      routes: [{
        extents: 'StudioObject',
        objectType: 'Route',
        name: Mock.ROUTE_NAME,
        origin: Mock.ORIGIN,
        destination: Mock.DESTINATION,
        conditionSet: [{
          extents: 'StudioObject',
          objectType: 'RouteCondition',
          name: Mock.CONDITION_NAME,
          rules: [{
            when: 'QUESTION_ID',
            answer: {
              contains: 'ANSWER'
            }
          }]
        }]
      }]
    });
  }

});
