(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('AnswerFactory', AnswerFactory);

    function AnswerFactory() {
        var self = this;

        self.create = create;

        function create(Question, answer, Metadata) {
            return new Answer(Question, answer, Metadata);
        }

        return self;
    }

    // fachada.fillQuestion(self.Item, answer, metadata);
    function Answer(Question, answer, Metadata) {
        var self = this;
        self.objectType = Question.objectType;
        self.questionID = Question.templateID;
        self.value = answer;
        self.metadata = Metadata;

        /* Public methods */
        self.getObjectAnswer = getObjectAnswer;

        function getObjectAnswer() {
            return self;
        }
    }

}());
