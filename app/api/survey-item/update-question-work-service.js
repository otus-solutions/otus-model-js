(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('UpdateQuestionService', UpdateQuestionService);

    UpdateQuestionService.$inject = [
        'WorkspaceService'
    ];

    function UpdateQuestionService(WorkspaceService) {
        var self = this;

        self.execute = execute;

        function execute(data) {
            var survey = WorkspaceService.getSurvey();
            survey.updateQuestion(data.ngModel);
            return data;
        }
    }

}());
