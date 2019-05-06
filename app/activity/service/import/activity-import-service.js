(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.ActivityImportService', Service);

  Service.$inject = [
    'ElementRegisterFactory',
    'otusjs.validation.api.ValidationService',
    'otusjs.model.activity.ActivityFactory',
    'otusjs.model.activity.QuestionFillFactory',
    'otusjs.model.activity.InterviewFactory'
  ];



  function Service(ElementRegisterFactory, ValidationService, ActivityFactory, QuestionFillFactory, InterviewFactory) {
    var self = this;
    self.isValid = true;

    var _fillingList = [];
    var _elementRegister = null;
    var _item = null;
    var _activity;
    var _activities = [];

    //Public methods
    self.execute = execute;
    self.getValidActivities = getValidActivities;

    function _setQuestionFill(answers, item) {
      if(answers[item.customID]){
        _fillingList.push(QuestionFillFactory.create(
          item,
          answers[item.customID].value,
          answers[item.customID].metadada,
          answers[item.customID].comment))
      }
    }

    function _getQuestionsIdsMap(answers) {
      let _mapId = {};
      _activity.surveyForm.surveyTemplate.toJSON().itemContainer.forEach(function (item) {
        _mapId[item.templateID] = item.customID;
        _setQuestionFill(answers, item);
      });

      return _mapId;
    }

    function _setAnswersValues(answers) {
      const IDS = _getQuestionsIdsMap(answers);
      _activity.fillContainer.fillingList = _fillingList;
      _activity.fillContainer.fillingList.forEach(function (question) {
        question.answer.value = answers[IDS[question.questionID]] ? answers[IDS[question.questionID]].value : '';
        question.answer.metadada = answers[IDS[question.questionID]] ? answers[IDS[question.questionID]].metadada : '';
        question.answer.comment = answers[IDS[question.questionID]] ? answers[IDS[question.questionID]].comment : '';
        _validateActivity(question.questionID, question.answer);
      });
      _activity.isValid = self.isValid;
      self.isValid = true;
    }

    function _validateActivity(templateID, answer) {
      if (self.isValid) {
        self.isValid = answer.value != "" && answer.metadada != "" ? false : true;
        if (self.isValid) {
          _elementRegister = ElementRegisterFactory.create(templateID, {data:answer.value});
          _item = _activity.surveyForm.surveyTemplate.SurveyItemManager.getItemByTemplateID(templateID);
          _setupValidation(_item);
          ValidationService.validateElement(templateID, function (response) {
            response.forEach(function (validation) {
              validation.validatorsResponse.forEach(function (validator) {
                self.isValid = validator.result;
              })
            })
          });
        }
      }
    }

    function _setupValidation(_item) {
      Object.keys(_item.fillingRules.options).map(function(validator) {
        _addValidator(validator, _item);
      });

      ValidationService.unregisterElement(_elementRegister.id);
      ValidationService.registerElement(_elementRegister);
    }

    function _addValidator(validator, _item) {
      var reference = _item.fillingRules.options[validator].data;
      if(_item.objectType === "TimeQuestion" || _item.objectType === "CalendarQuestion") {
        _elementRegister.addValidator("ImmutableDate", reference);
      } else {
        _elementRegister.addValidator(validator, reference);
      }
    }

    function _createStatusHistoryPaper(json) {
      switch (json.status) {
        case 'OPENED':
          _activity.statusHistory.newOpenedRegistry(json.user);
          break;
        case 'SAVED':
          _activity.statusHistory.newOpenedRegistry(json.user);
          _activity.statusHistory.newSavedRegistry(json.user);
          break;
        case 'FINALIZED':
          _activity.statusHistory.newOpenedRegistry(json.user);
          _activity.statusHistory.newFinalizedRegistry(json.user);
          break;
      }
    }

    function _createStatusHistoryOnline(json) {
      switch (json.status) {
        case 'INITIALIZED_ONLINE':
          _activity.statusHistory.newInitializedOnlineRegistry(json.user);
          break;
        case 'OPENED':
          _activity.statusHistory.newInitializedOnlineRegistry(json.user);
          _activity.statusHistory.newOpenedRegistry(json.user);
          break;
        case 'SAVED':
          _activity.statusHistory.newInitializedOnlineRegistry(json.user);
          _activity.statusHistory.newOpenedRegistry(json.user);
          _activity.statusHistory.newSavedRegistry(json.user);
          break;
        case 'FINALIZED':
          _activity.statusHistory.newInitializedOnlineRegistry(json.user);
          _activity.statusHistory.newOpenedRegistry(json.user);
          _activity.statusHistory.newFinalizedRegistry(json.user);
          break;
      }
    }

    function _setInterview(user) {
      _activity.interviews.push(InterviewFactory.create(user));
    }

    function getValidActivities() {
      return _activities.filter(function (activity) {
        return activity.isValid === true;
      })
    }


    function execute(surveyForm, jsonObject, user) {
      _activities = [];
      if(Array.isArray(jsonObject)){
        if (jsonObject.length > 0) {
          jsonObject.forEach(function (json) {
            _activity = null;
            if (json.mode === "PAPER" && json.offlineData){
              _activity = ActivityFactory.createPaperActivity(surveyForm, user, json.participant, json.offlineData, json.activityConfiguration, json.id)
              _createStatusHistoryPaper(json);
            } else if(json.mode === "ONLINE"){
              _activity = ActivityFactory.create(surveyForm, user, json.participant, json.activityConfiguration, json.id);
              _createStatusHistoryOnline(json);
            }
            _setAnswersValues(json.answers);
            _setInterview(user);
            _activities.push(_activity);
          });
        }
      }

      return _activities;
    }

  }

}());
