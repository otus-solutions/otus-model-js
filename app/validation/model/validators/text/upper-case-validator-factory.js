(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('UpperCaseValidatorFactory', UpperCaseValidatorFactory);

  function UpperCaseValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new UpperCaseValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.UpperCaseValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new UpperCaseValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function UpperCaseValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = true;
  }

}());
