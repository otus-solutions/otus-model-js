describe('QuestionContainerService', function() {
    var Mock = {};
    var service;

    var QUESTION_TYPE = 'IntegerQuestion';
    var INEXISTENT_TEMPLATE_ID = 'Q5';

    beforeEach(function() {
        module('otusjs');

        inject(function(_$injector_) {
            service = _$injector_.get('QuestionContainerService', {
                QuestionFactory: mockQuestionFactory(_$injector_)
            });

            mockQuestions();
            mockQuestionsToManage();
        });
    });

    describe('init method', function() {

        it('should clear the array of questions', function() {
            service.manageQuestions(Mock.questionsToManage);
            expect(service.getQuestionListSize()).toBe(4);

            service.init();
            expect(service.getQuestionListSize()).toBe(0);
        });

    });

    describe('manage method', function() {

        it('should initialize the array of questions', function() {
            service.init();
            expect(service.getQuestionListSize()).toBe(0);

            service.manageQuestions(Mock.questionsToManage);
            expect(service.getQuestionListSize()).toBe(4);
        });

    });

    describe('getQuestionList method', function() {

        it('should return an array', function() {
            var returnedValue = service.getQuestionList();

            expect(Array.isArray(returnedValue)).toBe(true);
        });

    });

    describe('getQuestionListSize method', function() {

        it('should return zero when question Array is empty', function() {
            expect(service.getQuestionListSize()).toBe(0);
        });

        it('should return the number of added questions', function() {
            service.manageQuestions(Mock.questionsToManage);
            expect(service.getQuestionListSize()).toBe(4);

            service.removeQuestion(Mock.questionFour.templateID);
            expect(service.getQuestionListSize()).toBe(3);
        });

    });

    describe('getQuestionByTemplateID method', function() {

        beforeEach(function() {
            service.manageQuestions(Mock.questionsToManage);
        });

        it('should return the question when exists', function() {
            var returnedQuestion = service.getQuestionByTemplateID(Mock.questionOne.templateID);

            expect(returnedQuestion.templateID).toEqual(Mock.questionOne.templateID);
        });

        it('should return undefined when question not exists', function() {
            var returnedQuestion = service.getQuestionByTemplateID(INEXISTENT_TEMPLATE_ID);

            expect(returnedQuestion).toBeUndefined();
        });

    });

    describe('getQuestionByPosition method', function() {

        beforeEach(function() {
            service.manageQuestions(Mock.questionsToManage);
        });

        it('should return the question when exists', function() {
            var returnedQuestion = service.getQuestionByPosition(0);

            expect(returnedQuestion.templateID).toEqual(Mock.questionOne.templateID);
        });

        it('should return undefined when question not exists', function() {
            var returnedQuestion = service.getQuestionByPosition(10);

            expect(returnedQuestion).toBeUndefined();
        });

    });

    describe('getQuestionPosition method', function() {

        beforeEach(function() {
            service.manageQuestions(Mock.questionsToManage);
        });

        it('should return an integer that represents the index of question', function() {
            var returnedValue = service.getQuestionPosition(Mock.questionOne.templateID);
            expect(returnedValue).toBe(0);

            returnedValue = service.getQuestionPosition(Mock.questionTwo.templateID);
            expect(returnedValue).toBe(1);

            returnedValue = service.getQuestionPosition(Mock.questionThree.templateID);
            expect(returnedValue).toBe(2);
        });

        it('should return null when question does not exists', function() {
            var returnedValue = service.getQuestionPosition(INEXISTENT_TEMPLATE_ID);
            expect(returnedValue).toBe(null);
        });

    });

    describe('existsQuestion method', function() {

        beforeEach(function() {
            service.manageQuestions(Mock.questionsToManage);
        });

        it('should return true when question exists', function() {
            expect(service.existsQuestion(Mock.questionOne.templateID)).toBe(true);
        });

        it('should return false when question not exists', function() {
            expect(service.existsQuestion(INEXISTENT_TEMPLATE_ID)).toBe(false);
        });

    });

    describe('createQuestion method', function() {

        var question;

        beforeEach(function() {
            spyOn(Mock.QuestionFactory, 'create').and.callThrough();

            question = service.createQuestion(QUESTION_TYPE, Mock.questionOne.templateID);
        });

        it('should call QuestionFactory.create', function() {
            expect(Mock.QuestionFactory.create).toHaveBeenCalledWith(QUESTION_TYPE, Mock.questionOne.templateID);
        });

        it('should add a new Navigation in the questionList', function() {
            expect(service.getQuestionListSize()).toBeGreaterThan(0);
        });

        it('should return the new question created', function() {
            expect(question).toBeDefined();
        });

    });

    describe('removeQuestion method', function() {

        beforeEach(function() {
            service.manageQuestions(Mock.questionsToManage);
        });

        it('should remove a question of questionList', function() {
            service.removeQuestion(Mock.questionOne.templateID);

            expect(service.getQuestionListSize()).toBe(3);
        });

        it('should remove the correct question of questionList', function() {
            service.removeQuestion(Mock.questionOne.templateID);

            expect(service.getQuestionListSize()).toBe(3);
            expect(service.existsQuestion(Mock.questionTwo.templateID)).toBe(true);
        });

    });

    describe('removeQuestionByPosition method', function() {

        beforeEach(function() {
            service.manageQuestions(Mock.questionsToManage);
        });

        it('should remove a question of index', function() {
            service.removeQuestionByPosition(0);

            expect(service.getQuestionListSize()).toBe(3);
            expect(service.existsQuestion(Mock.questionOne.templateID)).toBe(false);
            expect(service.existsQuestion(Mock.questionTwo.templateID)).toBe(true);
        });

    });

    describe('removeCurrentLastQuestion method', function() {

        beforeEach(function() {
            service.manageQuestions(Mock.questionsToManage);
        });

        it('should remove the last question present in question list', function() {
            service.removeCurrentLastQuestion();

            expect(service.getQuestionListSize()).toBe(3);
            expect(service.existsQuestion(Mock.questionOne.templateID)).toBe(true);
            expect(service.existsQuestion(Mock.questionTwo.templateID)).toBe(true);
            expect(service.existsQuestion(Mock.questionThree.templateID)).toBe(true);
            expect(service.existsQuestion(Mock.questionFour.templateID)).toBe(false);
        });

    });

    function mockQuestionFactory($injector) {
        Mock.QuestionFactory = $injector.get('QuestionFactory');
        return Mock.QuestionFactory;
    }

    function mockQuestions() {
        Mock.questionOne = Mock.QuestionFactory.create(QUESTION_TYPE, 'Q1');
        Mock.questionTwo = Mock.QuestionFactory.create(QUESTION_TYPE, 'Q2');
        Mock.questionThree = Mock.QuestionFactory.create(QUESTION_TYPE, 'Q3');
        Mock.questionFour = Mock.QuestionFactory.create(QUESTION_TYPE, 'Q4');
    }

    function mockQuestionsToManage() {
        Mock.questionsToManage = [];
        Mock.questionsToManage.push(Mock.questionOne);
        Mock.questionsToManage.push(Mock.questionTwo);
        Mock.questionsToManage.push(Mock.questionThree);
        Mock.questionsToManage.push(Mock.questionFour);
    }

});
