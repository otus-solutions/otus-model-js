describe('QuestionFillFactory', function() {

  var Mock = {};
  var QUESTION_FILL_TYPE = 'QuestionFill';
  var QID1 = 'QID1';
  var ANSWER_FILL_TYPE = 'AnswerFill';
  var METADATA_FILL_TYPE = 'MetadataFill';
  var EMPTY_STRING = '';
  var COMMENT = 'Este é o meu comentário: comentário.';
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      /* Test data */
      mockQuestionItem();

      /* Injectable mocks */
      mockAnswerFill(_$injector_);
      mockMetadataFill(_$injector_);

      factory = _$injector_.get('otusjs.model.activity.QuestionFillFactory');
    });
  });

  describe('create method', function() {

    beforeEach(function() {
      mockQuestionFill();
      mockQuestionFillWithComment();
    });

    it('should return an object of type QuestionFill', function() {
      expect(Mock.questionFill.objectType).toEqual(QUESTION_FILL_TYPE);
    });

    it('should return attribute questionID equal to contructor paramenter', function() {
      expect(Mock.questionFill.questionID).toEqual(QID1);
    });

    it('should return an object with answer attribute of type AnswerFill', function() {
      expect(Mock.questionFill.answer.objectType).toEqual(ANSWER_FILL_TYPE);
    });

    it('should return an object with metadata attribute of type MetadataFillFactory', function() {
      expect(Mock.questionFill.metadata.objectType).toEqual(METADATA_FILL_TYPE);
    });

    it('should return an object with attribute comment equal to empty string', function() {
      expect(Mock.questionFill.comment).toEqual(EMPTY_STRING);
    });

    it('should return an object with attribute comment equal to paramenter when is provided', function() {
      expect(Mock.questionFillWithComment.comment).toEqual(COMMENT);
    });

  });

  describe('fromJsonObject method', function() {

    beforeEach(function() {
      mockQuestionFill();
      mockQuestionFillFromJsonObject(JSON.parse(Mock.questionFill.toJson()));
      mockQuestionFillWithComment();
      mockQuestionFillFromJsonObjectWithComment(JSON.parse(Mock.questionFillWithComment.toJson()));
    });

    it('should return an object of type QuestionFill', function() {
      expect(Mock.questionFillFromJsonObject.objectType).toEqual(QUESTION_FILL_TYPE);
    });

    it('should return attribute questionID equal to contructor paramenter', function() {
      expect(Mock.questionFillFromJsonObject.questionID).toEqual(QID1);
    });

    it('should return an object with answer attribute of type AnswerFill', function() {
      expect(Mock.questionFillFromJsonObject.answer.objectType).toEqual(ANSWER_FILL_TYPE);
    });

    it('should return an object with metadata attribute of type MetadataFillFactory', function() {
      expect(Mock.questionFillFromJsonObject.metadata.objectType).toEqual(METADATA_FILL_TYPE);
    });

    it('should return an object with attribute comment equal to empty string', function() {
      expect(Mock.questionFillFromJsonObject.comment).toEqual(EMPTY_STRING);
    });

    it('should return an object with attribute comment equal to paramenter when is provided', function() {
      expect(Mock.questionFillFromJsonObjectWithComment.comment).toEqual(COMMENT);
    });

  });

  function mockQuestionItem() {
    Mock.item = {};
    Mock.item.templateID = QID1;
    Mock.item.objectType = 'IntegerQuestion';
  }

  function mockQuestionFill(){
    Mock.questionFill = factory.create(Mock.item, Mock.answer, Mock.metadata);
  }

  function mockQuestionFillFromJsonObject(jsonObject){
    Mock.questionFillFromJsonObject = factory.fromJsonObject(jsonObject);
  }

  function mockQuestionFillFromJsonObjectWithComment(jsonObject){
    Mock.questionFillFromJsonObjectWithComment = factory.fromJsonObject(jsonObject);
  }

  function mockQuestionFillWithComment(){
    Mock.questionFillWithComment = factory.create(QID1, Mock.answer, Mock.metadata, COMMENT);
  }

  function mockAnswerFill($injector) {
    Mock.answer = $injector.get('otusjs.model.activity.AnswerFillFactory').create();
  }

  function mockMetadataFill($injector) {
    Mock.metadata = $injector.get('otusjs.model.activity.MetadataFillFactory').create();
  }

});
