(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('CheckboxAnswerOptionFactory', CheckboxAnswerOptionFactory);

  CheckboxAnswerOptionFactory.$inject = ['LabelFactory'];

  function CheckboxAnswerOptionFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.createWithData = createWithData;

    function create(optionID) {
      var labelObject = LabelFactory.create();
      return new CheckboxAnswerOption(optionID, labelObject);
    }

    function createWithData(checkboxAnswerOptionJSON) {
      var parsedJson = JSON.parse(checkboxAnswerOptionJSON);
      return fromJsonObject(parsedJson);
    }

    function fromJsonObject(jsonObject) {
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var CheckboxAnswerOptionObject = new CheckboxAnswerOption(jsonObject.optionID, labelObject);
      CheckboxAnswerOptionObject.customOptionID = jsonObject.customOptionID;

      return CheckboxAnswerOptionObject;
    }

    return self;
  }

  function CheckboxAnswerOption(optionID, labelObject) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'CheckboxAnswerOption';
    self.optionID = optionID;
    self.customOptionID = optionID;
    self.dataType = 'Boolean';
    self.value = false;
    self.label = labelObject;

    /* Public methods */
    self.toJson = toJson;
    self.setCustomOptionID = setCustomOptionID;

    function setCustomOptionID(id) {
      self.customOptionID = id;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.optionID = self.optionID;
      json.customOptionID = self.customOptionID;
      json.dataType = self.dataType;
      json.value = self.value;
      json.label = self.label;

      return json;
    }
  }

}());
