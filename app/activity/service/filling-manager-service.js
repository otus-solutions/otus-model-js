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
        self.listSize = listSize;
        self.getFillingIndex = getFillingIndex;
        self.existsFillingTo = existsFillingTo;
        self.searchFillingByID = searchFillingByID;
        self.updateFilling = updateFilling;

        init();

        function init() {
            fillingList = [];
        }

        function listSize() {
            return fillingList.length;
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

        function _add(filling) {
            fillingList.push(filling);
        }

        function _replaceFilling(filling) {
            var result = _searchByID(filling.questionID);
            if (result !== undefined) {
                return fillingList.splice(result.index, 1, filling)[0];
            } else {
                return null;
            }
        }

        function _removeFilling(questionID) {
            var result = _searchByID(questionID);
            if (result !== undefined) {
                return fillingList.splice(result.index, 1)[0];
            } else {
                return null;
            }
        }
    }

}());
