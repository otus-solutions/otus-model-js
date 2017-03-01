(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('MaxTimeValidatorFactory', MaxTimeValidatorFactory);

    MaxTimeValidatorFactory.$inject=[
      'otusjs.utils.ImmutableDate'
   ];

  function MaxTimeValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MaxTimeValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MaxTimeValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new MaxTimeValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference; 
      return validator;
    }

    return self;
  }

  function MaxTimeValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {value:''};
  }

}());
