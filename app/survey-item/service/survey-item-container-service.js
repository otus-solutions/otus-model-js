(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('SurveyItemContainerService', SurveyItemContainerService);

    SurveyItemContainerService.$inject = ['SurveyItemFactory'];

    function SurveyItemContainerService(SurveyItemFactory) {
        var self = this;
        var itemList = []; // TODO: To implement Immutable collection

        /* Public methods */
        self.init = init;
        self.manageItems = manageItems;
        self.getItemList = getItemList;
        self.getItemListSize = getItemListSize;
        self.getItemByTemplateID = getItemByTemplateID;
        self.getItemByCustomID = getItemByCustomID;
        self.getLastItem = getLastItem;
        self.getItemByID = getItemByID;
        self.getAllCheckboxQuestion = getAllCheckboxQuestion;
        self.getItemByPosition = getItemByPosition;
        self.getItemPosition = getItemPosition;
        self.existsItem = existsItem;
        self.createItem = createItem;
        self.removeItem = removeItem;
        self.removeItemByPosition = removeItemByPosition;
        self.removeCurrentLastItem = removeCurrentLastItem;

        function init() {
            itemList = [];
        }

        function manageItems(itemsToManage) {
            itemList = itemsToManage;
        }

        function getItemList() {
            return itemList;
        }

        function getItemListSize() {
            return itemList.length;
        }

        function getItemByTemplateID(templateID) {
            var filter = itemList.filter(function(item) {
                return findByTemplateID(item, templateID);
            });

            return filter[0];
        }

        function getItemByCustomID(customID) {
            var filter = itemList.filter(function(item) {
                return findByCustomID(item, customID);
            });

            return filter[0];
        }

        function getItemByID(id) {
            var item = getItemByTemplateID(id);
            if(item) {
                return item;
            } else {
                return getItemByCustomID(id);
            }
        }

        function getAllCheckboxQuestion() {
            var occurences = [];
            itemList.filter(function(item) {
                if(item.objectType === "CheckboxQuestion") {
                    occurences.push(item);
                }
            });
            return occurences;
        }

        function getItemByPosition(position) {
            return itemList[position];
        }

        function getItemPosition(templateID) {
            var item = getItemByTemplateID(templateID);
            if (item) {
                return itemList.indexOf(item);
            } else {
                return null;
            }
        }

        function getLastItem() {
           return itemList[itemList.length - 1];
        }

        function existsItem(id) {
            return (getItemByTemplateID(id) || getItemByCustomID(id)) ? true : false;
        }

        function createItem(itemType, templateID) {
            var item = SurveyItemFactory.create(itemType, templateID);
            itemList.push(item);
            return item;
        }

        function removeItem(templateID) {
            var itemToRemove = itemList.filter(function(item) {
                return findByTemplateID(item, templateID);
            });

            var indexToRemove = itemList.indexOf(itemToRemove[0]);
            if (indexToRemove > -1) {
                itemList.splice(indexToRemove, 1);
            }
        }

        function removeItemByPosition(indexToRemove) {
            itemList.splice(indexToRemove, 1);
        }

        function removeCurrentLastItem() {
            itemList.splice(-1, 1);
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
