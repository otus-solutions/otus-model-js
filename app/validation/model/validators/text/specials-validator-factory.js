(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('SpecialsValidatorFactory', SpecialsValidatorFactory);

  function SpecialsValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new SpecialsValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.SpecialsValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new SpecialsValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function SpecialsValidator() {
    var self = this;

    self.reference = true;

  }

}());
