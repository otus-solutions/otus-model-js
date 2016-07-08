(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('AnswerContainerService', AnswerContainerService);

    function AnswerContainerService() {
        var self = this;
        var answerList = [];

        /* Public methods */
        self.init = init;
        self.searchAnswer = searchAnswer;
        self.addAnswer = addAnswer;
        self.answerListSize = answerListSize;
        self.removeAnswer = removeAnswer;
        self.getIndexAnswerOnList = getIndexAnswerOnList;

        function init() {
            answerList = [];
        }

        function updateAnswer(Answer) {
            if (!existsAnswerTo(Answer.questionID)) {
                addAnswer(Answer);
            } else if (!Answer.isFilled()) {
                removeAnswer(Answer.questionID);
            } else {
                replaceAnswer(Answer);
            }
        }

        function addAnswer(Answer) {
            answerList.push(Answer);
        }

        function replaceAnswer(Answer) {
            var index = getIndexAnswerOnList(Answer.questionID);
            var answerReplaced = answerList.splice(index, 1, Answer);
            return answerReplaced;
        }

        function removeAnswer(questionID) {
            var aswer = searchAnswer(questionID);
            if (aswer === undefined) {
                return false;
            } else {
                var index = getIndexAnswerOnList(questionID);
                answerList.splice(index, 1);
                return true;
            }
        }

        function getIndexAnswerOnList(questionID) {
            for (var i = 0; i < answerList.length; i++) {
                if (answerList[i].questionID === questionID) {
                    return i;
                }
            }
        }

        function existsAnswerTo(questionID) {
            for (var i = 0; i < answerList.length; i++) {
                if (answerList[i].questionID === questionID) {
                    return true;
                }
            }
            return false;
        }

        function searchAnswer(questionID) {
            for (var i = 0; i < answerList.length; i++) {
                if (answerList[i].questionID === questionID) {
                    return answerList[i];
                }
            }
            return undefined;
        }

        function answerListSize() {
            return answerList.length;
        }
    }

}());
