describe('CheckboxQuestionFactory', function() {
  var Mock = {};
  var question;

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      mockQuestion(_$injector_);

      factory = _$injector_.get('CheckboxQuestionFactory');
    });
  });

  describe('create method', function() {

    beforeEach(function () {
      question = factory.create(Mock.TEMPLATE_ID, Mock.Question);
    });

    it('returned object should have objectType equal to CheckboxQuestion', function() {
      expect(question.objectType).toBe('CheckboxQuestion');
    });

    it('returned object should have a not null templateID', function() {
      expect(question.templateID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have dataType equal to LocalDate', function() {
      expect(question.dataType).toBe('Array');
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

    beforeEach(function () {
      question = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should reconstruct a question object with Mock.jsonObject data", function() {
      expect(question.toJson()).toBe(JSON.stringify(Mock.jsonObject));
    });

  });

  function mockQuestion($injector) {
    Mock.TEMPLATE_ID = 'TPL_ID';
    Mock.Question = $injector.get('SurveyItemFactory').create('CheckboxQuestion', Mock.TEMPLATE_ID);
  }

  function mockJsonObject() {
    Mock.checkboxOption1 = {
      "extents": "StudioObject",
      "objectType": "CheckboxAnswerOption",
      "optionID": "AO2a",
      "customOptionID": "anotherOptionID",
      "dataType": "Boolean",
      "value": false,
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Geladeira",
          "formattedText": "Geladeira"
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
    };

    Mock.checkboxOption2 = {
      "extents": "StudioObject",
      "objectType": "CheckboxAnswerOption",
      "optionID": "AO2b",
      "customOptionID": "anotherOptionID1",
      "dataType": "Boolean",
      "value": false,
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "TV",
          "formattedText": "TV"
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
    };

    Mock.checkboxOption3 = {
      "extents": "StudioObject",
      "objectType": "CheckboxAnswerOption",
      "optionID": "AO2c",
      "customOptionID": "anotherOptionID2",
      "dataType": "Boolean",
      "value": false,
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Fogão",
          "formattedText": "Fogão"
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
    };

    Mock.jsonObject = {
      "extents": "SurveyItem",
      "objectType": "CheckboxQuestion",
      "templateID": "AO2",
      "customID": "anotherID",
      "dataType": "Array",
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "Item que possui em casa:",
          "formattedText": "Item que possui em casa:"
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
      "options": [Mock.checkboxOption1, Mock.checkboxOption2, Mock.checkboxOption3],
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
