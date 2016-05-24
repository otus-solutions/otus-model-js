(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('AddAnswerOptionService', AddAnswerOptionService);

    function AddAnswerOptionService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            return item.createOption();
        }
    }

}());
