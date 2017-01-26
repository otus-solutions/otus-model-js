(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('PrecisionValidatorFactory', PrecisionValidatorFactory);

  function PrecisionValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new PrecisionValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.PrecisionValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new PrecisionValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function PrecisionValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }

}());
