(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.StatusHistoryManagerFactory',
    'otusjs.model.activity.FillingManagerFactory',
    'otusjs.model.navigation.NavigationTrackerFactory',
    'otusjs.model.activity.InterviewManagerFactory',
    'SurveyFormFactory'
  ];

  var Inject = {};

  function Factory(
    StatusHistoryManagerFactory,
    FillingManagerFactory,
    NavigationTrackerFactory,
    InterviewManagerFactory,
    SurveyFormFactory
  ) {
    Inject.FillingManager = FillingManagerFactory.create();
    Inject.NavigationTrackerFactory = NavigationTrackerFactory;
    Inject.SurveyFormFactory = SurveyFormFactory;

    var self = this;
    self.OBJECT_TYPE = 'Activity';

    /* Public methods */
    self.create = create;
    self.createPaperActivity = createPaperActivity;
    self.createAutoFillActivity = createAutoFillActivity;
    self.createOfflineActivity = createOfflineActivity;
    self.fromJsonObject = fromJsonObject;

    function create(surveyForm, user, participant, activityConfiguration, id, externalID) {
      Inject.FillingManager.init();
      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      var interviews = InterviewManagerFactory.create();
      var activity = new ActivitySurvey('ONLINE', surveyForm, participant, statusHistory, interviews, id, externalID);
      activity.mode = 'ONLINE';
      activity.category = activityConfiguration.category;
      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      return activity;
    }

    function createPaperActivity(surveyForm, user, participant, paperActivityData, activityConfiguration, id, externalID) {
      Inject.FillingManager.init();
      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      statusHistory.newInitializedOfflineRegistry(paperActivityData);
      var interviews = InterviewManagerFactory.create();
      var activity = new ActivitySurvey('PAPER', surveyForm, participant, statusHistory, interviews, id, externalID);
      activity.mode = 'PAPER';
      activity.category = activityConfiguration.category;
      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      return activity;
    }

    function createOfflineActivity(surveyForm, user) {
      Inject.FillingManager.init();
      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      var interviews = InterviewManagerFactory.create();
      var activity = new ActivitySurvey('OFFLINE', surveyForm, statusHistory, interviews);
      activity.mode = 'OFFLINE';
      activity.category = {
        "name" : "C0",
        "objectType" : "ActivityCategory",
        "label" : "Normal",
        "disabled" : false,
        "isDefault" : true
      };
      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      return activity;
    }

    function createAutoFillActivity(surveyForm, user, participant, activityConfiguration) {
      Inject.FillingManager.init();
      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      var interviews = InterviewManagerFactory.create();
      var activity = new ActivitySurvey('AUTOFILL', surveyForm, participant, statusHistory, interviews);
      activity.mode = 'AUTOFILL';
      activity.category = activityConfiguration.category;
      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      return activity;
    }

    function fromJsonObject(jsonObject) {
      var surveyForm = SurveyFormFactory.fromJsonObject(jsonObject.surveyForm);
      var participantData = jsonObject.participantData;
      var statusHistory = StatusHistoryManagerFactory.fromJsonObject(jsonObject.statusHistory);
      var interviews = InterviewManagerFactory.fromJsonObject(jsonObject.interviews);
      var id = jsonObject._id;
      var activity = new ActivitySurvey(jsonObject.mode, surveyForm, participantData, statusHistory, interviews, id);
      activity.category = jsonObject.category;
      activity.fillContainer = FillingManagerFactory.fromJsonObject(jsonObject.fillContainer);
      activity.isDiscarded = jsonObject.isDiscarded;
      activity.mode = jsonObject.mode;
      activity.statusHistory = StatusHistoryManagerFactory.fromJsonObject(jsonObject.statusHistory);
      activity.interviews = InterviewManagerFactory.fromJsonObject(jsonObject.interviews);
      activity.externalID = jsonObject.externalID;

      _addBackCompatibility(activity, jsonObject);
      return activity;
    }

    function _addBackCompatibility(activity, jsonObject) {
      if (!jsonObject.navigationTracker) {
        activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));
      } else {
        activity.setNavigationTracker(Inject.NavigationTrackerFactory.fromJsonObject(jsonObject.navigationTracker));
      }
    }

    return self;
  }

  function ActivitySurvey(mode, surveyForm, participant, statusHistory, interviews, id, externalID) {
    var self = this;
    var _id = id || null;

    self.objectType = 'Activity';
    self.surveyForm = surveyForm;
    if (mode === 'OFFLINE'){
      self.participantData = participant;
    } else {
      self.participantData = {};
    }
    self.interviews = interviews;
    self.fillContainer = Inject.FillingManager;
    self.statusHistory = statusHistory;
    self.isDiscarded = false;
    self.externalID =  externalID || null;

    /* Public methods */
    self.getID = getID;
    self.getItems = getItems;
    self.getGroupByItemID = getGroupByItemID;
    self.getGroupItemsByItemID = getGroupItemsByItemID;
    self.getNavigations = getNavigations;
    self.getExportableList = getExportableList;
    self.getTemplate = getTemplate;
    self.getIdentity = getIdentity;
    self.getName = getName;
    self.getRealizationDate = getRealizationDate;
    self.getNavigationTracker = getNavigationTracker;
    self.setNavigationTracker = setNavigationTracker;
    self.clearSkippedAnswers = clearSkippedAnswers;
    self.getDataSources = getDataSources;
    self.getStaticVariableList = getStaticVariableList;
    self.getWholeTemplateVariableList = getWholeTemplateVariableList;
    self.getItemStaticVariableList = getItemStaticVariableList;
    self.fillStaticVariablesValues = fillStaticVariablesValues;
    self.toJSON = toJSON;
    self.hasRequiredExternalID = hasRequiredExternalID;

    function getID() {
      return _id;
    }

    function getItems() {
      return getTemplate().getItems();
    }

    function getGroupByItemID(templateID) {
      return getTemplate().getGroupByItemID(templateID);
    }

    function getGroupItemsByItemID(templateID) {
      return getTemplate().getGroupItemsByItemID(templateID);
    }

    function getNavigations() {
      return getTemplate().NavigationManager.getNavigationList();
    }

    function getExportableList() {
      var fullList = getTemplate().NavigationManager.getNavigationList();
      return fullList.slice(2, fullList.length);
    }

    function getDataSources() {
      return getTemplate().getAllDataSources();
    }

    function getTemplate() {
      if (_existStructuralFailure()) {
        return self.surveyForm;
      } else {
        return self.surveyForm.surveyTemplate;
      }
    }

    function getIdentity() {
      let template = getTemplate();
      if (!template.identity) return template;
      else return template.identity;
    }

    function getName() {
      return getIdentity().name;
    }

    function getRealizationDate() {
      var finalizedRegistries = self.statusHistory.getFinalizedRegistries();
      var lastFinalizedStatus = finalizedRegistries[finalizedRegistries.length - 1];
      var offlineInitialization = self.statusHistory.getInitializedOfflineRegistry();

      if (lastFinalizedStatus) {
        return lastFinalizedStatus.date;
      } else if (offlineInitialization) {
        return offlineInitialization.date;
      } else {
        throw new Error('Can not determine the realization date of Activity.');
      }
    }

    function getNavigationTracker() {
      return self.navigationTracker;
    }

    function clearSkippedAnswers() {
      self.navigationTracker.getSkippedItems().forEach(function (itemTracking) {
        self.fillContainer.clearFilling(itemTracking.getID());
      });
    }

    function setNavigationTracker(stack) {
      self.navigationTracker = stack;
    }

    function getStaticVariableList() {
      return getTemplate().getStaticVariableList();
    }

    function getWholeTemplateVariableList() {
      return getTemplate().getWholeTemplateVariableList();
    }

    function getItemStaticVariableList(itemID) {
      return getTemplate().getItemStaticVariableList(itemID);
    }

    function fillStaticVariablesValues(fillingArray) {
      return getTemplate().fillStaticVariablesValues(fillingArray);
    }

    function toJSON() {
      var json = {};
      json.objectType = self.objectType;
      json._id = _id;
      json.surveyForm = self.surveyForm;
      json.participantData = self.participantData;
      json.category = self.category;
      json.mode = self.mode;
      json.fillContainer = self.fillContainer.buildJsonToFillContainer();
      json.statusHistory = self.statusHistory.toJSON().map(function (statusHistory) {
        return statusHistory;
      });
      json.interviews = self.interviews.toJSON().map(function (interview) {
        return interview;
      });
      json.isDiscarded = self.isDiscarded;
      json.navigationTracker = self.navigationTracker;
      json.externalID = self.externalID;

      return json;
    }

    /**
     * TODO: effectively to resolve the bug #252 (Mantis)
     * This method is an workaround for the reported bug #252 (on Mantis) and story OTUS-85 (on
     * Jira). The problem is: ActivitySurvey generation. In Otus Studio, the survey template goes to
     * activitie's property "surveyForm", but in the Otus the survey template goes to SurveyForm's
     * property "surveyTemplate" (this is the CORRECT way).
     */
    function _existStructuralFailure() {
      return (!self.surveyForm.surveyTemplate) ? true : false;
    }

    function hasRequiredExternalID(){
      return self.surveyForm.isRequiredExternalID();
    }
  }
}());