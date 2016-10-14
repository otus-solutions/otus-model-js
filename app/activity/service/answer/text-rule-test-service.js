(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.TextRuleTestService', Service);

  function Service() {
    let self = this;
    let _runner = {};
    self.name = 'TextRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      return _runner[rule.operator](rule.answer, answer.toString());
    }

    _runner.equal = function(reference, answer) {
      return answer ===  reference;
    }

    _runner.notEqual = function(reference, answer) {
      return answer !==  reference;
    }

    _runner.within = function(reference, answer) {
      return reference.some(function(value) {
        return _runner.contains(value, answer);
      });
    }

    _runner.contains = function(reference, answer) {
      let reg = new RegExp(reference, 'i');
      return reg.test(answer);
    }
  }
}());
