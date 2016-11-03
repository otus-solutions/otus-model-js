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

    function create(value, extractionValue) {
      var labelObject = LabelFactory.create();
      return new MetadataAnswer(value, extractionValue, labelObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MetadataAnswerFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      return new MetadataAnswer(jsonObject.value, jsonObject.extractionValue, labelObject);
    }

    return self;
  }

  function MetadataAnswer(value, extractionValue, labelObject) {
    var self = this;

    self.extends = 'StudioObject';
    self.objectType = 'MetadataAnswer';
    self.dataType = 'Integer';
    self.value = value;
    self.extractionValue = extractionValue;
    self.label = labelObject;

    self.setExtractionValue = setExtractionValue;

    function setExtractionValue(newExtractionValue) {
      self.extractionValue = newExtractionValue;
    }
  }

}());