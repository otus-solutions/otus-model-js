(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('RulesFactory', RulesFactory);

  RulesFactory.$inject = [
    'FillingRulesDataFactory'
  ];

  function RulesFactory(FillingRulesDataFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(validatorType) {
      var validator = FillingRulesDataFactory.create(validatorType);
      return new Rule(validatorType, validator);
    }

    function fromJson(json) {
      var validator = FillingRulesDataFactory.fromJson(json);
      return new Rule(json.validatorType, validator);
    }

    return self;
  }

  function Rule(validatorType, validator) {
    var self = this;
    self.extends = 'StudioObject';
    self.objectType = 'Rule';
    self.validatorType = validatorType;
    self.data = validator;
  }

}());
