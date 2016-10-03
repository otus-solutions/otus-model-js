describe('ActivityFacadeService', function() {

  let Mock = {};
  let Injections = {};
  let factory;
  let ANSWER = 'test_answer';
  let METADATA = 'test_metadata';
  let COMMENT = 'test_comment';
  let QUESTION_FILL_TYPE = 'QuestionFill';
  let QUESTION_ID = 'TEST1';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      /* Test data */
      mockQuestionItem();
      mockSurveyTemplate();

      /* Injectable mocks */
      mockAnswerFillFactory(_$injector_);
      mockMetadataFillFactory(_$injector_);
      mockQuestionFillFactory(_$injector_);
      mockActivitySurveyFactory(_$injector_);

      service = _$injector_.get('ActivityFacadeService', Injections);
    });
  });

  describe('createActivity method', function() {

    it('should call method create', function() {
      service.createActivity(Mock.surveyTemplate);

      expect(Mock.ActivitySurveyFactory.create).toHaveBeenCalledWith(Mock.surveyTemplate);
    });

    it('should create new object ActivitySurvey with call method create', function() {
      service.createActivity(Mock.surveyTemplate);

      expect(service.surveyActivity.objectType).toEqual('Activity');
    });

    it('should create ActivitySurvey with parameter template', function() {
      service.createActivity(Mock.surveyTemplate);

      expect(service.surveyActivity.template).toEqual(Mock.surveyTemplate);
    });

    it('should create new object ActivitySurvey with call method create used parameter User', function() {
      service.createActivity(Mock.surveyTemplate);

      expect(Mock.ActivitySurveyFactory.create).toHaveBeenCalledWith(Mock.surveyTemplate);
    });

  });

  describe('openActivitySurvey method', function() {

    beforeEach(function() {
      service.createActivity(Mock.surveyTemplate);
    });

    it('should call method newOpenedRegistry when method openActivitySurvey called ', function() {
      spyOn(service.surveyActivity.statusHistory, 'newOpenedRegistry');
      service.openActivitySurvey();
      expect(service.surveyActivity.statusHistory.newOpenedRegistry).toHaveBeenCalled();
    });

  });

  describe('initializeActivitySurvey method', function() {

    beforeEach(function() {
      service.createActivity(Mock.surveyTemplate);
    });

    it('should call method newInitializedOnlineRegistry when method initializeActivitySurvey called ', function() {
      spyOn(service.surveyActivity.statusHistory, 'newInitializedOnlineRegistry');
      service.initializeActivitySurvey();
      expect(service.surveyActivity.statusHistory.newInitializedOnlineRegistry).toHaveBeenCalled();
    });

  });

  describe('createQuestionFill method', function() {

    beforeEach(function() {
      service.createActivity(Mock.surveyTemplate);
    });

    it('should call method create when method createQuestionFill called', function() {
      service.createQuestionFill(Mock.item, ANSWER, METADATA, COMMENT);

      expect(Mock.QuestionFillFactory.create).toHaveBeenCalled();
    });

    it('should return object question when method createQuestionFill called', function() {
      let questionFill = service.createQuestionFill(Mock.item, ANSWER, METADATA, COMMENT);

      expect(questionFill.objectType).toEqual('QuestionFill');
    });

    it('should create QuestionFill with parameter QuestionID', function() {
      let questionFill = service.createQuestionFill(Mock.item, ANSWER, METADATA, COMMENT);

      expect(questionFill.questionID).toEqual(QUESTION_ID);
    });

    it('should create QuestionFill with parameter ANSWER', function() {
      let questionFill = service.createQuestionFill(Mock.item, ANSWER, METADATA, COMMENT);

      expect(questionFill.answer.value).toEqual(ANSWER);
    });

    it('should create QuestionFill with parameter METADATA', function() {
      let questionFill = service.createQuestionFill(Mock.item, ANSWER, METADATA, COMMENT);

      expect(questionFill.metadata.value).toEqual(METADATA);
    });

    it('should create QuestionFill with parameter COMMENT', function() {
      let questionFill = service.createQuestionFill(Mock.item, ANSWER, METADATA, COMMENT);

      expect(questionFill.comment).toEqual(COMMENT);
    });

  });

  describe('fillQuestion method', function() {

    beforeEach(function() {
      service.createActivity(Mock.surveyTemplate);
    });

    it('should call method updateFilling when method createQuestionFill called ', function() {
      spyOn(service.surveyActivity.fillContainer, 'updateFilling');

      service.fillQuestion(QUESTION_ID, ANSWER, METADATA, COMMENT);

      expect(service.surveyActivity.fillContainer.updateFilling).toHaveBeenCalled();
    });

  });

  describe('getFillingByQuestionID method', function() {

    let filling = {};

    beforeEach(function() {
      service.createActivity(Mock.surveyTemplate);
      filling = service.createQuestionFill(Mock.item, ANSWER, METADATA, COMMENT);
      service.fillQuestion(filling);
    });

    it('should retrieve the filling of a question', function() {
      spyOn(service.surveyActivity.fillContainer, 'searchFillingByID').and.callThrough();

      let returnedValue = service.getFillingByQuestionID(QUESTION_ID);

      expect(service.surveyActivity.fillContainer.searchFillingByID).toHaveBeenCalled();
      expect(returnedValue).toEqual(filling);
    });

  });

  function mockQuestionItem() {
    Mock.item = {};
    Mock.item.customID = QUESTION_ID;
    Mock.item.objectType = 'IntegerQuestion';
  }

  function mockSurveyTemplate() {
    Mock.surveyTemplate = {};
  }

  function mockAnswerFillFactory($injector) {
    Mock.AnswerFillFactory = $injector.get('AnswerFillFactory');

    spyOn(Mock.AnswerFillFactory, 'create').and.callThrough();

    Injections.AnswerFillFactory = Mock.AnswerFillFactory;
  }

  function mockMetadataFillFactory($injector) {
    Mock.MetadataFillFactory = $injector.get('MetadataFillFactory');

    spyOn(Mock.MetadataFillFactory, 'create').and.callThrough();

    Injections.MetadataFillFactory = Mock.MetadataFillFactory;
  }

  function mockQuestionFillFactory($injector) {
    Mock.QuestionFillFactory = $injector.get('QuestionFillFactory');

    spyOn(Mock.QuestionFillFactory, 'create').and.callThrough();

    Injections.QuestionFillFactory = Mock.QuestionFillFactory;
  }

  function mockActivitySurveyFactory($injector) {
    Mock.ActivitySurveyFactory = $injector.get('ActivitySurveyFactory');

    spyOn(Mock.ActivitySurveyFactory, 'create').and.callThrough();

    Injections.ActivitySurveyFactory = Mock.ActivitySurveyFactory;
  }
});
