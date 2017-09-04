describe('CheckboxAnswerOptionFactory', function() {
  var Mock = {};
  var option;
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('CheckboxAnswerOptionFactory');
    });

    Mock.TEMPLATE_ID = 'TPL-IDa';
    Mock.CUSTOM_ID = 'myCustomizedID';
  });

  describe('create method', function() {

    beforeEach(function() {
      option = factory.create(Mock.TEMPLATE_ID);
    });

    it('returned object should extends StudioObject', function() {
      expect(option.extents).toBe('StudioObject');
    });

    it('returned object should have objectType equal to CheckboxAnswerOptionFactory', function() {
      expect(option.objectType).toBe('CheckboxAnswerOption');
    });

    it('returned object should have optionID equal passed param', function() {
      expect(option.optionID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have customID equal passed param', function() {
      expect(option.customOptionID).toBe(Mock.TEMPLATE_ID);
    });

    it('returned object should have dataType equal to Boolean', function() {
      expect(option.dataType).toBe('Boolean');
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

  describe('fromJsonObject method', function() {

    beforeEach(function() {
      option = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should create an instance with the same values of Mock.jsonObject", function() {
      expect(option.toJson()).toEqual(JSON.stringify(Mock.jsonObject));
    });

  });

  function mockJsonObject() {
    Mock.jsonObject = {
      "extents": "StudioObject",
      "objectType": "CheckboxAnswerOption",
      "optionID": "AO2a",
      "customOptionID": "anotherID",
      "dataType": "Boolean",
      "value": false,
      "label": {
        "ptBR": {
          "extends": "StudioObject",
          "objectType": "Label",
          "oid": "",
          "plainText": "",
          "formattedText": ""
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
  }

});
