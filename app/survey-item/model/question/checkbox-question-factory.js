(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('CheckboxQuestionFactory', CheckboxQuestionFactory);

  CheckboxQuestionFactory.$inject = [
    'LabelFactory',
    'MetadataGroupFactory',
    'CheckboxAnswerOptionFactory',
    'FillingRulesOptionFactory'
  ];

  function CheckboxQuestionFactory(LabelFactory, MetadataGroupFactory, CheckboxAnswerOptionFactory, FillingRulesOptionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var labelObject = LabelFactory.create();
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();

      return new CheckboxQuestion(templateID, prototype, CheckboxAnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.CheckboxQuestionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new CheckboxQuestion(jsonObject.templateID, prototype, CheckboxAnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject);

      jsonObject.options.forEach(function(checkboxAnswerOption) {
        question.options.push(CheckboxAnswerOptionFactory.fromJsonObject(checkboxAnswerOption));
      });

      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function CheckboxQuestion(templateID, prototype, CheckboxAnswerOptionFactory, labelObject, metadataGroupObject, fillingRulesObject) {
    var self = this;

    self.extents = prototype.objectType;
    self.objectType = 'CheckboxQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Array';
    self.label = labelObject;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.options = [];

    /* Public methods */
    self.getOptionList = getOptionList;
    self.getOptionListSize = getOptionListSize;
    self.getOptionByValue = getOptionByValue;
    self.getOptionByOptionID = getOptionByOptionID;
    self.getOptionByCustomOptionID = getOptionByCustomOptionID;
    self.createOption = createOption;
    self.loadJsonOption = loadJsonOption;
    self.removeOption = removeOption;
    self.removeLastOption = removeLastOption;
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.getAllCustomOptionsID = getAllCustomOptionsID;
    self.toJson = toJson;

    function getOptionList() {
      return self.options;
    }

    function getOptionListSize() {
      return self.options.length;
    }

    function getOptionByOptionID(optionID) {
      var aux = null;
      for (var i = 0; i < self.options.length; i++) {
        if (self.options[i].optionID === optionID) {
          aux = self.options[i];
        }
      }
      return aux;
    }

    function getOptionByCustomOptionID(customOptionID) {
      var aux = null;
      for (var i = 0; i < self.options.length; i++) {
        if (self.options[i].customOptionID === customOptionID) {
          aux = self.options[i];
        }
      }
      return aux;
    }

    function getOptionByValue(value) {
      return self.options[value - 1];
    }

    function isQuestion() {
      return true;
    }

    function validators() {
      var validatorsList = [
        'mandatory',
        'minSelected',
        'maxSelected',
        'quantity'
      ];

      return validatorsList;
    }

    function createOption(id) {
      var option = CheckboxAnswerOptionFactory.create(id);
      self.options.push(option);
      return option;
    }

    function loadJsonOption(checkboxAnswerOptionJSON) {
      var option = CheckboxAnswerOptionFactory.createWithData(checkboxAnswerOptionJSON);
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

    function getAllCustomOptionsID() {
      var customOptionsID = [];
      self.options.forEach(function(option) {
        customOptionsID.push(option.customOptionID);
      });
      return customOptionsID;
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
