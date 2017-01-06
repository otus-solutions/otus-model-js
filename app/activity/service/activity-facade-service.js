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

  function ActivityFacadeService(AnswerFillFactory, MetadataFillFactory, QuestionFillFactory, ActivityFactory, InterviewFactory) {
    var self = this;
    self.surveyActivity = null;

    /* Public interface */
    self.createActivity = createActivity;
    self.createPaperActivity = createPaperActivity;
    self.createQuestionFill = createQuestionFill;
    self.fillQuestion = fillQuestion;
    self.openActivitySurvey = openActivitySurvey;
    self.initializeActivitySurvey = initializeActivitySurvey;
    self.getFillingByQuestionID = getFillingByQuestionID;

    function createActivity(template, user, participant) {
      self.surveyActivity = ActivityFactory.create(template, user, participant);
    }

    function createPaperActivity(template, user, participant, paperActivityData) {
      self.surveyActivity = ActivityFactory.createPaperActivity(template, user, participant, paperActivityData);
      self.surveyActivity.interviews.push(InterviewFactory.create(paperActivityData));
    }

    function openActivitySurvey(user) {
      self.surveyActivity.statusHistory.newOpenedRegistry(user);
    }

    function initializeActivitySurvey(user) {
      self.surveyActivity.statusHistory.newInitializedOnlineRegistry(user);
      self.surveyActivity.interviews.push(InterviewFactory.create(user));
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
