(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('QuestionManagerService', QuestionManagerService);

    QuestionManagerService.$inject = [
        'QuestionContainerService',
        'QuestionAddService',
        'QuestionRemoveService'
    ];

    function QuestionManagerService(QuestionContainerService, QuestionAddService, QuestionRemoveService) {
        var self = this;

        var incrementalIDValue = -1;

        /* Public interface */
        self.init = init;
        self.getQuestionList = getQuestionList;
        self.getQuestionListSize = getQuestionListSize;
        self.getQuestionByTemplateID = getQuestionByTemplateID;
        self.addQuestion = addQuestion;
        self.removeQuestion = removeQuestion;

        function init() {
            QuestionContainerService.init();
        }

        function getQuestionList() {
            return QuestionContainerService.getQuestionList();
        }

        function getQuestionListSize() {
            return QuestionContainerService.getQuestionListSize();
        }

        function getQuestionByTemplateID(templateID) {
            return QuestionContainerService.getQuestionByTemplateID(templateID);
        }

        function addQuestion(questionType, templateIDPrefix) {
            var templateID = templateIDPrefix + getNextIncrementalGenerator();
            var question = QuestionAddService.execute(questionType, templateID);
            return question;
        }

        function removeQuestion(templateID) {
            QuestionRemoveService.execute(templateID);
        }

        function getNextIncrementalGenerator() {
            console.log(incrementalIDValue);
            return ++incrementalIDValue;
        }

    }

}());
