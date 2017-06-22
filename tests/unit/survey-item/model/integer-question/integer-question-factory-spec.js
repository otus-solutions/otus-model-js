describe('IntegerQuestionFactory', function() {
  var Mock = {};
  var question,
    TEMPLATE_ID = 'TEMPLATE_ID',
    QUESTION_ID = 'QUESTION_ID';

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('IntegerQuestionFactory', {
        'UnitFactory': mockUnitFactory(_$injector_),
        'LabelFactory': mockLabelFactory(_$injector_),
        'MetadataGroupFactory': mockMetaGroupFactory(_$injector_),
        'FillingRulesOptionFactory': mockFillingRulesOptionFactory(_$injector_)
      });
    });
  });

  describe('create method', function() {

    beforeEach(function() {
      question = factory.create(TEMPLATE_ID, QUESTION_ID);
    });

    it('should returned an object defined', function() {
      expect(question).toBeDefined();
    });

    xit('returned object should have extends equal to objectType', function() {
      expect(question.extends).toBe('SurveyItem');
    });

    it('returned object should have objectType equal to IntegerQuestion', function() {
      expect(question.objectType).toBe('IntegerQuestion');
    });

    it('returned object should have templateID equal to templateID', function() {
      expect(question.templateID).toBe(TEMPLATE_ID);
    });

    it('returned object should have dataType equal to Integer', function() {
      expect(question.dataType).toBe('Integer');
    });

  });

  describe('fromJsonObject method', function() {

    beforeEach(function() {
      question = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should create an instance with the same values of Mock.jsonObject", function() {
      expect(question.toJson()).toEqual(JSON.stringify(Mock.jsonObject));
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

    it("should call UnitFactory.fromJsonObject 3 times", function() {
      expect(Mock.UnitFactory.fromJsonObject).toHaveBeenCalledTimes(3);
    });

    it("should throw an error when receives a string", function() {
      var ERROR_MESSAGE = "otusjs.model.misc.model.IntegerQuestionFactory.fromJsonObject() " +
        "method expects to receive a object instead a String";

      var fromJsonObjectFunction = function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      };

      expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    });

  });

  function mockUnitFactory($injector) {
    Mock.UnitFactory = $injector.get('UnitFactory');
    spyOn(Mock.UnitFactory, "fromJsonObject").and.callThrough();
    return Mock.UnitFactory;
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

    Mock.ptBR = {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "1",
      "plainText": "Qual sua data de nascimento?",
      "formattedText": "Qual sua <b>data de nascimento</b>?"
    };

    Mock.enUS = {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "2",
      "plainText": "What is your birth date?",
      "formattedText": "What is your <b>birth date</b>?"
    };

    Mock.esES = {
      "extends": "StudioObject",
      "objectType": "Unit",
      "oid": "",
      "plainText": "¿Cuál es su fecha de nacimiento?",
      "formattedText": "¿Cuál es su fecha de <b>nacimiento</b>?"
    };

    Mock.unit = {
      "ptBR": Mock.ptBR,
      "enUS": Mock.enUS,
      "esES": Mock.esES
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
      "objectType": "IntegerQuestion",
      "templateID": "QUE1",
      "customID": "PersonalizedID",
      "dataType": "Integer",
      "label": Mock.label,
      "metadata": Mock.metadata,
      "unit": Mock.unit,
      "fillingRules": Mock.fillingRules
    };
  }

});
