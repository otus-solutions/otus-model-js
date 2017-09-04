describe('MetadataAnswerFactory', function() {
  var Mock = {};
  var option;
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs');

    mockJsonObject();

    inject(function(_$injector_) {
      factory = _$injector_.get('MetadataAnswerFactory', {
        'LabelFactory': mockLabelFactory(_$injector_)
      });
    });
  });

  describe('create method', function() {

    beforeEach(function() {
      Mock.VALUE = 0;
      Mock.EXTRACTION_VALUE = ".anyValue";

      option = factory.create(Mock.VALUE, Mock.EXTRACTION_VALUE);
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

    it('returned object should have a extraction value property defined', function() {
      expect(option.value).toBeDefined();
    });

  });

  describe("fromJsonObject method", function() {

    beforeEach(function() {
      option = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should create an instance with the same values of Mock.jsonObject", function() {
      expect(JSON.stringify(option)).toEqual(JSON.stringify(Mock.jsonObject));
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
      "extractionValue": ".anyValue",
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