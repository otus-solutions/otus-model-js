xdescribe('NavigationRemove', function() {
    var Mock = {};
    var service;

    beforeEach(function() {
        angular.mock.module('otusjs');

        inject(function(_$injector_) {
            service = _$injector_.get('NavigationRemoveService', {
                NavigationRemoveService: mockNavigationContainerService(_$injector_)
            });
        });
    });

    describe('execute method', function() {

        it('should remove the navigation when the respective question is removed', function() {
            service.execute(Mock.questionOne.templateID);

            expect(Mock.NavigationContainerService.existsNavigationTo(Mock.questionOne.templateID)).toBe(false);
        });

        it('should call NavigationContainerService.getNavigationByOrigin with removed templateID', function() {
            spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin');

            service.execute(Mock.questionOne.templateID);

            expect(Mock.NavigationContainerService.getNavigationByOrigin).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

        it('should call NavigationContainerService.getNavigationPosition with removed templateID', function() {
            spyOn(Mock.NavigationContainerService, 'getNavigationPosition');

            service.execute(Mock.questionTwo.templateID);

            expect(Mock.NavigationContainerService.getNavigationPosition).toHaveBeenCalledWith(Mock.questionTwo.templateID);
        });

        it('should call NavigationContainerService.getNavigationByPosition', function() {
            service.execute(Mock.questionTwo.templateID);

            expect(Mock.NavigationContainerService.getNavigationByPosition).toHaveBeenCalledWith(0);
        });

        it('should call NavigationContainerService.removeNavigationOf when navigation exists', function() {
            spyOn(Mock.NavigationContainerService, 'removeNavigationOf');

            service.execute(Mock.questionOne.templateID);

            expect(Mock.NavigationContainerService.removeNavigationOf).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

        it('should not call NavigationContainerService.removeNavigationOf when navigation not exists', function() {
            spyOn(Mock.NavigationContainerService, 'removeNavigationOf');

            service.execute(Mock.questionThree.templateID);

            expect(Mock.NavigationContainerService.removeNavigationOf).not.toHaveBeenCalled();
        });

        it('should remove the navigation of previous question when the last question is removed', function() {
            service.execute(Mock.questionThree.templateID);

            expect(Mock.NavigationContainerService.existsNavigationTo(Mock.questionTwo.templateID)).toBe(false);
        });

        it('should call NavigationContainerService.removeCurrentLastNavigation when navigation not exists', function() {
            spyOn(Mock.NavigationContainerService, 'removeCurrentLastNavigation');

            service.execute(Mock.questionThree.templateID);

            expect(Mock.NavigationContainerService.removeCurrentLastNavigation).toHaveBeenCalled();
        });

        it('should not call NavigationContainerService.removeCurrentLastNavigation when navigation exists', function() {
            spyOn(Mock.NavigationContainerService, 'removeCurrentLastNavigation');

            service.execute(Mock.questionOne.templateID);

            expect(Mock.NavigationContainerService.removeCurrentLastNavigation).not.toHaveBeenCalled();
        });

    });

    function mockNavigationContainerService($injector) {
        mockQuestions($injector);

        Mock.NavigationContainerService = $injector.get('NavigationContainerService');
        Mock.NavigationContainerService.createNavigationTo(Mock.questionOne.templateID, Mock.questionTwo.templateID);
        Mock.NavigationContainerService.createNavigationTo(Mock.questionTwo.templateID, Mock.questionThree.templateID);

        spyOn(Mock.NavigationContainerService, 'getNavigationByPosition').and.callThrough();

        return Mock.NavigationContainerService;
    }

    function mockQuestions($injector) {
        Mock.questionOne = $injector.get('SurveyItemFactory').create('IntegerQuestion', 'Q1');
        Mock.questionTwo = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q2');
        Mock.questionThree = $injector.get('SurveyItemFactory').create('CalendarQuestion', 'Q3');
    }

});
