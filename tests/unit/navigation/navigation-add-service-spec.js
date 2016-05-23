describe('NavigationAddService', function() {
    var Mock = {};
    var service;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockQuestionContainerService(_$injector_);

            service = _$injector_.get('NavigationAddService', {
                NavigationContainerService: mockNavigationContainerService(_$injector_)
            });
        });
    });

    describe('execute method', function() {

        it('should call QuestionContainerService.getQuestionListSize', function() {
            service.execute();

            expect(Mock.QuestionContainerService.getQuestionListSize).toHaveBeenCalled();
        });

        it('should not create a navigation when survey has only one question', function() {
            Mock.QuestionContainerService.manageQuestions([Mock.q1]);

            service.execute();

            expect(Mock.NavigationContainerService.createNavigationTo).not.toHaveBeenCalled();
        });

        it('should create a navigation when survey has at least one question', function() {
            Mock.QuestionContainerService.manageQuestions([Mock.q1, Mock.q2]);

            service.execute();

            expect(Mock.NavigationContainerService.createNavigationTo).toHaveBeenCalled();
        });

        it('should create a navigation to last added question', function() {
            Mock.QuestionContainerService.manageQuestions([Mock.q1, Mock.q2]);

            service.execute();

            expect(Mock.NavigationContainerService.createNavigationTo).toHaveBeenCalledWith(Mock.q1.templateID, Mock.q2.templateID);
        });

        it('should not create a navigation to the last question', function() {
            expect(Mock.NavigationContainerService.existsNavigationTo(Mock.q2.templateID)).toBe(false);
        });

    });

    function mockQuestionContainerService($injector) {
        Mock.q1 = $injector.get('QuestionFactory').create('IntegerQuestion', 'Q1');
        Mock.q2 = $injector.get('QuestionFactory').create('CalendarQuestion', 'Q2');

        Mock.QuestionContainerService = $injector.get('QuestionContainerService');

        spyOn(Mock.QuestionContainerService, 'getQuestionByPosition').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'getQuestionListSize').and.callThrough();

        return Mock.QuestionContainerService;
    }

    function mockNavigationContainerService($injector) {
        Mock.NavigationContainerService = $injector.get('NavigationContainerService');

        spyOn(Mock.NavigationContainerService, 'createNavigationTo');

        return Mock.NavigationContainerService;
    }

});
