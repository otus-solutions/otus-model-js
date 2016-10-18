(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MandatoryValidatorFactory', MandatoryValidatorFactory);

  function MandatoryValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MandatoryValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MandatoryValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MandatoryValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MandatoryValidator() {
    var self = this;

    self.reference = false;
  }

}());
