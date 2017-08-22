(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.GridNumericLineFactory', GridNumericLineFactory);

  GridNumericLineFactory.$inject = [
    'otusjs.model.question.GridNumericFactory'
  ];

  function GridNumericLineFactory(GridNumericFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new GridNumericLine(GridNumericFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridNumericLine.fromJsonObject() method expects to receive a object instead a String");
      }
      var gridNumericLine = new GridNumericLine(GridNumericFactory);
      gridNumericLine.loadGridTextListFromJsonObject(jsonObject.gridNumericList)

      return gridNumericLine;
    }

    return self;
  }

  function GridNumericLine(GridNumericFactory) {
    var self = this;
    var _gridNumericList = [];

    self.extents = 'StudioObject';
    self.objectType = 'GridNumericLine';

    /* Public methods */
    self.addGridNumeric = addGridNumeric;
    self.removeGridNumeric = removeGridNumeric;
    self.removeLastGridNumeric = removeLastGridNumeric;
    self.filterItems = filterItems;
    self.getGridNumericIndex = getGridNumericIndex;
    self.getGridNumericList = getGridNumericList;
    self.getGridNumericListSize = getGridNumericListSize;
    self.getAllGridNumericCustomOptionsID = getAllGridNumericCustomOptionsID;
    self.loadGridNumericListFromJsonObject = loadGridNumericListFromJsonObject;
    self.toJson = toJson;

    function addGridNumeric(templateID) {
      var gridNumeric = GridNumericFactory.create(templateID);
      _gridNumericList.push(gridNumeric);
      return gridText;
    }

    function removeGridNumeric(index) {
      return _gridNumericList.splice((index - 1), 1);
    }

    function removeLastGridNumeric() {
      return _gridNumericList.splice(-1, 1);
    }

    function filterItems(query) {
      return _gridNumericList.filter(query);
    }

    function getGridNumericIndex(index) {
      return _gridNumericList.filter(function(gridNumeric, i) {
        if (i === index) return gridNumeric
      });
    }

    function getGridNumericList() {
      return _gridNumericList;
    }

    function getGridNumericListSize() {
      return _gridNumericList.length;
    }

    function getAllGridNumericCustomOptionsID() {
      return _gridNumericList.map(function(gridNumeric) {
        return gridNumeric.customID;
      });
    }

    function loadGridNumericListFromJsonObject(gridNumericList) {
      _gridNumericList = [];
      gridNumericList.forEach(function(gridNumeric) {
        _gridNumericList.push(GridNumericFactory.fromJsonObject(gridNumeric));
      });
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.gridNumericList = _gridNumericList;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
