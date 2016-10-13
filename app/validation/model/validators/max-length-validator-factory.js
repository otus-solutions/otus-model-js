(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MaxLengthValidatorFactory', MaxLengthValidatorFactory);

  function MaxLengthValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new MaxLengthValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MaxLengthValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new MaxLengthValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function MaxLengthValidator() {
    var self = this;

    self.reference = null;
  }

}());
