(function() {
  'use strict';

  angular
    .module('otusjs.activity')
    .service('ActivityFacadeService', ActivityFacadeService);

  ActivityFacadeService.$inject = [
    'AnswerFillFactory',
    'MetadataFillFactory',
    'QuestionFillFactory',
    'ActivitySurveyFactory'
  ];

  function ActivityFacadeService(AnswerFillFactory, MetadataFillFactory, QuestionFillFactory, ActivitySurveyFactory) {
    var self = this;
    self.surveyActivity = null;

    /* Public interface */
    self.createActivity = createActivity;
    self.createQuestionFill = createQuestionFill;
    self.fillQuestion = fillQuestion;
    self.openActivitySurvey = openActivitySurvey;
    self.initializeActivitySurvey = initializeActivitySurvey;

    function createActivity(category, group, template, user) {
      self.surveyActivity = ActivitySurveyFactory.create(category, group, template, user);
    }

    function openActivitySurvey() {
      self.surveyActivity.statusHistory.newOpenedRegistry();
    }

    function initializeActivitySurvey() {
      self.surveyActivity.statusHistory.newInitializedOnlineRegistry();
    }

    function createQuestionFill(questionID, answer, metadata, comment) {
      return QuestionFillFactory.create(questionID, answer, metadata, comment);
    }

    function fillQuestion(filling) {
      self.surveyActivity.fillContainer.updateFilling(filling);
    }
  }
}());
