(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('InValidatorFactory', InValidatorFactory);

  function InValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new InValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.InValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new InValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function InValidator() {
    var self = this;

    self.reference = {
      'initial': null,
      'end': null
    };
  }

}());
