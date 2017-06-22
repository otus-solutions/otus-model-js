(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.AnswerFillFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.AnswerEvaluationService',
    'otusjs.utils.ImmutableDate'
  ];

  function Factory(AnswerEvaluationService, ImmutableDate) {
    var self = this;

    self.OBJECT_TYPE = 'AnswerFill';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(questionType, value) {
      return new AnswerFill(value, AnswerEvaluationService.getEvaluator(questionType), questionType);
    }

    function fromJsonObject(jsonObject) {
      //TODO montar serviço responsável por essa verificação
      if(jsonObject.type === "CalendarQuestion" || jsonObject.type === "TimeQuestion") {
        if(jsonObject.value !== null) {
          return create(jsonObject.type, new ImmutableDate(jsonObject.value.value));
        }
      }
      return create(jsonObject.type, jsonObject.value);
    }

    return self;
  }

  function AnswerFill(value, evaluator, questionType) {
    var self = this;

    self.objectType = 'AnswerFill';
    self.type = questionType;
    self.value = (value === undefined) ? null : value;
    self.eval = evaluator;

    /* Public methods */
    self.isFilled = isFilled;
    self.clear = clear;
    self.toJson = toJson;

    function isFilled() {
      return (self.value !== null) ? true : false;
    }

    function clear() {
      self.value = null;
    }

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.type = self.type;
      json.value = self.value;

      return JSON.stringify(json);
    }
  }
}());
