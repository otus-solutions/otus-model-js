describe('AnswerFillFactory', function() {

  var UNIT_NAME = 'AnswerFillFactory';
  var Mock = {};
  var Injections = {};
  var factory;
  var ANSWER_VALUE = 'Pw1';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockAnswerEvaluationService(_$injector_);
      factory = _$injector_.get('otusjs.model.activity.AnswerFillFactory', Injections);
    });
  });

  describe('create method', function() {

    it('should return an object of type AnswerFill', function() {
      var answer = factory.create('IntegerQuestion');

      expect(answer.objectType).toEqual('AnswerFill');
    });

    it('should return an object with attribute value defined', function() {
      var answer = factory.create('IntegerQuestion');

      expect(answer.value).toBeDefined();
    });

    describe('when answer value is not passed', function() {

      it('should return a new object with attribute value equal to null', function() {
        var answer = factory.create('IntegerQuestion');

        expect(answer.value).toBe(null);
      });

    });

    describe('when answer value is passed', function() {

      it('should return an object with attribute value equal to parameter', function() {
        var answer = factory.create('IntegerQuestion', ANSWER_VALUE);

        expect(answer.value).toEqual(ANSWER_VALUE);
      });

    });

    describe('when answer object is to IntegerQuestion', function() {

      it('should return a new object with attribute eval of NumericRuleTestService type', function() {
        var answer = factory.create('IntegerQuestion');

        expect(answer.eval.name).toBe('NumericRuleTestService');
      });

    });

  });

  describe('clear method', function() {
    it('When calling method clear value should be null', function() {
      var answer = factory.create('IntegerQuestion', ANSWER_VALUE);

      expect(answer.value).toEqual(ANSWER_VALUE);

      answer.clear();

      expect(answer.value).toBe(null);
    });
  });

  function mockAnswerEvaluationService($injector) {
    Mock.AnswerEvaluationService = $injector.get('otusjs.model.activity.AnswerEvaluationService');
    Injections.AnswerEvaluationService = Mock.AnswerEvaluationService;
  }

});
