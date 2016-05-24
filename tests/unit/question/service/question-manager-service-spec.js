describe('QuestionManagerService', function() {
    var Mock = {};
    var service;

    var QUESTION_TYPE = 'IntegerQuestion';
    var TEMPLATE_ID_PREFIX = 'TPL';

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            mockQuestions(_$injector_);

            service = _$injector_.get('QuestionManagerService', {
                QuestionContainerService: mockQuestionContainerService(_$injector_)
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

        beforeEach(function() {
            Mock.QuestionContainerService.manageQuestions([Mock.questionOne, Mock.questionTwo, Mock.questionThree]);
        });

        it('should be defined in service', function() {
            expect(service.getQuestionByTemplateID).toBeDefined();
        });

        it('should call QuestionContainerService.getQuestionByTemplateID method with origin', function() {
            service.getQuestionByTemplateID(Mock.questionOne.templateID);

            expect(Mock.QuestionContainerService.getQuestionByTemplateID).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

        it('should return a question when exists', function() {
            var returnedValue = service.getQuestionByTemplateID(Mock.questionOne.templateID);

            expect(returnedValue).toBeDefined();
        });

        it('should return undefined when navigation not exists', function() {
            var returnedValue = service.getQuestionByTemplateID('Q5');

            expect(returnedValue).toBeUndefined();
        });

    });

    describe('getQuestionListSize method', function() {

        it('should call QuestionContainerService.getQuestionListSize method', function() {
            service.getQuestionListSize();

            expect(Mock.QuestionContainerService.getQuestionListSize).toHaveBeenCalled();
        });

    });

    describe('addQuestion method', function() {

        it('should call QuestionContainerService.createQuestion method with question type', function() {
            service.addQuestion(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

            expect(Mock.QuestionContainerService.createQuestion).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID_PREFIX + 0);
        });

        it('should call QuestionContainerService.createQuestion method with templateID', function() {
            service.addQuestion(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

            expect(Mock.QuestionContainerService.createQuestion).toHaveBeenCalledWith(QUESTION_TYPE, TEMPLATE_ID_PREFIX + 0);
        });

        it('should return the new question created', function() {
            var question = service.addQuestion(QUESTION_TYPE, TEMPLATE_ID_PREFIX);

            expect(question).toBeDefined();
        });

    });

    describe('removeQuestion method', function() {

        it('should call QuestionContainerService.removeQuestion method with template id', function() {
            Mock.QuestionContainerService.manageQuestions([Mock.questionOne, Mock.questionTwo, Mock.questionThree]);

            service.removeQuestion(Mock.questionOne.templateID);

            expect(Mock.QuestionContainerService.removeQuestion).toHaveBeenCalledWith(Mock.questionOne.templateID);
        });

    });

    function mockQuestions($injector) {
        Mock.questionOne = $injector.get('QuestionFactory').create(QUESTION_TYPE, 'Q1');
        Mock.questionTwo = $injector.get('QuestionFactory').create(QUESTION_TYPE, 'Q2');
        Mock.questionThree = $injector.get('QuestionFactory').create(QUESTION_TYPE, 'Q3');
    }

    function mockQuestionContainerService($injector) {
        Mock.QuestionContainerService = $injector.get('QuestionContainerService');

        spyOn(Mock.QuestionContainerService, 'init');
        spyOn(Mock.QuestionContainerService, 'createQuestion').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'removeQuestion').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'getQuestionList').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'getQuestionListSize').and.callThrough();
        spyOn(Mock.QuestionContainerService, 'getQuestionByTemplateID').and.callThrough();

        return Mock.QuestionContainerService;
    }

});
