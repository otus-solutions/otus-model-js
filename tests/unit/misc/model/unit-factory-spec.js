describe('Unit suite:', function() {

  var Mock = {};
  var factory;

  /* @BeforeScenario */
  beforeEach(function() {
    module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('UnitFactory');
    });

  });

  describe('UnitFactory.create()', function() {

    beforeEach(function () {
      unit = factory.create();
    });

    it('should return an Survey that extends from StudioObject', function() {
      expect(unit.extends).toBe('StudioObject');
    });

    it('should return an Unit object type', function() {
      expect(unit.objectType).toBe('Unit');
    });

    it('should return an Unit with plainText equal to empty String', function() {
      expect(unit.plainText.length).toBe(0);
    });

    it('should return an Unit with formattedText equal to empty String', function() {
      expect(unit.formattedText.length).toBe(0);
    });

  });

  describe('UnitFactory.fromJson(json)', function() {

    beforeEach(function () {
      unit = factory.fromJson(Mock.json);
    });

    it('should return an Unit with oid equal to json value property', function() {
      expect(unit.oid).toBe(Mock.json.oid);
    });

    it('should return an Unit with plainText equal to json value property', function() {
      expect(unit.plainText).toBe(Mock.json.plainText);
    });

    it('should return an Unit with formattedText equal to json value property', function() {
      expect(unit.formattedText).toBe(Mock.json.formattedText);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.UnitFactory.fromJson() method expects to receive a object instead a String");
    });

  });

  Mock.json = {
    "extends": "StudioObject",
    "objectType": "Unit",
    "oid": "1",
    "plainText": "Filhos",
    "formattedText": "Filhos"
  };

});
