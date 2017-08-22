(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.GridNumericQuestionFactory', GridNumericQuestionFactory);

  GridNumericQuestionFactory.$inject = [
    'MetadataGroupFactory',
    'FillingRulesOptionFactory',
    'LabelFactory',
    'otusjs.model.question.GridNumericLineFactory'
  ];

  function GridNumericQuestionFactory(MetadataGroupFactory, FillingRulesOptionFactory, LabelFactory, GridNumericLineFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();
      var labelObject = LabelFactory.create();

      return new GridNumerictQuestion(templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridNumericLineFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridNumerictQuestion.fromJsonObject() method expects to receive a object instead a String");
      }
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new GridNumerictQuestion(jsonObject.templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridNumericLineFactory);
      question.loadFromJsonLinesObject(jsonObject.lines);
      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function GridNumerictQuestion(templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridNumericLineFactory) {
    var self = this;
    var _lines = [];

    self.extents = prototype.objectType;
    self.objectType = 'GridNumerictQuestion';
    self.templateID = templateID;
    self.customID = templateID;
    self.metadata = metadataGroupObject;
    self.fillingRules = fillingRulesObject;
    self.label = labelObject;

    /* Public methods */
    self.createLine = createLine;
    self.removeLine = removeLine;
    self.removeLastLine = removeLastLine;
    self.filterItems = filterItems;
    self.getLineIndex = getLineIndex;
    self.getLinesList = getLinesList;
    self.getLinesListSize = getLinesListSize;
    self.isQuestion = isQuestion;
    self.validators = validators;
    self.getAllCustomOptionsID = getAllCustomOptionsID;
    self.loadFromJsonLinesObject = loadFromJsonLinesObject;
    self.toJson = toJson;

    function createLine() {
      var line = GridNumericLineFactory.create();
      _lines.push(line);
      return line;
    }

    function removeLine(index) {
      _lines.splice(index, 1);
    }

    function removeLastLine() {
      _lines.splice(-1, 1);
    }

    function filterItems(query) {
      return _lines.filter(query);
    }

    function getLineIndex(gridLine) {
      return _lines.indexOf(gridLine);
    }

    function getLinesList() {
      return _lines;
    }

    function getLinesListSize() {
      return _lines.length;
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

    function getAllCustomOptionsID() {
      return _lines.map(function(line) {
        return line.getAllGridNumericCustomOptionsID();
      });
    }

    function loadFromJsonLinesObject(lines) {
      _lines = [];
      lines.forEach(function(gridNumericLine) {
        _lines.push(GridNumericLineFactory.fromJsonObject(gridNumericLine));
      });
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;
      json.label = self.label;
      json.lines = [];
      _lines.forEach(function(line) {
        json.lines.push(line.toJson());
      })

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }
}());
