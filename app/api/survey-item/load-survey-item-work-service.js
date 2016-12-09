(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('LoadSurveyItemService', LoadSurveyItemService);

    function LoadSurveyItemService() {
        var self = this;

        self.execute = execute;

        function execute(item, survey) {
            return survey.loadItem(item.objectType, item.templateID);
        }
    }

}());
