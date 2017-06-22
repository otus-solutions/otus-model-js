(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MinDateValidatorFactory', MinDateValidatorFactory);

    MinDateValidatorFactory.$inject=[
      'otusjs.utils.ImmutableDate'
   ];

  function MinDateValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinDateValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MinDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinDateValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MinDateValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {value: null};
  }

}());
