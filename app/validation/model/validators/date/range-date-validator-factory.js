(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

  function RangeDateValidatorFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new RangeDateValidator();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.RangeDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new RangeDateValidator();
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function RangeDateValidator() {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {
      'initial': new Date(),
      'end': new Date()
    };
  }

}());
