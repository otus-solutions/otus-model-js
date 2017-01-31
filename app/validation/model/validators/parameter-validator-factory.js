(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('ParameterValidatorFactory', ParameterValidatorFactory);

  function ParameterValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new ParameterValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.ParameterValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new ParameterValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function ParameterValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = '';
  }

}());
