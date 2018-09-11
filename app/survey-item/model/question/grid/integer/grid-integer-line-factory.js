(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.GridIntegerLineFactory', GridIntegerLineFactory);

  GridIntegerLineFactory.$inject = [
    'otusjs.model.question.GridIntegerFactory'
  ];

  function GridIntegerLineFactory(GridIntegerFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new GridIntegerLine(GridIntegerFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.question.model.GridIntegerLine.fromJsonObject() method expects to receive a object instead a String");
      }
      var gridIntegerLine = new GridIntegerLine(GridIntegerFactory);
      gridIntegerLine.loadGridIntegerListFromJsonObject(jsonObject.gridIntegerList)

      return gridIntegerLine;
    }

    return self;
  }

  function GridIntegerLine(GridIntegerFactory) {
    var self = this;
    var _gridIntegerList = [];

    self.extents = 'StudioObject';
    self.objectType = 'GridIntegerLine';

    /* Public methods */
    self.addGridInteger = addGridInteger;
    self.removeGridInteger = removeGridInteger;
    self.removeLastGridInteger = removeLastGridInteger;
    self.filterItems = filterItems;
    self.getGridIntegerIndex = getGridIntegerIndex;
    self.getGridIntegerList = getGridIntegerList;
    self.getGridIntegerListSize = getGridIntegerListSize;
    self.getAllGridIntegerCustomOptionsID = getAllGridIntegerCustomOptionsID;
    self.loadGridIntegerListFromJsonObject = loadGridIntegerListFromJsonObject;
    self.toJson = toJson;

    function addGridInteger(templateID) {
      var gridInteger = GridIntegerFactory.create(templateID);
      _gridIntegerList.push(gridInteger);
      return gridInteger;
    }

    function removeGridInteger(index) {
      return _gridIntegerList.splice((index - 1), 1);
    }

    function removeLastGridInteger() {
      return _gridIntegerList.splice(-1, 1);
    }

    function filterItems(query) {
      return _gridIntegerList.filter(query);
    }

    function getGridIntegerIndex(index) {
      return _gridIntegerList.filter(function(gridInteger, i) {
        if (i === index) return gridInteger
      });
    }

    function getGridIntegerList() {
      return _gridIntegerList;
    }

    function getGridIntegerListSize() {
      return _gridIntegerList.length;
    }

    function getAllGridIntegerCustomOptionsID() {
      return _gridIntegerList.map(function(gridInteger) {
        return gridInteger.customID;
      });
    }

    function loadGridIntegerListFromJsonObject(gridIntegerList) {
      _gridIntegerList = [];
      gridIntegerList.forEach(function(gridInteger) {
        _gridIntegerList.push(GridIntegerFactory.fromJsonObject(gridInteger));
      });
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.gridIntegerList = _gridIntegerList;

      return json;
    }
  }

}());
