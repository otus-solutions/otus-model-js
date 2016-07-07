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
        self.updateAnswer = updateAnswer;
        self.existsAnswerTo = existsAnswerTo;
        self.searchAnswer = searchAnswer;
        self.answerListSize = answerListSize;
        self.addAnswer = addAnswer;

        function init() {
            answerList = [];
        }

        function updateAnswer(Answer) {
            if (!existsAnswerTo(Answer)) {
                _addAnswer(Answer);
            } else if (!Answer.isFilled()) {
                _removeAnswer();
            } else {
                _replaceAnswer();
            }
        }

        function addAnswer(Answer) {
            answerList.push(Answer);
        }

        function _removeAnswer(Answer) {

        }

        function existsAnswerTo(questionID) {
            var answer = searchAnswer(questionID);
            if (answer === undefined)
                return false;
            else
                return true;
        }

        function searchAnswer(questionID) {
            return {questionID: 'PW1'};
        }

        function answerListSize() {
            return answerList.length;
        }
    }

}());
