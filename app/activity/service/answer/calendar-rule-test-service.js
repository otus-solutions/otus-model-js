(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.CalendarRuleTestService', Service);

  Service.$inject = [
    'otusjs.model.activity.NumericRuleTestService',
    'otusjs.utils.ImmutableDate'
  ];

  function Service(NumericRuleTestService, ImmutableDate) {
    var self = this;
    var _runner = {};
    self.name = 'CalendarRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();
      if (!rule.isMetadata && !answer) {
        return false;
      } else if (rule.isMetadata) {
        return NumericRuleTestService.run(rule, answer);
      } else {
        var resultRegex = rule.answer.match(/^(\d{1,2})[\/](\d{1,2})[\/](\d{4})$/);
        var immutableDate = createImmutableDate(resultRegex);
        return _runner[rule.operator](immutableDate, answer);
      }
    }

    _runner.equal = function(reference, answer) {
      return answer.getTime() == reference.getTime();
    };

    _runner.notEqual = function(reference, answer) {
      return answer.getTime() != reference.getTime();
    };

    _runner.greater = function(reference, answer) {
      return answer.getTime() > reference.getTime();
    };

    _runner.greaterEqual = function(reference, answer) {
      return answer.getTime() >= reference.getTime();
    };

    _runner.lower = function(reference, answer) {
      return answer.getTime() < reference.getTime();
    };

    _runner.lowerEqual = function(reference, answer) {
      return answer.getTime() <= reference.getTime();
    };

    function _polyfillIsInteger() {
      Number.isInteger = Number.isInteger || function(value) {
        return typeof value === "number" &&
          isFinite(value) &&
          Math.floor(value) === value;
      };
    }

    function createImmutableDate(resultRegex) {
      var immutableDate = new ImmutableDate();
      immutableDate.resetDate();
      immutableDate.setDate(resultRegex[1]);
      immutableDate.setMonth(resultRegex[2] - 1);
      immutableDate.setFullYear(resultRegex[3]);
      immutableDate.setHours(0);
      immutableDate.setMinutes(0);
      immutableDate.setSeconds(0);
      immutableDate.setMilliseconds(0);
      return immutableDate;
    }
  }
}());
