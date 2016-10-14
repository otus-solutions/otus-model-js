(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MinTimeValidatorFactory', MinTimeValidatorFactory);

  function MinTimeValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MinTimeValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MinTimeValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MinTimeValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MinTimeValidator() {
    var self = this;

    self.reference = '';
  }

}());
