(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('otusjs.model.validation.QuantityValidatorFactory', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new QuantityValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.validation.QuantityValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new QuantityValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function QuantityValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }

}());
