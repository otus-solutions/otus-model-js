describe('NumericRuleTestService', () => {

  let Mock = {};
  let Injections = {};
  let service = {};

  beforeEach(() => {
    module('otusjs.activity');

    inject(function(_$injector_) {
      service = _$injector_.get('otusjs.activity.NumericRuleTestService', Injections);
    });
  });

  describe('run method', () => {

    describe('when inputed answer is a NaN', () => {

      beforeEach(() => {
        Mock.rule = {};
      });

      it('should return false', () => {
        expect(service.run(Mock.rule, 'word')).toBe(false);
      });

    });

    describe('when inputed answer is not an Integer', () => {

      beforeEach(() => {
        Mock.rule = {};
      });

      it('should return false', () => {
        expect(service.run(Mock.rule, 'word')).toBe(false);
        expect(service.run(Mock.rule, 'w')).toBe(false);
        expect(service.run(Mock.rule, 'e1')).toBe(false);
        expect(service.run(Mock.rule, '1e')).toBe(false);
      });

    });

    describe('when inputed answer is an Integer', () => {

      describe('equal cases', () => {

        beforeEach(() => {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'equal';
          Mock.rule.answer = '1';
        });

        describe('when answer is exactly equal to rule reference', () => {

          it('should return true', () => {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
          });

        });

        describe('when answer is not exactly equal to rule reference', () => {

          it('should should return false', () => {
            expect(service.run(Mock.rule, 0)).toBe(false);
            expect(service.run(Mock.rule, '0')).toBe(false);
            expect(service.run(Mock.rule, 'a value')).toBe(false);
          });

        });

      });

      describe('notEqual cases', () => {

        beforeEach(() => {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'notEqual';
          Mock.rule.answer = '1';
        });

        describe('when answer is exactly equal to rule reference', () => {

          it('should return false', () => {
            expect(service.run(Mock.rule, 1)).toBe(false);
            expect(service.run(Mock.rule, '1')).toBe(false);
          });

        });

        describe('when answer is not exactly equal to rule reference', () => {

          it('should should return true', () => {
            expect(service.run(Mock.rule, 0)).toBe(true);
            expect(service.run(Mock.rule, '0')).toBe(true);
          });

        });

      });

      describe('within cases', () => {

        beforeEach(() => {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'within';
          Mock.rule.answer = [1, 3, 5];
        });

        describe('when answer is within in rule answers', () => {

          it('should return true', () => {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
            expect(service.run(Mock.rule, 3)).toBe(true);
            expect(service.run(Mock.rule, '3')).toBe(true);
            expect(service.run(Mock.rule, 5)).toBe(true);
            expect(service.run(Mock.rule, '5')).toBe(true);
          });

        });

        describe('when answer is not within in rule answers', () => {

          it('should should return true', () => {
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

      describe('greater cases', () => {

        beforeEach(() => {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'greater';
          Mock.rule.answer = '1';
        });

        describe('when answer is greater than rule reference', () => {

          it('should return true', () => {
            expect(service.run(Mock.rule, 2)).toBe(true);
            expect(service.run(Mock.rule, '2')).toBe(true);
          });

        });

        describe('when answer is not greater than rule reference', () => {

          it('should return false', () => {
            expect(service.run(Mock.rule, 1)).toBe(false);
            expect(service.run(Mock.rule, '1')).toBe(false);
          });

        });

      });

      describe('greaterEqual cases', () => {

        beforeEach(() => {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'greaterEqual';
          Mock.rule.answer = '1';
        });

        describe('when answer is greater or equal to rule reference', () => {

          it('should return true', () => {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
            expect(service.run(Mock.rule, 2)).toBe(true);
            expect(service.run(Mock.rule, '2')).toBe(true);
          });

        });

        describe('when answer is not greater or equal to rule reference', () => {

          it('should return false', () => {
            expect(service.run(Mock.rule, 0)).toBe(false);
            expect(service.run(Mock.rule, '0')).toBe(false);
          });

        });

      });

      describe('lower cases', () => {

        beforeEach(() => {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'lower';
          Mock.rule.answer = '1';
        });

        describe('when answer is lower than rule reference', () => {

          it('should return true', () => {
            expect(service.run(Mock.rule, 0)).toBe(true);
            expect(service.run(Mock.rule, '0')).toBe(true);
          });

        });

        describe('when answer is not lower than rule reference', () => {

          it('should return false', () => {
            expect(service.run(Mock.rule, 1)).toBe(false);
            expect(service.run(Mock.rule, '1')).toBe(false);
          });

        });

      });

      describe('lowerEqual cases', () => {

        beforeEach(() => {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'lowerEqual';
          Mock.rule.answer = '1';
        });

        describe('when answer is lower or equal to rule reference', () => {

          it('should return true', () => {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
            expect(service.run(Mock.rule, 0)).toBe(true);
            expect(service.run(Mock.rule, '0')).toBe(true);
          });

        });

        describe('when answer is not lower or equal to rule reference', () => {

          it('should return false', () => {
            expect(service.run(Mock.rule, 2)).toBe(false);
            expect(service.run(Mock.rule, '2')).toBe(false);
          });

        });

      });

      describe('between cases', () => {

        beforeEach(() => {
          Mock.rule = {};
          Mock.rule.when = 'CAD1';
          Mock.rule.operator = 'between';
          Mock.rule.answer = [1, 3];
        });

        describe('when answer is between the rule answers', () => {

          it('should return true', () => {
            expect(service.run(Mock.rule, 1)).toBe(true);
            expect(service.run(Mock.rule, '1')).toBe(true);
            expect(service.run(Mock.rule, 2)).toBe(true);
            expect(service.run(Mock.rule, '2')).toBe(true);
            expect(service.run(Mock.rule, 3)).toBe(true);
            expect(service.run(Mock.rule, '3')).toBe(true);
          });

        });

        describe('when answer is not between the rule answers', () => {

          it('should should return true', () => {
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
