(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('RemoveAnswerOptionService', RemoveAnswerOptionService);

    function RemoveAnswerOptionService() {
        var self = this;

        self.execute = execute;

        function execute(question) {
            question.removeLastOption();
        }
    }

}());
