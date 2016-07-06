(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('AnswerFactory', AnswerFactory);

    function AnswerFactory() {

        function create(Question, answer, metadata) {
            return new Answer(Question, answer, metadata);
        }
    }

    // fachada.fillQuestion(self.Item, answer, metadata);

    function Answer(Question, answer, metadata) {
        var self = this;
        self.objectType = Question.objectType;
        self.questionID = Question.templateID;
        self.value = answer;
        self.metadata = metadata;

        /* Public methods */
        self.getObjectAnswer = getObjectAnswer;

        function getObjectAnswer() {
            return self;
        }
    }

}());
