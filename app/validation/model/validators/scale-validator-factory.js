(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('ScaleValidatorFactory', ScaleValidatorFactory);

  function ScaleValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ScaleValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.ScaleValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new ScaleValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function ScaleValidator() {
    var self = this;

    self.reference = null;
  }

}());
