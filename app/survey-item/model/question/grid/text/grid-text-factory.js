(function () {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.GridTextFactory', GridTextFactory);

  GridTextFactory.$inject = [
    'LabelFactory',
    'UnitFactory',
    'otusjs.model.question.LayoutGridFactory'
  ];

  function GridTextFactory(LabelFactory, UnitFactory, LayoutGridFactory) {
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

      return new GridText(templateID, labelObject, layout, unitObject);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.GridTextFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = LabelFactory.fromJsonObject(jsonObject.label);

      var unitObject = {};
      unitObject.ptBR = UnitFactory.fromJsonObject(jsonObject.unit.ptBR);
      unitObject.enUS = UnitFactory.fromJsonObject(jsonObject.unit.enUS);
      unitObject.esES = UnitFactory.fromJsonObject(jsonObject.unit.esES);

      var layout = LayoutGridFactory.fromJsonObject(jsonObject.layout);
      var gridText = new GridText(jsonObject.templateID, labelObject, layout, unitObject);
      gridText.customID = jsonObject.customID;

      return gridText;
    }

    return self;
  }

  function GridText(templateID, labelObject, layout, unitObject) {
    var self = this;

    self.extents = 'SurveyItem';
    self.objectType = 'GridText';
    self.templateID = templateID;
    self.customID = templateID;
    self.dataType = 'String';
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
      json.layout = self.layout.toJson();
      json.unit = self.unit;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
