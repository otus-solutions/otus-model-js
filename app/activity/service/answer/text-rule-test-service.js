(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.TextRuleTestService', Service);

  Service.$inject = [
    'otusjs.model.activity.NumericRuleTestService'
  ];

  function Service(NumericRuleTestService) {
    var self = this;
    var _runner = {};
    self.name = 'TextRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      if (!rule.isMetadata && !answer) {
        return false;
      } else if (rule.isMetadata) {
        return NumericRuleTestService.run(rule, answer);
      } else {
        return _runner[rule.operator](rule.answer, answer.toString());
      }
    }

    _runner.equal = function (reference, answer) {
      return answer === reference;
    }

    _runner.notEqual = function (reference, answer) {
      return answer !== reference;
    }

    _runner.within = function (reference, answer) {
      return reference.some(function (value) {
        return _runner.contains(value, answer);
      });
    }

    _runner.contains = function (reference, answer) {
      var reg = new RegExp(reference, 'i');
      return reg.test(answer);
    }
  }
}());
