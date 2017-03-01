(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MaxDateValidatorFactory', MaxDateValidatorFactory);

    MaxDateValidatorFactory.$inject=[
      'otusjs.utils.ImmutableDate'
   ];

  function MaxDateValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxDateValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MaxDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxDateValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function MaxDateValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {value: null};
  }

}());
