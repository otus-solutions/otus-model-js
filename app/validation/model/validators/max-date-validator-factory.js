(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MaxDateValidatorFactory', MaxDateValidatorFactory);

  function MaxDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MaxDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MaxDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MaxDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MaxDateValidator() {
    var self = this;

    self.reference = new Date();
  }

}());
