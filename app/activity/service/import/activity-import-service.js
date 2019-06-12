(function () {
  'use strict';

  angular.module('otusjs.model.activity').service('otusjs.model.activity.ActivityImportService', Service);

  Service.$inject = [
    'ElementRegisterFactory',
    'otusjs.validation.api.ValidationService',
    'otusjs.model.activity.ActivityFactory',
    'otusjs.model.activity.QuestionFillFactory',
    'otusjs.model.activity.InterviewFactory',
    'otusjs.model.activity.ValidationTypeService'];

  function Service(ElementRegisterFactory, ValidationService, ActivityFactory, QuestionFillFactory, InterviewFactory, ValidationTypeService) {
    var self = this;

    var _isValid = true;
    var _fillingList = [];
    var _elementRegister = null;
    var _item = null;
    var _activity;
    var _activities = [];

    //Public methods
    self.fromJsonObject = fromJsonObject;
    self.create = create;

    function _setQuestionFill(answers, item) {
      if (answers[item.customID]) {
        _fillingList.push(QuestionFillFactory.create(item, answers[item.customID].value, answers[item.customID].metadata, answers[item.customID].comment));
      }
    }

    function _getQuestionsIdsMap(answers) {
      var _mapId = {};
      _activity.surveyForm.surveyTemplate.toJSON().itemContainer.forEach(function (item) {
        _mapId[item.templateID] = item.customID;
        _setQuestionFill(answers, item);
      });

      return _mapId;
    }

    function _setAnswersValues(answers) {
      var IDS = _getQuestionsIdsMap(answers);
      var customID = "";
      _activity.fillContainer.init(_fillingList);
      _activity.fillContainer.buildJsonToFillContainer().fillingList.forEach(function (question) {
        if (_isValid) {
          question.answer.value = answers[IDS[question.questionID]] ? answers[IDS[question.questionID]].value : null;
          question.answer.metadata = answers[IDS[question.questionID]] ? answers[IDS[question.questionID]].metadata : null;
          question.answer.comment = answers[IDS[question.questionID]] ? answers[IDS[question.questionID]].comment : '';
          _validateActivity(question.questionID, question.answer);
          if (!_isValid) _activity.error = "Questão {" + IDS[question.questionID] + "} contém uma resposta inválida!";
        }
      });
      _activity.isValid = _isValid;
      _isValid = true;
    }

    function _validateActivity(templateID, answer) {
      if (_isValid) {
        _isValid = answer.value && answer.metadata ? false : true;
        if (_isValid) {
          _elementRegister = ElementRegisterFactory.create(templateID, { data: answer.value });
          _item = _activity.surveyForm.surveyTemplate.SurveyItemManager.getItemByTemplateID(templateID);
          _setupValidation(_item);
          ValidationService.validateElement(templateID, function (response) {
            response.forEach(function (validation) {
              validation.validatorsResponse.forEach(function (validator) {
                // _isValid = validator.result;
                _isValid = validator.result && ValidationTypeService.isValid(_item.dataType, answer.value);
              });
            });
          });
        }
      }
    }

    function _setupValidation(_item) {
      Object.keys(_item.fillingRules.options).forEach(function (validator) {
        _addValidator(validator, _item);
      });

      ValidationService.unregisterElement(_elementRegister.id);
      ValidationService.registerElement(_elementRegister);
    }

    function _addValidator(validator, _item) {
      var reference = _item.fillingRules.options[validator].data;
      if (_item.objectType === "TimeQuestion" || _item.objectType === "CalendarQuestion") {
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

    function _isValidSurveys(acronym, json) {
      var _valid = true;
      json.forEach(function (activity) {
        if (_valid) {
          _valid = acronym == activity.acronym;
        }
      });
      return _valid;
    }

    function fromJsonObject(surveyForm, jsonObject, user) {
      _activities = [];
      if (Array.isArray(jsonObject)) {
        if (jsonObject.length > 0) {
          if (_isValidSurveys(surveyForm.surveyTemplate.identity.acronym, jsonObject)) {
            jsonObject.forEach(function (json) {

              _activities.push(self.create(surveyForm, json, user));
            });
          }
        }
      }

      return _activities;
    }

    function create(surveyForm, json, user) {
      _activity = null;
      _fillingList = [];
      if (json.acronym == surveyForm.surveyTemplate.identity.acronym) {
        if (json.mode === "PAPER" && json.offlineData) {
          _activity = ActivityFactory.createPaperActivity(surveyForm, user, json.participant, json.offlineData, json.activityConfiguration, json.id);
          _createStatusHistoryPaper(json);
        } else if (json.mode === "ONLINE") {
          _activity = ActivityFactory.create(surveyForm, user, json.participant, json.activityConfiguration, json.id);
          _createStatusHistoryOnline(json);
        }
        _setAnswersValues(json.answers);
        _setInterview(user);
        _activity.surveyForm.acronym = _activity.surveyForm.surveyTemplate.identity.acronym;
      }

      return angular.copy(_activity);
    }
  }
})();
