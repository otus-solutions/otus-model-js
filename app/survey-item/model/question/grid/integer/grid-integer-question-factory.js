(function () {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.GridIntegerQuestionFactory', GridIntegerQuestionFactory);

  GridIntegerQuestionFactory.$inject = [
    'MetadataGroupFactory',
    'FillingRulesOptionFactory',
    'LabelFactory',
    'otusjs.model.question.GridIntegerLineFactory'
  ];

  function GridIntegerQuestionFactory(MetadataGroupFactory, FillingRulesOptionFactory, LabelFactory, GridIntegerLineFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID, prototype) {
      var metadataGroupObject = MetadataGroupFactory.create();
      var fillingRulesObject = FillingRulesOptionFactory.create();
      var labelObject = LabelFactory.create();

      return new GridIntegerQuestion(templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridIntegerLineFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridIntegerQuestion.fromJsonObject() method expects to receive a object instead a String");
      }
      var metadataGroupObject = MetadataGroupFactory.fromJsonObject(jsonObject.metadata);
      var fillingRulesObject = FillingRulesOptionFactory.fromJsonObject(jsonObject.fillingRules);
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);

      var prototype = {};
      prototype.objectType = "SurveyItem";
      var question = new GridIntegerQuestion(jsonObject.templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridIntegerLineFactory);
      question.loadFromJsonLinesObject(jsonObject.lines);
      question.customID = jsonObject.customID;

      return question;
    }

    return self;
  }

  function GridIntegerQuestion(templateID, prototype, metadataGroupObject, fillingRulesObject, labelObject, GridIntegerLineFactory) {
    var self = this;
    var _lines = [];

    self.extents = prototype.objectType;
    self.objectType = 'GridIntegerQuestion';
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
    self.toJSON = toJSON;

    function createLine() {
      var line = GridIntegerLineFactory.create();
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
      return _lines.map(function (line) {
        return line.getAllGridIntegerCustomOptionsID();
      });
    }

    function loadFromJsonLinesObject(lines) {
      _lines = [];
      lines.forEach(function (gridIntegerLine) {
        _lines.push(GridIntegerLineFactory.fromJsonObject(gridIntegerLine));
      });
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.metadata = self.metadata;
      json.fillingRules = self.fillingRules;
      json.label = self.label;
      json.lines = [];
      _lines.forEach(function (line) {
        json.lines.push(line.toJSON());
      })

      return json;
    }
  }
}());
