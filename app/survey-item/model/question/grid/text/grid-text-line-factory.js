(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.GridTextLineFactory', GridTextLineFactory);

  GridTextLineFactory.$inject = [
    'otusjs.model.question.GridTextFactory'
  ];

  function GridTextLineFactory(GridTextFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new GridTextLine(GridTextFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridTextLine.fromJsonObject() method expects to receive a object instead a String");
      }
      var gridTextLine = new GridTextLine(GridTextFactory);
      gridTextLine.loadGridTextListFromJsonObject(jsonObject.gridTextList)

      return gridTextLine;
    }

    return self;
  }

  function GridTextLine(GridTextFactory) {
    var self = this;
    var _gridTextList = [];

    self.extents = 'StudioObject';
    self.objectType = 'GridTextLine';

    /* Public methods */
    self.addGridText = addGridText;
    self.removeGridText = removeGridText;
    self.removeLastGridText = removeLastGridText;
    self.filterItems = filterItems;
    self.getGridTextIndex = getGridTextIndex;
    self.getGridTextList = getGridTextList;
    self.getGridTextListSize = getGridTextListSize;
    self.getAllGridTextCustomOptionsID = getAllGridTextCustomOptionsID;
    self.loadGridTextListFromJsonObject = loadGridTextListFromJsonObject;
    self.toJson = toJson;

    function addGridText(templateID) {
      var gridText = GridTextFactory.create(templateID);
      _gridTextList.push(gridText);
      return gridText;
    }

    function removeGridText(index) {
      return _gridTextList.splice((index - 1), 1);
    }

    function removeLastGridText() {
      return _gridTextList.splice(-1, 1);
    }

    function filterItems(query) {
      return _gridTextList.filter(query);
    }

    function getGridTextIndex(index) {
      return _gridTextList.filter(function(gridText, i) {
        if (i === index) return gridText
      });
    }

    function getGridTextList() {
      return _gridTextList;
    }

    function getGridTextListSize() {
      return _gridTextList.length;
    }

    function getAllGridTextCustomOptionsID() {
      return _gridTextList.map(function(gridText) {
        return gridText.customID;
      });
    }

    function loadGridTextListFromJsonObject(gridTextList) {
      _gridTextList = [];
      gridTextList.forEach(function(gridText) {
        _gridTextList.push(GridTextFactory.fromJsonObject(gridText));
      });
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.gridTextList = _gridTextList;

      return json;
    }
  }

}());
