describe('CalendarQuestionFactory', function() {
  var Mock = {};
  var question;

  beforeEach(function() {
    module('otusjs');

    mockJson();

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

  describe('fromJson method', function() {

    beforeEach(function() {
      question = factory.fromJson(Mock.json);
    });

    it("should have a templateID equal to Mock.json.templateID", function () {
      expect(question.templateID).toBe(Mock.json.templateID);
    });

    it("should have a customID equal to Mock.json.customID", function () {
      expect(question.customID).toBe(Mock.json.customID);
    });

    it("should have a objectType equal to Mock.json.objectType", function () {
      expect(question.objectType).toBe(Mock.json.objectType);
    });

    it("should call LabelFactory.fromJson method with Mock.json.label", function () {
      expect(Mock.LabelFactory.fromJson).toHaveBeenCalledWith(Mock.json.label);
    });

    it("should call MetadataGroupFactory.fromJson method with Mock.json.metadata", function () {
      expect(Mock.MetadataGroupFactory.fromJson).toHaveBeenCalledWith(Mock.json.metadata);
    });

    it("should call FillingRulesOptionFactory.fromJson method with Mock.json.fillingRules", function () {
      expect(Mock.FillingRulesOptionFactory.fromJson).toHaveBeenCalledWith(Mock.json.fillingRules);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.CalendarQuestionFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockQuestion($injector) {
    Mock.TEMPLATE_ID = 'TPL_ID';
    Mock.Question = $injector.get('SurveyItemFactory').create('CalendarQuestion', Mock.TEMPLATE_ID);
  }

  function mockLabelFactory($injector) {
    Mock.LabelFactory = $injector.get('LabelFactory');
    spyOn(Mock.LabelFactory, 'fromJson').and.returnValue({});
    return Mock.LabelFactory;
  }

  function mockMetaGroupFactory($injector) {
    Mock.MetadataGroupFactory = $injector.get('MetadataGroupFactory');
    spyOn(Mock.MetadataGroupFactory, 'fromJson').and.returnValue({});
    return Mock.MetadataGroupFactory;
  }

  function mockFillingRulesOptionFactory($injector) {
    Mock.FillingRulesOptionFactory = $injector.get('FillingRulesOptionFactory');
    spyOn(Mock.FillingRulesOptionFactory, 'fromJson').and.returnValue({});
    return Mock.FillingRulesOptionFactory;
  }

  function mockJson() {
    Mock.json = {
      "extents": "SurveyItem",
      "objectType": "CalendarQuestion",
      "templateID": "QUE1",
      "customID": "PersonalizedID",
      "dataType": "LocalDate",
      "label": {
        "ptBR": {},
        "enUS": {},
        "esES": {}
      },
      "metadata": {
        "extents": "StudioObject",
        "objectType": "MetadataGroup",
        "options": []
      },
      "fillingRules": {
          "extends": "StudioObject",
          "objectType": "FillingRules",
          "options": {}
      }
    };
  }

});
