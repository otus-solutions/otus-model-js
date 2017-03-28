(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.StatusHistoryManagerFactory',
    'otusjs.model.activity.FillingManagerFactory',
    'otusjs.model.activity.InterviewFactory',
    'otusjs.model.navigation.NavigationTrackerFactory',
    'SurveyFormFactory'
  ];

  var Inject = {};

  function Factory(
    StatusHistoryManagerFactory,
    FillingManagerFactory,
    InterviewFactory,
    NavigationTrackerFactory,
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
    self.fromJsonObject = fromJsonObject;

    function create(surveyForm, user, participant, id) {
      Inject.FillingManager.init();

      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);

      var activity = new ActivitySurvey(surveyForm, participant, statusHistory, id);
      activity.mode = 'ONLINE';

      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));

      return activity;
    }

    function createPaperActivity(surveyForm, user, participant, paperActivityData, id) {
      Inject.FillingManager.init();

      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      statusHistory.newInitializedOfflineRegistry(paperActivityData);

      var activity = new ActivitySurvey(surveyForm, participant, statusHistory, id);
      activity.mode = 'PAPER';

      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));

      return activity;
    }

    function fromJsonObject(jsonObject) {
      var surveyForm = SurveyFormFactory.fromJsonObject(jsonObject.surveyForm);
      var participantData = jsonObject.participantData;
      var statusHistory = StatusHistoryManagerFactory.fromJsonObject(jsonObject.statusHistory);
      var id = jsonObject._id;

      var activity = new ActivitySurvey(surveyForm, participantData, statusHistory, id);

      activity.fillContainer = FillingManagerFactory.fromJsonObject(jsonObject.fillContainer);
      activity.isDiscarded = jsonObject.isDiscarded;
      activity.mode = jsonObject.mode;
      activity.statusHistory = StatusHistoryManagerFactory.fromJsonObject(jsonObject.statusHistory);
      activity.interviews = jsonObject.interviews.map(function(interview) {
        return InterviewFactory.fromJsonObject(interview);
      });

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

  function ActivitySurvey(surveyForm, participant, statusHistory, id) {
    var self = this;
    var _id = id || null;

    self.objectType = 'Activity';
    self.surveyForm = surveyForm;
    self.participantData = participant;
    self.interviews = [];
    self.fillContainer = Inject.FillingManager;
    self.statusHistory = statusHistory;
    self.isDiscarded = false;

    /* Public methods */
    self.getID = getID;
    self.getItems = getItems;
    self.getNavigations = getNavigations;
    self.getExportableList = getExportableList;
    self.getTemplate = getTemplate;
    self.getIdentity = getIdentity;
    self.getName = getName;
    self.getRealizationDate = getRealizationDate;
    self.getNavigationTracker = getNavigationTracker;
    self.setNavigationTracker = setNavigationTracker;
    self.clearSkippedAnswers = clearSkippedAnswers;
    self.toJson = toJson;

    function getID() {
      return _id;
    }

    function getItems() {
      return getTemplate().getItems();
    }

    function getNavigations() {
      return getTemplate().NavigationManager.getNavigationList();
    }

    function getExportableList() {
      var fullList = getTemplate().NavigationManager.getNavigationList();
      return fullList.slice(2, fullList.length);
    }

    function getTemplate() {
      if (_existStructuralFailure()) {
        return self.surveyForm;
      } else {
        return self.surveyForm.surveyTemplate;
      }
    }

    function getIdentity() {
      return getTemplate().identity;
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
      self.navigationTracker.getSkippedItems().forEach(function(itemTracking) {
        self.fillContainer.clearFilling(itemTracking.getID());
      });
    }

    function setNavigationTracker(stack) {
      self.navigationTracker = stack;
    }

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json._id = _id;
      json.surveyForm = self.surveyForm.toJson();
      json.participantData = self.participantData;
      json.mode = self.mode;
      json.interviews = self.interviews.map(function(interview) {
        return interview.toJson();
      });
      json.fillContainer = self.fillContainer.toJson();
      json.statusHistory = self.statusHistory.toJson();
      json.isDiscarded = self.isDiscarded;
      json.navigationTracker = self.navigationTracker.toJson();

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
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
  }
}());
