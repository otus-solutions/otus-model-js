(function() {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('SurveyFormFactory', Factory);

  Factory.$inject = [
    'SurveyFactory'
  ];

  function Factory(SurveyFactory) {
    var self = this;

    self.OBJECT_TYPE = 'SurveyForm';

    /* Public interdace */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(options) {
      return new SurveyForm(options);
    }

    function fromJsonObject(jsonObject) {
      var surveyForm = new SurveyForm(jsonObject);
      surveyForm.surveyTemplate = SurveyFactory.fromJsonObject(jsonObject.surveyTemplate);
      return surveyForm;
    }

    return self;
  }

  function SurveyForm(options) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'SurveyForm';
    self._id = options._id || undefined;
    self.sender = options.sender || null;
    self.sendingDate = options.sendingDate || null;
    self.surveyFormType = options.surveyFormType || null;
    self.surveyTemplate = options.surveyTemplate || null;
    self.version = options.version || null;
    self.isDiscarded = options.isDiscarded || false;
    /* Public methods */
    self.getItems = getItems;
    self.toJson = toJson;

    function getItems() {
      return self.surveyTemplate.getItems();
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json._id = self._id;
      json.sender = self.sender;
      json.sendingDate = self.sendingDate;
      json.surveyFormType = self.surveyFormType;
      json.surveyTemplate = self.surveyTemplate.toJson();
      json.version = self.version;
      json.isDiscarded = self.isDiscarded;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\":/g, '":').replace(/:\\"/g, ':"').replace(/\\",/g, '",').replace(/,\\"/g, ',"').replace(/{\\"/g, '{"').replace(/\\":\[/g, '":[').replace(/\[\\"/g, '["').replace(/\\"\]/g, '"]').replace(/\\"}/g, '"}').replace(/\\\\"/g, '\"');
    }
  }
}());
