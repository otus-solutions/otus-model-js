(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.TimeRuleTestService', Service);

  Service.$inject = [
    'otusjs.model.activity.NumericRuleTestService',
    'otusjs.utils.ImmutableDate'
  ];

  function Service(NumericRuleTestService, ImmutableDate) {
    var self = this;
    var _runner = {};
    self.name = 'TimeRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();
      if (!rule.isMetadata && !answer) {
        return false;
      } else if (rule.isMetadata) {
        return NumericRuleTestService.run(rule, answer);
      } else {
        var resultRegex = rule.answer.split(':');
        var immutableDate = _createImmutableDate(resultRegex);
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

    function _createImmutableDate(resultRegex) {
      var immutableDate = new ImmutableDate();
      immutableDate.resetDate();
      immutableDate.setHours(resultRegex[0]);
      immutableDate.setMinutes(resultRegex[1]);
      immutableDate.setSeconds(resultRegex[2] != undefined ? resultRegex[2] : 0);
      immutableDate.setMilliseconds(resultRegex[3] != undefined ? resultRegex[3] : 0);
      return immutableDate;
    }
  }
}());
