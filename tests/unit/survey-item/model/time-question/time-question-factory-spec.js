describe('TimeQuestionFactory', function() {
  var Mock = {};
  var factory;
  var question;

  beforeEach(function() {
    angular.mock.module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      mockQuestion(_$injector_);

      factory = _$injector_.get('TimeQuestionFactory', {
        'LabelFactory': mockLabelFactory(_$injector_),
        'MetadataGroupFactory': mockMetaGroupFactory(_$injector_),
        'FillingRulesOptionFactory': mockFillingRulesOptionFactory(_$injector_),
        'QuestionOptionFactory': mockQuestionOptionFactory(_$injector_)
      });
    });
  });

  describe('create method', function() {

    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID, Mock.Question);
    });

    xit('returned object should extends SurveyItem', function() {
      expect(question.extends).toBe('SurveyItem');
    });

    it('returned object should have objectType equal to TimeQuestion', function() {
      expect(question.objectType).toBe('TimeQuestion');
    });

    it('returned object should have a not null templateID', function() {
      expect(question.templateID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have dataType equal to LocalTime', function() {
      expect(question.dataType).toBe('LocalTime');
    });

    it('returned object should have a label object for ptBR locale', function() {
      expect(question.label.ptBR).not.toBeNull();
      expect(question.label.ptBR).not.toBeUndefined();
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(question.label.enUS).not.toBeNull();
      expect(question.label.enUS).not.toBeUndefined();
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(question.label.esES).not.toBeNull();
      expect(question.label.esES).not.toBeUndefined();
    });

  });

  describe('fromJSONObject method', function() {

    beforeEach(function() {
      question = factory.fromJsonObject(Mock.jsonObject);
      var OldQuestion = factory.fromJsonObject(Mock.jsonObjectOld);
    });

    it("should verify if question object is a Question", function() {
      expect(question.isQuestion()).toEqual(true);
    });

    it("should verify validatorsList array", function() {
      expect(question.validators()).toEqual(Mock.validatorsList);
    });

    it("should call LabelFactory.fromJsonObject method with Mock.label", function() {
      expect(Mock.LabelFactory.fromJsonObject).toHaveBeenCalledWith(Mock.label);
    });

    it("should call MetadataGroupFactory.fromJsonObject method with Mock.metadata", function() {
      expect(Mock.MetadataGroupFactory.fromJsonObject).toHaveBeenCalledWith(Mock.metadata);
    });

    it("should call FillingRulesOptionFactory.fromJsonObject method with Mock.fillingRules", function() {
      expect(Mock.FillingRulesOptionFactory.fromJsonObject).toHaveBeenCalledWith(Mock.fillingRules);
    });

    it("should throw an error when receives a string", function() {
      var ERROR_MESSAGE = "otusjs.model.misc.model.TimeQuestionFactory.fromJsonObject() " +
        "method expects to receive a object instead a String";

      var fromJsonObjectFunction = function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObjectOld));
      };

      expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    });

  });

  function mockQuestion($injector) {
    Mock.TEMPLATE_ID = 'TPL_ID';
    Mock.Question = $injector.get('SurveyItemFactory').create('TimeQuestion', Mock.TEMPLATE_ID);
  }

  function mockLabelFactory($injector) {
    Mock.LabelFactory = $injector.get('LabelFactory');
    spyOn(Mock.LabelFactory, 'fromJsonObject').and.returnValue(Mock.label);
    return Mock.LabelFactory;
  }

  function mockMetaGroupFactory($injector) {
    Mock.MetadataGroupFactory = $injector.get('MetadataGroupFactory');
    spyOn(Mock.MetadataGroupFactory, 'fromJsonObject').and.returnValue(Mock.metadata);
    return Mock.MetadataGroupFactory;
  }

  function mockFillingRulesOptionFactory($injector) {
    Mock.FillingRulesOptionFactory = $injector.get('FillingRulesOptionFactory');
    spyOn(Mock.FillingRulesOptionFactory, 'fromJsonObject').and.returnValue(Mock.fillingRules);
    return Mock.FillingRulesOptionFactory;
  }

  function mockQuestionOptionFactory($injector) {
    Mock.QuestionOptionFactory = $injector.get('QuestionOptionFactory');
    spyOn(Mock.QuestionOptionFactory, 'fromJsonObject').and.returnValue(Mock.options);
    return Mock.QuestionOptionFactory;
  }

  function mockJsonObject() {
    Mock.label = {
      "ptBR": {},
      "enUS": {},
      "esES": {}
    };

    Mock.metadata = {
      "extents": "StudioObject",
      "objectType": "MetadataGroup",
      "options": []
    };

    Mock.fillingRules = {
      "extends": "StudiObject",
      "objectType": "FillingRules",
      "options": {}
    };

    Mock.options = {
      "extends": "StudiObject",
      "objectType": "QuestionOption",
      "data": {}
    };

    Mock.validatorsList = [
        'mandatory',
        'minTime',
        'maxTime'
      ];

    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "TimeQuestion",
      "templateID": "QUE1",
      "customID": "PersonalizedID",
      "dataType": "LocalTime",
      "label": Mock.label,
      "metadata": Mock.metadata,
      "fillingRules": Mock.fillingRules,
      "options": Mock.options
    };
    Mock.jsonObjectOld = {
      "extents": "SurveyItem",
      "objectType": "TimeQuestion",
      "templateID": "QUE1",
      "customID": "PersonalizedID",
      "dataType": "LocalTime",
      "label": Mock.label,
      "metadata": Mock.metadata,
      "fillingRules": Mock.fillingRules
    };
  }

});
