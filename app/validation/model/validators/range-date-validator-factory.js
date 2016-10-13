(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

  function RangeDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new RangeDateValidator();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.RangeDateValidatorFactory.fromJson() method expects to receive a object instead a String");
      }
      var validator = new RangeDateValidator();
      validator.reference = json.reference;
      return validator;
    }

    return self;
  }

  function RangeDateValidator() {
    var self = this;

    self.reference = {
      'initial': new Date(),
      'end': new Date()
    };
  }

}());
