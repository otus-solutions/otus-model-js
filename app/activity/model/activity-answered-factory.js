(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.StatusHistoryManagerFactory',
    'otusjs.model.activity.FillingManagerFactory',
    'otusjs.model.activity.InterviewFactory',
    'otusjs.model.navigation.NavigationTrackerFactory',
    'SurveyFormFactory',
    'ElementRegisterFactory',
    'otusjs.validation.api.ValidationService',
  ];

  var Inject = {};
  var _elementRegister = null;
  var _item = null;

  function Factory(
    StatusHistoryManagerFactory,
    FillingManagerFactory,
    InterviewFactory,
    NavigationTrackerFactory,
    SurveyFormFactory,
    ElementRegisterFactory,
    ValidationService) {
    Inject.FillingManager = FillingManagerFactory.create();
    Inject.NavigationTrackerFactory = NavigationTrackerFactory;
    Inject.SurveyFormFactory = SurveyFormFactory;
    Inject.ElementRegisterFactory = ElementRegisterFactory;
    Inject.ValidationService = ValidationService;

    var self = this;
    self.OBJECT_TYPE = 'Activity';

    /* Public methods */
    self.create = create;
    self.createPaperActivity = createPaperActivity;
    self.fromJsonObject = fromJsonObject;

    function create(surveyForm, user, participant, activityConfiguration, id, answer) {
      Inject.FillingManager.init();

      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);

      var activity = new ActivitySurvey(surveyForm, participant, statusHistory, id, answer);
      activity.mode = 'ONLINE';
      activity.category = activityConfiguration.category;

      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));

      return activity;
    }

    function createPaperActivity(surveyForm, user, participant, paperActivityData, activityConfiguration, id, answer) {
      Inject.FillingManager.init();

      var statusHistory = StatusHistoryManagerFactory.create();
      statusHistory.newCreatedRegistry(user);
      statusHistory.newInitializedOfflineRegistry(paperActivityData);

      var activity = new ActivitySurvey(surveyForm, participant, statusHistory, id, answer);
      activity.mode = 'PAPER';
      activity.category = activityConfiguration.category;

      activity.setNavigationTracker(Inject.NavigationTrackerFactory.create(activity.getExportableList(), 0));

      return activity;
    }

    var jsonObject = {
      id: '',
      participant : '32164879',
      user: 'user@gmail.com',
      mode: 'PAPER',
      category: {
        "_id" : "5a1dff9428110d0a385114f5",
        "name" : "C0",
        "objectType" : "ActivityCategory",
        "label" : "Normal",
        "disabled" : false,
        "isDefault" : true
      },
      answers : {
        "PASC3brs" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC1" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC3mets" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC1m" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC3a" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC4a" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC5a" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC3b" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC4b" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC5b" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC3c" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC4c" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASC5c" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASCalt" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASCaltq1" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASCaltqou" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        },
        "PASCZ" : {
          value: "answer",
          _metadada: "",
          _comment: ""
        }
      },
      offlineData: {
        checker: 'other@email.com',
        realizationDate: '2017-04-17T12:06:34.660Z'
      }
    };

    function fromJsonObject(surveyForm, jsonObject) {

      var _activities = jsonObject.map(function (json) {
        var _activity;
        if (jsonObject.mode === "PAPER" && jsonObject.offlineData){
          _activity = self.createPaperActivity(surveyForm, json.user, json.participant, json.offlineData, json.category, json.id, json.answers)
        } else {
          _activity = self.create(surveyForm, json.user, json.participant, json.category, json.id, json.answers)
        }
        return _activity;
      });

      return _activities;

    }


    return self;
  }

  function ActivitySurvey(surveyForm, participant, statusHistory, id, answers) {
    var self = this;
    var _id = id || null;

    self.objectType = 'Activity';
    self.surveyForm = surveyForm;
    self.participantData = participant;
    self.interviews = [];
    self.fillContainer = Inject.FillingManager;
    self.statusHistory = statusHistory;
    self.isDiscarded = false;
    self.isValid = true;
    self.setAnswers(answers);

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
    self.getDataSources = getDataSources;
    self.toJSON = toJSON;

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
      self.navigationTracker.getSkippedItems().forEach(function (itemTracking) {
        self.fillContainer.clearFilling(itemTracking.getID());
      });
    }

    function setNavigationTracker(stack) {
      self.navigationTracker = stack;
    }

    function _getQuestionsIdsMap() {
      let _mapId = {};
      self.getTemplate().itemContainer.forEach(function (item) {
        _mapId[item.templateID] = item.customID;
      });
      return _mapId;
    }

    self.setAnswers = setAnswers;
    function setAnswers(answers) {
      const IDS = _getQuestionsIdsMap();
      self.fillContainer.fillingList.forEach(function (question) {
        question.answer.value = answers[IDS[question.questionID]].value;
        question.answer.metadada = answers[IDS[question.questionID]]._metadada;
        question.answer.comment = answers[IDS[question.questionID]]._comment;
        _validateActivity(question.questionID, question.answer, question.forceAnswer);
      });
    }

    function _validateActivity(templateID, answer, forceAnswer) {
      if (self.isValid) {
        self.isValid = answer.value != "" && answer.metadada != "" ? false : true;
        if (self.isValid) {
          _elementRegister = Inject.ElementRegisterFactory.create(templateID, answer);
          _item = self.getTemplate().getItemByTemplateID(templateID);
          _setupValidation(forceAnswer);
          Inject.validateElement(templateID, function (response) {
            console.log(response)
          });
        }
      }
    }

    function _setupValidation(forceAnswer) {
      if (forceAnswer) {
        Object.keys(_item.fillingRules.options).filter(function(validator) {
          if (!_item.fillingRules.options[validator].data.canBeIgnored) {
            _addValidator(validator, _item);
          }
        });
      } else {
        Object.keys(_item.fillingRules.options).map(function(validator) {
          _addValidator(validator, _item);
        });
        _setupImmutableDateValidation(_item);
      }

      Inject.ValidationService.unregisterElement(_elementRegister.id);
      Inject.ValidationService.registerElement(_elementRegister);
    }

    function _addValidator(validator) {
      var reference = _item.fillingRules.options[validator].data;
      _elementRegister.addValidator(validator, reference);
    }
    function _setupImmutableDateValidation() {
      var currentItemItemType = _item.objectType;
      if(currentItemItemType === "TimeQuestion" || currentItemItemType === "CalendarQuestion") {
        _elementRegister.addValidator("ImmutableDate", currentItemService);
      }
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json._id = _id;
      json.surveyForm = self.surveyForm;
      json.participantData = self.participantData;
      json.category = self.category;
      json.mode = self.mode;
      json.interviews = self.interviews;
      json.fillContainer = self.fillContainer.buildJsonToFillContainer();
      json.statusHistory = self.statusHistory.toJSON().map(function (statusHistory) {
        return statusHistory;
      });
      json.isDiscarded = self.isDiscarded;
      json.navigationTracker = self.navigationTracker;

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
  }
}());
