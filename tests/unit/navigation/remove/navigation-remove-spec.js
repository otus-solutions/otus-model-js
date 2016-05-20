describe('NavigationRemove', function() {
    var Mock = {};

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            factory = _$injector_.get('NavigationRemoveFactory', {
                NavigationRemoveFactory: mockNavigationContainerService(_$injector_)
            });
        });
    });

    describe('execute method', function() {

        it('should remove the navigation when the respective question is removed', function() {
            var updateObject = factory.create(Mock.questionOne.templateID);

            updateObject.execute();

            expect(Mock.NavigationContainerService.existsNavigationTo(Mock.questionOne.templateID)).toBe(false);
        });

        it('should call NavigationContainerService.getNavigationByOrigin with removed templateID', function() {
            spyOn(Mock.NavigationContainerService, 'getNavigationByOrigin');

            var updateObject = factory.create(Mock.questionOne.templateID);
            updateObject.execute();

            expect(Mock.NavigationContainerService.getNavigationByOrigin).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

        it('should call NavigationContainerService.getNavigationPosition with removed templateID', function() {
            spyOn(Mock.NavigationContainerService, 'getNavigationPosition');

            var updateObject = factory.create(Mock.questionTwo.templateID);
            updateObject.execute();

            expect(Mock.NavigationContainerService.getNavigationPosition).toHaveBeenCalledWith(Mock.questionTwo.templateID);
        });

        it('should call NavigationContainerService.getNavigationByPosition', function() {
            var updateObject = factory.create(Mock.questionTwo.templateID);
            updateObject.execute();

            expect(Mock.NavigationContainerService.getNavigationByPosition).toHaveBeenCalledWith(0);
        });

        it('should call NavigationContainerService.removeNavigationOf when navigation exists', function() {
            spyOn(Mock.NavigationContainerService, 'removeNavigationOf');

            var updateObject = factory.create(Mock.questionOne.templateID);
            updateObject.execute();

            expect(Mock.NavigationContainerService.removeNavigationOf).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

        it('should not call NavigationContainerService.removeNavigationOf when navigation not exists', function() {
            spyOn(Mock.NavigationContainerService, 'removeNavigationOf');

            var updateObject = factory.create(Mock.questionThree.templateID);
            updateObject.execute();

            expect(Mock.NavigationContainerService.removeNavigationOf).not.toHaveBeenCalled();
        });

        it('should remove the navigation of previous question when the last question is removed', function() {
            updateObject = factory.create(Mock.questionThree.templateID);

            updateObject.execute();

            expect(Mock.NavigationContainerService.existsNavigationTo(Mock.questionTwo.templateID)).toBe(false);
        });

        it('should call NavigationContainerService.removeCurrentLastNavigation when navigation not exists', function() {
            spyOn(Mock.NavigationContainerService, 'removeCurrentLastNavigation');

            var updateObject = factory.create(Mock.questionThree.templateID);
            updateObject.execute();

            expect(Mock.NavigationContainerService.removeCurrentLastNavigation).toHaveBeenCalled();
        });

        it('should not call NavigationContainerService.removeCurrentLastNavigation when navigation exists', function() {
            spyOn(Mock.NavigationContainerService, 'removeCurrentLastNavigation');

            var updateObject = factory.create(Mock.questionOne.templateID);
            updateObject.execute();

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
        Mock.questionOne = $injector.get('QuestionFactory').create('IntegerQuestion', 'Q1');
        Mock.questionTwo = $injector.get('QuestionFactory').create('CalendarQuestion', 'Q2');
        Mock.questionThree = $injector.get('QuestionFactory').create('CalendarQuestion', 'Q3');
    }

});
