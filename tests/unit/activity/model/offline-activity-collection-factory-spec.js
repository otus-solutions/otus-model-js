describe('OfflineActivityCollection Tests', function () {

  var factory, activity;
  var Mock = {};
  var Injections = [];

  beforeEach(function () {
    angular.mock.module('otusjs');
    angular.mock.inject($injector => {
      mockInjections();

      Injections.GeoJSON = $injector.get('GeoJSON');

      factory = $injector.get('otusjs.model.activity.OfflineActivityCollection', Injections);
      spyOn(Injections, 'GeoJSON').and.returnValue(Mock.GeoJSON)
    });
  });

  it('should test properties', function () {
    activity = factory.create();
    expect(activity.objectType).toBeDefined();
    expect(activity._id).toBeDefined();
    expect(activity.userId).toBeDefined();
    expect(activity.activities).toBeDefined();
    expect(activity.geoJson).toBeDefined();
  });


  function mockInjections() {
    Mock.GeoJSON = {
      type: 'point',
      coordinates: [100,100]
    };
  }
});
