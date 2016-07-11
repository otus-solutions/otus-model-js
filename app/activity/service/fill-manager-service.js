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
        self.searchAnswerByID = searchAnswerByID;
        self.add = add;
        self.fillingListSize = fillingListSize;
        self.removeAnswer = removeAnswer;
        self.getIndexAnswerOnList = getIndexAnswerOnList;

        function init() {
            fillingList = [];
        }

        function getFillingIndex(questionID) {
            fillingList.forEach(function(filling, index) {
                if (filling.questionID === questionID) {
                    return index;
                }
            });

            return null;
        }

        function searchFillingByID(questionID) {
            fillingList.forEach(function(filling, index) {
                if (filling.questionID === questionID) {
                    return filling;
                }
            });

            return null;
        }

        function existsFillingTo(questionID) {
            return (searchAnswerByID(questionID) !== null);
        }

        function add(Answer) {
            fillingList.push(Answer);
        }

        function updateAnswer(Answer) {
            if (!existsAnswerTo(Answer.questionID)) {
                add(Answer);
            } else if (!Answer.isFilled()) {
                removeAnswer(Answer.questionID);
            } else {
                replaceAnswer(Answer);
            }
        }



        function removeAnswer(questionID) {
            var aswer = searchAnswerByID(questionID);
            if (aswer === undefined) {
                return false;
            } else {
                var index = getIndexAnswerOnList(questionID);
                fillingList.splice(index, 1);
                return true;
            }
        }

        function replaceAnswer(Answer) {
            var index = getIndexAnswerOnList(Answer.questionID);
            var answerReplaced = fillingList.splice(index, 1, Answer);
            return answerReplaced;
        }

        function fillingListSize() {
            return fillingList.length;
        }
    }

}());
