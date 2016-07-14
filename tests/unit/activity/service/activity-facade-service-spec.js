describe('ActivityFacadeService', function() {
    var factory;
    var ANSWER = 'answer';
    var METADATA = 'metadata';
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

    describe('createQuestionFill method', function() {
        it('should return new object type of QuestionFill', function() {
            var questionFill = service.createQuestionFill();

            expect(questionFill.objectType).toEqual('QuestionFill');
        });
    });

    function mockFillingManagerService($injector) {
        Mock.FillingManagerService = $injector.get('FillingManagerService');
        return Mock.FillingManagerService;
    }

    function mockStatusHistoryManagerService($injector) {
        Mock.StatusHistoryManagerService = $injector.get('StatusHistoryManagerService');
        return Mock.StatusHistoryManagerService;
    }

    function mockAnswerFillFactory($injector) {
        Mock.AnswerFillFactory = $injector.get('AnswerFillFactory');
        return Mock.AnswerFillFactory;
    }

    function mockMetadataFillFactory($injector) {
        Mock.MetadataFillFactory = $injector.get('MetadataFillFactory');
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
