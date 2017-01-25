(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('LowerLimitValidatorFactory', LowerLimitValidatorFactory);

  function LowerLimitValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new LowerLimitValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LowerLimitValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new LowerLimitValidator();
      validator.reference = jsonObject.reference;
      validator.canBeIgnored = jsonObject.canBeIgnored;
      
      return validator;
    }

    return self;
  }

  function LowerLimitValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }

}());
