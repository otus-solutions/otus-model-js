(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('AlphanumericValidatorFactory', AlphanumericValidatorFactory);

  function AlphanumericValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new AlphanumericValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.AlphanumericValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new AlphanumericValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function AlphanumericValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = true;
  }

}());
