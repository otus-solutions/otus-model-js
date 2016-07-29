describe('ActivityFacadeService', function() {
    var factory;
    var CATEGORY = 'test_category';
    var GROUP = 'test_group';
    var TEMPLATE_OID = 'test_12345';
    var ANSWER = 'test_answer';
    var METADATA = 'test_metadata';
    var COMMENT = 'test_comment';
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

    describe('createActivity method', function() {
        it('should call method create', function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(Mock.ActivitySurveyFactory.create).toHaveBeenCalled();
        });

        it('should create new object ActivitySurvey with call method create', function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(service.activitySurvey.objectType).toEqual('Activity');
        });

        it('should create ActivitySurvey with parameter CATEGORY', function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(service.activitySurvey.category).toEqual(CATEGORY);
        });

        it('should create ActivitySurvey with parameter GROUP', function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(service.activitySurvey.group).toEqual(GROUP);
        });

        it('should create ActivitySurvey with parameter TEMPLATE_OID', function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(service.activitySurvey.templateOID).toEqual(TEMPLATE_OID);
        });

        it('should create new object ActivitySurvey with call method create used parameter User', function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);

            expect(Mock.ActivitySurveyFactory.create).toHaveBeenCalledWith(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);
        });
    });

    describe('openActivitySurvey method', function() {
        beforeEach(function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);
        });
        it('should call method newOpenedRegistry when method openActivitySurvey called ', function() {
            spyOn(service.activitySurvey.statusHistory, 'newOpenedRegistry');
            service.openActivitySurvey();
            expect(service.activitySurvey.statusHistory.newOpenedRegistry).toHaveBeenCalled();
        });
    });

    describe('initializeActivitySurvey method', function() {
        beforeEach(function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);
        });
        it('should call method newInitializedOnlineRegistry when method initializeActivitySurvey called ', function() {
            spyOn(service.activitySurvey.statusHistory, 'newInitializedOnlineRegistry');
            service.initializeActivitySurvey();
            expect(service.activitySurvey.statusHistory.newInitializedOnlineRegistry).toHaveBeenCalled();
        });
    });

    describe('createQuestionFill method', function() {
        beforeEach(function() {
            service.createActivity(CATEGORY, GROUP, TEMPLATE_OID, Mock.user);
        });

        it('should call method create when method createQuestionFill called', function() {
            service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(Mock.QuestionFillFactory.create).toHaveBeenCalled();
        });

        it('should call method updateFilling when method createQuestionFill called ', function() {
            spyOn(service.activitySurvey.fillContainer, 'updateFilling');
            service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);
            expect(service.activitySurvey.fillContainer.updateFilling).toHaveBeenCalled();
        });

        it('should return object question when method createQuestionFill called', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(questionFill.objectType).toEqual('QuestionFill');
        });

        it('should create QuestionFill with parameter QuestionID', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(questionFill.questionID).toEqual(QUESTION_ID);
        });

        it('should create QuestionFill with parameter ANSWER', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(questionFill.answer.value).toEqual(ANSWER);
        });

        it('should create QuestionFill with parameter METADATA', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(questionFill.metadata.value).toEqual(METADATA);
        });

        it('should create QuestionFill with parameter COMMENT', function() {
            var questionFill = service.createQuestionFill(QUESTION_ID, ANSWER, METADATA, COMMENT);

            expect(questionFill.comment).toEqual(COMMENT);
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

        spyOn(Mock.QuestionFillFactory, 'create').and.callThrough();

        return Mock.QuestionFillFactory;
    }

    function mockActivitySurveyFactory($injector) {
        Mock.ActivitySurveyFactory = $injector.get('ActivitySurveyFactory');

        spyOn(Mock.ActivitySurveyFactory, 'create').and.callThrough();

        return Mock.ActivitySurveyFactory;
    }
});
