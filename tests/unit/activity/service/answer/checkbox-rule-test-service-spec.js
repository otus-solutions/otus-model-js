describe('NumericRuleTestService', function() {

  var Mock = {};
  var Injections = {};
  var service = {};

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      service = _$injector_.get('otusjs.model.activity.CheckboxRuleTestService', {
        NumericRuleTestService: mockNumericRuleTestService(_$injector_)
      })
    });
  });

  describe('run method', function() {
    describe('should return false when', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'equal';
        Mock.rule.answer = '1';
      });

      it('answer it is text', function() {
        expect(service.run(Mock.rule, '1')).toBe(false);
      });

      it('', function() {

      });

    });

    describe('should return true when', function() {

    });

    describe('should call service NumericRuleTestService when ', function() {

    });
  });

  function mockNumericRuleTestService($injector) {
    Mock.NumericRuleTestService = $injector.get('otusjs.model.activity.NumericRuleTestService');

    spyOn(Mock.NumericRuleTestService, 'run').and.callThrough();

    return Mock.NumericRuleTestService;
  }
});
