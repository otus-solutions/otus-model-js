describe('ActivityFacadeService', function() {
    var factory;
    var CATEGORY = 'category';
    var GROUP = 'group';
    var TEMPLATE_OID = '12345';
    var USER = 'user';
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
                AnswerFillFactory: mockAnswerFillFactory(_$injector_),
                MetadataFillFactory: mockMetadataFillFactory(_$injector_),
                QuestionFillFactory: mockQuestionFillFactory(_$injector_),
                ActivitySurveyFactory: mockActivitySurveyFactory(_$injector_)
            });

        });
    });

    describe('initializeActivitySurvey method', function() {
        it('should initialize ActivitySurvey call method create', function() {
            service.initializeActivitySurvey();

            expect(Mock.ActivitySurveyFactory.create).toHaveBeenCalled();
        });

        it('should return an object with attribute category equal to parameter', function() {
            service.initializeActivitySurvey(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(service.activitySurvey.category).toEqual(CATEGORY);
        });

        it('should return an object with attribute group equal to parameter', function() {
            service.initializeActivitySurvey(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(service.activitySurvey.group).toEqual(GROUP);
        });

        it('should return an object with attribute templateOID equal to parameter', function() {
            service.initializeActivitySurvey(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(service.activitySurvey.templateOID).toEqual(TEMPLATE_OID);
        });

    });

    describe('createQuestionFill method', function() {
        beforeEach(function() {
            service.initializeActivitySurvey(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);
        });

        it('should return an object of type QuestionFill', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(questionFill.objectType).toEqual(QUESTION_FILL_TYPE);
        });

        it('should call method create of AnswerFillFactory with parameter ANSWER', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(Mock.AnswerFillFactory.create).toHaveBeenCalledWith(ANSWER);
        });

        it('should call method create of MetadataFillFactory with parameter METADATA', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(Mock.MetadataFillFactory.create).toHaveBeenCalledWith(METADATA);
        });

        it('should call method create of ActivitySurveyFactory with parameter QuestionFill', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(Mock.MetadataFillFactory.create).toHaveBeenCalledWith(METADATA);
        });
    });

    function mockUser($injector) {
        Mock.user = $injector.get('ActivityUserFactory').create('User Name', 'user@email.com');
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

        spyOn(Mock.ActivitySurveyFactory, 'create').and.callThrough();

        return Mock.ActivitySurveyFactory;
    }
});
