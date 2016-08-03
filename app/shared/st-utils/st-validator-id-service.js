(function() {
    'use strict';

    angular
        .module('utils')
        .service('ValidatorIDService', ValidatorIDService);

    function ValidatorIDService(SurveyItemFactory) {
        var self = this;

        self.isAvailable = isAvailable;

        function isAvailable(survey, id) {
            return survey.SurveyItemManager.existsItem(id);
        }
    }
}());
