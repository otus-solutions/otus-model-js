(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

    RangeDateValidatorFactory.$inject=[
      'otusjs.utils.ImmutableDate'
   ];

  function RangeDateValidatorFactory(ImmutableDate) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new RangeDateValidator(ImmutableDate);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.RangeDateValidatorFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new RangeDateValidator(ImmutableDate);
      validator.canBeIgnored = jsonObject.canBeIgnored;
      validator.reference = jsonObject.reference; 
      return validator;
    }

    return self;
  }

  function RangeDateValidator(ImmutableDate) {
    var self = this;

    self.canBeIgnored = true;
    self.reference = {
      initial: {value:null},
      end: {value:null}
    };
  }

}());
