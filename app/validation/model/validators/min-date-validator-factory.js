(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MinDateValidatorFactory', MinDateValidatorFactory);

  function MinDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MinDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MinDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MinDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MinDateValidator() {
    var self = this;

    self.reference = new Date();
  }

}());
