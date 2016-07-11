(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('QuestionFillFactory', QuestionFillFactory);

    function QuestionFillFactory() {
        var self = this;

        self.create = create;

        function create(questionID, answer, metadata, comment) {
            return new QuestionFill(questionID, answer, metadata, comment);
        }

        return self;
    }

    function QuestionFill(questionID, answer, metadata, comment) {
        var self = this;

        self.objectType = 'QuestionFill';
        self.questionID = questionID;
        self.answer = answer;
        self.metadata = metadata;
        self.comment = (comment === undefined) ? '' : comment;

        /* Public methods */
        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.questionID = self.questionID;
            json.answer = self.answer.toJson();
            json.metadata = self.metadata.toJson();
            json.comment = self.comment;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());
