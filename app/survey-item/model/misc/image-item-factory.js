(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('ImageItemFactory', ImageItemFactory);

  ImageItemFactory.$inject = ['LabelFactory'];

  function ImageItemFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      return new ImageItem(templateID, prototype, labelObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.ImageItemFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.footer);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new ImageItem(jsonObject.templateID, prototype, labelObject);
      question.customID = jsonObject.customID;
      question.url = jsonObject.url;

      return question;
    }

    return self;
  }

  function ImageItem(templateID, prototype, labelObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'ImageItem';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.url = '';
    self.footer = labelObject;

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
      json.url = self.url;
      json.footer = self.footer;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
