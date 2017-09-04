//TODO: Os teste de unidade estão sendo ignorados até o momento de ser resolvido os teste de unidade sobre o ImmutableDate
xdescribe('TimeRuleTestService:', function() {
  var Mock = {};
  var Injections = {};
  var service = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      service = _$injector_.get('otusjs.model.activity.TimeRuleTestService', {
        NumericRuleTestService: mockNumericRuleTestService(_$injector_),
        ImmutableDate: mockImmutableDate(_$injector_),
      })
    });

  });

  describe('run method, ', function() {

    xdescribe('test cases on _polyfillIsInteger', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'equal';
        Mock.rule.answer = "20:00";
        Mock.rule.isMetadata = false;

        Mock.answer = new Mock.ImmutableDate;
        Mock.answer.resetDate();
        Mock.answer.setHours(20);
        Mock.answer.setMinutes(0);
        Mock.answer.setSeconds(0);

      });

      it('should method run called then _polyfillIsInteger', function() {
        spyOn(service, '_polyfillIsInteger');
        service.run(Mock.rule, Mock.answer);

        expect(service._polyfillIsInteger).toHaveBeenCalled();
      });
    });

    describe('test cases on metadata', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'equal';
        Mock.rule.answer = "20:00";
        Mock.rule.isMetadata = true;

        Mock.answer = new Mock.ImmutableDate;
        Mock.answer.resetDate();
        Mock.answer.setHours(20);
        Mock.answer.setMinutes(0);
        Mock.answer.setSeconds(0);
        Mock.answer.setMilliseconds(0);
      });

      it('when is metadata should method run called then NumericRuleTestService', function() {
        service.run(Mock.rule, 1);

        expect(Mock.NumericRuleTestService.run).toHaveBeenCalledWith(Mock.rule, 1);
      });

      it('when it is a metadata and a response is not a number should return false', function() {

        expect(service.run(Mock.rule, Mock.answer)).toEqual(false);
      });
    });

    describe('test cases on hours. ', function() {

      describe('Equal cases', function() {
        beforeEach(function() {
          beforeCaseEqual();
        });

        it('Should return true when rule and answer is equal', function() {
          expect(service.run(Mock.rule1, Mock.answer1)).toEqual(true);
        });

        it('Should return false when rule and answer is equal', function() {
          expect(service.run(Mock.rule2, Mock.answer2)).toEqual(false);
        });
      });

      describe('NotEqual cases', function() {
        beforeEach(function() {
          beforeCaseNotEqual();
        });

        it('Should return true when rule and answer is not equal', function() {
          expect(service.run(Mock.rule1, Mock.answer1)).toEqual(true);
        });

        it('Should return false when rule and answer is equal', function() {
          expect(service.run(Mock.rule2, Mock.answer2)).toEqual(false);
        });
      });

      describe('Greater cases', function() {
        beforeEach(function() {
          beforeCaseGreater();
        });

        it('Should return true when response is greater than rule', function() {
          expect(service.run(Mock.rule1, Mock.answer1)).toEqual(true);
        });

        it('Should return false when response is not greater than rule', function() {
          expect(service.run(Mock.rule2, Mock.answer2)).toEqual(false);
        });
      });


      describe('GreaterEqual cases', function() {
        beforeEach(function() {
          beforeCaseGreaterEqual();
        });

        it('Should return true when response is greater than rule', function() {
          expect(service.run(Mock.rule1, Mock.answer1)).toEqual(true);
        });

        it('SShould return true when response is greater or equals than rule', function() {
          expect(service.run(Mock.rule2, Mock.answer2)).toEqual(true);
        });

        it('Should return false when response is not greater than rule', function() {
          expect(service.run(Mock.rule3, Mock.answer3)).toEqual(false);
        });
      });

      describe('Lower cases', function() {
        beforeEach(function() {
          beforeCaseLower();
        });

        it('Should return false when response is greater than rule', function() {
          expect(service.run(Mock.rule1, Mock.answer1)).toEqual(false);
        });

        it('Should return true when response is lower than rule', function() {
          expect(service.run(Mock.rule2, Mock.answer2)).toEqual(true);
        });
      });

      describe('lowerEqual cases', function() {
        beforeEach(function() {
          beforeCaselowerEqual();
        });

        it('Should return true when response is lower than rule', function() {
          expect(service.run(Mock.rule1, Mock.answer1)).toEqual(true);
        });

        it('Should return true when response is lower or equals than rule', function() {
          expect(service.run(Mock.rule2, Mock.answer2)).toEqual(true);
        });

        it('Should return false when response is greater than rule', function() {
          expect(service.run(Mock.rule3, Mock.answer3)).toEqual(false);
        });
      });



    });
  });

  function mockNumericRuleTestService($injector) {
    Mock.NumericRuleTestService = $injector.get('otusjs.model.activity.NumericRuleTestService');

    spyOn(Mock.NumericRuleTestService, 'run').and.callThrough();

    return Mock.NumericRuleTestService;
  }

  function mockImmutableDate($injector) {
    Mock.ImmutableDate = $injector.get('otusjs.utils.ImmutableDate');

    return Mock.ImmutableDate;
  }

  function beforeCaseEqual() {
    Mock.rule1 = {};
    Mock.rule1.when = 'CAD1';
    Mock.rule1.operator = 'equal';
    Mock.rule1.isMetadata = false;
    Mock.rule1.answer = "20:00:00";

    Mock.answer1 = new Mock.ImmutableDate;
    Mock.answer1.resetDate();
    Mock.answer1.setHours(20);
    Mock.answer1.setMinutes(0);
    Mock.answer1.setSeconds(0);
    Mock.answer1.setMilliseconds(0);

    Mock.rule2 = {};
    Mock.rule2.when = 'CAD1';
    Mock.rule2.operator = 'equal';
    Mock.rule2.isMetadata = false;
    Mock.rule2.answer = "20:10:00";

    Mock.answer2 = new Mock.ImmutableDate;
    Mock.answer2.resetDate();
    Mock.answer2.setHours(20);
    Mock.answer2.setMinutes(0);
    Mock.answer2.setSeconds(0);
    Mock.answer2.setMilliseconds(0);
  }

  function beforeCaseNotEqual() {
    Mock.rule1 = {};
    Mock.rule1.when = 'CAD1';
    Mock.rule1.operator = 'notEqual';
    Mock.rule1.isMetadata = false;
    Mock.rule1.answer = "20:10:00";

    Mock.answer1 = new Mock.ImmutableDate;
    Mock.answer1.resetDate();
    Mock.answer1.setHours(20);
    Mock.answer1.setMinutes(0);
    Mock.answer1.setSeconds(0);
    Mock.answer1.setMilliseconds(0);

    Mock.rule2 = {};
    Mock.rule2.when = 'CAD1';
    Mock.rule2.operator = 'notEqual';
    Mock.rule2.isMetadata = false;
    Mock.rule2.answer = "20:00:00";

    Mock.answer2 = new Mock.ImmutableDate;
    Mock.answer2.resetDate();
    Mock.answer2.setHours(20);
    Mock.answer2.setMinutes(0);
    Mock.answer2.setSeconds(0);
    Mock.answer2.setMilliseconds(0);
  }

  function beforeCaseGreater() {
    Mock.rule1 = {};
    Mock.rule1.when = 'CAD1';
    Mock.rule1.operator = 'greater';
    Mock.rule1.isMetadata = false;
    Mock.rule1.answer = "20:00:00";

    Mock.answer1 = new Mock.ImmutableDate;
    Mock.answer1.resetDate();
    Mock.answer1.setHours(20);
    Mock.answer1.setMinutes(10);
    Mock.answer1.setSeconds(0);
    Mock.answer1.setMilliseconds(0);

    Mock.rule2 = {};
    Mock.rule2.when = 'CAD1';
    Mock.rule2.operator = 'greater';
    Mock.rule2.isMetadata = false;
    Mock.rule2.answer = "20:00:00";

    Mock.answer2 = new Mock.ImmutableDate;
    Mock.answer2.resetDate();
    Mock.answer2.setHours(20);
    Mock.answer2.setMinutes(0);
    Mock.answer2.setSeconds(0);
    Mock.answer2.setMilliseconds(0);
  }

  function beforeCaseGreaterEqual() {
    Mock.rule1 = {};
    Mock.rule1.when = 'CAD1';
    Mock.rule1.operator = 'greaterEqual';
    Mock.rule1.isMetadata = false;
    Mock.rule1.answer = "20:00:00";

    Mock.answer1 = new Mock.ImmutableDate;
    Mock.answer1.resetDate();
    Mock.answer1.setHours(20);
    Mock.answer1.setMinutes(10);
    Mock.answer1.setSeconds(0);
    Mock.answer1.setMilliseconds(0);

    Mock.rule2 = {};
    Mock.rule2.when = 'CAD1';
    Mock.rule2.operator = 'greaterEqual';
    Mock.rule2.isMetadata = false;
    Mock.rule2.answer = "20:00:00";

    Mock.answer2 = new Mock.ImmutableDate;
    Mock.answer2.resetDate();
    Mock.answer2.setHours(20);
    Mock.answer2.setMinutes(0);
    Mock.answer2.setSeconds(0);
    Mock.answer2.setMilliseconds(0);

    Mock.rule3 = {};
    Mock.rule3.when = 'CAD1';
    Mock.rule3.operator = 'greaterEqual';
    Mock.rule3.isMetadata = false;
    Mock.rule3.answer = "20:00:00";

    Mock.answer3 = new Mock.ImmutableDate;
    Mock.answer3.resetDate();
    Mock.answer3.setHours(10);
    Mock.answer3.setMinutes(0);
    Mock.answer3.setSeconds(0);
    Mock.answer3.setMilliseconds(0);
  }

  function beforeCaseLower() {
    Mock.rule1 = {};
    Mock.rule1.when = 'CAD1';
    Mock.rule1.operator = 'lower';
    Mock.rule1.isMetadata = false;
    Mock.rule1.answer = "20:00:00";

    Mock.answer1 = new Mock.ImmutableDate;
    Mock.answer1.resetDate();
    Mock.answer1.setHours(20);
    Mock.answer1.setMinutes(10);
    Mock.answer1.setSeconds(0);
    Mock.answer1.setMilliseconds(0);

    Mock.rule2 = {};
    Mock.rule2.when = 'CAD1';
    Mock.rule2.operator = 'lower';
    Mock.rule2.isMetadata = false;
    Mock.rule2.answer = "20:00:00";

    Mock.answer2 = new Mock.ImmutableDate;
    Mock.answer2.resetDate();
    Mock.answer2.setHours(19);
    Mock.answer2.setMinutes(0);
    Mock.answer2.setSeconds(0);
    Mock.answer2.setMilliseconds(0);
  }

  function beforeCaselowerEqual() {
    Mock.rule1 = {};
    Mock.rule1.when = 'CAD1';
    Mock.rule1.operator = 'lowerEqual';
    Mock.rule1.isMetadata = false;
    Mock.rule1.answer = "20:00:00";

    Mock.answer1 = new Mock.ImmutableDate;
    Mock.answer1.resetDate();
    Mock.answer1.setHours(19);
    Mock.answer1.setMinutes(0);
    Mock.answer1.setSeconds(0);
    Mock.answer1.setMilliseconds(0);

    Mock.rule2 = {};
    Mock.rule2.when = 'CAD1';
    Mock.rule2.operator = 'lowerEqual';
    Mock.rule2.isMetadata = false;
    Mock.rule2.answer = "20:00:00";

    Mock.answer2 = new Mock.ImmutableDate;
    Mock.answer2.resetDate();
    Mock.answer2.setHours(20);
    Mock.answer2.setMinutes(0);
    Mock.answer2.setSeconds(0);
    Mock.answer2.setMilliseconds(0);

    Mock.rule3 = {};
    Mock.rule3.when = 'CAD1';
    Mock.rule3.operator = 'lowerEqual';
    Mock.rule3.isMetadata = false;
    Mock.rule3.answer = "20:00:00";

    Mock.answer3 = new Mock.ImmutableDate;
    Mock.answer3.resetDate();
    Mock.answer3.setHours(21);
    Mock.answer3.setMinutes(0);
    Mock.answer3.setSeconds(0);
    Mock.answer3.setMilliseconds(0);
  }
});
