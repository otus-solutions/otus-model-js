describe('UpdateSurveyItemCustomID', function() {
    var Mock = {};
    var service;
    var surveyItemFactory;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            service = _$injector_.get('UpdateSurveyItemCustomID');
            surveyItemFactory = _$injector_.get('SurveyItemFactory');
        });
    });

    describe('execute method', function() {

        it('should set a new ID to property customID - CalendarQuestion', function() {
            var item = mockItem('CalendarQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - IntegerQuestion', function() {
            var item = mockItem('IntegerQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - DecimalQuestion', function() {
            var item = mockItem('DecimalQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - SingleSelectionQuestion', function() {
            var item = mockItem('SingleSelectionQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - CheckboxQuestion', function() {
            var item = mockItem('CheckboxQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - TextQuestion', function() {
            var item = mockItem('TextQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - TimeQuestion', function() {
            var item = mockItem('TimeQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - EmailQuestion', function() {
            var item = mockItem('EmailQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - PhoneQuestion', function() {
            var item = mockItem('PhoneQuestion');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - TextItem', function() {
            var item = mockItem('TextItem');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

        it('should set a new ID to property customID - ImageItem', function() {
            var item = mockItem('ImageItem');
            service.execute(item, 'myID');
            expect(item.customID).toBe('myID');
        });

    });

    function mockItem(itemType) {
        var anyID = 'LAPA1';
        return surveyItemFactory.create(itemType, anyID);
    }

});
