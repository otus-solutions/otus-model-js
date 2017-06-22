describe('Idiom suite:', function() {
  var factory;
  var Mock = {};

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('IdiomFactory');
    });

  });

  describe('IdiomFactory.create()', function() {

    beforeEach(function() {
      label = factory.create();
    });

    it('should return an Survey that extends from StudioObject', function() {
      expect(label.extends).toBe('StudioObject');
    });

    it('should return an Idiom object type', function() {
      expect(label.objectType).toBe('Label');
    });

    it('should return a Idiom with plainText equal to empty String', function() {
      expect(label.plainText.length).toBe(0);
    });

    it('should return an Idiom with formattedText equal to empty String', function() {
      expect(label.formattedText.length).toBe(0);
    });

  });

  describe("IdiomFactory.fromJsonObject(jsonObject)", function() {

    beforeEach(function() {
      label = factory.fromJsonObject(Mock.jsonObject);
    });

    it('should return an Idiom with oid equal to jsonObject value property', function() {
      expect(label.oid).toBe(Mock.jsonObject.oid);
    });

    it('should return an Idiom with plainText equal to jsonObject value property', function() {
      expect(label.plainText).toBe(Mock.jsonObject.plainText);
    });

    it('should return an Idiom with formattedText equal to jsonObject value property', function() {
      expect(label.formattedText).toBe(Mock.jsonObject.formattedText);
    });

    it("should throw a error if the method receive a string", function() {
      var ERROR_MESSAGE = "otusjs.model.misc.model.IdiomFactory.fromJsonObject() " +
        "method expects to receive a object instead a String";

      var fromJsonObjectFunction = function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      };

      expect(fromJsonObjectFunction).toThrowError(ERROR_MESSAGE);
    });

  });

  function mockJsonObject() {
    Mock.jsonObject = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "1",
      "plainText": "Quantos filhos você possui?",
      "formattedText": "Quantos filhos você possui?"
    };
  }

});
