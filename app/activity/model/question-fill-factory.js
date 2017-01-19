(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.QuestionFillFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.AnswerFillFactory',
    'otusjs.model.activity.MetadataFillFactory'
  ];

  function Factory(AnswerFillFactory, MetadataFillFactory) {
    var self = this;

    self.OBJECT_TYPE = 'QuestionFill';

    /* Public methods */
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
    self.forceAnswer = false;
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
      json.accept = self.accept;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
    }
  }
}());
