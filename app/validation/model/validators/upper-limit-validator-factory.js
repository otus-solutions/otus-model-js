(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('UpperLimitValidatorFactory', UpperLimitValidatorFactory);

  function UpperLimitValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new UpperLimitValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.UpperLimitValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new UpperLimitValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function UpperLimitValidator() {
    var self = this;

    self.reference = null;
  }

}());
