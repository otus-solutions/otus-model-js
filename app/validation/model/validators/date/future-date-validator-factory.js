(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('FutureDateValidatorFactory', FutureDateValidatorFactory);

  function FutureDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new FutureDateValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.FutureDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new FutureDateValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function FutureDateValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = false;
  }

}());
