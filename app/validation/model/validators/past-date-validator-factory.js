(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('PastDateValidatorFactory', PastDateValidatorFactory);

  function PastDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new PastDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.PastDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new PastDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function PastDateValidator() {
    var self = this;

    self.reference = false;
  }

}());
