(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .service('SurveyItemManagerService', SurveyItemManagerService);

  SurveyItemManagerService.$inject = [
    'SurveyItemContainerService'
  ];

  function SurveyItemManagerService(SurveyItemContainerService) {
    var self = this;

    var incrementalIDValue = 0;

    /* Public interface */
    self.init = init;
    self.loadJsonDataObject = loadJsonDataObject;
    self.getItemList = getItemList;
    self.getItemListSize = getItemListSize;
    self.getItemByTemplateID = getItemByTemplateID;
    self.getItemByCustomID = getItemByCustomID;
    self.getItemByID = getItemByID;
    self.getItemPosition = getItemPosition;
    self.getAllCustomOptionsID = getAllCustomOptionsID;
    self.addItem = addItem;
    self.loadItem = loadItem;
    self.removeItem = removeItem;
    self.existsItem = existsItem;
    self.isAvailableCustomID = isAvailableCustomID;

    function init() {
      SurveyItemContainerService.init();
      incrementalIDValue = 0;
    }

    function loadJsonDataObject(itemContainerObject) {
      SurveyItemContainerService.loadFromItemContainerObject(itemContainerObject);
    }

    function getItemList() {
      return SurveyItemContainerService.getItemList();
    }

    function getItemListSize() {
      return SurveyItemContainerService.getItemListSize();
    }

    function getItemByTemplateID(templateID) {
      return SurveyItemContainerService.getItemByTemplateID(templateID);
    }

    function getItemByCustomID(customID) {
      return SurveyItemContainerService.getItemByCustomID(customID);
    }

    function getItemByID(id) {
      return SurveyItemContainerService.getItemByID(id);
    }

    function getItemPosition(customID) {
      return SurveyItemContainerService.getItemPosition(customID);
    }

    function getAllCustomOptionsID() {
      var customOptionsID = [];
      var checkboxQuestions = SurveyItemContainerService.getAllCheckboxQuestion();
      if (checkboxQuestions.length > 0) {
        checkboxQuestions.forEach(function(checkboxQuestion) {
          checkboxQuestion.getAllCustomOptionsID().forEach(function(customOptionID) {
            customOptionsID.push(customOptionID);
          });
        });
      }
      return customOptionsID;
    }

    function loadItem(itemType, templateID, surveyAcronym) {

      var item = SurveyItemContainerService.createItem(itemType, templateID);
      _setIncrementalIDValue(parseInt(templateID.split(surveyAcronym)[1]));
      return item;
    }

    function _setIncrementalIDValue(id) {
      incrementalIDValue = id;
    }

    function addItem(itemType, templateIDPrefix) {
      var templateID;
      do {
        templateID = templateIDPrefix + getNextIncrementalGenerator();
      } while (!isAvailableCustomID(templateID));
      var item = SurveyItemContainerService.createItem(itemType, templateID);
      return item;
    }

    function removeItem(templateID) {
      SurveyItemContainerService.removeItem(templateID);
    }

    function getNextIncrementalGenerator() {
      return ++incrementalIDValue;
    }

    function existsItem(id) {
      return SurveyItemContainerService.existsItem(id);
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
