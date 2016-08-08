describe('SurveyItemManagerService', function() {
    var Mock = {};
    var service;

    var QUESTION_TYPE = 'IntegerQuestion';
    var CHECKBOX_TYPE = 'CheckboxQuestion';
    var TEMPLATE_ID_PREFIX = 'TPL';
    var CUSTOM_ID_PREFIX = 'TPL';
    var INEXISTENT_CUSTOM_ID = 'Q1';

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockItems(_$injector_);

            service = _$injector_.get('SurveyItemManagerService', {
                SurveyItemContainerService: mockSurveyItemContainerService(_$injector_)
            });
        });
    });

    describe('init method', function() {

        it('should be defined in service', function() {
            expect(service.init).toBeDefined();
        });

        it('should call SurveyItemContainerService.init method', function() {
            service.init();

            expect(Mock.SurveyItemContainerService.init).toHaveBeenCalled();
        });

    });

    describe('getItemList method', function() {

        it('should be defined in service', function() {
            expect(service.getItemList).toBeDefined();
        });

        it('should call SurveyItemContainerService.getItemList method', function() {
            service.getItemList();

            expect(Mock.SurveyItemContainerService.getItemList).toHaveBeenCalled();
        });

        it('should return an array', function() {
            var returnedValue = service.getItemList();

            expect(returnedValue).toEqual(jasmine.any(Array));
        });

    });

    describe('getItemListSize method', function() {

        it('should call SurveyItemContainerService.getItemListSize method', function() {
            service.getItemListSize();

            expect(Mock.SurveyItemContainerService.getItemListSize).toHaveBeenCalled();
        });

    });

    describe('getItemByTemplateID method', function() {

        beforeEach(function() {
            Mock.SurveyItemContainerService.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);
        });

        it('should be defined in service', function() {
            expect(service.getItemByTemplateID).toBeDefined();
        });

        it('should call SurveyItemContainerService.getItemByTemplateID method with origin', function() {
            service.getItemByTemplateID(Mock.itemOne.templateID);

            expect(Mock.SurveyItemContainerService.getItemByTemplateID).toHaveBeenCalledWith(Mock.itemOne.templateID);
        });

        it('should return a item when exists', function() {
            var returnedValue = service.getItemByTemplateID(Mock.itemOne.templateID);

            expect(returnedValue).toBeDefined();
        });

        it('should return undefined when navigation not exists', function() {
            var returnedValue = service.getItemByTemplateID('Q5');

            expect(returnedValue).toBeUndefined();
        });

    });

    describe('getItemByCustomID method', function() {

        beforeEach(function() {
            Mock.SurveyItemContainerService.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);
        });

        it('should be defined in service', function() {
            expect(service.getItemByCustomID).toBeDefined();
        });

        it('should call SurveyItemContainerService.getItemByCustomID method with origin', function() {
            service.getItemByCustomID(Mock.itemOne.customID);

            expect(Mock.SurveyItemContainerService.getItemByCustomID).toHaveBeenCalledWith(Mock.itemOne.customID);
        });

        it('should return a item when exists', function() {
            var returnedValue = service.getItemByCustomID(Mock.itemOne.customID);

            expect(returnedValue).toBeDefined();
        });

        it('should return undefined when navigation not exists', function() {
            var returnedValue = service.getItemByCustomID('Q5');

            expect(returnedValue).toBeUndefined();
        });

    });

    describe('getItemByID method', function() {

        beforeEach(function() {
            Mock.SurveyItemContainerService.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);
        });

        it('should be defined in service', function() {
            expect(service.getItemByID).toBeDefined();
        });

        it('should call SurveyItemContainerService.getItemByID method with origin', function() {
            service.getItemByID('Q1');

            expect(Mock.SurveyItemContainerService.getItemByID).toHaveBeenCalledWith('Q1');
        });

        it('should return a item when exists', function() {
            var returnedValue = service.getItemByID('Q1');

            expect(returnedValue).toBeDefined();
        });

        it('should return undefined when navigation not exists', function() {
            var returnedValue = service.getItemByID('Q5');

            expect(returnedValue).toBeUndefined();
        });

    });

    describe('getAllCustomOptionID method', function() {

        beforeEach(function() {
            Mock.SurveyItemContainerService.manageItems([Mock.itemFour, Mock.itemFive]);
        });

        it('should return a empty array if there are no options', function() {
            expect(service.getAllCustomOptionsID()).toEqual([]);
        });

        it('should return all customOptionID of all Checkbox Questions', function(){
            Mock.itemFour.createOption();
            Mock.itemFour.createOption();
            Mock.itemFive.createOption();
            Mock.itemFive.createOption();
            expect(service.getAllCustomOptionsID()).toEqual(['Q4a', 'Q4b', 'Q5a', 'Q5b']);
        });

    });

    describe('addItem method', function() {

        it('should call SurveyItemContainerService.createItem method with item type', function() {
            service.addItem(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

            expect(Mock.SurveyItemContainerService.createItem).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID_PREFIX + 1);
        });

        it('should call SurveyItemContainerService.createItem method with templateID', function() {
            service.addItem(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

            expect(Mock.SurveyItemContainerService.createItem).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID_PREFIX + 1);
        });

        it('should return the new item created', function() {
            var item = service.addItem(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

            expect(item).toBeDefined();
        });

    });

    describe('removeItem method', function() {

        it('should call SurveyItemContainerService.removeItem method with template id', function() {
            Mock.SurveyItemContainerService.manageItems([Mock.itemOne, Mock.itemTwo, Mock.itemThree]);

            service.removeItem(Mock.itemOne.templateID);

            expect(Mock.SurveyItemContainerService.removeItem).toHaveBeenCalledWith(Mock.itemOne.templateID);
        });

    });

    describe('exists method', function() {
        beforeEach(function() {
            var item = service.addItem(QUESTION_TYPE, CUSTOM_ID_PREFIX);
        });

        it('should return true when item exists', function() {
            expect(service.existsItem("TPL1")).toBe(true);
        });

        it('should return false when item not exists', function() {
            expect(service.existsItem(INEXISTENT_CUSTOM_ID)).toBe(false);
        });

    });

    function mockItems($injector) {
        Mock.itemOne = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q1');
        Mock.itemTwo = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q2');
        Mock.itemThree = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q3');
        Mock.itemFour = $injector.get('SurveyItemFactory').create(CHECKBOX_TYPE, 'Q4');
        Mock.itemFive = $injector.get('SurveyItemFactory').create(CHECKBOX_TYPE, 'Q5');
    }

    function mockSurveyItemContainerService($injector) {
        Mock.SurveyItemContainerService = $injector.get('SurveyItemContainerService');

        spyOn(Mock.SurveyItemContainerService, 'init');
        spyOn(Mock.SurveyItemContainerService, 'createItem').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'removeItem').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemList').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemListSize').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemByTemplateID').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemByCustomID').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemByID').and.callThrough();

        return Mock.SurveyItemContainerService;
    }


});
