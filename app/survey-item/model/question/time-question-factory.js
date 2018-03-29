(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('TimeQuestionFactory', TimeQuestionFactory);

  TimeQuestionFactory.$inject = [
    'LabelFactory',
    'MetadataGroupFactory',
    'FillingRulesOptionFactory',
    'QuestionOptionFactory'
  ];

  function TimeQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory, QuestionOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();
      var questionOptionObject = QuestionOptionFactory.create();

      return new TimeQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject, questionOptionObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.TimeQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var questionOptionObject = QuestionOptionFactory.fromJsonObject(jsonObject.options);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TimeQuestion(jsonObject.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject, questionOptionObject);
      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function TimeQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject, questionOptionObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'TimeQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'LocalTime';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.options = questionOptionObject;
  
    /* Public methods */
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = [
        'mandatory',
        'minTime',
        'maxTime'
        /* TODO: Verificar se não está sendo usado. Caso não esteja excluir. */
        // 'parameter'
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
      json.label = self.label;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;
      json.options = self.options;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
