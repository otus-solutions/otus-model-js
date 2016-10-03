describe('AnswerEvaluationService', () => {

  let Mock = {};
  let Injections = {};
  let service = {};

  beforeEach(() => {
    module('otusjs');

    inject(function(_$injector_) {
      service = _$injector_.get('otusjs.activity.AnswerEvaluationService');
    });
  });

  describe('getEvaluator method', () => {

    describe('when parameter is IntegerQuestion', () => {

      it('should keep a reference to an evaluator NumericRuleTestService', () => {
        let evaluator = service.getEvaluator('IntegerQuestion');

        expect(evaluator.name).toEqual('NumericRuleTestService');
      });

    });

  });

});
