(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.DateTimeRuleTestService', Service);

  Service.$inject = [
    'otusjs.model.activity.NumericRuleTestService'
  ];

  function Service(NumericRuleTestService) {
    var self = this;
    var _runner = {};
    self.name = 'DateTimeRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();
      if (rule.isMetadata && Number.isInteger(parseInt(answer))) {
        return NumericRuleTestService.run(rule, answer);
      } else if (rule.answer instanceof Array && rule.operator == 'between' || rule.operator == 'within') {
        return _runner[rule.operator](_filter(rule.answer), answer);
      }
      var resultRegex = rule.answer.match(/^(\d{1,2})[\/](\d{1,2})[\/](\d{4})$/);
      var ruleDate = new Date(resultRegex[3], (resultRegex[2] - 1), resultRegex[1]);
      return _runner[rule.operator](ruleDate, answer);
    }

    function _filter(answer) {
      var dates = [];
      answer.filter(function(rule) {
        var resultRegex = rule.match(/^(\d{1,2})[\/](\d{1,2})[\/](\d{4})$/);
        dates.push(new Date(resultRegex[3], (resultRegex[2] - 1), resultRegex[1]));
      });
      return dates;
    }

    _runner.equal = function(reference, answer) {
      return answer.getTime() == reference.getTime();
    }

    _runner.notEqual = function(reference, answer) {
      return answer.getTime() != reference.getTime();
    }

    _runner.within = function(reference, answer) {
      return reference.some(function(value) {
        return _runner.equal(value, answer);
      });
    }

    _runner.greater = function(reference, answer) {
      return answer.getTime() > reference.getTime();
    }

    _runner.greaterEqual = function(reference, answer) {
      return answer.getTime() >= reference.getTime();
    }

    _runner.lower = function(reference, answer) {
      return answer.getTime() < reference.getTime();
    }

    _runner.lowerEqual = function(reference, answer) {
      return answer.getTime() <= reference.getTime();
    }

    _runner.between = function(reference, answer) {
      return (_runner.greaterEqual(reference[0], answer) && _runner.lowerEqual(reference[1], answer));
    }

    function _polyfillIsInteger() {
      Number.isInteger = Number.isInteger || function(value) {
        return typeof value === "number" &&
          isFinite(value) &&
          Math.floor(value) === value;
      };
    }
  }
}());
