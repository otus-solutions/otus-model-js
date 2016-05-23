describe('Survey', function() {
    var Mock = {};
    var survey;

    var QUESTION_TYPE = 'IntegerQuestion';
    var Q1 = 'Q1';
    var Q2 = 'Q2';

    beforeEach(function() {
        module('otusjs');

        mockDatetime();
        mockIdentityData();

        inject(function(_$injector_) {
            mockQuestion(_$injector_);

            factory = _$injector_.get('SurveyFactory', {
                'SurveyIdentityFactory': mockSurveyIdentityFactory(_$injector_),
                'SurveyMetaInfoFactory': mockSurveyMetaInfoFactory(_$injector_),
                'SurveyUUIDGenerator': mockSurveyUUIDGenerator(_$injector_),
                'QuestionManagerService': mockQuestionManagerService(_$injector_),
                'NavigationManagerService': mockNavigationManagerService(_$injector_)
            });

            mockJson();

            survey = factory.create(Mock.NAME, Mock.ACRONYM);
        });
    });

    describe('question management', function() {

        describe('addQuestion method', function() {

            it('should call QuestionManagerService.addQuestion with question type', function() {
                survey.addQuestion(QUESTION_TYPE);

                expect(Mock.QuestionManagerService.addQuestion).toHaveBeenCalledWith(QUESTION_TYPE, Mock.ACRONYM);
            });

            it('should call QuestionManagerService.addQuestion with template id prefix', function() {
                survey.addQuestion(QUESTION_TYPE);

                expect(Mock.QuestionManagerService.addQuestion).toHaveBeenCalledWith(QUESTION_TYPE, Mock.ACRONYM);
            });

            it('should call NavigationManagerService.addNavigation with question list', function() {
                survey.addQuestion(QUESTION_TYPE);

                expect(Mock.NavigationManagerService.addNavigation).toHaveBeenCalledWith();
            });

            it('should return the new created question', function() {
                var question = survey.addQuestion(QUESTION_TYPE);

                expect(question).toBeDefined();
            });

        });

        describe('removeQuestion method', function() {

            beforeEach(function() {
                survey.addQuestion();
            });

            it('should call QuestionManagerService.removeQuestion with new question ID', function() {
                survey.removeQuestion(Q1);

                expect(Mock.QuestionManagerService.removeQuestion).toHaveBeenCalledWith(Q1);
            });

            it('should call NavigationManagerService.removeNavigation with new question ID', function() {
                survey.removeQuestion(Q1);

                expect(Mock.NavigationManagerService.removeNavigation).toHaveBeenCalledWith(Q1);
            });

        });

        describe('getQuestionByTemplateID method', function() {

            beforeEach(function() {
                survey.addQuestion();
                survey.addQuestion();
            });

            it('should call QuestionManagerService.getQuestionByTemplateID with template id', function() {
                survey.getQuestionByTemplateID(Q1);

                expect(Mock.QuestionManagerService.getQuestionByTemplateID).toHaveBeenCalledWith(Q1);
            });
        });

    });

    function mockSurveyIdentityFactory($injector) {
        Mock.SurveyIdentityFactory = $injector.get('SurveyIdentityFactory');
        Mock.identity = Mock.SurveyIdentityFactory.create();
        return Mock.SurveyIdentityFactory;
    }

    function mockSurveyMetaInfoFactory($injector) {
        return $injector.get('SurveyMetaInfoFactory');
    }

    function mockSurveyUUIDGenerator($injector) {
        Mock.SurveyUUIDGenerator = $injector.get('SurveyUUIDGenerator');
        spyOn(Mock.SurveyUUIDGenerator, 'generateSurveyUUID').and.returnValue('0');
        return Mock.SurveyUUIDGenerator;
    }

    function mockNavigationAddFactory($injector) {
        Mock.NavigationAddFactory = $injector.get('NavigationAddFactory');

        spyOn(Mock.NavigationAddFactory, 'create');

        return Mock.NavigationAddFactory;
    }

    function mockNavigationRemoveFactory($injector) {
        Mock.NavigationRemoveFactory = $injector.get('NavigationRemoveFactory');

        spyOn(Mock.NavigationRemoveFactory, 'create');

        return Mock.NavigationRemoveFactory;
    }

    function mockNavigationManagerService($injector) {
        Mock.NavigationManagerService = $injector.get('NavigationManagerService');

        spyOn(Mock.NavigationManagerService, 'addNavigation');
        spyOn(Mock.NavigationManagerService, 'removeNavigation');

        return Mock.NavigationManagerService;
    }

    function mockQuestionManagerService($injector) {
        Mock.QuestionManagerService = $injector.get('QuestionManagerService');

        spyOn(Mock.QuestionManagerService, 'addQuestion').and.returnValue(Mock.question);
        spyOn(Mock.QuestionManagerService, 'removeQuestion');
        spyOn(Mock.QuestionManagerService, 'getQuestionByTemplateID');

        return Mock.QuestionManagerService;
    }

    function mockIdentityData() {
        Mock.NAME = 'NAME';
        Mock.ACRONYM = 'ACRONYM';
        Mock.VERSION = 'VERSION';
    }

    function mockDatetime() {
        Mock.now = Date.now();
        spyOn(Date, 'now').and.returnValue(Mock.now);
    }

    function mockJson() {
        Mock.json = JSON.stringify({
            extents: 'StudioObject',
            objectType: 'Survey',
            oid: '0',
            identity: {
                extents: 'StudioObject',
                objectType: 'SurveyIdentity',
                name: Mock.NAME,
                acronym: Mock.ACRONYM,
                // version: Mock.VERSION,
                recommendedTo: '',
                description: '',
                keywords: []
            },
            metainfo: {
                extents: 'StudioObject',
                objectType: 'SurveyMetaInfo',
                creationDatetime: Mock.now,
                otusStudioVersion: ''
            },
            questionContainer: [],
            navigationList: []
        });
    }

    function mockQuestion($injector) {
        Mock.question = $injector.get('QuestionFactory').create(QUESTION_TYPE, Q1);
    }

});
