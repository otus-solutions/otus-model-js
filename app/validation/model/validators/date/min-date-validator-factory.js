(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MinDateValidatorFactory', MinDateValidatorFactory);

  function MinDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinDateValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MinDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinDateValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinDateValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = new Date();
  }

}());
