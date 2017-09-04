describe('Unit suite:', function() {

  var Mock = {};
  var factory, unit;

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs');

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

  describe('UnitFactory.fromJsonObject(jsonObject)', function() {

    beforeEach(function () {
      unit = factory.fromJsonObject(Mock.jsonObject);
    });

    it('should return an Unit with oid equal to json value property', function() {
      expect(unit.oid).toBe(Mock.jsonObject.oid);
    });

    it('should return an Unit with plainText equal to json value property', function() {
      expect(unit.plainText).toBe(Mock.jsonObject.plainText);
    });

    it('should return an Unit with formattedText equal to json value property', function() {
      expect(unit.formattedText).toBe(Mock.jsonObject.formattedText);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      }).toThrowError("otusjs.model.misc.model.UnitFactory.fromJsonObject() method expects to receive a object instead a String");
    });

  });

  Mock.jsonObject = {
    "extends": "StudioObject",
    "objectType": "Unit",
    "oid": "1",
    "plainText": "Filhos",
    "formattedText": "Filhos"
  };

});
