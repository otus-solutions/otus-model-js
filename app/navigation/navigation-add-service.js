(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('NavigationAddService', NavigationAddService);

    NavigationAddService.$inject = [
        'NavigationContainerService',
        'QuestionContainerService'
    ];

    function NavigationAddService(NavigationContainerService, QuestionContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute() {
            var questionCount = QuestionContainerService.getQuestionListSize();

            if (questionCount > 1) {
                var origin = QuestionContainerService.getQuestionByPosition(questionCount - 2);
                var destination = QuestionContainerService.getQuestionByPosition(questionCount - 1);

                NavigationContainerService.createNavigationTo(origin.templateID, destination.templateID);
            }
        }
    }

}());
