(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('UpperCaseValidatorFactory', UpperCaseValidatorFactory);

  function UpperCaseValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new UpperCaseValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.UpperCaseValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new UpperCaseValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function UpperCaseValidator() {
    var self = this;

    self.reference = true;
  }

}());
