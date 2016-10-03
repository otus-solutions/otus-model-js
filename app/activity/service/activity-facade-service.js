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
    self.getFillingByQuestionID = getFillingByQuestionID;

    function createActivity(template) {
      self.surveyActivity = ActivitySurveyFactory.create(template);
    }

    function openActivitySurvey() {
      self.surveyActivity.statusHistory.newOpenedRegistry();
    }

    function initializeActivitySurvey() {
      self.surveyActivity.statusHistory.newInitializedOnlineRegistry();
    }

    function createQuestionFill(question, answer, metadata, comment) {
      return QuestionFillFactory.create(question, answer, metadata, comment);
    }

    function fillQuestion(filling) {
      self.surveyActivity.fillContainer.updateFilling(filling);
    }

    function getFillingByQuestionID(questionID) {
      return self.surveyActivity.fillContainer.searchFillingByID(questionID);
    }
  }
}());
