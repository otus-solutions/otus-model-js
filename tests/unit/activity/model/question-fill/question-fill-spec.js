describe('QuestionFill', function() {

  var QID1 = 'QID1';
  var COMMENT = 'Este é o meu comentário: comentário.';
  var Mock = {};
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      /* Test data */
      mockQuestionItem();

      /* Injectable mocks */
      mockAnswerFill(_$injector_);
      mockMetadataFill(_$injector_);

      mockJson();

      factory = _$injector_.get('otusjs.model.activity.QuestionFillFactory');
    });
  });

  describe('isFilled method', function() {

    var answerFill;
    var metadataFill;
    var commentFill;
    var unfilledQuestion;

    beforeEach(function() {
      answerFill = factory.create(QID1, 'Yes', null, null);
      metadataFill = factory.create(QID1, null, 1, null);
      commentFill = factory.create(QID1, null, null, COMMENT);
      unfilledQuestion = factory.create(QID1, null, null, '');
    });

    it('should return true when answer is filled', function() {
      expect(answerFill.isFilled()).toEqual(true);
    });

    it('should return true when metadata is filled', function() {
      expect(metadataFill.isFilled()).toEqual(true);
    });

    it('should return true when comment is filled', function() {
      expect(commentFill.isFilled()).toEqual(true);
    });

    it('should return false when answer, metadata and comment are not filled', function() {
      expect(unfilledQuestion.isFilled()).toEqual(false);
    });

  });

  describe('isIgnored method', function() {

    var answerFill;
    var nullAnswer;
    var unfilledAnswer;

    beforeEach(function() {
      answerFill = factory.create(QID1, 'Yes', null, null);
      nullAnswer = factory.create(QID1, null, null, null);
      unfilledAnswer = factory.create(QID1, '', null, null);
    });


    it('should return false when answer is fill', function() {
      expect(answerFill.isIgnored()).toEqual(false);
    });

    it('should return true when answer is null', function() {
      expect(nullAnswer.isIgnored()).toEqual(true);
    });

    it('should return true when metadata is not filled', function() {
      expect(unfilledAnswer.isIgnored()).toEqual(true);
    });

  });

  describe('clear method', function() {

    beforeEach(function() {
      mockQuestionFill();
      Mock.fill.clear();
    });

    it('should expect answer value to be null', function() {
      expect(Mock.fill.answer.value).toEqual(null);
    });

    it('should expect metadata value to be null', function() {
      expect(Mock.fill.metadata.value).toEqual(null);
    });

    it('should expect comment value to be empty', function() {
      expect(Mock.fill.comment).toEqual('');
    });

  });

  describe('toJSON method', function() {

    beforeEach(function() {
      mockQuestionFill();
    });

    it('should return a well formatted json based on instance of MetadataFill', function() {
      expect(Mock.fill.toJSON()).toEqual(Mock.json);
    });

  });

  function mockQuestionItem() {
    Mock.item = {};
    Mock.item.templateID = QID1;
    Mock.item.objectType = 'IntegerQuestion';
  }

  function mockAnswerFill($injector) {
    Mock.answer = $injector.get('otusjs.model.activity.AnswerFillFactory').create(Mock.item.objectType, 'Yes');
  }

  function mockMetadataFill($injector) {
    Mock.metadata = $injector.get('otusjs.model.activity.MetadataFillFactory').create(1);
  }

  function mockJson() {
    Mock.json = {
      objectType: 'QuestionFill',
      questionID: QID1,
      forceAnswer: false,
      answer: Mock.answer.toJSON(),
      metadata: Mock.metadata.toJSON(),
      comment: COMMENT,
      accept: undefined
    };
  }

  function mockQuestionFill() {
    Mock.fill = factory.create(Mock.item, 'Yes', 1, COMMENT);
  }
});
