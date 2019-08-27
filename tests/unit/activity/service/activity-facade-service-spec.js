describe('the ActivityFacadeService', function () {

  var Mock = {};
  var service;
  var ANSWER = 'test_answer';
  var METADATA = 'test_metadata';
  var COMMENT = 'test_comment';
  var QUESTION_FILL_TYPE = 'QuestionFill';
  var QUESTION_ID = 'TEST1';

  beforeEach(function () {
    angular.mock.module('otusjs');

    inject(function (_$injector_) {
      var Injections = {
        'AnswerFillFactory': mockAnswerFillFactory(_$injector_),
        'MetadataFillFactory': mockMetadataFillFactory(
          _$injector_),
        'QuestionFillFactory': mockQuestionFillFactory(
          _$injector_),
        'ActivityFactory': mockActivityFactory(_$injector_),
        'InterviewFactory': mockInterviewFactory(_$injector_)


      };
      /* Test data */
      mockQuestionItem();
      mockSurveyTemplate();

      /* Injectable mocks */

      service = _$injector_.get(
        'otusjs.model.activity.ActivityFacadeService', Injections
      );


      mockSelectedParticipant();
      mockParticipantLaboratory();


      mockLoggedUser();
    });
  });

  describe('basic tests scenarios', function () {
    it('check created service', function () {
      expect(service).toBeDefined();
    });
  });

  xdescribe('createActivity method', function () {

    it('should call method create', function () {
      beforeEach(function () {

      });

      var factory = service.createActivity(Mock.surveyTemplate,
        Mock.LoggedUser,
        Mock.SelectedParticipant);

      expect(factory).not.toBeDefined();
    });

    xit(
      'should create new object ActivitySurvey with call method create',
      function () {
        service.createActivity(Mock.surveyTemplate);

        expect(service.surveyActivity.objectType).toEqual('Activity');
      });

    xit('should create ActivitySurvey with parameter template',
      function () {
        service.createActivity(Mock.surveyTemplate);

        expect(service.surveyActivity.surveyForm.surveyTemplate).toEqual(
          Mock.surveyTemplate);
      });

    xit(
      'should create new object ActivitySurvey with call method create used parameter User',
      function () {
        service.createActivity(Mock.surveyTemplate);

        expect(Mock.ActivityFactory.create).toHaveBeenCalledWith(Mock
          .surveyTemplate);
      });

  });

  xdescribe('openActivitySurvey method', function () {

    beforeEach(function () {
      service.createActivity(Mock.surveyTemplate);
    });

    it(
      'should call method newOpenedRegistry when method openActivitySurvey called ',
      function () {
        spyOn(service.surveyActivity.statusHistory,
          'newOpenedRegistry');
        service.openActivitySurvey();
        expect(service.surveyActivity.statusHistory.newOpenedRegistry)
          .toHaveBeenCalled();
      });

  });

  xdescribe('initializeActivitySurvey method', function () {

    beforeEach(function () {
      service.createActivity(Mock.surveyTemplate);
    });

    it(
      'should call method newInitializedOnlineRegistry when method initializeActivitySurvey called ',
      function () {
        spyOn(service.surveyActivity.statusHistory,
          'newInitializedOnlineRegistry');
        service.initializeActivitySurvey();
        expect(service.surveyActivity.statusHistory.newInitializedOnlineRegistry)
          .toHaveBeenCalled();
      });

  });

  xdescribe('createQuestionFill method', function () {

    beforeEach(function () {
      service.createActivity(Mock.surveyTemplate);
    });

    it(
      'should call method create when method createQuestionFill called',
      function () {
        service.createQuestionFill(Mock.item, ANSWER, METADATA,
          COMMENT);

        expect(Mock.QuestionFillFactory.create).toHaveBeenCalled();
      });

    it(
      'should return object question when method createQuestionFill called',
      function () {
        var questionFill = service.createQuestionFill(Mock.item,
          ANSWER, METADATA, COMMENT);

        expect(questionFill.objectType).toEqual('QuestionFill');
      });

    it('should create QuestionFill with parameter QuestionID', function () {
      var questionFill = service.createQuestionFill(Mock.item,
        ANSWER, METADATA, COMMENT);

      expect(questionFill.questionID).toEqual(QUESTION_ID);
    });

    it('should create QuestionFill with parameter ANSWER', function () {
      var questionFill = service.createQuestionFill(Mock.item,
        ANSWER, METADATA, COMMENT);

      expect(questionFill.answer.value).toEqual(ANSWER);
    });

    it('should create QuestionFill with parameter METADATA', function () {
      var questionFill = service.createQuestionFill(Mock.item,
        ANSWER, METADATA, COMMENT);

      expect(questionFill.metadata.value).toEqual(METADATA);
    });

    it('should create QuestionFill with parameter COMMENT', function () {
      var questionFill = service.createQuestionFill(Mock.item,
        ANSWER, METADATA, COMMENT);

      expect(questionFill.comment).toEqual(COMMENT);
    });

  });

  xdescribe('fillQuestion method', function () {

    beforeEach(function () {
      service.createActivity(Mock.surveyTemplate);
    });

    it(
      'should call method updateFilling when method createQuestionFill called ',
      function () {
        spyOn(service.surveyActivity.fillContainer, 'updateFilling');

        service.fillQuestion(QUESTION_ID, ANSWER, METADATA, COMMENT);

        expect(service.surveyActivity.fillContainer.updateFilling).toHaveBeenCalled();
      });

  });

  xdescribe('getFillingByQuestionID method', function () {

    var filling = {};

    beforeEach(function () {
      service.createActivity(Mock.surveyTemplate);
      filling = service.createQuestionFill(Mock.item, ANSWER,
        METADATA, COMMENT);
      service.fillQuestion(filling);
    });

    it('should retrieve the filling of a question', function () {
      spyOn(service.surveyActivity.fillContainer,
        'searchFillingByID').and.callThrough();

      var returnedValue = service.getFillingByQuestionID(
        QUESTION_ID);

      expect(service.surveyActivity.fillContainer.searchFillingByID)
        .toHaveBeenCalled();
      expect(returnedValue).toEqual(filling);
    });

  });

  describe('finalizeActivitySurvey method', function () {
    beforeEach(function () {
      service.createActivity(Test.utils.data.survey, Test.utils.data.otusLoggedUser, Test.utils.data.selectedParticipant, {
        activityConfiguration: {
          category: {
            "name": "C0",
            "objectType": "ActivityCategory",
            "label": "Normal",
            "disabled": false,
            "isDefault": true
          }
        }
      });
      service.finalizeActivitySurvey();
    });

    it('', function () {
      expect(service.surveyActivity.interviews.newRegistry).toHaveBeenCalled();
    });
  });

  describe('saveActivitySurveys method', function () {
    beforeEach(function () {
      service.createActivity(Test.utils.data.survey, Test.utils.data.otusLoggedUser, Test.utils.data.selectedParticipant, {
        activityConfiguration: {
          category: {
            "name": "C0",
            "objectType": "ActivityCategory",
            "label": "Normal",
            "disabled": false,
            "isDefault": true
          }
        }
      });
      service.saveActivitySurveys();
    });

    it('', function () {
      expect(service.surveyActivity.interviews.newRegistry).toHaveBeenCalled();
    });
  });

  function mockQuestionItem() {
    Mock.item = {};
    Mock.item.customID = QUESTION_ID;
    Mock.item.objectType = 'IntegerQuestion';
  }

  function mockSurveyTemplate() {
    Mock.surveyTemplate = {};
  }

  function mockAnswerFillFactory($injector) {
    Mock.AnswerFillFactory = $injector.get(
      'otusjs.model.activity.AnswerFillFactory');

    spyOn(Mock.AnswerFillFactory, 'create').and.callThrough();

    return Mock.AnswerFillFactory;
  }

  function mockMetadataFillFactory($injector) {
    Mock.MetadataFillFactory = $injector.get(
      'otusjs.model.activity.MetadataFillFactory');

    spyOn(Mock.MetadataFillFactory, 'create').and.callThrough();

    return Mock.MetadataFillFactory;
  }

  function mockQuestionFillFactory($injector) {
    Mock.QuestionFillFactory = $injector.get(
      'otusjs.model.activity.QuestionFillFactory');

    spyOn(Mock.QuestionFillFactory, 'create').and.callThrough();

    return Mock.QuestionFillFactory;
  }

  function mockActivityFactory($injector) {
    Mock.ActivityFactory = $injector.get(
      'otusjs.model.activity.ActivityFactory');

    spyOn(Mock.ActivityFactory, 'create').and.callThrough();

    return Mock.ActivityFactory;
  }

  function mockInterviewFactory($injector) {
    Mock.InterviewFactory = $injector.get(
      'otusjs.model.activity.InterviewFactory');

    spyOn(Mock.InterviewFactory, 'create').and.callThrough();

    return Mock.InterviewFactory;
  }

  function mockTemplate($injector) {
    var SurveyFormFactory = $injector.get('SurveyFormFactory');
    Mock.template = SurveyFormFactory.fromJsonObject(Test.utils.data.jsonObject);
  }

  // Mock Functions


  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockLoggedUser() {
    Mock.LoggedUser = Test.utils.data.otusLoggedUser; //json-importer.js
  }

  function mockSelectedParticipant() {
    Mock.SelectedParticipant = Test.utils.data.selectedParticipant; //json-importer.js
  }


  function mockAliquotInfo() {
    Mock.aliquotInfo = Mock.singleTube.aliquots[0];
  }
});