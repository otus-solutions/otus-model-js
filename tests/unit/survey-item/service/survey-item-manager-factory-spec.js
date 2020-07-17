describe('SurveyItemManagerFactory', function() {

  var Mock = {};
  var factory = {};
  var injections = {};

  var QUESTION_TYPE = 'IntegerQuestion';
  var CHECKBOX_TYPE = 'CheckboxQuestion';
  var GRID_TEXT_TYPE = 'GridTextQuestion';
  var GRID_INTEGER_TYPE = 'GridIntegerQuestion';

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      mockItems(_$injector_);
      mockSurveyItemContainer(_$injector_);

      factory = _$injector_.get('SurveyItemManagerFactory', injections);
    });
  });

  describe('getItemList method', function() {

    beforeEach(function () {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q1');
      spyOn(factory, 'create').and.callThrough();
    });

    it('should call SurveyItemContainer.getItemList method', function() {
      expect(Mock.SurveyItemManager.getItemList().length).toEqual(1);
    });

    it('should return an array', function() {
      var returnedValue = Mock.SurveyItemManager.getItemList();

      expect(returnedValue).toEqual(jasmine.any(Array));
    });

  });

  describe('getItemListSize method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q1');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q2');
      spyOn(factory, 'create').and.callThrough();
    });

    it('should call SurveyItemContainer.getItemListSize method', function() {
      expect(Mock.SurveyItemManager.getItemListSize()).toEqual(2);
    });

  });

  describe('getItemByTemplateID method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
    });

    it('should be defined in factory', function() {
      expect(Mock.SurveyItemManager.getItemByTemplateID).toBeDefined();
    });

    it('should return a item when exists', function() {
      var returnedValue = Mock.SurveyItemManager.getItemByTemplateID('Q1');
      expect(returnedValue).toBeDefined();
    });

    it('should return undefined when navigation not exists', function() {
      var returnedValue = Mock.SurveyItemManager.getItemByTemplateID('Q5');
      expect(returnedValue).toBeUndefined();
    });

  });

  describe('getItemByCustomID method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
    });

    it('should be defined in factory', function() {
      expect(Mock.SurveyItemManager.getItemByCustomID).toBeDefined();
    });

    it('should return a item when exists', function() {
      var returnedValue = Mock.SurveyItemManager.getItemByCustomID("Q1");

      expect(returnedValue).toBeDefined();
    });

    it('should return undefined when navigation not exists', function() {
      var returnedValue = Mock.SurveyItemManager.getItemByCustomID('Q5');

      expect(returnedValue).toBeUndefined();
    });

  });

  describe('getItemByID method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
    });

    it('should be defined in factory', function() {
      expect(Mock.SurveyItemManager.getItemByID).toBeDefined();
    });

    it('should call SurveyItemContainer.getItemByID method with customID', function() {
      Mock.SurveyItemManager.getItemList()[0].customID = "Custom1";
      var returnedValue = Mock.SurveyItemManager.getItemByID('Custom1');
      expect(returnedValue).toEqual(Mock.SurveyItemManager.getItemList()[0]);
    });

    it('should call SurveyItemContainer.getItemByID method with templateID', function() {
      var returnedValue = Mock.SurveyItemManager.getItemByID('Q2');
      expect(returnedValue).toEqual(Mock.SurveyItemManager.getItemList()[1]);
    });

  });

  describe('getItemPosition method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
    });

    it('should return correct position of item', function() {
      expect(Mock.SurveyItemManager.getItemPosition('Q3')).toEqual(2);
    });

    it('should ', function () {
      expect(Mock.SurveyItemManager.getItemByPosition(2).templateID).toEqual("Q3");
    });
  });

  describe('existsItem method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(QUESTION_TYPE, 'Q');
    });

    it('should return true', function() {
      expect(Mock.SurveyItemManager.existsItem('Q3')).toEqual(true);
    });

    it('should return false', function() {
      expect(Mock.SurveyItemManager.existsItem('Q6')).toEqual(false);
    });
  });

  describe('getAllCustomOptionID method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_TEXT_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_INTEGER_TYPE, 'Q');
    });

    it('should return a empty array if there are no options', function() {
      expect(Mock.SurveyItemManager.getAllCustomOptionsID()).toEqual([]);
    });

    it('should return all customOptionID of all Checkbox Questions', function() {
      Mock.SurveyItemManager.getItemList()[0].createOption('Q4a');
      Mock.SurveyItemManager.getItemList()[0].createOption('Q4b');
      Mock.SurveyItemManager.getItemList()[1].createLine().addGridText('Q5a');
      Mock.SurveyItemManager.getItemList()[1].createLine().addGridText('Q5b');
      Mock.SurveyItemManager.getItemList()[2].createLine().addGridInteger('Q6a');
      Mock.SurveyItemManager.getItemList()[2].createLine().addGridInteger('Q6b');
      expect(Mock.SurveyItemManager.getAllCustomOptionsID()).toEqual(['Q4a', 'Q4b', 'Q5a', 'Q5b', 'Q6a', 'Q6b']);
    });

  });

  describe('addItem method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_TEXT_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_INTEGER_TYPE, 'Q');
    });

    it('should add CHECKBOX_TYPE item', function() {
      expect(Mock.SurveyItemManager.getItemList()[0].objectType).toEqual(CHECKBOX_TYPE);
      expect(Mock.SurveyItemManager.getItemList()[0].templateID).toEqual("Q1");
    });

    it('should add GRID_TEXT_TYPE item with valid ID', function() {
      expect(Mock.SurveyItemManager.getItemList()[1].objectType).toEqual(GRID_TEXT_TYPE);
      expect(Mock.SurveyItemManager.getItemList()[1].templateID).toEqual("Q2");
    });

    it('should add GRID_INTEGER_TYPE item with valid ID', function() {
      expect(Mock.SurveyItemManager.getItemList()[2].objectType).toEqual(GRID_INTEGER_TYPE);
      expect(Mock.SurveyItemManager.getItemList()[2].templateID).toEqual("Q3");
    });

  });

  describe('getLastItem method', function() {

    beforeEach(function() {
      var result;
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_TEXT_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_INTEGER_TYPE, 'Q');
    });

    it('should return GRID_INTEGER_TYPE item', function() {
      var result;
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_TEXT_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_INTEGER_TYPE, 'Q');
      result = Mock.SurveyItemManager.getLastItem();
      expect(result.objectType).toEqual(GRID_INTEGER_TYPE);
      expect(result.templateID).toEqual("Q3");
    });

  });

  describe('loadItem method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
    });

    it('should add CHECKBOX_TYPE item with id 4', function() {
      Mock.SurveyItemManager.loadItem(CHECKBOX_TYPE, 'Q3', 'Q');
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      expect(Mock.SurveyItemManager.getLastItem().templateID).toEqual('Q4');
    });

  });

  describe('setIncrementalIDValue method', function() {
    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.setIncrementalIDValue(9);
    });

    it('should add CHECKBOX_TYPE item with id 10', function() {
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      expect(Mock.SurveyItemManager.getLastItem().templateID).toEqual('Q10');
    });
  });

  describe('removeItem method', function() {
    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
    });

    it('should add CHECKBOX_TYPE item with id 10', function() {
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      expect(Mock.SurveyItemManager.getLastItem().templateID).toEqual('Q1');
      Mock.SurveyItemManager.removeItem('Q1');
      expect(Mock.SurveyItemManager.getItemListSize()).toEqual(0);
    });

  });

  describe('moveItem method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_TEXT_TYPE, 'Q');
      Mock.SurveyItemManager.addItem(GRID_INTEGER_TYPE, 'Q');
    });

    it('should add CHECKBOX_TYPE item', function() {
      Mock.SurveyItemManager.moveItem(Mock.SurveyItemManager.getItemList()[0],3);
      expect(Mock.SurveyItemManager.getItemList()[2].objectType).toEqual(CHECKBOX_TYPE);
      expect(Mock.SurveyItemManager.getItemList()[2].templateID).toEqual("Q1");
    });

  });

  describe('isAvailableCustomID method', function() {

    beforeEach(function() {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      Mock.SurveyItemManager.getItemList()[0].createOption('Q4a');
      Mock.SurveyItemManager.getItemList()[0].createOption('Q4b');
    });

    it('should return true', function() {
      expect(Mock.SurveyItemManager.isAvailableCustomID("Q2")).toEqual(true);
    });

    it('should return false on id found in question', function() {
      expect(Mock.SurveyItemManager.isAvailableCustomID("Q1")).toEqual(false);
    });

    it('should return false on id found in option', function() {
      expect(Mock.SurveyItemManager.isAvailableCustomID("Q4a")).toEqual(false);
    });

  });

  describe('loadIncrementalIDValue method', function () {

    beforeEach(function () {
      Mock.SurveyItemManager = factory.create();
      Mock.SurveyItemManager.setIncrementalIDValue(9);
    });

    it('should be defined in factory', function () {
      expect(Mock.SurveyItemManager.loadIncrementalIDValue).toBeDefined();
    });

    it('should call SurveyItemContainer.loadIncrementalIDValue method with customID', function () {
      Mock.SurveyItemManager.loadItem(CHECKBOX_TYPE, 'Q3', 'Q');
      Mock.SurveyItemManager.addItem(CHECKBOX_TYPE, 'Q');
      Mock.SurveyItemManager.loadIncrementalIDValue("Q");
      expect(Mock.SurveyItemManager.getLastItem().templateID).toEqual('Q10');
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
    Mock.SurveyItemContainer = Mock.SurveyItemContainerFactory.create();
    spyOn(Mock.SurveyItemContainer, 'createItem').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'removeItem').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemListSize').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemByTemplateID').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemByCustomID').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemByID').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'getItemPosition').and.callThrough();
    spyOn(Mock.SurveyItemContainer, 'moveItem').and.callThrough();

    injections.SurveyItemContainerFactory = Mock.SurveyItemContainerFactory;
  }

});
