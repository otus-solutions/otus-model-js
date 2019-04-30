(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.ActivityImportService', Service);

  Service.$inject = [
    'ElementRegisterFactory',
    'otusjs.validation.api.ValidationService',
    'otusjs.model.activity.ActivityFactory',
    'otusjs.model.activity.QuestionFillFactory'
  ];

  var Inject = {};
  var _elementRegister = null;
  var _item = null;

  function Service(ElementRegisterFactory, ValidationService, ActivityFactory, QuestionFillFactory) {

    var self = this;
    self.execute = execute;
    self.setAnswers = setAnswers;
    self.isValid = true;
    var _fillingList = [];
    var _elementRegister;

    function _getQuestionsIdsMap(activity, answers) {
      let _mapId = {};
      activity.surveyForm.toJSON().itemContainer.forEach(function (item) {
        _mapId[item.templateID] = item.customID;
        if(answers[item.customID]){

          _fillingList.push(QuestionFillFactory.create(
            item,
            answers[item.customID].value,
            answers[item.customID].metadada,
            answers[item.customID].comment))
        }
      });
      return _mapId;
    }

    function setAnswers(activity, answers) {
      const IDS = _getQuestionsIdsMap(activity, answers);
      activity.fillContainer.fillingList = _fillingList;
      activity.fillContainer.fillingList.forEach(function (question) {
        question.answer.value = answers[IDS[question.questionID]].value;
        question.answer.metadada = answers[IDS[question.questionID]].metadada;
        question.answer.comment = answers[IDS[question.questionID]].comment;
        _validateActivity(question.questionID, question.answer, activity);
      });
      activity.isValid = self.isValid;
      self.isValid = true;
      return activity;
    }

    function _validateActivity(templateID, answer, activity) {
      if (self.isValid) {
        self.isValid = answer.value != "" && answer.metadada != "" ? false : true;
        if (self.isValid) {
          _elementRegister = ElementRegisterFactory.create(templateID, {data:answer.value});
          _item = activity.surveyForm.SurveyItemManager.getItemByTemplateID(templateID);
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
      _setupImmutableDateValidation(_item);

      ValidationService.unregisterElement(_elementRegister.id);
      ValidationService.registerElement(_elementRegister);
    }

    function _addValidator(validator, _item) {
      var reference = _item.fillingRules.options[validator].data;
      _elementRegister.addValidator(validator, reference);
    }

    function _setupImmutableDateValidation() {
      var currentItemItemType = _item.objectType;
      if(currentItemItemType === "TimeQuestion" || currentItemItemType === "CalendarQuestion") {
        _elementRegister.addValidator("ImmutableDate", currentItemService);
      }
    }

    function execute(surveyForm, jsonObject, user) {
      var _activities = [];
      if(Array.isArray(jsonObject)){
        jsonObject.forEach(function (json) {
          var _activity;
          if (json.mode === "PAPER" && json.offlineData){
            _activity = ActivityFactory.createPaperActivity(surveyForm, user, json.participant, json.offlineData, json.activityConfiguration, json.id)
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
          } else {
            _activity = ActivityFactory.create(surveyForm, user, json.participant, json.activityConfiguration, json.id);
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
            console.log(_activity.surveyForm.toJSON().surveyTemplate)


          }
          _activities.push(self.setAnswers(_activity.toJSON(), json.answers));

        });
      }

      return _activities;
    }

  }

}());
