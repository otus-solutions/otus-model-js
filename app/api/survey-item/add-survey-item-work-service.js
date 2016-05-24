(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('AddSurveyItemService', AddSurveyItemService);

    AddSurveyItemService.$inject = [
        'WorkspaceService'
    ];

    function AddSurveyItemService(WorkspaceService) {
        var self = this;

        self.execute = execute;

        function execute(itemType) {
            return WorkspaceService.getSurvey().addItem(itemType);
        }
    }

}());
