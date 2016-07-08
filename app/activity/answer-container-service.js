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

        function init() {
            answerList = [];
        }

        function updateAnswer(Answer) {
            if (!existsAnswerTo(Answer)) {
                addAnswer(Answer);
            } else if (!Answer.isFilled()) {
                removeAnswer();
            } else {
                replaceAnswer();
            }
        }

        function addAnswer(Answer) {
            answerList.push(Answer);
        }

        function removeAnswer(Answer) {}

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
