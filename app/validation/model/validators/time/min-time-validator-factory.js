(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MinTimeValidatorFactory', MinTimeValidatorFactory);

    MinTimeValidatorFactory.$inject=[
      'otusjs.utils.ImmutableDate'
   ];

  function MinTimeValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MinTimeValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MinTimeValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MinTimeValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference; 
      return validator;
    }

    return self;
  }

  function MinTimeValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {value:''};
  }

}());
