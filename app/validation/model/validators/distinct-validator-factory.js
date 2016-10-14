(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('DistinctValidatorFactory', DistinctValidatorFactory);

  function DistinctValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new DistinctValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.DistinctValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new DistinctValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function DistinctValidator() {
    var self = this;

    self.reference = null;
  }

}());
