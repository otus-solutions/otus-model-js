(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.DateTimeRuleTestService', Service);

  function Service() {
    var self = this;
    var _runner = {};
    self.name = 'DateTimeRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      if ( Number.isNaN( Date.parse(answer) ) ) {
        return false;
      }

      return _runner[rule.operator](Date.parse(rule.answer), answer.getTime());
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

    _runner.greater = function(reference, answer) {
      return answer > reference;
    }

    _runner.greaterEqual = function(reference, answer) {
      return answer >= reference;
    }

    _runner.lower = function(reference, answer) {
      return answer < reference;
    }

    _runner.lowerEqual = function(reference, answer) {
      return answer <= reference;
    }

    _runner.between = function(reference, answer) {
      return (_runner.greaterEqual(reference[0], answer) && _runner.lowerEqual(reference[1], answer));
    }
  }
}());
