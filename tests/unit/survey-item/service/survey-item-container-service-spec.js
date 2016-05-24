describe('SurveyItemContainerService', function() {
    var Mock = {};
    var service;

    var QUESTION_TYPE = 'IntegerQuestion';
    var INEXISTENT_TEMPLATE_ID = 'Q5';

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            service = _$injector_.get('SurveyItemContainerService', {
                SurveyItemFactory: mockSurveyItemFactory(_$injector_)
            });

            mockItems();
            mockItemsToManage();
        });
    });

    describe('init method', function() {

        it('should clear the array of items', function() {
            service.manageItems(Mock.itemsToManage);
            expect(service.getItemListSize()).toBe(4);

            service.init();
            expect(service.getItemListSize()).toBe(0);
        });

    });

    describe('manage method', function() {

        it('should initialize the array of items', function() {
            service.init();
            expect(service.getItemListSize()).toBe(0);

            service.manageItems(Mock.itemsToManage);
            expect(service.getItemListSize()).toBe(4);
        });

    });

    describe('getItemList method', function() {

        it('should return an array', function() {
            var returnedValue = service.getItemList();

            expect(Array.isArray(returnedValue)).toBe(true);
        });

    });

    describe('getItemListSize method', function() {

        it('should return zero when item Array is empty', function() {
            expect(service.getItemListSize()).toBe(0);
        });

        it('should return the number of added items', function() {
            service.manageItems(Mock.itemsToManage);
            expect(service.getItemListSize()).toBe(4);

            service.removeItem(Mock.itemFour.templateID);
            expect(service.getItemListSize()).toBe(3);
        });

    });

    describe('getItemByTemplateID method', function() {

        beforeEach(function() {
            service.manageItems(Mock.itemsToManage);
        });

        it('should return the item when exists', function() {
            var returnedItem = service.getItemByTemplateID(Mock.itemOne.templateID);

            expect(returnedItem.templateID).toEqual(Mock.itemOne.templateID);
        });

        it('should return undefined when item not exists', function() {
            var returnedItem = service.getItemByTemplateID(INEXISTENT_TEMPLATE_ID);

            expect(returnedItem).toBeUndefined();
        });

    });

    describe('getItemByPosition method', function() {

        beforeEach(function() {
            service.manageItems(Mock.itemsToManage);
        });

        it('should return the item when exists', function() {
            var returnedItem = service.getItemByPosition(0);

            expect(returnedItem.templateID).toEqual(Mock.itemOne.templateID);
        });

        it('should return undefined when item not exists', function() {
            var returnedItem = service.getItemByPosition(10);

            expect(returnedItem).toBeUndefined();
        });

    });

    describe('getItemPosition method', function() {

        beforeEach(function() {
            service.manageItems(Mock.itemsToManage);
        });

        it('should return an integer that represents the index of item', function() {
            var returnedValue = service.getItemPosition(Mock.itemOne.templateID);
            expect(returnedValue).toBe(0);

            returnedValue = service.getItemPosition(Mock.itemTwo.templateID);
            expect(returnedValue).toBe(1);

            returnedValue = service.getItemPosition(Mock.itemThree.templateID);
            expect(returnedValue).toBe(2);
        });

        it('should return null when item does not exists', function() {
            var returnedValue = service.getItemPosition(INEXISTENT_TEMPLATE_ID);
            expect(returnedValue).toBe(null);
        });

    });

    describe('existsItem method', function() {

        beforeEach(function() {
            service.manageItems(Mock.itemsToManage);
        });

        it('should return true when item exists', function() {
            expect(service.existsItem(Mock.itemOne.templateID)).toBe(true);
        });

        it('should return false when item not exists', function() {
            expect(service.existsItem(INEXISTENT_TEMPLATE_ID)).toBe(false);
        });

    });

    describe('createItem method', function() {

        var item;

        beforeEach(function() {
            spyOn(Mock.SurveyItemFactory, 'create').and.callThrough();

            item = service.createItem(QUESTION_TYPE, Mock.itemOne.templateID);
        });

        it('should call SurveyItemFactory.create', function() {
            expect(Mock.SurveyItemFactory.create).toHaveBeenCalledWith(QUESTION_TYPE, Mock.itemOne.templateID);
        });

        it('should add a new Navigation in the itemList', function() {
            expect(service.getItemListSize()).toBeGreaterThan(0);
        });

        it('should return the new item created', function() {
            expect(item).toBeDefined();
        });

    });

    describe('removeItem method', function() {

        beforeEach(function() {
            service.manageItems(Mock.itemsToManage);
        });

        it('should remove a item of itemList', function() {
            service.removeItem(Mock.itemOne.templateID);

            expect(service.getItemListSize()).toBe(3);
        });

        it('should remove the correct item of itemList', function() {
            service.removeItem(Mock.itemOne.templateID);

            expect(service.getItemListSize()).toBe(3);
            expect(service.existsItem(Mock.itemTwo.templateID)).toBe(true);
        });

    });

    describe('removeItemByPosition method', function() {

        beforeEach(function() {
            service.manageItems(Mock.itemsToManage);
        });

        it('should remove a item of index', function() {
            service.removeItemByPosition(0);

            expect(service.getItemListSize()).toBe(3);
            expect(service.existsItem(Mock.itemOne.templateID)).toBe(false);
            expect(service.existsItem(Mock.itemTwo.templateID)).toBe(true);
        });

    });

    describe('removeCurrentLastItem method', function() {

        beforeEach(function() {
            service.manageItems(Mock.itemsToManage);
        });

        it('should remove the last item present in item list', function() {
            service.removeCurrentLastItem();

            expect(service.getItemListSize()).toBe(3);
            expect(service.existsItem(Mock.itemOne.templateID)).toBe(true);
            expect(service.existsItem(Mock.itemTwo.templateID)).toBe(true);
            expect(service.existsItem(Mock.itemThree.templateID)).toBe(true);
            expect(service.existsItem(Mock.itemFour.templateID)).toBe(false);
        });

    });

    function mockSurveyItemFactory($injector) {
        Mock.SurveyItemFactory = $injector.get('SurveyItemFactory');
        return Mock.SurveyItemFactory;
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

});
