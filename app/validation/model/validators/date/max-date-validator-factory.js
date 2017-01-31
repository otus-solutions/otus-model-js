(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MaxDateValidatorFactory', MaxDateValidatorFactory);

  function MaxDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxDateValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MaxDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxDateValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MaxDateValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = new Date();
  }

}());
