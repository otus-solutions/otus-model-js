describe('QuestionRemove', function() {
    var Mock = {};

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            service = _$injector_.get('QuestionRemoveService', {
                QuestionRemoveService: mockQuestionContainerService(_$injector_)
            });
        });
    });

    describe('execute method', function() {

        it('should remove the navigation when the respective question is removed', function() {
            service.execute(Mock.questionOne.templateID);

            expect(Mock.QuestionContainerService.existsQuestion(Mock.questionOne.templateID)).toBe(false);
        });

        it('should call QuestionContainerService.removeQuestion with templateID', function() {
            spyOn(Mock.QuestionContainerService, 'removeQuestion');

            service.execute(Mock.questionOne.templateID);

            expect(Mock.QuestionContainerService.removeQuestion).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

    });

    function mockQuestionContainerService($injector) {
        mockQuestions($injector);

        Mock.QuestionContainerService = $injector.get('QuestionContainerService');
        Mock.QuestionContainerService.manageQuestions([Mock.questionOne, Mock.questionTwo, Mock.questionThree]);

        spyOn(Mock.QuestionContainerService, 'getQuestionList').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'getQuestionByTemplateID').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'init');

        return Mock.QuestionContainerService;
    }

    function mockQuestions($injector) {
        Mock.questionOne = $injector.get('QuestionFactory').create('IntegerQuestion', 'Q1');
        Mock.questionTwo = $injector.get('QuestionFactory').create('CalendarQuestion', 'Q2');
        Mock.questionThree = $injector.get('QuestionFactory').create('CalendarQuestion', 'Q3');
    }

});
