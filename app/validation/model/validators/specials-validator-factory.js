(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('SpecialsValidatorFactory', SpecialsValidatorFactory);

  function SpecialsValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new SpecialsValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.SpecialsValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new SpecialsValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function SpecialsValidator() {
    var self = this;

    self.reference = true;

  }

}());
