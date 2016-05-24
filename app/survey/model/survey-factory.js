(function() {
    'use strict';

    angular
        .module('otusjs.survey')
        .factory('SurveyFactory', SurveyFactory);

    SurveyFactory.$inject = [
        'SurveyIdentityFactory',
        'SurveyMetaInfoFactory',
        'SurveyUUIDGenerator',
        'NavigationManagerService',
        'QuestionManagerService'
    ];

    function SurveyFactory(SurveyIdentityFactory, SurveyMetaInfoFactory, SurveyUUIDGenerator, NavigationManagerService, QuestionManagerService) {
        var self = this;

        /* Public interdace */
        self.create = create;

        function create(name, acronym) {
            var metainfo = SurveyMetaInfoFactory.create();
            var identity = SurveyIdentityFactory.create(name, acronym);
            var UUID = SurveyUUIDGenerator.generateSurveyUUID();

            return new Survey(metainfo, identity, UUID, NavigationManagerService, QuestionManagerService);
        }

        return self;
    }

    function Survey(surveyMetainfo, surveyIdentity, uuid, NavigationManagerService, QuestionManagerService) {
        var self = this;

        self.extents = 'StudioObject';
        self.objectType = 'Survey';
        self.oid = uuid;
        self.identity = surveyIdentity;
        self.metainfo = surveyMetainfo;
        self.QuestionManager = QuestionManagerService;
        self.NavigationManager = NavigationManagerService;

        self.NavigationManager.init();

        /* Public methods */
        self.getQuestionByTemplateID = getQuestionByTemplateID;
        self.addItem = addItem;
        self.addQuestion = addQuestion;
        self.removeQuestion = removeQuestion;
        self.updateQuestion = updateQuestion;
        self.toJson = toJson;

        function getQuestionByTemplateID(templateID) {
            return self.QuestionManager.getQuestionByTemplateID(templateID);
        }

        function addQuestion(questionType) {
            var question = self.QuestionManager.addQuestion(questionType, self.identity.acronym);
            self.NavigationManager.addNavigation();
            return question;
        }

        function addItem(type) {
            var question = self.QuestionManager.addQuestion(questionType, self.identity.acronym);
            self.NavigationManager.addNavigation();
            return question;
        }

        function removeQuestion(templateID) {
            self.QuestionManager.removeQuestion(templateID);
            self.NavigationManager.removeNavigation(templateID);
        }

        function updateQuestion(question) {
            self.navigationList[question.templateID] = question;
        }

        function toJson() {
            var json = {};

            json.extents = self.extents;
            json.objectType = self.objectType;
            json.oid = self.oid;
            json.identity = self.identity.toJson();
            json.metainfo = self.metainfo.toJson();

            json.questionContainer = [];
            self.QuestionManager.getQuestionList().forEach(function(question) {
                json.questionContainer.push(question.toJson());
            });

            json.navigationList = [];
            NavigationManagerService.getNavigationList().forEach(function(navigation) {
                json.navigationList.push(navigation.toJson());
            });

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());
