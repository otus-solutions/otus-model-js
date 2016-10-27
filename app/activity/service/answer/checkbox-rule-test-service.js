(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.CheckboxRuleTestService', Service);

  Service.$inject = [
    'otusjs.model.activity.NumericRuleTestService',
    'otusjs.model.activity.TextRuleTestService'
  ];

  function Service(NumericRuleTestService, TextRuleTestService) {
    var self = this;
    var _runner = {};
    self.name = 'CheckboxRuleTest';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      console.log("rule");
      console.log(rule);
      console.log("----");
      console.log("answer");
      console.log(answer);

      return _runner[rule.operator](rule.answer, answer);
    }

    _runner.equal = function(reference, answer) {
      answer.filter(function(answer) {
        return answer.option === reference;
      });
    }

    _runner.notEqual = function(reference, answer) {
      return answer !== reference;
    }
  }
}());
