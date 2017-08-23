(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('SurveyItemContainerFactory', Factory);

  Factory.$inject = ['SurveyItemFactory'];

  function Factory(SurveyItemFactory) {
    var self = this;

    self.create = create;

    function create() {
      return new SurveyItemContainer(SurveyItemFactory);
    }

    return self;
  }

  function SurveyItemContainer(SurveyItemFactory) {
    var self = this;
    var _itemList = []; // TODO: To implement Immutable collection

    /* Public methods */
    self.loadFromItemContainerObject = loadFromItemContainerObject;
    self.manageItems = manageItems;
    self.getItemList = getItemList;
    self.getItemListSize = getItemListSize;
    self.getItemByTemplateID = getItemByTemplateID;
    self.getItemByCustomID = getItemByCustomID;
    self.getItemByID = getItemByID;
    self.getAllCheckboxQuestion = getAllCheckboxQuestion;
    self.getAllGridTextQuestion = getAllGridTextQuestion;
    self.getAllGridNumericQuestion = getAllGridNumericQuestion;
    self.getItemByPosition = getItemByPosition;
    self.getItemPosition = getItemPosition;
    self.getLastItem = getLastItem;
    self.existsItem = existsItem;
    self.createItem = createItem;
    self.removeItem = removeItem;
    self.removeItemByPosition = removeItemByPosition;
    self.removeCurrentLastItem = removeCurrentLastItem;

    function loadFromItemContainerObject(itemContainerObject) {
      _itemList = [];
      itemContainerObject.forEach(function(item) {
        _itemList.push(SurveyItemFactory.load(item));
      });
    }

    function manageItems(itemsToManage) {
      _itemList = itemsToManage;
    }

    function getItemList() {
      return _itemList;
    }

    function getItemListSize() {
      return _itemList.length;
    }

    function getItemByTemplateID(templateID) {
      var filter = _itemList.filter(function(item) {
        return findByTemplateID(item, templateID);
      });

      return filter[0];
    }

    function getItemByCustomID(customID) {
      var filter = _itemList.filter(function(item) {
        return findByCustomID(item, customID);
      });

      return filter[0];
    }

    function getItemByID(id) {
      var item = getItemByTemplateID(id);
      if (item) {
        return item;
      } else {
        return getItemByCustomID(id);
      }
    }

    function getAllCheckboxQuestion() {
      var occurences = [];
      _itemList.filter(function(item) {
        if (item.objectType === "CheckboxQuestion") {
          occurences.push(item);
        }
      });
      return occurences;
    }

    function getAllGridTextQuestion() {
      var occurences = [];
      _itemList.filter(function(item) {
        if (item.objectType === "GridTextQuestion") {
          occurences.push(item);
        }
      });
      return occurences;
    }

    function getAllGridNumericQuestion() {
      var occurences = [];
      _itemList.filter(function(item) {
        if (item.objectType === "GridNumericQuestion") {
          occurences.push(item);
        }
      });
      return occurences;
    }

    function getItemByPosition(position) {
      return _itemList[position];
    }

    function getItemPosition(templateID) {
      var item = getItemByTemplateID(templateID);
      if (item) {
        return _itemList.indexOf(item);
      } else {
        return null;
      }
    }

    function getLastItem() {
      return _itemList[_itemList.length - 1];
    }

    function existsItem(id) {
      return (getItemByTemplateID(id) || getItemByCustomID(id)) ? true : false;
    }

    function createItem(itemType, templateID) {
      var item = SurveyItemFactory.create(itemType, templateID);
      _itemList.push(item);
      return item;
    }

    function removeItem(templateID) {
      var itemToRemove = _itemList.filter(function(item) {
        return findByTemplateID(item, templateID);
      });

      var indexToRemove = _itemList.indexOf(itemToRemove[0]);
      if (indexToRemove > -1) {
        _itemList.splice(indexToRemove, 1);
      }
    }

    function removeItemByPosition(indexToRemove) {
      _itemList.splice(indexToRemove, 1);
    }

    function removeCurrentLastItem() {
      _itemList.splice(-1, 1);
    }

    /* Private methods */
    function findByTemplateID(item, templateID) {
      return item.templateID.toLowerCase() === templateID.toLowerCase();
    }

    function findByCustomID(item, customID) {
      return item.customID.toLowerCase() === customID.toLowerCase();
    }
  }
}());
