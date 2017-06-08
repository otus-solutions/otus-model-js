(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.AnswerEvaluationService', Service);

  Service.$inject = [
    'otusjs.model.activity.NumericRuleTestService',
    'otusjs.model.activity.TextRuleTestService',
    'otusjs.model.activity.CalendarRuleTestService',
    'otusjs.model.activity.TimeRuleTestService',
    'otusjs.model.activity.CheckboxRuleTestService',
    'otusjs.model.activity.AutocompleteRuleTestService'
  ];

  function Service(NumericRuleTestService, TextRuleTestService, CalendarRuleTestService, TimeRuleTestService, CheckboxRuleTestService, AutocompleteRuleTestService) {
    var self = this;
    var _evaluators = {};

    /* Public methods */
    self.getEvaluator = getEvaluator;

    _setupEvaluators();

    function getEvaluator(evaluator) {
      return _evaluators[evaluator];
    }

    function _setupEvaluators() {
      _evaluators.IntegerQuestion = NumericRuleTestService;
      _evaluators.DecimalQuestion = NumericRuleTestService;
      _evaluators.SingleSelectionQuestion = NumericRuleTestService;
      _evaluators.TextQuestion = TextRuleTestService;
      _evaluators.TimeQuestion = TimeRuleTestService;
      _evaluators.CheckboxQuestion = CheckboxRuleTestService;
      _evaluators.AutocompleteQuestion = AutocompleteRuleTestService;
      _evaluators.FileUploadQuestion = NumericRuleTestService;
      _evaluators.GridTextQuestion = NumericRuleTestService;
      _evaluators.CalendarQuestion = CalendarRuleTestService;
    }
  }
}());
