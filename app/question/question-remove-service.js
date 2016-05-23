(function() {
    'use strict';

    angular
        .module('otusjs.question')
        .service('QuestionRemoveService', QuestionRemoveService);

    QuestionRemoveService.$inject = ['QuestionContainerService'];

    function QuestionRemoveService(QuestionContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute(templateID) {
            QuestionContainerService.removeQuestion(templateID);
        }
    }

}());
