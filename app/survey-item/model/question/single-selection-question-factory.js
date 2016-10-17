(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('SingleSelectionQuestionFactory', SingleSelectionQuestionFactory);

  SingleSelectionQuestionFactory.$inject = [
    'LabelFactory',
    'MetadataGroupFactory',
    'AnswerOptionFactory',
    'FillingRulesOptionFactory'
  ];

  function SingleSelectionQuestionFactory(LabelFactory, MetadataGroupFactory, AnswerOptionFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new SingleSelectionQuestion(templateID, prototype, AnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.SingleSelectionQuestion.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJson(json.label);
      var metadataGroupObject = MetadataGroupFactory.fromJson(json.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJson(json.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new SingleSelectionQuestion(json.templateID, prototype, AnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);

      json.options.forEach(function(answerOption){
        question.options.push(AnswerOptionFactory.fromJsonObject(answerOption));
      });

      question.customID = json.customID;

      return question;
    }

    return self;
  }

  function SingleSelectionQuestion(templateID, prototype, AnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'SingleSelectionQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Integer';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.options = [];

    /* Public methods */
    self.getOptionListSize = getOptionListSize;
    self.getOptionByValue = getOptionByValue;
    self.createOption = createOption;
    self.removeOption = removeOption;
    self.removeLastOption = removeLastOption;
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.toJson = toJson;

    function getOptionListSize() {
      return self.options.length;
    }

    function getOptionByValue(value) {
      return self.options[value - 1];
    }

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = [
        'mandatory'
      ];
      return validatorsList;
    }

    function createOption() {
      var option = AnswerOptionFactory.create(self.options.length + 1);
      self.options.push(option);
      return option;
    }

    function removeOption(value) {
      self.options.splice((value - 1), 1);
      reorderOptionValues();
    }

    function removeLastOption() {
      self.options.splice(-1, 1);
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.options = self.options;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }

    function reorderOptionValues() {
      self.options.forEach(function(option, index) {
        option.value = ++index;
      });
    }
  }

}());
