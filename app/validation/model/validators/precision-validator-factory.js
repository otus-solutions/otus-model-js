(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('PrecisionValidatorFactory', PrecisionValidatorFactory);

  function PrecisionValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new PrecisionValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.PrecisionValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new PrecisionValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function PrecisionValidator() {
    var self = this;

    self.reference = null;
  }

}());
