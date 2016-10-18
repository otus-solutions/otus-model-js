describe('AnswerOptionFactory', function() {
  var Mock = {};
  var option;

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      mockQuestion(_$injector_);

      factory = _$injector_.get('AnswerOptionFactory');
    });

  });

  describe('create method', function() {

    beforeEach(function() {
      option = factory.create(Mock.TEMPLATE_ID, Mock.Question.oid);
    });

    it('returned object should extends StudioObject', function() {
      expect(option.extents).toBe('StudioObject');
    });

    it('returned object should have objectType equal to AnswerOption', function() {
      expect(option.objectType).toBe('AnswerOption');
    });

    it('returned object should have a not null value', function() {
      expect(option.value).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have dataType equal to Integer', function() {
      expect(option.dataType).toBe('Integer');
    });

    it('returned object should have parentQuestion equal to Question.oid', function() {
      expect(option.parentQuestionID).toBe(Mock.Question.oid);
    });

    it('returned object should have a label object for ptBR locale', function() {
      expect(option.label.ptBR).not.toBeNull();
      expect(option.label.ptBR).not.toBeUndefined();
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(option.label.enUS).not.toBeNull();
      expect(option.label.enUS).not.toBeUndefined();
    });

    it('returned object should have a label object for enUS locale', function() {
      expect(option.label.esES).not.toBeNull();
      expect(option.label.esES).not.toBeUndefined();
    });

  });

  describe('fromJson method', function() {

    beforeEach(function() {
      option = factory.fromJson(JSON.stringify(Mock.jsonObject));
    });

    it("should create an instance with the same values of Mock.jsonObject in String", function() {
      expect(option.toJson()).toEqual(JSON.stringify(Mock.jsonObject));
    });

  });

  describe('fromJsonObject method', function() {

    beforeEach(function() {
      option = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should create an instance with the same values of Mock.jsonObject", function() {
      expect(option.toJson()).toEqual(JSON.stringify(Mock.jsonObject));
    });

  });

  function mockQuestion($injector) {
    Mock.TEMPLATE_ID = 'TPL_ID';
    Mock.Question = $injector.get('SurveyItemFactory').create('SingleSelectionQuestion', Mock.TEMPLATE_ID);
  }

  function mockJsonObject() {
    Mock.jsonObject = {
      "extents": "StudioObject",
      "objectType": "AnswerOption",
      "value": 1,
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Masculino",
          "formattedText": "Masculino"
        },
        "enUS": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Male",
          "formattedText": "Male"
        },
        "esES": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Masculino",
          "formattedText": "Masculino"
        }
      }
    };
  }

});
