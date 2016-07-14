describe('ActivityFacadeService', function() {
    var factory;
    var ANSWER = 'answer';
    var METADATA = 'metadata';
    var COMMENT = 'comment';
    var QUESTION_FILL_TYPE = 'QuestionFill';
    var QUESTION_ID = 'TEST1';
    var Mock = {};

    beforeEach(function() {

        module('otusjs');

        inject(function(_$injector_) {

            service = _$injector_.get('ActivityFacadeService', {
                FillingManagerService: mockFillingManagerService(_$injector_),
                StatusHistoryManagerService: mockStatusHistoryManagerService(_$injector_),
                AnswerFillFactory: mockAnswerFillFactory(_$injector_),
                MetadataFillFactory: mockMetadataFillFactory(_$injector_),
                QuestionFillFactory: mockQuestionFillFactory(_$injector_),
                ActivitySurveyFactory: mockActivitySurveyFactory(_$injector_)
            });

        });
    });


    describe('init method', function() {
        it('should call methods of initialization for FillingManagerService and StatusHistoryManagerService', function() {
            service.init();

            expect(Mock.FillingManagerService.init).toHaveBeenCalled();
            expect(Mock.StatusHistoryManagerService.init).toHaveBeenCalled();
        });

        xit('should initialize method newCreatedRegistry with parameter', function() {
            service.init(Mock.user);

            expect(Mock.StatusHistoryManagerService.newCreatedRegistry).toHaveBeenCalledWith(Mock.user);
        });
    });

    describe('createQuestionFill method', function() {
        beforeEach(function() {
            service.init();
        });

        it('should return an object of type QuestionFill', function() {
            var questionFill = service.createQuestionFill();

            expect(questionFill.objectType).toEqual(QUESTION_FILL_TYPE);
        });

        it('should initialize method of AnswerFillFactory with parameter ANSWER', function() {
            service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(Mock.AnswerFillFactory.create).toHaveBeenCalledWith(ANSWER);
        });


        it('should initialize method of MetadataFillFactory with parameter METADATA', function() {
            service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(Mock.MetadataFillFactory.create).toHaveBeenCalledWith(METADATA);
        });

        it('should initialize method of MetadataFillFactory with parameter COMMENT', function() {
            var result = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(result.comment).toEqual(COMMENT);
        });

        it('should initialize method of FillingManagerService with parameter QuestionFill', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(Mock.FillingManagerService.updateFilling).toHaveBeenCalledWith(questionFill);
        });

    });

    function mockUser($injector) {
        Mock.user = $injector.get('ActivityUserFactory').create('User Name', 'user@email.com');
    }

    function mockFillingManagerService($injector) {
        Mock.FillingManagerService = $injector.get('FillingManagerService');

        spyOn(Mock.FillingManagerService, 'init').and.callThrough();
        spyOn(Mock.FillingManagerService, 'updateFilling').and.callThrough();

        return Mock.FillingManagerService;
    }

    function mockStatusHistoryManagerService($injector) {
        Mock.StatusHistoryManagerService = $injector.get('StatusHistoryManagerService');

        spyOn(Mock.StatusHistoryManagerService, 'init').and.callThrough();
        spyOn(Mock.StatusHistoryManagerService, 'newCreatedRegistry').and.callThrough();

        return Mock.StatusHistoryManagerService;
    }

    function mockAnswerFillFactory($injector) {
        Mock.AnswerFillFactory = $injector.get('AnswerFillFactory');

        spyOn(Mock.AnswerFillFactory, 'create').and.callThrough();

        return Mock.AnswerFillFactory;
    }

    function mockMetadataFillFactory($injector) {
        Mock.MetadataFillFactory = $injector.get('MetadataFillFactory');

        spyOn(Mock.MetadataFillFactory, 'create').and.callThrough();

        return Mock.MetadataFillFactory;
    }

    function mockQuestionFillFactory($injector) {
        Mock.QuestionFillFactory = $injector.get('QuestionFillFactory');
        return Mock.QuestionFillFactory;
    }

    function mockActivitySurveyFactory($injector) {
        Mock.ActivitySurveyFactory = $injector.get('ActivitySurveyFactory');
        return Mock.ActivitySurveyFactory;
    }
});
