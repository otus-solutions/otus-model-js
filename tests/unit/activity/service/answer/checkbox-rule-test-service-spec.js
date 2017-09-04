describe('CheckboxRuleTestService:', function() {

  var Mock = {};
  var Injections = {};
  var service = {};

  beforeEach(function() {
    angular.mock.module('otusjs');

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
        Mock.rule.answer = 'Test';
        Mock.rule.isMetadata = false;
      });

      it('answer it is text', function() {
        expect(service.run(Mock.rule, 'Test')).toBe(false);
      });

    });

    describe('equal cases', function() {
      describe('when rule created about metadata', function() {
        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'equal';
          Mock.rule.answer = 1;
          Mock.rule.isMetadata = true;
        });

        it('should return true when answer and equal reference', function() {
          expect(service.run(Mock.rule, 1)).toBe(true);
          expect(Mock.NumericRuleTestService.run).toHaveBeenCalledWith(Mock.rule, 1);
        });

        it('should return false when answer and not equal reference', function() {
          expect(service.run(Mock.rule, 2)).toBe(false);
          expect(Mock.NumericRuleTestService.run).toHaveBeenCalledWith(Mock.rule, 2);
        });

      });

      describe('when rule created about response options', function() {
        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'equal';
          Mock.rule.answer = 'CAD1a';
          Mock.rule.isMetadata = false;

          Mock.answers = [];
          Mock.answers = [{
            option: 'CAD1a',
            state: true
          }, {
            option: 'CAD1b',
            state: false
          }, {
            option: 'CAD1c',
            state: false
          }];
        });

        it('should return true when answer and equal reference', function() {
          expect(service.run(Mock.rule, Mock.answers)).toBe(true);
        });

        it('should return false when answer and not equal reference', function() {
          expect(service.run(Mock.rule, [])).toBe(false);
        });

      });
    });

    describe('notEqual cases', function() {
      describe('when rule created about metadata', function() {
        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'notEqual';
          Mock.rule.answer = 1;
          Mock.rule.isMetadata = true;
        });

        it('should return true when answer and not equal reference', function() {
          expect(service.run(Mock.rule, 2)).toBe(true);
          expect(Mock.NumericRuleTestService.run).toHaveBeenCalledWith(Mock.rule, 2);
        });

        it('should return false when answer and equal reference', function() {
          expect(service.run(Mock.rule, 1)).toBe(false);
          expect(Mock.NumericRuleTestService.run).toHaveBeenCalledWith(Mock.rule, 1);
        });

      });

      describe('when rule created about response options', function() {
        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'notEqual';
          Mock.rule.answer = 'CAD1a';
          Mock.rule.isMetadata = false;

          Mock.answers = [];
          Mock.answers = [{
            option: 'CAD1a',
            state: true
          }, {
            option: 'CAD1b',
            state: false
          }, {
            option: 'CAD1c',
            state: false
          }];
        });

        it('should return true when answer not equal reference', function() {
          expect(service.run(Mock.rule, [])).toBe(true);
        });

        it('should return false when answer equal reference', function() {
          expect(service.run(Mock.rule, Mock.answers)).toBe(false);
        });
      });
    });

    describe('contains cases', function() {
      describe('when rule created about response options', function() {
        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'contains';
          Mock.rule.answer = 'CAD1a';
          Mock.rule.isMetadata = false;

          Mock.answers = [];
          Mock.answers = [{
            option: 'CAD1a',
            state: true
          }, {
            option: 'CAD1b',
            state: false
          }, {
            option: 'CAD1c',
            state: false
          }];

          Mock.answers2 = [];
          Mock.answers2 = [{
            option: 'XKCD1a',
            state: false
          }, {
            option: 'XKCD1b',
            state: false
          }, {
            option: 'XKCD1c',
            state: false
          }];
        });

        it('should return true when the response contains in rule', function() {
          expect(service.run(Mock.rule, Mock.answers)).toBe(true);
        });

        it('should return false when the response not contains in rule', function() {
          expect(service.run(Mock.rule, Mock.answers2)).toBe(false);
        });

        it('should return false when the empty response not contains in rule', function() {
          expect(service.run(Mock.rule, [])).toBe(false);
        });
      });
    });

    describe('quantity cases', function() {
      describe('when rule created about response options', function() {
        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'quantity';
          Mock.rule.answer = 2;
          Mock.rule.isMetadata = false;

          Mock.answers1 = [];
          Mock.answers1 = [{
            option: 'CAD1a',
            state: true
          }, {
            option: 'CAD1b',
            state: true
          }, {
            option: 'CAD1c',
            state: false
          }];

          Mock.answers2 = [];
          Mock.answers2 = [{
            option: 'CAD1a',
            state: false
          }, {
            option: 'CAD1b',
            state: false
          }, {
            option: 'CAD1c',
            state: false
          }];
        });

        it('should return true when selected amount to equal rule', function() {
          expect(service.run(Mock.rule, Mock.answers1)).toBe(true);
        });

        it('should return false when selected amount to not equal rule', function() {
          expect(service.run(Mock.rule, Mock.answers2)).toBe(false);
        });
      });
    });

    describe('minSelected cases', function() {
      describe('when rule created about response options', function() {
        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'minSelected';
          Mock.rule.answer = 1;
          Mock.rule.isMetadata = false;

          Mock.answers1 = [];
          Mock.answers1 = [{
            option: 'CAD1a',
            state: true
          }, {
            option: 'CAD1b',
            state: true
          }, {
            option: 'CAD1c',
            state: false
          }];

          Mock.answers2 = [];
          Mock.answers2 = [{
            option: 'CAD1a',
            state: false
          }, {
            option: 'CAD1b',
            state: false
          }, {
            option: 'CAD1c',
            state: false
          }];
        });

        it('should return true when response contains value minimum rule', function() {
          expect(service.run(Mock.rule, Mock.answers1)).toBe(true);
        });

        it('Should return false when the response contains no minimum value', function() {
          expect(service.run(Mock.rule, Mock.answers2)).toBe(false);
        });

      });
    });

    describe('maxSelected cases', function() {
      describe('when rule created about response options', function() {
        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'maxSelected';
          Mock.rule.answer = 2;
          Mock.rule.isMetadata = false;

          Mock.answers1 = [];
          Mock.answers1 = [{
            option: 'CAD1a',
            state: true
          }, {
            option: 'CAD1b',
            state: true
          }, {
            option: 'CAD1c',
            state: false
          }];

          Mock.answers2 = [];
          Mock.answers2 = [{
            option: 'CAD1a',
            state: true
          }, {
            option: 'CAD1b',
            state: true
          }, {
            option: 'CAD1c',
            state: true
          }];
        });

        it('should return true when response is smaller equal to the rule', function() {
          expect(service.run(Mock.rule, Mock.answers1)).toBe(true);
        });

        it('should return false when response is larger equal to the rule', function() {
          expect(service.run(Mock.rule, Mock.answers2)).toBe(false);
        });
      });
    });
  });

  function mockNumericRuleTestService($injector) {
    Mock.NumericRuleTestService = $injector.get('otusjs.model.activity.NumericRuleTestService');

    spyOn(Mock.NumericRuleTestService, 'run').and.callThrough();

    return Mock.NumericRuleTestService;
  }

});
