(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('QuestionAddService', QuestionAddService);

    QuestionAddService.$inject = ['QuestionContainerService'];

    function QuestionAddService(QuestionContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute(questionType, templateID) {
            QuestionContainerService.createQuestion(questionType, templateID);
        }
    }

}());
