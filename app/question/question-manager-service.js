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

        /* Public interface */
        self.init = init;
        self.getQuestionList = getQuestionList;
        self.getQuestionByTemplateID = getQuestionByTemplateID;
        self.addQuestion = addQuestion;
        self.removeQuestion = removeQuestion;

        function init() {
            QuestionContainerService.init();
        }

        function getQuestionList() {
            return QuestionContainerService.getQuestionList();
        }

        function getQuestionByTemplateID(templateID) {
            return QuestionContainerService.getQuestionByTemplateID(templateID);
        }

        function addQuestion() {
            var questionContainer = QuestionContainerService.getQuestionList();
            QuestionAddService.execute(questionContainer);
        }

        function removeQuestion(templateID) {
            QuestionRemoveService.execute(templateID);
        }
    }

}());
