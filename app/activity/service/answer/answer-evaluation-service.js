(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.AnswerEvaluationService', Service);

  Service.$inject = [
    'otusjs.model.activity.NumericRuleTestService',
    'otusjs.model.activity.TextRuleTestService',
    'otusjs.model.activity.DateTimeRuleTestService',
    'otusjs.model.activity.CheckboxRuleTestService'
  ];

  function Service(NumericRuleTestService, TextRuleTestService, DateTimeRuleTestService, CheckboxRuleTestService) {
    var self = this;
    var _evaluators = {};

    /* Public methods */
    self.getEvaluator = getEvaluator;

    _setupEvaluators();

    function getEvaluator(evaluator) {
      return _evaluators[evaluator];
    }

    function _setupEvaluators() {
      _evaluators.CalendarQuestion = DateTimeRuleTestService;
      _evaluators.IntegerQuestion = NumericRuleTestService;
      _evaluators.DecimalQuestion = NumericRuleTestService;
      _evaluators.SingleSelectionQuestion = NumericRuleTestService;
      _evaluators.TextQuestion = TextRuleTestService;
      _evaluators.TimeQuestion = DateTimeRuleTestService;
      _evaluators.CheckboxQuestion = CheckboxRuleTestService;
    }
  }
}());
