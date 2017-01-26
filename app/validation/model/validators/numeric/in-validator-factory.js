(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('InValidatorFactory', InValidatorFactory);

  function InValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new InValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.InValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new InValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function InValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {
      'initial': null,
      'end': null
    };
  }

}());
