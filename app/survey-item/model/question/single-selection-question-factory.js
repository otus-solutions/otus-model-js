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
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new SingleSelectionQuestion(templateID, prototype, AnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.SingleSelectionQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new SingleSelectionQuestion(jsonObject.templateID, prototype, AnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);

      jsonObject.options.forEach(function(answerOption) {
        question.options.push(AnswerOptionFactory.fromJsonObject(answerOption));
      });

      question.customID = jsonObject.customID;

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
    self.getOptionByExtractionValue = getOptionByExtractionValue;
    self.createOption = createOption;
    self.removeOption = removeOption;
    self.removeLastOption = removeLastOption;
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.isAvailableExtractionValue = isAvailableExtractionValue;
    self.isAvailableValue = isAvailableValue;
    self.toJson = toJson;

    function getOptionListSize() {
      return self.options.length;
    }

    function getOptionByValue(value) {
      var filter = self.options.filter(function(option) {
        if (option.value === value) {
          return option;
        }
      });

      return filter[0];
    }

    function getOptionByExtractionValue(extractionValue) {
      var filter = self.options.filter(function(option) {
        if (option.extractionValue.toString() === extractionValue.toString()) {
          return option;
        }
      });

      return filter[0];
    }

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = [
        'accept',
        'mandatory'
      ];
      return validatorsList;
    }

    function createOption() {
      var value = self.options.length;

      do {
        value++;
      } while (!(isAvailableExtractionValue(value) && isAvailableValue(value)));

      var option = AnswerOptionFactory.create(value, value);
      self.options.push(option);

      return option;
    }

    function removeOption(value) {
      self.options.splice((value - 1), 1);
      _reorderOptionValues();
    }

    function removeLastOption() {
      self.options.splice(-1, 1);
    }

    function isAvailableExtractionValue(newValue) {
      return getOptionByExtractionValue(newValue) ? false : true;
    }

    function isAvailableValue(value) {
      return getOptionByValue(value) ? false : true;
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

    function _reorderOptionValues() {
      self.options.forEach(function(option, index) {
        option.value = ++index;
      });
    }
  }

}());
