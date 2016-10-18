describe('MetadataAnswerFactory', function() {
  var Mock = {};
  var option;

  beforeEach(function() {
    module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('MetadataAnswerFactory', {
        'LabelFactory': mockLabelFactory(_$injector_)
      });
    });
  });

  describe('create method', function() {

    beforeEach(function() {
      option = factory.create(0);
    });

    it('returned object should extends StudioObject', function() {
      expect(option.extends).toBe('StudioObject');
    });

    it('returned object should have objectType equal to MetadataAnswer', function() {
      expect(option.objectType).toBe('MetadataAnswer');
    });

    it('returned object should have dataType equal to Integer', function() {
      expect(option.dataType).toBe('Integer');
    });

    it('returned object should have a label object for enUS', function() {
      expect(option.label.enUS).toBeDefined();
    });

    it('returned object should have a label object for ptBR', function() {
      expect(option.label.ptBR).toBeDefined();
    });

    it('returned object should have a label object for esES', function() {
      expect(option.label.esES).toBeDefined();
    });

    it('returned object should have a value property defined', function() {
      expect(option.value).toBeDefined();
    });

  });

  describe("fromJsonObject method", function() {

    beforeEach(function() {
      option = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should call LabelFactory.fromJsonObject with Mock.jsonObject.label", function () {
      expect(Mock.LabelFactory.fromJsonObject).toHaveBeenCalledWith(Mock.jsonObject.label);
    });

    it("should return a value with the same value on Mock.jsonObject.value", function () {
      expect(option.value).toBe(Mock.jsonObject.value);
    });

    it("should return a label with the same value on Mock.jsonObject.label", function () {
      expect(option.label).toEqual(Mock.jsonObject.label);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      }).toThrowError("otusjs.model.misc.model.MetadataAnswerFactory.fromJsonObject() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockJsonObject() {
    Mock.jsonObject = {
      "extends": "StudioObject",
      "objectType": "MetadataAnswer",
      "dataType": "Integer",
      "value": 1,
      "label": {
        "ptBR": {},
        "enUS": {},
        "esES": {}
      }
    };
  }

  function mockLabelFactory($injector) {
    Mock.LabelFactory = $injector.get('LabelFactory', {
      'IdiomFactory': mockIdiomFactory($injector)
    });
    spyOn(Mock.LabelFactory, 'fromJsonObject').and.callThrough();
    return Mock.LabelFactory;
  }

  function mockIdiomFactory($injector) {
    Mock.IdiomFactory = $injector.get('IdiomFactory');
    spyOn(Mock.IdiomFactory, 'fromJsonObject').and.returnValue({});
    return Mock.IdiomFactory;
  }

});
