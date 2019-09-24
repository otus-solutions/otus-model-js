describe('ActivityImportService_TestSuite', function () {
  var factory, activity;
  var Mock = {};
  var Injections = [];

  beforeEach(function () {
    angular.mock.module('otusjs');
    angular.mock.inject($injector => {
      Injections.StatusHistoryManagerFactory = $injector.get('otusjs.model.activity.StatusHistoryManagerFactory');
      Injections.FillingManagerFactory = $injector.get('otusjs.model.activity.FillingManagerFactory');
      Injections.NavigationTrackerFactory = $injector.get('otusjs.model.navigation.NavigationTrackerFactory');
      Injections.InterviewManagerFactory = $injector.get('otusjs.model.activity.InterviewManagerFactory');
      Injections.SurveyFormFactory = $injector.get('SurveyFormFactory');

      factory = $injector.get('otusjs.model.activity.ActivityFactory', Injections);
      spyOn(factory, "create").and.callFake(() => factory.fromJsonObject(Test.utils.data.activityPASC));
      activity = factory.create();
      spyOn(activity.surveyForm.surveyTemplate, "getGroupItemsByItemID").and.callThrough();
      spyOn(activity.surveyForm.surveyTemplate, "getGroupByItemID").and.callThrough();
    });
  });

  it('factoryExistence_check', function () {
    expect(factory).toBeDefined();
  });

  it('factoryMethodsExistence_check', function () {
    expect(factory.create).toBeDefined();
    expect(factory.createPaperActivity).toBeDefined();
    expect(factory.fromJsonObject).toBeDefined();
  });

  it('test_should_verify_instanceStructureCreated_by_createMethod', function () {
    expect(activity).toBeDefined();
    expect(activity.category).toBeDefined();
    expect(activity.fillContainer).toBeDefined();
    expect(activity.isDiscarded).toBeDefined();
    expect(activity.mode).toBeDefined();
    expect(activity.statusHistory).toBeDefined();
    expect(activity.interviews).toBeDefined();
    expect(activity.getID).toBeDefined();
    expect(activity.getItems).toBeDefined();
    expect(activity.getGroupByItemID).toBeDefined();
    expect(activity.getGroupItemsByItemID).toBeDefined();
    expect(activity.getNavigations).toBeDefined();
    expect(activity.getExportableList).toBeDefined();
    expect(activity.getTemplate).toBeDefined();
    expect(activity.getIdentity).toBeDefined();
    expect(activity.getName).toBeDefined();
    expect(activity.getRealizationDate).toBeDefined();
    expect(activity.getNavigationTracker).toBeDefined();
    expect(activity.setNavigationTracker).toBeDefined();
    expect(activity.clearSkippedAnswers).toBeDefined();
    expect(activity.getDataSources).toBeDefined();
    expect(activity.getStaticVariableList).toBeDefined();
    expect(activity.getWholeTemplateVariableList).toBeDefined();
    expect(activity.getItemStaticVariableList).toBeDefined();
    expect(activity.fillStaticVariablesValues).toBeDefined();
    expect(activity.toJSON).toBeDefined();
  });

  it('getGroupByItemID_method_ should_evoke_getGroupByItemID_internal ', function () {
    activity.getGroupByItemID("PASC2");
    expect(activity.surveyForm.surveyTemplate.getGroupByItemID).toHaveBeenCalledTimes(1);
  });

  it('getGroupItemsByItemID_method_ should_return_itemsGroup_by_ID ', function () {
    expect(activity.getGroupItemsByItemID("PASC2")[0].objectType).toBe("DecimalQuestion");
    expect(activity.surveyForm.surveyTemplate.getGroupItemsByItemID).toHaveBeenCalledTimes(1);
  });
});