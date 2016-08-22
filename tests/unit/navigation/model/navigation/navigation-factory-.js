describe('NavigationFactory', function() {
  var Mock = {};

  beforeEach(function() {
    module('otusjs');

    mockNavigationProperties();

    inject(function(_$injector_) {
      factory = _$injector_.get('NavigationFactory');
      exception = _$injector_.get('ExceptionService');
    });
  });

  describe('create method', function() {

    var navigation;

    xit('should return an object that extends StudioObject', function() {
      navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);

      expect(navigation.extents).toEqual(Mock.STUDIO_OBJECT);
    });

    xit('should return an object of Navigation type', function() {
      navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);

      expect(navigation.objectType).toEqual(Mock.NAVIGATION);
    });

    xit('should return an object with a valid origin defined', function() {
      navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);

      expect(navigation.origin).toBeDefined();
    });

    describe('when destination exists', function() {

      xit('should return an object with an array of routes with size equal to one', function() {
        navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);

        expect(navigation.listRoutes().length).toBe(1);
      });

    });

    describe('when destination does not exists', function() {

      xit('should return an object with an array of routes with size equal to zero', function() {
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

    xit('should return an object that extends StudioObject', function() {
      expect(navigation.extents).toEqual(Mock.STUDIO_OBJECT);
    });

    xit('should return an object of Navigation type', function() {
      expect(navigation.objectType).toEqual(Mock.NAVIGATION);
    });

    xit('should return an object with a valid origin defined', function() {
      expect(navigation.origin).toBeDefined();
    });

  });

  describe('addRoute method', function() {
    it('when origin and destination are not equals then throw not SelfReferenceException', function() {
      expect(function() {
        navigation = factory.create(Mock.ORIGIN, Mock.DESTINATION);
      }).not.toThrow();
    });

    it('when origin and destination are equals should then throw exception SelfReferenceException', function() {
      expect(function() {
        navigation = factory.create(Mock.ORIGIN, Mock.ORIGIN);
      }).toThrowError(exception.InvalidStateError);
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
      origin: 'CAD1',
      routes: [{
        extents: 'StudioObject',
        objectType: 'Route',
        name: '1',
        origin: 'CAD1',
        destination: 'CAD2',
        conditionSet: []
      }]
    });
  }

});
