(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('AddQuestionService', AddQuestionService);

    AddQuestionService.$inject = [
        'WorkspaceService',
        'QuestionFactory'
    ];

    function AddQuestionService(WorkspaceService, QuestionFactory) {
        var self = this;

        self.execute = execute;

        function execute(questionType) {
            return WorkspaceService.getSurvey().addQuestion(questionType);
        }
    }

}());
