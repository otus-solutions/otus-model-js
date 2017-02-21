(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.ActivityFacadeService', ActivityFacadeService);

  ActivityFacadeService.$inject = [
    'otusjs.model.activity.AnswerFillFactory',
    'otusjs.model.activity.MetadataFillFactory',
    'otusjs.model.activity.QuestionFillFactory',
    'otusjs.model.activity.ActivityFactory',
    'otusjs.model.activity.InterviewFactory'
  ];

  function ActivityFacadeService(
    AnswerFillFactory,
    MetadataFillFactory,
    QuestionFillFactory,
    ActivityFactory,
    InterviewFactory
  ) {
    var self = this;
    var _user = null;
    self.surveyActivity = null;

    /* Public interface */
    self.createActivity = createActivity;
    self.createPaperActivity = createPaperActivity;
    self.createQuestionFill = createQuestionFill;
    self.fillQuestion = fillQuestion;
    self.openActivitySurvey = openActivitySurvey;
    self.initializeActivitySurvey = initializeActivitySurvey;
    self.finalizeActivitySurvey = finalizeActivitySurvey;
    self.saveActivitySurvey = saveActivitySurvey;
    self.getFillingByQuestionID = getFillingByQuestionID;
    self.clearSkippedAnswers = clearSkippedAnswers;

    function createActivity(template, user, participant) {
      self.surveyActivity = ActivityFactory.create(template, user, participant);
    }

    function createPaperActivity(template, user, participant, paperActivityData) {
      self.surveyActivity = ActivityFactory.createPaperActivity(template, user, participant, paperActivityData);
      self.surveyActivity.interviews.push(InterviewFactory.create(paperActivityData));
    }

    function openActivitySurvey(user) {
      _user = user;
      self.surveyActivity.statusHistory.newOpenedRegistry(_user);
    }

    function initializeActivitySurvey() {
      self.surveyActivity.statusHistory.newInitializedOnlineRegistry(_user);
      self.surveyActivity.interviews.push(InterviewFactory.create(_user));
    }

    function finalizeActivitySurvey() {
      self.surveyActivity.statusHistory.newFinalizedRegistry(_user);
    }

    function saveActivitySurvey() {
      self.surveyActivity.statusHistory.newSavedRegistry(_user);
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

    function clearSkippedAnswers() {
      self.surveyActivity.clearSkippedAnswers();
    }
  }
}());
