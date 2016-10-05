describe('NavigationStackFactory', function()  {

  let Mock = {};
  let stack = {};

  beforeEach(function()  {
    module('otusjs');

    inject(function(_$injector_) {
      /* Test data */
      mockStackItems(_$injector_);

      stack = _$injector_.get('otusjs.model.navigation.NavigationStackFactory').create();
    });
  });

  describe('add method', function()  {

    it('should put an item after the current item of list', function()  {
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

      // Add after back
      stack.back();
      stack.back();
      stack.add(Mock.itemD);
      expect(stack.getCurrentItem()).toEqual(Mock.itemD);

      stack.back();
      stack.back();
      expect(stack.getCurrentItem()).toEqual(Mock.itemA);
      stack.ahead();
      expect(stack.getCurrentItem()).toEqual(Mock.itemB);
      stack.ahead();
      expect(stack.getCurrentItem()).toEqual(Mock.itemD);

      expect(stack.getSize()).toBe(3);
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

  });

  function mockStackItems($injector) {
    let itemFactory = $injector.get('otusjs.model.navigation.NavigationStackItemFactory');
    let options = {};

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
