xdescribe('NavigationAddService', function() {
    var Mock = {};
    var service;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockSurveyItemContainerService(_$injector_);

            service = _$injector_.get('NavigationAddService', {
                NavigationContainerService: mockNavigationContainerService(_$injector_)
            });
        });
    });

    describe('execute method', function() {

        it('should call SurveyItemContainerService.getItemListSize', function() {
            service.execute();

            expect(Mock.SurveyItemContainerService.getItemListSize).toHaveBeenCalled();
        });

        it('should not create a navigation when survey has only one question', function() {
            Mock.SurveyItemContainerService.manageItems([Mock.q1]);

            service.execute();

            expect(Mock.NavigationContainerService.createNavigationTo).not.toHaveBeenCalled();
        });

        it('should create a navigation when survey has at least one question', function() {
            Mock.SurveyItemContainerService.manageItems([Mock.q1, Mock.q2]);

            service.execute();

            expect(Mock.NavigationContainerService.createNavigationTo).toHaveBeenCalled();
        });

        it('should create a navigation to last added question', function() {
            Mock.SurveyItemContainerService.manageItems([Mock.q1, Mock.q2]);

            service.execute();

            expect(Mock.NavigationContainerService.createNavigationTo).toHaveBeenCalledWith(Mock.q1.templateID, Mock.q2.templateID);
        });

        it('should not create a navigation to the last question', function() {
            expect(Mock.NavigationContainerService.existsNavigationTo(Mock.q2.templateID)).toBe(false);
        });

    });

    function mockSurveyItemContainerService($injector) {
        Mock.q1 = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
        Mock.q2 = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q2');

        Mock.SurveyItemContainerService = $injector.get('SurveyItemContainerService');

        spyOn(Mock.SurveyItemContainerService, 'getItemByPosition').and.callThrough();
        spyOn(Mock.SurveyItemContainerService, 'getItemListSize').and.callThrough();

        return Mock.SurveyItemContainerService;
    }

    function mockNavigationContainerService($injector) {
        Mock.NavigationContainerService = $injector.get('NavigationContainerService');

        spyOn(Mock.NavigationContainerService, 'createNavigationTo');

        return Mock.NavigationContainerService;
    }

});
