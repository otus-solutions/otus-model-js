(function() {
  'use strict';

  angular
    .module('otusjs.metadata')
    .factory('MetadataAnswerFactory', MetadataAnswerFactory);

  MetadataAnswerFactory.$inject = ['LabelFactory'];

  function MetadataAnswerFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(value) {
      var labelObject = LabelFactory.create();
      return new MetadataAnswer(value, labelObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MetadataAnswerFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      return new MetadataAnswer(jsonObject.value, labelObject);
    }

    return self;
  }

  function MetadataAnswer(value, labelObject) {
    var self = this;

    self.extends = 'StudioObject';
    self.objectType = 'MetadataAnswer';
    self.dataType = 'Integer';
    self.value = value;
    self.label = labelObject;
  }

}());
