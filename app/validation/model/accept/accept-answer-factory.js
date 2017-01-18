(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('otusjs.model.accept.AcceptAnswerFactory', AcceptAnswerFactory);

  function AcceptAnswerFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new AcceptAnswer();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.AcceptAnswerFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var validator = new AcceptAnswer();
      validator.reference = jsonObject.reference;
      return validator;
    }

    return self;
  }

  function AcceptAnswer() {
    var self = this;

    self.reference = false;
  }

}());
