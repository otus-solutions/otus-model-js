(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('ActivityFacadeService', ActivityFacadeService);

    ActivityFacadeService.$inject = [
        'FillingManagerService',
        'StatusHistoryManagerService',
        'AnswerFillFactory',
        'MetadataFillFactory',
        'QuestionFillFactory',
        'ActivitySurveyFactory'
    ];

    function ActivityFacadeService(FillingManagerService, StatusHistoryManagerService, AnswerFillFactory, MetadataFillFactory, QuestionFillFactory, ActivitySurveyFactory) {
        var self = this;

        /* Public interface */
        self.init = init;
        self.createQuestionFill = createQuestionFill;

        function init() {
            FillingManagerService.init();
            StatusHistoryManagerService.init();
            // StatusHistoryManagerService.newCreatedRegistry(user);
        }

        function createQuestionFill(questionID, answer, metadata, comment) {
            var answerFill = AnswerFillFactory.create(answer);
            var metadataFill = MetadataFillFactory.create(metadata);
            var question = QuestionFillFactory.create(questionID, answerFill, metadata, comment);
            FillingManagerService.updateFilling(question);
            return question;
        }

    }

}());
