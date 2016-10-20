(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('TextQuestionFactory', TextQuestionFactory);

  TextQuestionFactory.$inject = [
    'LabelFactory',
    'MetadataGroupFactory',
    'FillingRulesOptionFactory'
  ];

  function TextQuestionFactory(LabelFactory, MetadataGroupFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new TextQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.TextQuestionFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new TextQuestion(json.templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject);
      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function TextQuestion(templateID, prototype, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'TextQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
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
        'mandatory',
        'alphanumeric',
        'lowerCase',
        'minLength',
        'maxLength',
        'specials',
        'upperCase'
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


      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
