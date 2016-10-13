describe('Label suite:', function() {

  var factory;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('LabelFactory');
    });

  });

  describe('LabelFactory.create()', function() {

    beforeEach(function() {
      label = factory.create();
    });

    it('should return an Survey that extends from StudioObject', function() {
      expect(label.extends).toBe('StudioObject');
    });

    it('should return an Label object type', function() {
      expect(label.objectType).toBe('Label');
    });

    it('should return a Label with plainText equal to empty String', function() {
      expect(label.plainText.length).toBe(0);
    });

    it('should return an Label with formattedText equal to empty String', function() {
      expect(label.formattedText.length).toBe(0);
    });

  });

  describe("LabelFactory.fromJson(json)", function() {

    beforeEach(function() {
      label = factory.fromJson(Mock.json);
    });

    it('should return an Label with oid equal to json value property', function() {
      expect(label.oid).toBe(Mock.json.oid);
    });

    it('should return an Label with plainText equal to json value property', function() {
      expect(label.plainText).toBe(Mock.json.plainText);
    });

    it('should return an Label with formattedText equal to json value property', function() {
      expect(label.formattedText).toBe(Mock.json.formattedText);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.LabelFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  Mock.json = {
    "extends": "StudioObject",
    "objectType": "Label",
    "oid": "1",
    "plainText": "Quantos filhos você possui?",
    "formattedText": "Quantos filhos você possui?"
  };

});
