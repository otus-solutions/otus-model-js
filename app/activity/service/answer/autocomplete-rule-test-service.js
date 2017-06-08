(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.AutocompleteRuleTestService', Service);

  Service.$inject = [
    'otusjs.model.activity.NumericRuleTestService',
    'otusjs.model.activity.TextRuleTestService',
  ];

  function Service(NumericRuleTestService, TextRuleTestService) {
    var self = this;
    var _runner = {};
    self.name = 'AutocompleteRuleTestService';

    /* Public Methods */
    self.run = run;

    function run(rule, answer) {
      if (!rule.isMetadata && !answer) {
        return false;
      } else if (rule.isMetadata) {
        return NumericRuleTestService.run(rule, answer);
      } else {
        return TextRuleTestService.run(rule, answer);
      }
    }
  }
}());
