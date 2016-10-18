describe('SingleSelectionQuestionFactory', function() {
  var Mock = {};
  var question;

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      mockQuestion(_$injector_);

      factory = _$injector_.get('SingleSelectionQuestionFactory');
    });

  });

  describe('create method', function() {

    beforeEach(function() {
      question = factory.create(Mock.TEMPLATE_ID, Mock.Question);
    });

    it('returned object should have objectType equal to SingleSelectionQuestion', function() {
      expect(question.objectType).toBe('SingleSelectionQuestion');
    });

    it('returned object should have a not null templateID', function() {
      expect(question.templateID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have dataType equal to Integer', function() {
      expect(question.dataType).toBe('Integer');
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

  describe("fromJsonObject method", function() {

    beforeEach(function() {
      question = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should reconstruct a question object with Mock.jsonObject data", function() {
      expect(question.toJson()).toEqual(JSON.stringify(Mock.jsonObject));
    });

  });

  function mockQuestion($injector) {
    Mock.TEMPLATE_ID = 'TPL_ID';
    Mock.Question = $injector.get('SurveyItemFactory').create('SingleSelectionQuestion', Mock.TEMPLATE_ID);
  }

  function mockJsonObject() {
    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "SingleSelectionQuestion",
      "templateID": "QUE1",
      "customID": "QUE1",
      "dataType": "Integer",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Gênero",
          "formattedText": "Gênero"
        },
        "enUS": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "",
          "formattedText": ""
        },
        "esES": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "",
          "formattedText": ""
        }
      },
      "options": [{
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
            "plainText": "",
            "formattedText": ""
          },
          "esES": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "",
            "formattedText": ""
          }
        }
      }, {
        "extents": "StudioObject",
        "objectType": "AnswerOption",
        "value": 2,
        "dataType": "Integer",
        "label": {
          "ptBR": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "Feminino",
            "formattedText": "Feminino"
          },
          "enUS": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "",
            "formattedText": ""
          },
          "esES": {
            "extends": "StudioObject",
            "objectType": "Label",
            "oid": "",
            "plainText": "",
            "formattedText": ""
          }
        }
      }],
      "metadata": {
        "extents": "StudioObject",
        "objectType": "MetadataGroup",
        "options": [{
          "extends": "StudioObject",
          "objectType": "MetadataAnswer",
          "dataType": "Integer",
          "value": 1,
          "label": {
            "ptBR": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "Outro",
              "formattedText": "Outro"
            },
            "enUS": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            },
            "esES": {
              "extends": "StudioObject",
              "objectType": "Label",
              "oid": "",
              "plainText": "",
              "formattedText": ""
            }
          }
        }]
      },
      "fillingRules": {
        "extends": "StudioObject",
        "objectType": "FillingRules",
        "options": {}
      }
    };
  }

});
