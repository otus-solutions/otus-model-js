(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('FillingManagerService', FillingManagerService);

    function FillingManagerService() {
        var self = this;
        var fillingList = [];

        /* Public methods */
        self.init = init;
        self.fillingListSize = fillingListSize;
        self.getFillingIndex = getFillingIndex;
        self.existsFillingTo = existsFillingTo;
        self.searchFillingByID = searchFillingByID;
        self.add = add;
        self.removeFilling = removeFilling;
        self.replaceFilling = replaceFilling;
        self.updateFilling = updateFilling;

        function init() {
            fillingList = [];
        }

        function fillingListSize() {
            return fillingList.length;
        }

        function getFillingIndex(questionID) {
            var result = _searchByID(questionID);
            return (result) ? result.index : null;
        }

        function existsFillingTo(questionID) {
            return (searchFillingByID(questionID) !== null);
        }

        function searchFillingByID(questionID) {
            var result = _searchByID(questionID);
            return (result) ? result.filling : null;
        }

        function _searchByID(questionID) {
            var result;

            fillingList.forEach(function(filling, index) {
                if (filling.questionID === questionID) {
                    result = {};
                    result.filling = filling;
                    result.index = index;
                }
            });

            return result;
        }

        function add(filling) {
            fillingList.push(filling);
        }

        function removeFilling(questionID) {
            var result = _searchByID(questionID);
            if (result !== undefined) {
                return fillingList.splice(result.index, 1)[0];
            } else {
                return null;
            }
        }

        function replaceFilling(filling) {
            var result = _searchByID(filling.questionID);
            if (result !== undefined) {
                return fillingList.splice(result.index, 1, filling)[0];
            } else {
                return null;
            }
        }

        function updateFilling(filling) {
            if (!existsFillingTo(filling.questionID)) {
                add(filling);
            } else if (filling.isFilled()) {
                return replaceFilling(filling);
            } else {
                return removeFilling(filling.questionID);
            }
        }
    }

}());
