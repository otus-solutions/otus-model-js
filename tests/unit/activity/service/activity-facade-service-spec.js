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
