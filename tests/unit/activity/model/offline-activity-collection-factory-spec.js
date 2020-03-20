describe('OfflineActivityCollection Tests', function () {

  var factory, activity;
  var Mock = {};
  var Injections = [];

  beforeEach(function () {
    angular.mock.module('otusjs');
    angular.mock.inject($injector => {
      mockInjections();
      // Injections.StatusHistoryManagerFactory = $injector.get('otusjs.model.activity.StatusHistoryManagerFactory');
      // Injections.FillingManagerFactory = $injector.get('otusjs.model.activity.FillingManagerFactory');
      // Injections.NavigationTrackerFactory = $injector.get('otusjs.model.navigation.NavigationTrackerFactory');
      // Injections.InterviewManagerFactory = $injector.get('otusjs.model.activity.InterviewManagerFactory');
      // Injections.SurveyFormFactory = $injector.get('SurveyFormFactory');

      factory = $injector.get('otusjs.model.activity.OfflineActivityCollection', Injections);
      spyOn(window, 'GeoJSON').and.returnValue(Mock.GeoJSON)
      // spyOn(factory, "create").and.callFake(() => factory.fromJsonObject(Test.utils.data.activityPASC));
      // spyOn(activity.surveyForm.surveyTemplate, "getGroupItemsByItemID").and.callThrough();
      // spyOn(activity.surveyForm.surveyTemplate, "getGroupByItemID").and.callThrough();
    });
  });

  it('should test', function () {
    activity = factory.create();
    expect(activity.objectType).toBeDefined();
    expect(activity._id).toBeDefined();
    expect(activity.userId).toBeDefined();
    expect(activity.activities).toBeDefined();
    expect(activity.geoJson).toBeDefined();
    console.log(activity)
  });


  function mockInjections() {
    Mock.GeoJSON = {
      type: 'point',
      coordinates: [100,100]
    };
  }
});