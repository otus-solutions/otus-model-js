(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('FutureDateValidatorFactory', FutureDateValidatorFactory);

  function FutureDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new FutureDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.FutureDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new FutureDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function FutureDateValidator() {
    var self = this;

    self.reference = false;
  }

}());
