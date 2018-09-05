(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('AutocompleteQuestionFactory', AutocompleteQuestionFactory);

  AutocompleteQuestionFactory.$inject = [
    'LabelFactory',
    'MetadataGroupFactory',
    'FillingRulesOptionFactory'
  ];

  function AutocompleteQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new AutocompleteQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.AutocompleteQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new AutocompleteQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = jsonObject.customID;
      question.dataSources = jsonObject.dataSources;

      return question;
    }

    return self;
  }

  function AutocompleteQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'AutocompleteQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
    self.dataSources = [];
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;

    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = [
        'mandatory'
      ];
      return validatorsList;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.dataSources = self.dataSources;
      json.label = self.label;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;

      return JSON.stringify(json);
    }
  }

}());
