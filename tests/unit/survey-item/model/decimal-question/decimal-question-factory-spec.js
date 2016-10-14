describe('DecimalQuestionFactory', function() {
  var Mock = {};
  var question,
    TEMPLATE_ID = 'TEMPLATE_ID',
    QUESTION_ID = 'QUESTION_ID';

  beforeEach(function() {
    module('otusjs');

    mockJson();

    inject(function(_$injector_) {
      factory = _$injector_.get('DecimalQuestionFactory', {
        'UnitFactory': mockUnitFactory(_$injector_),
        'LabelFactory': mockLabelFactory(_$injector_),
        'MetadataGroupFactory': mockMetaGroupFactory(_$injector_),
        'FillingRulesOptionFactory': mockFillingRulesOptionFactory(_$injector_)
      });

    });
  });

  describe('create method', function() {

    beforeEach(function () {
      question = factory.create(TEMPLATE_ID, QUESTION_ID);
    });

    it('should returned an object defined', function() {
      expect(question).toBeDefined();
    });

    xit('returned object should have extends equal to objectType', function() {
      expect(question.extends).toBe('SurveyItem');
    });

    it('returned object should have objectType equal to DecimalQuestion', function() {
      expect(question.objectType).toBe('DecimalQuestion');
    });

    it('returned object should have templateID equal to templateID', function() {
      expect(question.templateID).toBe(TEMPLATE_ID);
    });

    it('returned object should have dataType equal to Decimal', function() {
      expect(question.dataType).toBe('Decimal');
    });

  });

  describe('fromJson method', function() {

    beforeEach(function() {
      question = factory.fromJson(Mock.json);
    });

    it("should have a templateID equal to Mock.json.templateID", function() {
      expect(question.templateID).toBe(Mock.json.templateID);
    });

    it("should have a customID equal to Mock.json.customID", function() {
      expect(question.customID).toBe(Mock.json.customID);
    });

    it("should have a objectType equal to Mock.json.objectType", function() {
      expect(question.objectType).toBe(Mock.json.objectType);
    });

    it("should call LabelFactory.fromJson method with Mock.json.label", function() {
      expect(Mock.LabelFactory.fromJson).toHaveBeenCalledWith(Mock.json.label);
    });

    it("should call MetadataGroupFactory.fromJson method with Mock.json.metadata", function() {
      expect(Mock.MetadataGroupFactory.fromJson).toHaveBeenCalledWith(Mock.json.metadata);
    });

    it("should call FillingRulesOptionFactory.fromJson method with Mock.json.fillingRules", function() {
      expect(Mock.FillingRulesOptionFactory.fromJson).toHaveBeenCalledWith(Mock.json.fillingRules);
    });

    it("should call UnitFactory.fromJson 3 times", function() {
      expect(Mock.UnitFactory.fromJson).toHaveBeenCalledTimes(3);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.DecimalQuestionFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockUnitFactory($injector) {
    Mock.UnitFactory = $injector.get('UnitFactory');
    spyOn(Mock.UnitFactory, "fromJson");
    return Mock.UnitFactory;
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
      "objectType": "DecimalQuestion",
      "templateID": "QUE1",
      "customID": "PersonalizedID",
      "dataType": "Decimal",
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
      "unit": {
        "ptBR": {},
        "enUS": {},
        "esES": {}
      },
      "fillingRules": {
          "extends": "StudioObject",
          "objectType": "FillingRules",
          "options": {}
      }
    };
  }
});
