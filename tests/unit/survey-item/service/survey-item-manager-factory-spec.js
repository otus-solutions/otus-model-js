describe('SurveyItemManagerFactory', function() {

  var Mock = {};
  var factory = {};
  var injections = {};

  var QUESTION_TYPE = 'IntegerQuestion';
  var CHECKBOX_TYPE = 'CheckboxQuestion';
  var TEMPLATE_ID_PREFIX = 'TPL';
  var CUSTOM_ID_PREFIX = 'TPL';
  var INEXISTENT_CUSTOM_ID = 'INEXISTENT_CUSTOM_ID';

  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      mockItems(_$injector_);
      mockSurveyItemContainer(_$injector_);

      factory = _$injector_.get('SurveyItemManagerFactory', injections).create();
    });
  });

  describe('getItemList method', function() {

    it('should be defined in factory', function() {
      expect(factory.getItemList).toBeDefined();
    });

    it('should call SurveyItemContainer.getItemList method', function() {
      factory.getItemList();

      expect(Mock.SurveyItemContainer.getItemList).toHaveBeenCalled();
    });

    it('should return an array', function() {
      var returnedValue = factory.getItemList();

      expect(returnedValue).toEqual(jasmine.any(Array));
    });

  });

  describe('getItemListSize method', function() {

    it('should call SurveyItemContainer.getItemListSize method', function() {
      factory.getItemListSize();

      expect(Mock.SurveyItemContainer.getItemListSize).toHaveBeenCalled();
    });

  });

  describe('getItemByTemplateID method', function() {

    beforeEach(function() {
      Mock.SurveyItemContainer.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);
    });

    it('should be defined in factory', function() {
      expect(factory.getItemByTemplateID).toBeDefined();
    });

    it('should call SurveyItemContainer.getItemByTemplateID method with origin', function() {
      factory.getItemByTemplateID(Mock.itemOne.templateID);

      expect(Mock.SurveyItemContainer.getItemByTemplateID).toHaveBeenCalledWith(Mock.itemOne.templateID);
    });

    it('should return a item when exists', function() {
      var returnedValue = factory.getItemByTemplateID(Mock.itemOne.templateID);

      expect(returnedValue).toBeDefined();
    });

    it('should return undefined when navigation not exists', function() {
      var returnedValue = factory.getItemByTemplateID('Q5');

      expect(returnedValue).toBeUndefined();
    });

  });

  describe('getItemByCustomID method', function() {

    beforeEach(function() {
      Mock.SurveyItemContainer.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);
    });

    it('should be defined in factory', function() {
      expect(factory.getItemByCustomID).toBeDefined();
    });

    it('should call SurveyItemContainer.getItemByCustomID method with origin', function() {
      factory.getItemByCustomID(Mock.itemOne.customID);

      expect(Mock.SurveyItemContainer.getItemByCustomID).toHaveBeenCalledWith(Mock.itemOne.customID);
    });

    it('should return a item when exists', function() {
      var returnedValue = factory.getItemByCustomID(Mock.itemOne.customID);

      expect(returnedValue).toBeDefined();
    });

    it('should return undefined when navigation not exists', function() {
      var returnedValue = factory.getItemByCustomID('Q5');

      expect(returnedValue).toBeUndefined();
    });

  });

  describe('getItemByID method', function() {

    beforeEach(function() {
      Mock.SurveyItemContainer.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);
    });

    it('should be defined in factory', function() {
      expect(factory.getItemByID).toBeDefined();
    });

    it('should call SurveyItemContainer.getItemByID method with origin', function() {
      factory.getItemByID('Q1');

      expect(Mock.SurveyItemContainer.getItemByID).toHaveBeenCalledWith('Q1');
    });

    it('should return a item when exists', function() {
      var returnedValue = factory.getItemByID('Q1');

      expect(returnedValue).toBeDefined();
    });

    it('should return undefined when navigation not exists', function() {
      var returnedValue = factory.getItemByID('Q5');

      expect(returnedValue).toBeUndefined();
    });

  });

  describe('getAllCustomOptionID method', function() {

    beforeEach(function() {
      Mock.SurveyItemContainer.manageItems([Mock.itemFour, Mock.itemFive]);
    });

    it('should return a empty array if there are no options', function() {
      expect(factory.getAllCustomOptionsID()).toEqual([]);
    });

    it('should return all customOptionID of all Checkbox Questions', function() {
      Mock.itemFour.createOption('Q4a');
      Mock.itemFour.createOption('Q4b');
      Mock.itemFive.createOption('Q5a');
      Mock.itemFive.createOption('Q5b');
      expect(factory.getAllCustomOptionsID()).toEqual(['Q4a', 'Q4b', 'Q5a', 'Q5b']);
    });

  });

  describe('addItem method', function() {

    it('should call SurveyItemContainer.createItem method with item type', function() {
      factory.addItem(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

      expect(Mock.SurveyItemContainer.createItem).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID_PREFIX + 1);
    });

    it('should call SurveyItemContainer.createItem method with templateID', function() {
      factory.addItem(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

      expect(Mock.SurveyItemContainer.createItem).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID_PREFIX + 1);
    });

    it('should return the new item created', function() {
      var item = factory.addItem(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

      expect(item).toBeDefined();
    });

    describe('in case of already exists a item with a templateID', function() {

      it('should increment correctly - the added item must have the templateID Q2', function() {
        Mock.SurveyItemContainer.manageItems([Mock.itemOne]);
        var item = factory.addItem(QUESTION_TYPE, 'Q');
        expect(item.templateID).not.toBe('Q1');
        expect(item.templateID).toBe('Q2');
      });

      it('should increment correctly - the added item must have the templateID Q3', function() {
        Mock.SurveyItemContainer.manageItems([Mock.itemOne, Mock.itemTwo]);
        var item = factory.addItem(QUESTION_TYPE, 'Q');
        expect(item.templateID).toBe('Q3');
      });

      it('should increment correctly - the added item must have the templateID Q4', function() {
        Mock.SurveyItemContainer.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);
        var item = factory.addItem(QUESTION_TYPE, 'Q');
        expect(item.templateID).toBe('Q4');
      });

    });

  });

  describe('removeItem method', function() {

    it('should call SurveyItemContainer.removeItem method with template id', function() {
      Mock.SurveyItemContainer.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);

      factory.removeItem(Mock.itemOne.templateID);

      expect(Mock.SurveyItemContainer.removeItem).toHaveBeenCalledWith(Mock.itemOne.templateID);
    });

  });

  describe('exists method', function() {
    beforeEach(function() {
      var item = factory.addItem(QUESTION_TYPE, CUSTOM_ID_PREFIX);
    });

    it('should return true when item exists', function() {
      expect(factory.existsItem("TPL1")).toBe(true);
    });

    it('should return false when item not exists', function() {
      expect(factory.existsItem(INEXISTENT_CUSTOM_ID)).toBe(false);
    });

  });

  describe('isAvailableCustomID method', function() {

    beforeEach(function() {
      Mock.SurveyItemContainer.manageItems([Mock.itemFour, Mock.itemFive]);
    });

    it("should return true if does not exists a item or a checkboxAnswerOption with a passed id", function() {
      expect(factory.isAvailableCustomID('NOT_USED_ID')).toBe(true);
    });

    it("should return false if exists a item", function() {
      expect(factory.isAvailableCustomID('Q4')).toBe(false);
    });

    it("should return false if exists a checkboxAnswerOption with a passed id", function() {
      Mock.itemFive.createOption('Q5a');
      expect(factory.isAvailableCustomID('Q5a')).toBe(false);
    });

  });

  describe('isAvailableCustomID method', function() {

    beforeEach(function() {
      Mock.SurveyItemContainer.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree, Mock.itemFour, Mock.itemFive]);
    });

    it('should return true if does not exists a item or a checkboxAnswerOption with a passed id', function() {
      expect(factory.getItemPosition('Q3')).toBe(2);
    });

  });

  function mockItems($injector) {
    Mock.itemOne = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q1');
    Mock.itemTwo = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q2');
    Mock.itemThree = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q3');
    Mock.itemFour = $injector.get('SurveyItemFactory').create(CHECKBOX_TYPE, 'Q4');
    Mock.itemFive = $injector.get('SurveyItemFactory').create(CHECKBOX_TYPE, 'Q5');
  }

  function mockSurveyItemContainer($injector) {
    Mock.SurveyItemContainerFactory = $injector.get('SurveyItemContainerFactory');
    Mock.SurveyItemContainer = $injector.get('SurveyItemContainerFactory').create();

    spyOn(Mock.SurveyItemContainerFactory, 'create').and.returnValue(Mock.SystemItemContainer);
    spyOn(Mock.SurveyItemContainer, 'createItem').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'removeItem').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemList').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemListSize').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemByTemplateID').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemByCustomID').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemByID').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemPosition').and.callThrough();

    injections.SurveyItemContainer = Mock.SurveyItemContainer;
  }

});
