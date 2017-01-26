(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MinTimeValidatorFactory', MinTimeValidatorFactory);

  function MinTimeValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinTimeValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MinTimeValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinTimeValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinTimeValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = '';
  }

}());
