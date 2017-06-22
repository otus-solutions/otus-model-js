(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('otusjs.model.validation.MaxSelectedValidatorFactory', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxSelectedValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.validation.MaxSelectedValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxSelectedValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MaxSelectedValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }

}());
