fdescribe('SurveyItemContainerFactory', function() {
  var Mock = {};
  var factory;
  var container;

  var QUESTION_TYPE = 'IntegerQuestion';
  var INEXISTENT_TEMPLATE_ID = 'Q5';
  var INEXISTENT_CUSTOM_ID = 'Q5';
  var INEXISTENT_ID = 'NOT_FOUND';

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('SurveyItemContainerFactory', {
        SurveyItemFactory: mockSurveyItemFactory(_$injector_),
        UpdateSurveyItemCustomID: mockUpdateSurveyItemCustomID(
          _$injector_)
      });

      mockItems();
      mockItemsToManage();
    });

    container = factory.create();
  });

  describe('manage method', function() {

    it('should initialize the array of items', function() {
      expect(container.getItemListSize()).toBe(0);

      container.manageItems(Mock.itemsToManage);
      expect(container.getItemListSize()).toBe(4);
    });

  });

  describe('getItemList method', function() {

    it('should return an array', function() {
      var returnedValue = container.getItemList();

      expect(Array.isArray(returnedValue)).toBe(true);
    });

  });

  describe('getItemListSize method', function() {

    it('should return zero when item Array is empty', function() {
      expect(container.getItemListSize()).toBe(0);
    });

    it('should return the number of added items', function() {
      container.manageItems(Mock.itemsToManage);
      expect(container.getItemListSize()).toBe(4);

      container.removeItem(Mock.itemFour.templateID);
      expect(container.getItemListSize()).toBe(3);
    });

  });

  describe('getItemByTemplateID method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    it('should return the item when exists', function() {
      var returnedItem = container.getItemByTemplateID(Mock.itemOne.templateID);

      expect(returnedItem.templateID).toEqual(Mock.itemOne.templateID);
    });

    it('should return the item when exists ignoring the camelcase',
      function() {
        var returnedItem = container.getItemByTemplateID(Mock.itemOne.templateID
          .toLowerCase());

        expect(returnedItem.templateID).toEqual(Mock.itemOne.templateID);
      });

    it('should return undefined when item not exists', function() {
      var returnedItem = container.getItemByTemplateID(
        INEXISTENT_TEMPLATE_ID);

      expect(returnedItem).toBeUndefined();
    });

  });

  describe('getItemByCustomID method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    it('should return the item when exists', function() {
      var returnedItemCustomID = container.getItemByCustomID(Mock.itemOne
        .customID);

      expect(returnedItemCustomID.customID).toEqual(Mock.itemOne.customID);
    });

    it('should return the item when exists ignoring camel case',
      function() {
        var returnedItemCustomID = container.getItemByCustomID(Mock.itemOne
          .customID.toUpperCase());

        expect(returnedItemCustomID.customID).toEqual(Mock.itemOne.customID);
      });

    it('should return undefined when item not exists', function() {
      var returnedItemCustomID = container.getItemByCustomID(
        INEXISTENT_CUSTOM_ID);

      expect(returnedItemCustomID).toBeUndefined();
    });

  });

  describe('getItemByID method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    describe(
      'should verify between the both properties of the item and return it when exists',
      function() {

        it('criteria by templateID - UNCHANGED CUSTOM_ID', function() {
          var returnedItem = container.getItemByID("Q1");

          expect(returnedItem).toEqual(Mock.itemOne);
        });

        it('criteria by templateID - CHANGED CUSTOM_ID', function() {
          Mock.UpdateSurveyItemCustomID.execute(Mock.itemOne,
            'MyCustomID_1');
          var returnedItem = container.getItemByID("Q1");

          expect(returnedItem).toEqual(Mock.itemOne);
        });

        it('criteria by customID - CHANGED CUSTOM_ID', function() {
          Mock.UpdateSurveyItemCustomID.execute(Mock.itemOne,
            'MyCustomID_1');
          var returnedItem = container.getItemByID("MyCustomID_1");

          expect(returnedItem).toEqual(Mock.itemOne);
        });

        it('should return undefined when item not exists', function() {
          var returnedItemCustomID = container.getItemByID(
            INEXISTENT_ID);

          expect(returnedItemCustomID).toBeUndefined();
        });
      });

  });

  describe('getAllCheckboxQuestion method', function() {

    beforeEach(function() {
      mockCheckboxQuestions();
      mockCheckboxQuestionToItemToManage();
      container.manageItems(Mock.checkboxQuestionToManage);
    });

    it('should return all Checkbox question', function() {
      expect(container.getAllCheckboxQuestion()).toEqual(Mock.checkboxQuestionToManage);
    });

  });

  describe('getItemByPosition method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    it('should return the item when exists', function() {
      var returnedItem = container.getItemByPosition(0);

      expect(returnedItem.templateID).toEqual(Mock.itemOne.templateID);
    });

    it('should return undefined when item not exists', function() {
      var returnedItem = container.getItemByPosition(10);

      expect(returnedItem).toBeUndefined();
    });

  });

  describe('getItemPosition method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    it('should return an integer that represents the index of item',
      function() {
        var returnedValue = container.getItemPosition(Mock.itemOne.templateID);
        expect(returnedValue).toBe(0);

        returnedValue = container.getItemPosition(Mock.itemTwo.templateID);
        expect(returnedValue).toBe(1);

        returnedValue = container.getItemPosition(Mock.itemThree.templateID);
        expect(returnedValue).toBe(2);
      });

    it('should return null when item does not exists', function() {
      var returnedValue = container.getItemPosition(
        INEXISTENT_TEMPLATE_ID);
      expect(returnedValue).toBe(null);
    });

  });

  describe('existsItem method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    it('should return true when item exists', function() {
      expect(container.existsItem(Mock.itemOne.templateID)).toBe(true);
    });

    it('should return false when item not exists', function() {
      expect(container.existsItem(INEXISTENT_TEMPLATE_ID)).toBe(false);
    });

  });

  describe('createItem method', function() {

    var item;

    beforeEach(function() {
      spyOn(Mock.SurveyItemFactory, 'create').and.callThrough();

      item = container.createItem(QUESTION_TYPE, Mock.itemOne.templateID);
    });

    it('should call SurveyItemFactory.create', function() {
      expect(Mock.SurveyItemFactory.create).toHaveBeenCalledWith(
        QUESTION_TYPE, Mock.itemOne.templateID);
    });

    it('should add a new Navigation in the itemList', function() {
      expect(container.getItemListSize()).toBeGreaterThan(0);
    });

    it('should return the new item created', function() {
      expect(item).toBeDefined();
    });

  });

  describe('removeItem method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    it('should remove a item of itemList', function() {
      container.removeItem(Mock.itemOne.templateID);

      expect(container.getItemListSize()).toBe(3);
    });

    it('should remove the correct item of itemList', function() {
      container.removeItem(Mock.itemOne.templateID);

      expect(container.getItemListSize()).toBe(3);
      expect(container.existsItem(Mock.itemTwo.templateID)).toBe(true);
    });

  });

  describe('removeItemByPosition method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    it('should remove a item of index', function() {
      container.removeItemByPosition(0);

      expect(container.getItemListSize()).toBe(3);
      expect(container.existsItem(Mock.itemOne.templateID)).toBe(
        false);
      expect(container.existsItem(Mock.itemTwo.templateID)).toBe(true);
    });

  });

  describe('removeCurrentLastItem method', function() {

    beforeEach(function() {
      container.manageItems(Mock.itemsToManage);
    });

    it('should remove the last item present in item list', function() {
      container.removeCurrentLastItem();

      expect(container.getItemListSize()).toBe(3);
      expect(container.existsItem(Mock.itemOne.templateID)).toBe(true);
      expect(container.existsItem(Mock.itemTwo.templateID)).toBe(true);
      expect(container.existsItem(Mock.itemThree.templateID)).toBe(
        true);
      expect(container.existsItem(Mock.itemFour.templateID)).toBe(
        false);
    });

  });

  function mockSurveyItemFactory($injector) {
    Mock.SurveyItemFactory = $injector.get('SurveyItemFactory');
    return Mock.SurveyItemFactory;
  }

  function mockUpdateSurveyItemCustomID($injector) {
    Mock.UpdateSurveyItemCustomID = $injector.get(
      'UpdateSurveyItemCustomID');
    return Mock.UpdateSurveyItemCustomID;
  }

  function mockItems() {
    Mock.itemOne = Mock.SurveyItemFactory.create(QUESTION_TYPE, 'Q1');
    Mock.itemTwo = Mock.SurveyItemFactory.create(QUESTION_TYPE, 'Q2');
    Mock.itemThree = Mock.SurveyItemFactory.create(QUESTION_TYPE, 'Q3');
    Mock.itemFour = Mock.SurveyItemFactory.create(QUESTION_TYPE, 'Q4');
  }

  function mockItemsToManage() {
    Mock.itemsToManage = [];
    Mock.itemsToManage.push(Mock.itemOne);
    Mock.itemsToManage.push(Mock.itemTwo);
    Mock.itemsToManage.push(Mock.itemThree);
    Mock.itemsToManage.push(Mock.itemFour);
  }

  function mockCheckboxQuestions() {
    Mock.CheckboxQuestion1 = Mock.SurveyItemFactory.create(
      'CheckboxQuestion', 'CK1');
    Mock.CheckboxQuestion2 = Mock.SurveyItemFactory.create(
      'CheckboxQuestion', 'CK2');
    Mock.CheckboxQuestion3 = Mock.SurveyItemFactory.create(
      'CheckboxQuestion', 'CK3');
    Mock.CheckboxQuestion4 = Mock.SurveyItemFactory.create(
      'CheckboxQuestion', 'CK4');
  }

  function mockCheckboxQuestionToItemToManage() {
    Mock.checkboxQuestionToManage = [];
    Mock.checkboxQuestionToManage.push(Mock.CheckboxQuestion1);
    Mock.checkboxQuestionToManage.push(Mock.CheckboxQuestion2);
    Mock.checkboxQuestionToManage.push(Mock.CheckboxQuestion3);
    Mock.checkboxQuestionToManage.push(Mock.CheckboxQuestion4);
  }

});
