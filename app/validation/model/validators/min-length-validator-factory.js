(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MinLengthValidatorFactory', MinLengthValidatorFactory);

  function MinLengthValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MinLengthValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MinLengthValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MinLengthValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MinLengthValidator() {
    var self = this;

    self.reference = null;
  }

}());
