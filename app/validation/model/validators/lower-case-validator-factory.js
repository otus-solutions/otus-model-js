(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('LowerCaseValidatorFactory', LowerCaseValidatorFactory);

  function LowerCaseValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new LowerCaseValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LowerCaseValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new LowerCaseValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function LowerCaseValidator() {
    var self = this;

    self.reference = true;
  }

}());
