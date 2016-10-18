(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MaxTimeValidatorFactory', MaxTimeValidatorFactory);

  function MaxTimeValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxTimeValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MaxTimeValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxTimeValidator();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MaxTimeValidator() {
    var self = this;

    self.reference = '';
  }

}());
