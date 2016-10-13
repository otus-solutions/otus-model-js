(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('AlphanumericValidatorFactory', AlphanumericValidatorFactory);

  function AlphanumericValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new AlphanumericValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.AlphanumericValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new AlphanumericValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function AlphanumericValidator() {
    var self = this;

    self.reference = true;
  }

}());
