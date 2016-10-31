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
      return _runner[rule.operator](rule.answer, answer);
    }

    _runner.equal = function(reference, answer) {
      var result = answer.filter(function(answer) {
        if (answer.option === reference && answer.state === true) {
          return true;
        }
      });
      return result.length > 0 ? true : false;
    }

    _runner.notEqual = function(reference, answer) {
      var result = answer.filter(function(answer) {
        if (answer.option === reference && answer.state === true) {
          return true;
        }
      });
      return result.length > 0 ? false : true;
    }

    _runner.contains = function(reference, answer) {
      var result = answer.filter(function(answer) {
        if (answer.option === reference && answer.state === true) {
          return true;
        }
      });
      return result.length > 0 ? true : false;
    }

    _runner.quantity = function(reference, answer) {
      var result = answer.filter(function(answer) {
        if (answer.state === true) {
          return true;
        }
      });

      return reference == result.length;
    }

    _runner.minSelected = function(reference, answer) {
      var result = answer.filter(function(answer) {
        if (answer.state === true) {
          return true;
        }
      });

      return reference >= result.length;
    }

    _runner.maxSelected = function(reference, answer) {
      var result = answer.filter(function(answer) {
        if (answer.state === true) {
          return true;
        }
      });

      return reference <= result.length;
    }

  }
}());
