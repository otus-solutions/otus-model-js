describe('AnswerEvaluationService', function() {

  var Mock = {};
  var Injections = {};
  var service = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      service = _$injector_.get('otusjs.model.activity.AnswerEvaluationService');
    });
  });

  describe('getEvaluator method', function() {

    describe('when parameter is IntegerQuestion', function() {

      it('should keep a reference to an evaluator NumericRuleTestService', function() {
        var evaluator = service.getEvaluator('IntegerQuestion');

        expect(evaluator.name).toEqual('NumericRuleTestService');
      });

    });

  });

});
