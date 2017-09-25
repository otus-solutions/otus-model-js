(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('SurveyItemManagerFactory', Factory);

  Factory.$inject = [
    'SurveyItemContainerFactory'
  ];

  function Factory(SurveyItemContainerFactory) {
    var self = this;

    self.create = create;

    function create() {
      return new SurveyItemManager(SurveyItemContainerFactory.create());
    }

    return self;
  }

  function SurveyItemManager(surveyItemContainer) {
    var self = this;
    var incrementalIDValue = 0;

    /* Public interface */
    self.init = init;
    self.loadJsonDataObject = loadJsonDataObject;
    self.setIncrementalIDValue = setIncrementalIDValue;
    self.getItemList = getItemList;
    self.getItemListSize = getItemListSize;
    self.getItemByTemplateID = getItemByTemplateID;
    self.getItemByCustomID = getItemByCustomID;
    self.getItemByID = getItemByID;
    self.getItemPosition = getItemPosition;
    self.getAllCustomOptionsID = getAllCustomOptionsID;
    self.getLastItem = getLastItem;
    self.addItem = addItem;
    self.loadItem = loadItem;
    self.removeItem = removeItem;
    self.existsItem = existsItem;
    self.isAvailableCustomID = isAvailableCustomID;

    function init() {
      // surveyItemContainer.init();
      incrementalIDValue = 0;
    }

    function loadJsonDataObject(itemContainerObject) {
      surveyItemContainer.loadFromItemContainerObject(itemContainerObject);
    }

    function getItemList() {
      return surveyItemContainer.getItemList();
    }

    function getItemListSize() {
      return surveyItemContainer.getItemListSize();
    }

    function getItemByTemplateID(templateID) {
      return surveyItemContainer.getItemByTemplateID(templateID);
    }

    function getItemByCustomID(customID) {
      return surveyItemContainer.getItemByCustomID(customID);
    }

    function getItemByID(id) {
      return surveyItemContainer.getItemByID(id);
    }

    function getItemPosition(customID) {
      return surveyItemContainer.getItemPosition(customID);
    }

    function getAllCustomOptionsID() {
      var customOptionsID = [];
      var checkboxQuestions = surveyItemContainer.getAllCheckboxQuestion();
      var gridTextQuestions = surveyItemContainer.getAllGridTextQuestion();
      var gridIntegerQuestions = surveyItemContainer.getAllGridIntegerQuestion();
      if (checkboxQuestions.length > 0) {
        checkboxQuestions.forEach(function(checkboxQuestion) {
          checkboxQuestion.getAllCustomOptionsID().forEach(function(customOptionID) {
            customOptionsID.push(customOptionID);
          });
        });
      }

      if (gridTextQuestions.length > 0) {
        gridTextQuestions.forEach(function(gridTextQuestion) {
          gridTextQuestion.getAllCustomOptionsID().forEach(function(arrayResult) {
            arrayResult.forEach(function(customOptionID){
              customOptionsID.push(customOptionID);
            })
          });
        });
      }

      if (gridIntegerQuestions.length > 0) {
        gridIntegerQuestions.forEach(function(gridIntegerQuestion) {
          gridIntegerQuestion.getAllCustomOptionsID().forEach(function(arrayResult) {
            arrayResult.forEach(function(customOptionID){
              customOptionsID.push(customOptionID);
            })
          });
        });
      }

      return customOptionsID;
    }

    function getLastItem() {
      return surveyItemContainer.getLastItem();
    }

    function loadItem(itemType, templateID, surveyAcronym) {
      var item = surveyItemContainer.createItem(itemType, templateID);
      self.setIncrementalIDValue(parseInt(templateID.split(surveyAcronym)[1]));
      return item;
    }

    function setIncrementalIDValue(id) {
      incrementalIDValue = id;
    }

    function addItem(itemType, templateIDPrefix) {
      var templateID;
      do {
        templateID = templateIDPrefix + _getNextIncrementalGenerator();
      } while (!isAvailableCustomID(templateID));
      var item = surveyItemContainer.createItem(itemType, templateID);
      return item;
    }

    function removeItem(templateID) {
      surveyItemContainer.removeItem(templateID);
    }

    function _getNextIncrementalGenerator() {
      return ++incrementalIDValue;
    }

    function existsItem(id) {
      return surveyItemContainer.existsItem(id);
    }

    function isAvailableCustomID(id) {
      var foundCustomOptionID = false;
      getAllCustomOptionsID().forEach(function(customOptionID) {
        if (customOptionID === id) {
          foundCustomOptionID = true;
        }
      });
      return (getItemByCustomID(id) || foundCustomOptionID) ? false : true;
    }
  }
}());
