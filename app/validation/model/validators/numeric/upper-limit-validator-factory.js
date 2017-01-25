(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('UpperLimitValidatorFactory', UpperLimitValidatorFactory);

  function UpperLimitValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new UpperLimitValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.UpperLimitValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new UpperLimitValidator();
      validator.reference = jsonObject.reference;
      validator.canBeIgnored = jsonObject.canBeIgnored;
      
      return validator;
    }

    return self;
  }

  function UpperLimitValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }

}());
