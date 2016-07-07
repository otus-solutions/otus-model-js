(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('AnswerContainerService', AnswerContainerService);

    AnswerContainerService.$inject = ['AnswerFactory'];

    function AnswerContainerService(AnswerFactory) {
        var answerList = [];

        /* Public methods */
        self.init = init;
        self.addAnswer = addAnswer;
        self.removeAnswer = removeAnswer;
        self.searchAnswer = searchAnswer;
        self.answerListSize = answerListSize;

        function init() {
            answerList = [];
        }

        // AnswerContainerFactory.add(elemento);
        // AnswerContainerFactory.remove(elemento);
        // AnswerContainerFactory.search();

        function addAnswer(AnswerFactory) {
            answerList.push(AnswerFactory);
        }

        function removeAnswer() {

        }

        function searchAnswer() {

        }

        function answerListSize() {

        }
    }

}());
