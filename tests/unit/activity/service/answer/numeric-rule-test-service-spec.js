describe('NumericRuleTestService', function() {

  let Mock = {};
  let Injections = {};
  let service = {};

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      service = _$injector_.get('otusjs.model.activity.NumericRuleTestService', Injections);
    });
  });

  describe('run method', function() {

    describe('when inputed answer is a NaN', function() {

      beforeEach(function() {
        Mock.rule = {};
      });

      it('should return false', function() {
        expect(service.run(Mock.rule, 'word')).toBe(false);
      });

    });

    describe('when inputed answer is not an Integer', function() {

      beforeEach(function() {
        Mock.rule = {};
      });

      it('should return false', function() {
        expect(service.run(Mock.rule, 'word')).toBe(false);
        expect(service.run(Mock.rule, 'w')).toBe(false);
        expect(service.run(Mock.rule, 'e1')).toBe(false);
        expect(service.run(Mock.rule, '1e')).toBe(false);
      });

    });

    describe('when inputed answer is an Integer', function() {

      describe('equal cases', function() {

        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'equal';
          Mock.rule.answer = '1';
        });

        describe('when answer is exactly equal to rule reference', function() {

          it('should return true', function() {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
          });

        });

        describe('when answer is not exactly equal to rule reference', function() {

          it('should should return false', function() {
            expect(service.run(Mock.rule, 0)).toBe(false);
            expect(service.run(Mock.rule, '0')).toBe(false);
            expect(service.run(Mock.rule, 'a value')).toBe(false);
          });

        });

      });

      describe('notEqual cases', function() {

        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'notEqual';
          Mock.rule.answer = '1';
        });

        describe('when answer is exactly equal to rule reference', function() {

          it('should return false', function() {
            expect(service.run(Mock.rule, 1)).toBe(false);
            expect(service.run(Mock.rule, '1')).toBe(false);
          });

        });

        describe('when answer is not exactly equal to rule reference', function() {

          it('should should return true', function() {
            expect(service.run(Mock.rule, 0)).toBe(true);
            expect(service.run(Mock.rule, '0')).toBe(true);
          });

        });

      });

      describe('within cases', function() {

        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'within';
          Mock.rule.answer = [1, 3, 5];
        });

        describe('when answer is within in rule answers', function() {

          it('should return true', function() {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
            expect(service.run(Mock.rule, 3)).toBe(true);
            expect(service.run(Mock.rule, '3')).toBe(true);
            expect(service.run(Mock.rule, 5)).toBe(true);
            expect(service.run(Mock.rule, '5')).toBe(true);
          });

        });

        describe('when answer is not within in rule answers', function() {

          it('should should return true', function() {
            expect(service.run(Mock.rule, 0)).toBe(false);
            expect(service.run(Mock.rule, '0')).toBe(false);
            expect(service.run(Mock.rule, 2)).toBe(false);
            expect(service.run(Mock.rule, '2')).toBe(false);
            expect(service.run(Mock.rule, 7)).toBe(false);
            expect(service.run(Mock.rule, '7')).toBe(false);
            expect(service.run(Mock.rule, 'a value')).toBe(false);
          });

        });

      });

      describe('greater cases', function() {

        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'greater';
          Mock.rule.answer = '1';
        });

        describe('when answer is greater than rule reference', function() {

          it('should return true', function() {
            expect(service.run(Mock.rule, 2)).toBe(true);
            expect(service.run(Mock.rule, '2')).toBe(true);
          });

        });

        describe('when answer is not greater than rule reference', function() {

          it('should return false', function() {
            expect(service.run(Mock.rule, 1)).toBe(false);
            expect(service.run(Mock.rule, '1')).toBe(false);
          });

        });

      });

      describe('greaterEqual cases', function() {

        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'greaterEqual';
          Mock.rule.answer = '1';
        });

        describe('when answer is greater or equal to rule reference', function() {

          it('should return true', function() {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
            expect(service.run(Mock.rule, 2)).toBe(true);
            expect(service.run(Mock.rule, '2')).toBe(true);
          });

        });

        describe('when answer is not greater or equal to rule reference', function() {

          it('should return false', function() {
            expect(service.run(Mock.rule, 0)).toBe(false);
            expect(service.run(Mock.rule, '0')).toBe(false);
          });

        });

      });

      describe('lower cases', function() {

        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'lower';
          Mock.rule.answer = '1';
        });

        describe('when answer is lower than rule reference', function() {

          it('should return true', function() {
            expect(service.run(Mock.rule, 0)).toBe(true);
            expect(service.run(Mock.rule, '0')).toBe(true);
          });

        });

        describe('when answer is not lower than rule reference', function() {

          it('should return false', function() {
            expect(service.run(Mock.rule, 1)).toBe(false);
            expect(service.run(Mock.rule, '1')).toBe(false);
          });

        });

      });

      describe('lowerEqual cases', function() {

        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'lowerEqual';
          Mock.rule.answer = '1';
        });

        describe('when answer is lower or equal to rule reference', function() {

          it('should return true', function() {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
            expect(service.run(Mock.rule, 0)).toBe(true);
            expect(service.run(Mock.rule, '0')).toBe(true);
          });

        });

        describe('when answer is not lower or equal to rule reference', function() {

          it('should return false', function() {
            expect(service.run(Mock.rule, 2)).toBe(false);
            expect(service.run(Mock.rule, '2')).toBe(false);
          });

        });

      });

      describe('between cases', function() {

        beforeEach(function() {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'between';
          Mock.rule.answer = [1, 3];
        });

        describe('when answer is between the rule answers', function() {

          it('should return true', function() {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
            expect(service.run(Mock.rule, 2)).toBe(true);
            expect(service.run(Mock.rule, '2')).toBe(true);
            expect(service.run(Mock.rule, 3)).toBe(true);
            expect(service.run(Mock.rule, '3')).toBe(true);
          });

        });

        describe('when answer is not between the rule answers', function() {

          it('should should return true', function() {
            expect(service.run(Mock.rule, -1)).toBe(false);
            expect(service.run(Mock.rule, '-1')).toBe(false);
            expect(service.run(Mock.rule, 0)).toBe(false);
            expect(service.run(Mock.rule, '0')).toBe(false);
            expect(service.run(Mock.rule, 4)).toBe(false);
            expect(service.run(Mock.rule, '4')).toBe(false);
            expect(service.run(Mock.rule, 5)).toBe(false);
            expect(service.run(Mock.rule, '5')).toBe(false);
          });

        });

      });

    });

  });
});
