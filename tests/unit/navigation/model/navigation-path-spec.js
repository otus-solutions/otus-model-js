xdescribe('NavigationStackFactory', function()  {

  var Mock = {};
  var stack = {};

  beforeEach(function()  {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      /* Test data */
      mockStackItems(_$injector_);

      stack = _$injector_.get('otusjs.model.navigation.NavigationTrackerFactory').create();
    });
  });

  describe('add method', function()  {

    it('should put an item after of the current item of list', function()  {
      // Simple add
      stack.add(Mock.itemA);
      expect(stack.getCurrentItem()).toEqual(Mock.itemA);

      stack.add(Mock.itemB);
      expect(stack.getCurrentItem()).toEqual(Mock.itemB);

      stack.add(Mock.itemC);
      expect(stack.getCurrentItem()).toEqual(Mock.itemC);

      stack.add(Mock.itemD);
      expect(stack.getCurrentItem()).toEqual(Mock.itemD);

      expect(stack.getSize()).toBe(4);
    });

    describe('when back action was performed on the path', function() {

      beforeEach(function() {
        stack.add(Mock.itemA);
        stack.add(Mock.itemB);
        stack.add(Mock.itemC);
        stack.add(Mock.itemD);
      });

      it('should put an item after of the current item of list', function()  {
        stack.back();
        stack.back();
        expect(stack.getCurrentItem()).toEqual(Mock.itemB);

        stack.add(Mock.itemD);
        expect(stack.getCurrentItem()).toEqual(Mock.itemD);

        stack.back();
        expect(stack.getCurrentItem()).toEqual(Mock.itemB);

        stack.back();
        expect(stack.getCurrentItem()).toEqual(Mock.itemA);

        expect(stack.getSize()).toBe(3);
      });

      describe('and there is no item', function() {

        beforeEach(function() {
          stack.back();
          stack.back();
          stack.back();
          stack.back();
        });

        it('should put the item at the beginning of the path', function() {
          stack.add(Mock.itemB);
          expect(stack.getCurrentItem()).toEqual(Mock.itemB);
          expect(stack.getCurrentItem().getPrevious()).toEqual(null);
          stack.ahead();
          expect(stack.getCurrentItem()).toEqual(null);
          expect(stack.getSize()).toBe(1);
        });

      });

    });

    describe('when ahead action was performed on the path', function() {

      beforeEach(function() {
        stack.add(Mock.itemA);
        stack.add(Mock.itemB);
        stack.add(Mock.itemC);

        stack.back();
        stack.back();
      });

      it('should put an item after of the current item of list', function()  {
        expect(stack.getCurrentItem()).toEqual(Mock.itemA);

        stack.ahead();
        expect(stack.getCurrentItem()).toEqual(Mock.itemB);

        stack.add(Mock.itemD);
        expect(stack.getCurrentItem()).toEqual(Mock.itemD);

        stack.ahead();
        expect(stack.getCurrentItem()).toEqual(null);

        expect(stack.getSize()).toBe(3);
      });

      describe('and there is no item', function() {

        beforeEach(function() {
          stack.ahead();
          stack.ahead();
          stack.ahead();
        });

        it('should put the item at the end of the path', function() {
          stack.add(Mock.itemD);
          expect(stack.getCurrentItem()).toEqual(Mock.itemD);
          expect(stack.getCurrentItem().getPrevious()).toEqual(Mock.itemC);
          stack.ahead();
          expect(stack.getCurrentItem()).toEqual(null);
          expect(stack.getSize()).toBe(4);
        });

      });

    });

  });

  describe('back method', function()  {

    beforeEach(function() {
      stack.add(Mock.itemA);
      stack.add(Mock.itemB);
      stack.add(Mock.itemC);
      stack.add(Mock.itemD);
    });

    it('should point to previous item of current item', function()  {
      expect(stack.getCurrentItem()).toEqual(Mock.itemD);

      stack.back();
      expect(stack.getCurrentItem()).toEqual(Mock.itemC);

      stack.back();
      expect(stack.getCurrentItem()).toEqual(Mock.itemB);

      stack.back();
      expect(stack.getCurrentItem()).toEqual(Mock.itemA);
    });

    describe('when not exists previous item', function() {

      beforeEach(function() {
        stack.back();
        stack.back();
        stack.back();
        stack.back();
      });

      it('current item should be null', function() {
        expect(stack.getCurrentItem()).toEqual(null);
      });

    });

  });

  describe('ahead method', function()  {

    beforeEach(function() {
      stack.add(Mock.itemA);
      stack.add(Mock.itemB);
      stack.add(Mock.itemC);
      stack.add(Mock.itemD);

      stack.back();
      stack.back();
      stack.back();
    });

    it('should point to next item of current item', function()  {
      expect(stack.getCurrentItem()).toEqual(Mock.itemA);

      stack.ahead();
      expect(stack.getCurrentItem()).toEqual(Mock.itemB);

      stack.ahead();
      expect(stack.getCurrentItem()).toEqual(Mock.itemC);

      stack.ahead();
      expect(stack.getCurrentItem()).toEqual(Mock.itemD);
    });

    describe('when not exists next item', function() {

      beforeEach(function() {
        stack.ahead();
        stack.ahead();
        stack.ahead();
        stack.ahead();
      });

      it('current item should be null', function() {
        expect(stack.getCurrentItem()).toEqual(null);
      });

    });

  });

  function mockStackItems($injector) {
    var itemFactory = $injector.get('otusjs.model.navigation.NavigationTrackingItemFactory');
    var options = {};

    options = { id: 'A', label: 'Label', type: 'IntegerQuestion', answer: 'Label da resposta', metadata: 'Label do metdado.' };
    Mock.itemA = itemFactory.create(options);

    options = { id: 'B', label: 'Label', type: 'IntegerQuestion', answer: 'Label da resposta', metadata: 'Label do metdado.' };
    Mock.itemB = itemFactory.create(options);

    options = { id: 'C', label: 'Label', type: 'IntegerQuestion', answer: 'Label da resposta', metadata: 'Label do metdado.' };
    Mock.itemC = itemFactory.create(options);

    options = { id: 'D', label: 'Label', type: 'IntegerQuestion', answer: 'Label da resposta', metadata: 'Label do metdado.' };
    Mock.itemD = itemFactory.create(options);
  }
});
