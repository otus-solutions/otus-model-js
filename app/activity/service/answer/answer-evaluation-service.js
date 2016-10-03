(function() {
  'use strict';

  angular
    .module('otusjs.activity')
    .service('otusjs.activity.AnswerEvaluationService', Service);

  Service.$inject = [
    'otusjs.activity.NumericRuleTestService'
  ];

  function Service(NumericRuleTestService) {
    let self = this;
    let _evaluators = new Map();

    /* Public methods */
    self.getEvaluator = getEvaluator;

    _setupEvaluators();

    function getEvaluator(evaluator) {
      return _evaluators.get(evaluator);
    }

    function _setupEvaluators() {
      _evaluators.set('IntegerQuestion', NumericRuleTestService);
    }
  }
}());
