(function() {
  'use strict';

  angular
    .module('otusjs.activity')
    .service('otusjs.activity.NumericRuleTestService', Service);

  function Service() {
    let self = this;
    let _runner = {};
    self.name = 'NumericRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      if (!!answer['replace']) {
        answer = answer.replace(/,/, '.');
      }

      if (!Number.isInteger(Number(answer)) && !_isFloat(answer)) {
        return false;
      }

      return _runner[rule.operator](rule.answer, Number(answer));
    }

    function _isFloat(value) {
      return (!Number.isNaN(Number(value)) && !Number.isInteger(Number(value)));
    }

    _runner.equal = (reference, answer) => {
      return answer === Number(reference);
    }

    _runner.notEqual = (reference, answer) => {
      return answer !== Number(reference);
    }

    _runner.within = (reference, answer) => {
      return reference.some((value) => {
        if (!!value['replace']) {
          value = value.replace(/,/, '.');
        }
        return _runner.equal(value, answer);
      });
    }

    _runner.greater = (reference, answer) => {
      return answer > Number(reference);
    }

    _runner.greaterEqual = (reference, answer) => {
      return answer >= Number(reference);
    }

    _runner.lower = (reference, answer) => {
      return answer < Number(reference);
    }

    _runner.lowerEqual = (reference, answer) => {
      return answer <= Number(reference);
    }

    _runner.between = (reference, answer) => {
      return (_runner.greaterEqual(reference[0], answer) &&  _runner.lowerEqual(reference[1], answer));
    }
  }
}());
