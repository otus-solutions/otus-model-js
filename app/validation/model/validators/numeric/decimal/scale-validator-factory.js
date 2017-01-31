(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('ScaleValidatorFactory', ScaleValidatorFactory);

  function ScaleValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new ScaleValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.ScaleValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new ScaleValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function ScaleValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }

}());
