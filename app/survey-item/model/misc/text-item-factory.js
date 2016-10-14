(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('TextItemFactory', TextItemFactory);

  TextItemFactory.$inject = ['LabelFactory'];

  function TextItemFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      return new TextItem(templateID, prototype, labelObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.TextItem.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TextItem(templateID, prototype, labelObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function TextItem(templateID, prototype, labelObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'TextItem';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.value = labelObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.toJson = toJson;

    function isQuestion() {
      return false;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.value = self.value;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
