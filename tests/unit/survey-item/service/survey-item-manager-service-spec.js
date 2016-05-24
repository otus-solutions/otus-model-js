describe('SurveyItemManagerService', function() {
    var Mock = {};
    var service;

    var QUESTION_TYPE = 'IntegerQuestion';
    var TEMPLATE_ID_PREFIX = 'TPL';

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

    describe('getItemListSize method', function() {

        it('should call SurveyItemContainerService.getItemListSize method', function() {
            service.getItemListSize();

            expect(Mock.SurveyItemContainerService.getItemListSize).toHaveBeenCalled();
        });

    });

    describe('addItem method', function() {

        it('should call SurveyItemContainerService.createItem method with item type', function() {
            service.addItem(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

            expect(Mock.SurveyItemContainerService.createItem).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID_PREFIX + 0);
        });

        it('should call SurveyItemContainerService.createItem method with templateID', function() {
            service.addItem(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

            expect(Mock.SurveyItemContainerService.createItem).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID_PREFIX + 0);
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

    function mockItems($injector) {
        Mock.itemOne = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q1');
        Mock.itemTwo = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q2');
        Mock.itemThree = $injector.get('SurveyItemFactory').create(QUESTION_TYPE, 'Q3');
    }

    function mockSurveyItemContainerService($injector) {
        Mock.SurveyItemContainerService = $injector.get('SurveyItemContainerService');

        spyOn(Mock.SurveyItemContainerService, 'init');
        spyOn(Mock.SurveyItemContainerService, 'createItem').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'removeItem').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemList').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemListSize').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemByTemplateID').and.callThrough();

        return Mock.SurveyItemContainerService;
    }

});
