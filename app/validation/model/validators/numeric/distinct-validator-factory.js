(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('DistinctValidatorFactory', DistinctValidatorFactory);

  function DistinctValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new DistinctValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.DistinctValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new DistinctValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function DistinctValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = null;
  }

}());
