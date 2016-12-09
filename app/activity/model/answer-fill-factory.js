(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.AnswerFillFactory', AnswerFillFactory);

  AnswerFillFactory.$inject = [
    'otusjs.model.activity.AnswerEvaluationService'
  ];

  function AnswerFillFactory(AnswerEvaluationService) {
    var self = this;

    /* Public interface */
    self.create = create;

    function create(questionType, value) {
      return new AnswerFill(value, AnswerEvaluationService.getEvaluator(questionType));
    }

    return self;
  }

  function AnswerFill(value, evaluator) {
    var self = this;

    self.objectType = 'AnswerFill';
    self.value = (value === undefined) ? null : value;
    self.eval = evaluator;

    /* Public methods */
    self.isFilled = isFilled;
    self.toJson = toJson;
    self.clear = clear;

    function isFilled() {
      return (self.value !== null) ? true : false;
    }

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.value = self.value;

      return JSON.stringify(json);
    }

    function clear() {
      self.value = null;
    }
  }
}());
