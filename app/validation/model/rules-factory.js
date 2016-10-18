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
    self.fromJsonObject = fromJsonObject;

    function create(validatorType) {
      var validator = FillingRulesDataFactory.create(validatorType);
      return new Rule(validatorType, validator);
    }

    function fromJsonObject(jsonObject) {
      var validator = FillingRulesDataFactory.fromJsonObject(jsonObject);
      return new Rule(jsonObject.validatorType, validator);
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
