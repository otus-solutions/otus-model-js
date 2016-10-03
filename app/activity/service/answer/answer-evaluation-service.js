(function() {
  'use strict';

  angular
    .module('otusjs.activity')
    .service('otusjs.activity.AnswerEvaluationService', Service);

  Service.$inject = [
    'otusjs.activity.NumericRuleTestService',
    'otusjs.activity.TextRuleTestService',
    'otusjs.activity.DateTimeRuleTestService'
  ];

  function Service(NumericRuleTestService, TextRuleTestService, DateTimeRuleTestService) {
    let self = this;
    let _evaluators = new Map();

    /* Public methods */
    self.getEvaluator = getEvaluator;

    _setupEvaluators();

    function getEvaluator(evaluator) {
      return _evaluators.get(evaluator);
    }

    function _setupEvaluators() {
      _evaluators.set('CalendarQuestion', DateTimeRuleTestService);
      _evaluators.set('IntegerQuestion', NumericRuleTestService);
      _evaluators.set('SingleSelectionQuestion', NumericRuleTestService);
      _evaluators.set('TextQuestion', TextRuleTestService);
      _evaluators.set('TimeQuestion', DateTimeRuleTestService);
    }
  }
}());
