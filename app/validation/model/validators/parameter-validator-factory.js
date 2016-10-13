(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('ParameterValidatorFactory', ParameterValidatorFactory);

  function ParameterValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ParameterValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.ParameterValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new ParameterValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function ParameterValidator() {
    var self = this;

    self.reference = '';
  }

}());
