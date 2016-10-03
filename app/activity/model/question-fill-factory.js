(function() {
  'use strict';

  angular
    .module('otusjs.activity')
    .factory('QuestionFillFactory', QuestionFillFactory);

  QuestionFillFactory.$inject = [
    'AnswerFillFactory',
    'MetadataFillFactory'
  ];

  function QuestionFillFactory(AnswerFillFactory, MetadataFillFactory) {
    var self = this;

    self.create = create;

    function create(item, answer, metadata, comment) {
      var answerFill = AnswerFillFactory.create(item.objectType, answer);
      var metadataFill = MetadataFillFactory.create(metadata);
      return new QuestionFill(item, answerFill, metadataFill, comment);
    }

    return self;
  }

  function QuestionFill(item, answer, metadata, comment) {
    var self = this;

    self.objectType = 'QuestionFill';
    self.questionID = item.customID;
    self.answer = answer;
    self.metadata = metadata;
    self.comment = (comment === undefined) ? '' : comment;
    self.isFilled = isFilled;

    /* Public methods */
    self.toJson = toJson;

    function isFilled() {
      return self.answer.isFilled() || self.metadata.isFilled() || !!self.comment;
    }

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
