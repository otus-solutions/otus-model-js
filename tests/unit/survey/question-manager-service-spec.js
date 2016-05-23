describe('QuestionManagerService', function() {
    var Mock = {};
    var service;

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockQuestions(_$injector_);

            service = _$injector_.get('QuestionManagerService', {
                QuestionContainerService: mockQuestionContainerService(_$injector_),
                QuestionAddService: mockQuestionAddService(_$injector_),
                QuestionRemoveService: mockQuestionRemoveService(_$injector_)
            });
        });
    });

    describe('init method', function() {

        it('should be defined in service', function() {
            expect(service.init).toBeDefined();
        });

        it('should call QuestionContainerService.init method', function() {
            service.init();

            expect(Mock.QuestionContainerService.init).toHaveBeenCalled();
        });

    });

    describe('getQuestionList method', function() {

        it('should be defined in service', function() {
            expect(service.getQuestionList).toBeDefined();
        });

        it('should call QuestionContainerService.getQuestionList method', function() {
            service.getQuestionList();

            expect(Mock.QuestionContainerService.getQuestionList).toHaveBeenCalled();
        });

        it('should return an array', function() {
            var returnedValue = service.getQuestionList();

            expect(returnedValue).toEqual(jasmine.any(Array));
        });

    });

    describe('getQuestionByTemplateID method', function() {

        it('should be defined in service', function() {
            expect(service.getQuestionByTemplateID).toBeDefined();
        });

        it('should call QuestionContainerService.getQuestionByTemplateID method with origin', function() {
            service.getQuestionByTemplateID(Mock.questionOne.templateID);

            expect(Mock.QuestionContainerService.getQuestionByTemplateID).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

        xit('should return a navigation when exists', function() {
            var returnedValue = service.getQuestionByTemplateID(Mock.questionOne.templateID);

            expect(returnedValue).toBeDefined();
        });

        it('should return undefined when navigation not exists', function() {
            var returnedValue = service.getQuestionByTemplateID('Q5');

            expect(returnedValue).toBeUndefined();
        });

    });

    describe('addQuestion method', function() {

        it('should call QuestionContainerService.getQuestionList method', function() {
            service.addQuestion();

            expect(Mock.QuestionContainerService.getQuestionList).toHaveBeenCalled();
        });

        it('should call QuestionAddService.execute method with question container', function() {
            var questionContainer = Mock.QuestionContainerService.getQuestionList();

            service.addQuestion();

            expect(Mock.QuestionAddService.execute).toHaveBeenCalledWith(questionContainer);
        });

    });

    describe('removeQuestion method', function() {

        it('should call QuestionRemove.execute method with template id', function() {
            service.removeQuestion(Mock.questionOne.templateID);

            expect(Mock.QuestionRemoveService.execute).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

    });

    function mockQuestions($injector) {
        Mock.questionOne = $injector.get('QuestionFactory').create('IntegerQuestion', 'Q1');
        Mock.questionTwo = $injector.get('QuestionFactory').create('CalendarQuestion', 'Q2');
        Mock.questionThree = $injector.get('QuestionFactory').create('CalendarQuestion', 'Q3');
    }

    function mockQuestionContainerService($injector) {
        Mock.QuestionContainerService = $injector.get('QuestionContainerService');
        Mock.QuestionContainerService.manageQuestions([Mock.questionOne, Mock.questionTwo, Mock.questionThree]);

        spyOn(Mock.QuestionContainerService, 'getQuestionList').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'getQuestionByTemplateID').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'init');

        return Mock.QuestionContainerService;
    }

    function mockQuestionAddService($injector) {
        Mock.QuestionAddService = $injector.get('QuestionAddService');

        spyOn(Mock.QuestionAddService, 'execute');

        return Mock.QuestionAddService;
    }

    function mockQuestionRemoveService($injector) {
        Mock.QuestionRemoveService = $injector.get('QuestionRemoveService');

        spyOn(Mock.QuestionRemoveService, 'execute');

        return Mock.QuestionRemoveService;
    }

});
