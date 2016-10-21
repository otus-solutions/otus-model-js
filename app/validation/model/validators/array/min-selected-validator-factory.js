(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('otusjs.model.validation.MinSelectedValidatorFactory', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinSelectedValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.validation.MinSelectedValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinSelectedValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinSelectedValidator() {
    var self = this;

    self.reference = null;
  }

}());
