(function () {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.FillingManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.QuestionFillFactory'
  ];

  function Factory(QuestionFillFactory) {
    var self = this;

    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new FillingManager();
    }

    function fromJsonObject(jsonObject) {
      var fillingList = jsonObject.fillingList.map(QuestionFillFactory.fromJsonObject);
      var fillingManager = new FillingManager();
      fillingManager.init(fillingList);

      return fillingManager;
    }

    return self;
  }

  function FillingManager() {
    var self = this;
    var _fillingList = [];

    /* Public methods */
    self.init = init;
    self.listSize = listSize;
    self.getFillingIndex = getFillingIndex;
    self.existsFillingTo = existsFillingTo;
    self.searchFillingByID = searchFillingByID;
    self.updateFilling = updateFilling;
    self.clearFilling = clearFilling;
    self.buildJsonToFillContainer = buildJsonToFillContainer;

    function init(fillingList) {
      _fillingList = fillingList || [];
    }

    function listSize() {
      return _fillingList.length;
    }

    function getFillingIndex(questionID) {
      var result = _searchByID(questionID);
      return (result) ? result.index : null;
    }

    function existsFillingTo(questionID) {
      return (_searchByID(questionID)) ? true : false;
    }

    function searchFillingByID(questionID) {
      var result = _searchByID(questionID);
      return (result) ? result.filling : null;
    }

    function updateFilling(filling) {
      if (filling.isFilled()) {
        if (!existsFillingTo(filling.questionID)) {
          _add(filling);
        } else {
          return _replaceFilling(filling);
        }
      } else {
        return _removeFilling(filling.questionID);
      }
    }

    function clearFilling(questionID) {
      _removeFilling(questionID);
    }

    function buildJsonToFillContainer() {
      var json = {};

      json.fillingList = _fillingList.map(function (questionFill) {
        return questionFill.toJSON();
      });

      return json; 
    }

    function _searchByID(questionID) {
      var result;

      _fillingList.forEach(function (filling, index) {
        if (filling.questionID === questionID) {
          result = {};
          result.filling = filling;
          result.index = index;
        }
      });

      return result;
    }

    function _add(filling) {
      _fillingList.push(filling);
    }

    function _replaceFilling(filling) {
      var result = _searchByID(filling.questionID);
      if (result !== undefined) {
        return _fillingList.splice(result.index, 1, filling)[0];
      } else {
        return null;
      }
    }

    function _removeFilling(questionID) {
      var result = _searchByID(questionID);
      if (result !== undefined) {
        return _fillingList.splice(result.index, 1)[0];
      } else {
        return null;
      }
    }
  }
}());
