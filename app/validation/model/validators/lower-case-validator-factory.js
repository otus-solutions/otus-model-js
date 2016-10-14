(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('LowerCaseValidatorFactory', LowerCaseValidatorFactory);

  function LowerCaseValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new LowerCaseValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.LowerCaseValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new LowerCaseValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function LowerCaseValidator() {
    var self = this;

    self.reference = true;
  }

}());
