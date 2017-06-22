(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.NumericRuleTestService', Service);

  function Service() {
    var self = this;
    var _runner = {};
    self.name = 'NumericRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      _polyfillIsInteger();

      if (answer && !!answer['replace']) {
        answer = answer.replace(/,/, '.');
      }

      if (!Number.isInteger(Number(answer)) && !_isFloat(answer)) {
        return false;
      }

      return _runner[rule.operator](rule.answer, Number(answer));
    }

    function _isFloat(value) {
      return (!isNaN(Number(value)) && !Number.isInteger(Number(value)));
    }

    _runner.equal = function(reference, answer) {
      return answer === Number(reference);
    }

    _runner.notEqual = function(reference, answer) {
      return answer !== Number(reference);
    }

    _runner.within = function(reference, answer) {
      return reference.some(function(value) {
        if (!!value['replace']) {
          value = value.replace(/,/, '.');
        }
        return _runner.equal(value, answer);
      });
    }

    _runner.greater = function(reference, answer) {
      return answer > Number(reference);
    }

    _runner.greaterEqual = function(reference, answer) {
      return answer >= Number(reference);
    }

    _runner.lower = function(reference, answer) {
      return answer < Number(reference);
    }

    _runner.lowerEqual = function(reference, answer) {
      return answer <= Number(reference);
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
