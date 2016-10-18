(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('PastDateValidatorFactory', PastDateValidatorFactory);

  function PastDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new PastDateValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.PastDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new PastDateValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function PastDateValidator() {
    var self = this;

    self.reference = false;
  }

}());
