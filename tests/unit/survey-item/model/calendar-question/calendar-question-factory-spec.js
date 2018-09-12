describe('CalendarQuestionFactory', function() {
  var Mock = {};
  var question;
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      mockQuestion(_$injector_);

      factory = _$injector_.get('CalendarQuestionFactory', {
        'LabelFactory': mockLabelFactory(_$injector_),
        'MetadataGroupFactory': mockMetaGroupFactory(_$injector_),
        'FillingRulesOptionFactory': mockFillingRulesOptionFactory(_$injector_)
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

    it('returned object should have objectType equal to CalendarQuestion', function() {
      expect(question.objectType).toBe('CalendarQuestion');
    });

    it('returned object should have a not null templateID', function() {
      expect(question.templateID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have dataType equal to LocalDate', function() {
      expect(question.dataType).toBe('LocalDate');
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

  describe('fromJsonObject method', function() {

    beforeEach(function() {
      question = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should create an instance with the same values of Mock.jsonObject", function() {
      expect(JSON.stringify(question)).toEqual(JSON.stringify(Mock.jsonObject));
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
      var ERROR_MESSAGE = "otusjs.model.misc.model.CalendarQuestionFactory.fromJsonObject() " +
        "method expects to receive a object instead a String";

      var fromJsonObjectFunction = function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      };

      expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    });

  });

  function mockQuestion($injector) {
    Mock.TEMPLATE_ID = 'TPL_ID';
    Mock.Question = $injector.get('SurveyItemFactory').create('CalendarQuestion', Mock.TEMPLATE_ID);
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

    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "CalendarQuestion",
      "templateID": "QUE1",
      "customID": "PersonalizedID",
      "dataType": "LocalDate",
      "label": Mock.label,
      "metadata": Mock.metadata,
      "fillingRules": Mock.fillingRules
    };
  }

});
