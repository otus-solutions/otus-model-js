(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('AnswerOptionFactory', AnswerOptionFactory);

  AnswerOptionFactory.$inject = ['LabelFactory'];

  function AnswerOptionFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;
    self.fromJsonObject = fromJsonObject;

    function create(value, extractionValue, parentQuestionID) {
      var labelObject = LabelFactory.create();
      return new AnswerOption(value, extractionValue, parentQuestionID, labelObject);
    }

    function fromJson(json) {
      return fromJsonObject(JSON.parse(json));
    }

    function fromJsonObject(jsonObject) {
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      return new AnswerOption(jsonObject.value, jsonObject.extractionValue, jsonObject.parentQuestionID, labelObject);
    }

    return self;
  }

  function AnswerOption(value, extractionValue, parentQuestionID, labelObject) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'AnswerOption';
    self.value = value;
    self.extractionValue = extractionValue;
    self.dataType = 'Integer';
    self.label = labelObject;
    self.parentQuestionID = parentQuestionID;

    /* Public methods */
    self.toJson = toJson;
    self.setExtractionValue = setExtractionValue;

    function setExtractionValue(newExtractionValue) {
      self.extractionValue = newExtractionValue;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.value = self.value;
      json.extractionValue = self.extractionValue;
      json.dataType = self.dataType;
      json.label = self.label;
      json.metadata = self.metadata;
      json.parentQuestionID = self.parentQuestionID;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());