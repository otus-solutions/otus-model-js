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

    function Answer(Question, answer, Metadata) {
        var self = this;
        self.objectType = Question.objectType;
        self.questionID = Question.templateID;
        self.value = answer;
        self.metadata = Metadata;

        /* Public methods */
        self.getObjectAnswer = getObjectAnswer;
        self.removeAnswer = removeAnswer;
        self.removeMetadata = removeMetadata;
        self.isFilled = isFilled;

        function getObjectAnswer() {
            return self;
        }

        function removeAnswer() {
            self.value = undefined;
        }

        function removeMetadata() {
            self.metadata = undefined;
        }

        function isFilled() {
            if (self.value === undefined && self.metadata === undefined)
                return true;
            else
                return false;
        }
    }

}());
