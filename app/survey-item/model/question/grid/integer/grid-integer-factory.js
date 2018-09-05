(function () {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.GridIntegerFactory', GridIntegerFactory);

  GridIntegerFactory.$inject = [
    'LabelFactory',
    'UnitFactory',
    'otusjs.model.question.LayoutGridFactory'
  ];

  function GridIntegerFactory(LabelFactory, UnitFactory, LayoutGridFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(templateID) {
      var labelObject = LabelFactory.create();
      var layout = LayoutGridFactory.create();

      var unitObject = {};
      unitObject.ptBR = UnitFactory.create();
      unitObject.enUS = UnitFactory.create();
      unitObject.esES = UnitFactory.create();

      return new GridInteger(templateID, labelObject, layout, unitObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.GridIntegerFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);

      var unitObject = {};
      unitObject.ptBR = UnitFactory.fromJsonObject(jsonObject.unit.ptBR);
      unitObject.enUS = UnitFactory.fromJsonObject(jsonObject.unit.enUS);
      unitObject.esES = UnitFactory.fromJsonObject(jsonObject.unit.esES);

      var layout = LayoutGridFactory.fromJsonObject(jsonObject.layout);
      var gridInteger = new GridInteger(jsonObject.templateID, labelObject, layout, unitObject);
      gridInteger.customID = jsonObject.customID;

      return gridInteger;
    }

    return self;
  }

  function GridInteger(templateID, labelObject, layout, unitObject) {
    var self = this;

    self.extents = 'SurveyItem';
    self.objectType = 'GridInteger';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'Integer';
    self.label = labelObject;
    self.layout = layout;
    self.unit = unitObject;

    /* Public methods */
    self.setWidth = setWidth;
    self.getWidth = getWidth;
    self.setColor = setColor;
    self.getColor = getColor;
    self.isQuestion = isQuestion;
    self.toJson = toJson;

    function setWidth(width) {
      self.layout.width = width;
    }

    function getWidth() {
      return self.layout.width;
    }

    function setColor(color) {
      self.layout.color = color;
    }

    function getColor() {
      return self.layout.color;
    }

    function isQuestion() {
      return true;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.templateID = self.templateID;
      json.customID = self.customID;
      json.dataType = self.dataType;
      json.label = self.label;
      json.layout = JSON.parse(self.layout.toJson());
      json.unit = self.unit;

      return JSON.stringify(json);
    }
  }

}());
