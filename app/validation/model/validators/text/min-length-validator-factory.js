(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MinLengthValidatorFactory', MinLengthValidatorFactory);

  function MinLengthValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinLengthValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MinLengthValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinLengthValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinLengthValidator() {
    var self = this;

    self.reference = null;
  }

}());
