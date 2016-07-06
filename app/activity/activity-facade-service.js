(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('ActivityFacadeService', ActivityFacadeService);

    ActivityFacadeService.$inject = [
        'AnswerFactory'
    ];

    function ActivityFacadeService(AnswerFactory) {
        var self = this;

        /* Public interface */
        self.fillQuestion = fillQuestion;

        function fillQuestion(Question, answerValue, metadataValue) {
            var answer = AnswerFactory.create(Question, answerValue, metadataValue);
        }
    }

}());
