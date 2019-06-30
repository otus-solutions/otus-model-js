describe("activityFactorySuite", function () {
  var factory;
  var Injections = [];

  beforeEach(function () {
    angular.mock.module('otusjs.model.activity');

    inject(function ($injector) {
      Injections.StatusHistoryManagerFactory = $injector.get('otusjs.model.activity.StatusHistoryManagerFactory');
      Injections.FillingManagerFactory = $injector.get('otusjs.model.activity.FillingManagerFactory');
      Injections.InterviewFactory = $injector.get('otusjs.model.activity.InterviewFactory');
      Injections.NavigationTrackerFactory = $injector.get('otusjs.model.navigation.NavigationTrackerFactory');
      Injections.SurveyFormFactory = $injector.get('SurveyFormFactory');

      factory = $injector.get('otusjs.model.activity.ActivityFactory', Injections);
    });
  });

  // it('factoryExistence check ', function () {
  //   console.log(factory)
  //   expect(factory).toBeDefined();
  // });
});