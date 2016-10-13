(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MandatoryValidatorFactory', MandatoryValidatorFactory);

  function MandatoryValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MandatoryValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MandatoryValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MandatoryValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MandatoryValidator() {
    var self = this;

    self.reference = false;
  }

}());
