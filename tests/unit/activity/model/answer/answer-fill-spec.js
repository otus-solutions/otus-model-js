describe('AnswerFill', function() {

  let Mock = {};
  let factory;
  let ANSWER_VALUE = 'Pw1';

  beforeEach(function() {
    module('otusjs');

    mockJson();

    inject(function(_$injector_) {
      factory = _$injector_.get('otusjs.model.activity.AnswerFillFactory');
    });
  });

  describe('isFilled method', function() {

    it('should return true when value is not null or undefined', function() {
      let answer = factory.create('IntegerQuestion', ANSWER_VALUE);

      expect(answer.isFilled()).toBe(true);
    });

    it('should return false when value is null', function() {
      let answer = factory.create('IntegerQuestion', null);

      expect(answer.isFilled()).toBe(false);
    });

    it('should return false when value is undefined', function() {
      let answer = factory.create('IntegerQuestion');

      expect(answer.isFilled()).toBe(false);
    });

  });

  describe('toJson method', function() {

    it('should return a well formatted json based on instance of AnswerFill', function() {
      let answer = factory.create('IntegerQuestion', ANSWER_VALUE);

      expect(answer.toJson()).toEqual(Mock.json);
    });

  });

  function mockJson() {
    Mock.json = JSON.stringify({
      objectType: 'AnswerFill',
      value: ANSWER_VALUE
    });
  }

});
