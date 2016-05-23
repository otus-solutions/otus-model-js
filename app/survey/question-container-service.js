(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('QuestionContainerService', QuestionContainerService);

    QuestionContainerService.$inject = ['QuestionFactory'];

    function QuestionContainerService(QuestionFactory) {
        var self = this;
        var questionList = []; // TODO: To implement Immutable collection

        /* Public methods */
        self.init = init;
        self.manageQuestions = manageQuestions;
        self.getQuestionByTemplateID = getQuestionByTemplateID;
        self.getQuestionByPosition = getQuestionByPosition;
        self.getQuestionPosition = getQuestionPosition;
        self.getQuestionList = getQuestionList;
        self.getQuestionListSize = getQuestionListSize;
        self.existsQuestion = existsQuestion;
        self.createQuestion = createQuestion;
        self.removeQuestion = removeQuestion;
        self.removeQuestionByPosition = removeQuestionByPosition;
        self.removeCurrentLastQuestion = removeCurrentLastQuestion;

        function init() {
            questionList = [];
        }

        function manageQuestions(questionsToManage) {
            questionList = questionsToManage;
        }

        function getQuestionList() {
            return questionList;
        }

        function getQuestionListSize() {
            return questionList.length;
        }

        function getQuestionByTemplateID(templateID) {
            var filter = questionList.filter(function(question) {
                return findByOrigin(question, templateID);
            });

            return filter[0];
        }

        function getQuestionByPosition(position) {
            return questionList[position];
        }

        function getQuestionPosition(templateID) {
            var question = getQuestionByTemplateID(templateID);
            if (question) {
                return questionList.indexOf(question);
            } else {
                return null;
            }
        }

        function existsQuestion(templateID) {
            return (getQuestionByTemplateID(templateID)) ? true : false;
        }

        function createQuestion(questionType, templateID) {
            questionList.push(QuestionFactory.create(questionType, templateID));
        }

        function removeQuestion(templateID) {
            var questionToRemove = questionList.filter(function(question) {
                return findByOrigin(question, templateID);
            });

            var indexToRemove = questionList.indexOf(questionToRemove[0]);
            if (indexToRemove > -1) questionList.splice(indexToRemove, 1);
        }

        function removeQuestionByPosition(indexToRemove) {
            questionList.splice(indexToRemove, 1);
        }

        function removeCurrentLastQuestion(indexToRemove) {
            questionList.splice(-1, 1);
        }

        /* Private methods */
        function findByOrigin(question, templateID) {
            return question.templateID === templateID;
        }
    }

}());
