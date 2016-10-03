(function() {
  'use strict';

  angular
    .module('otusjs.activity')
    .factory('AnswerFillFactory', AnswerFillFactory);


  function AnswerFillFactory() {
    let self = this;

    /* Public interface */
    self.create = create;

    function create(questionType, value) {
      return new AnswerFill(value, AnswerEvaluationService.getEvaluator(questionType));
    }

    return self;
  }

  function AnswerFill(value, evaluator) {
    let self = this;

    self.objectType = 'AnswerFill';
    self.value = (value === undefined) ? null : value;
    self.eval = evaluator;

    /* Public methods */
    self.isFilled = isFilled;
    self.toJson = toJson;

    function isFilled() {
      return (self.value) ? true : false;
    }

    function toJson() {
      let json = {};

      json.objectType = self.objectType;
      json.value = self.value;

      return JSON.stringify(json);
    }
  }
}());
