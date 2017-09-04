xdescribe('DateTimeRuleTestService:', function() {

  var Mock = {};
  var Injections = {};
  var service = {};

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      service = _$injector_.get('otusjs.model.activity.CalendarRuleTestService', {
        NumericRuleTestService: mockNumericRuleTestService(_$injector_)
      });
    });
  });

  describe('run method, ', function() {

    describe('test cases for NumericRuleTestService service', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'equal';
        Mock.rule.answer = 1;
        Mock.rule.isMetadata = true;
      });

      it('should call NumericRuleTestService when answer is number', function() {
        expect(service.run(Mock.rule, 1)).toBe(true);
        expect(Mock.NumericRuleTestService.run).toHaveBeenCalledWith(Mock.rule, 1);
      });

      it('should no call NumericRuleTestService when answer is not number', function() {
        expect(service.run(Mock.rule, '1')).toBe(true);
        expect(Mock.NumericRuleTestService.run).not.toHaveBeenCalledWith(Mock.rule, 1);
      });
    });

    describe('equal cases', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'equal';
        Mock.rule.answer = '22/01/1993';
        Mock.rule.isMetadata = false;

      });

      it('should return true when answer is equal to reference', function() {
        expect(service.run(Mock.rule, new Date(1993, 0, 22))).toBe(true);
      });

      it('should return false when answer is not equal to reference', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 22))).toBe(false);
      });
    });

    describe('notEqual cases', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'notEqual';
        Mock.rule.answer = '22/01/1993';
        Mock.rule.isMetadata = false;
      });

      it('should return false when answer is equal to reference', function() {
        expect(service.run(Mock.rule, new Date(1993, 0, 22))).toBe(false);
      });

      it('should return true when answer is not equal to reference, date not equal', function() {
        expect(service.run(Mock.rule, new Date(2016, 4, 2))).toBe(true);
      });

      it('should return true when answer is not equal to reference, day not equal', function() {
        expect(service.run(Mock.rule, new Date(1993, 0, 23))).toBe(true);
      });

      it('should return true when answer is not equal to reference, month not equal', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 22))).toBe(true);
      });

      it('should return true when answer is not equal to reference, year not equal', function() {
        expect(service.run(Mock.rule, new Date(2016, 0, 22))).toBe(true);
      });
    });

    describe('greater cases', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'greater';
        Mock.rule.answer = '22/02/1993';
        Mock.rule.isMetadata = false;

      });

      it('should return true when answer is larger who reference', function() {
        expect(service.run(Mock.rule, new Date(1996, 2, 23))).toBe(true);
      });

      it('should return true when answer is larger who reference, day is larger', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 23))).toBe(true);
      });

      it('should return true when answer is larger who reference, month is larger', function() {
        expect(service.run(Mock.rule, new Date(1993, 2, 22))).toBe(true);
      });

      it('should return true when answer is larger who reference, year is larger', function() {
        expect(service.run(Mock.rule, new Date(1996, 1, 22))).toBe(true);
      });

      it('should return false when answer is equal who reference', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 22))).toBe(false);
      });

      it('should return false when answer is lower who reference', function() {
        expect(service.run(Mock.rule, new Date(1992, 0, 22))).toBe(false);
      });

      it('should return false when answer is lower who reference, day is lower', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 21))).toBe(false);
      });

      it('should return false when answer is lower who reference, month is lower', function() {
        expect(service.run(Mock.rule, new Date(1993, 0, 22))).toBe(false);
      });

      it('should return false when answer is lower who reference, year is lower', function() {
        expect(service.run(Mock.rule, new Date(1992, 1, 22))).toBe(false);
      });

    });

    describe('greaterEqual cases', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'greaterEqual';
        Mock.rule.answer = '22/02/1993';
        Mock.rule.isMetadata = false;

      });

      it('should return true when answer is equal who reference', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 22))).toBe(true);
      });

      it('should return true when answer is larger who reference, day is larger', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 24))).toBe(true);
      });

      it('should return true when answer is larger who reference, month is larger', function() {
        expect(service.run(Mock.rule, new Date(1993, 2, 22))).toBe(true);
      });

      it('should return true when answer is larger who reference, year is larger', function() {
        expect(service.run(Mock.rule, new Date(1996, 1, 22))).toBe(true);
      });

      it('should return false when answer is lower who reference', function() {
        expect(service.run(Mock.rule, new Date(1992, 0, 22))).toBe(false);
      });

    });

    describe('lower cases', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'lower';
        Mock.rule.answer = '22/02/1993';
        Mock.rule.isMetadata = false;

      });

      it('should return true when answer is lower who reference', function() {
        expect(service.run(Mock.rule, new Date(1992, 0, 22))).toBe(true);
      });

      it('should return false when answer is larger who reference, day is larger', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 24))).toBe(false);
      });

      it('should return false when answer is larger who reference, month is larger', function() {
        expect(service.run(Mock.rule, new Date(1993, 2, 22))).toBe(false);
      });

      it('should return false when answer is larger who reference, year is larger', function() {
        expect(service.run(Mock.rule, new Date(1996, 1, 22))).toBe(false);
      });

    });

    describe('lowerEqual cases', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'lowerEqual';
        Mock.rule.answer = '22/02/1993';
        Mock.rule.isMetadata = false;

      });

      it('should return true when answer is lower who reference', function() {
        expect(service.run(Mock.rule, new Date(1992, 0, 22))).toBe(true);
      });

      it('should return true when answer is lower who reference', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 22))).toBe(true);
      });

      it('should return false when answer is larger who reference', function() {
        expect(service.run(Mock.rule, new Date(1996, 2, 24))).toBe(false);
      });

      it('should return false when answer is larger who reference, day is larger', function() {
        expect(service.run(Mock.rule, new Date(1993, 1, 24))).toBe(false);
      });

      it('should return false when answer is larger who reference, month is larger', function() {
        expect(service.run(Mock.rule, new Date(1993, 2, 22))).toBe(false);
      });

      it('should return false when answer is larger who reference, year is larger', function() {
        expect(service.run(Mock.rule, new Date(1996, 1, 22))).toBe(false);
      });

    });

    xdescribe('between cases', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'between';
        Mock.rule.answer = ['22/01/1992', '22/05/1993'];
        Mock.rule.isMetadata = false;

      });

      it('should return true when answer is between the reference', function() {
        expect(service.run(Mock.rule, new Date(1992, 2, 20))).toBe(true);
      });

      it('should return false when answer is not between the reference, year is larger', function() {
        expect(service.run(Mock.rule, new Date(1996, 2, 20))).toBe(false);
      });

      it('should return false when answer is not between the reference, year is lower', function() {
        expect(service.run(Mock.rule, new Date(1991, 2, 20))).toBe(false);
      });

    });

    xdescribe('within cases', function() {
      beforeEach(function() {
        Mock.rule = {};
        Mock.rule.when = 'CAD1';
        Mock.rule.operator = 'within';
        Mock.rule.answer = ['22/01/1993', '22/05/1993'];
        Mock.rule.isMetadata = false;

      });

      it('should return true when answer is within the reference', function() {
        expect(service.run(Mock.rule, new Date(1993, 0, 22))).toBe(true);
      });

      it('should return false when answer is not within the reference', function() {
        expect(service.run(Mock.rule, new Date(1994, 0, 22))).toBe(false);
      });

    });
  });

  function mockNumericRuleTestService($injector) {
    Mock.NumericRuleTestService = $injector.get('otusjs.model.activity.NumericRuleTestService');

    spyOn(Mock.NumericRuleTestService, 'run').and.callThrough();

    return Mock.NumericRuleTestService;
  }

});
