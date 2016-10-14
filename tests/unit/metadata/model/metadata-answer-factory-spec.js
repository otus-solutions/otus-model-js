describe('MetadataAnswerFactory', function() {
  var Mock = {};
  var option;

  beforeEach(function() {
    module('otusjs');

    mockJson();

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

  describe("fromJson(json) method", function() {

    beforeEach(function() {
      option = factory.fromJson(Mock.json);
    });

    it("should call LabelFactory.fromJson with Mock.json.label", function () {
      expect(Mock.LabelFactory.fromJson).toHaveBeenCalledWith(Mock.json.label);
    });

    it("should return a value with the same value on Mock.json.value", function () {
      expect(option.value).toBe(Mock.json.value);
    });

    it("should return a label with the same value on Mock.json.label", function () {
      expect(option.label).toEqual(Mock.json.label);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.MetadataAnswerFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockJson() {
    Mock.json = {
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
    spyOn(Mock.LabelFactory, 'fromJson').and.callThrough();
    return Mock.LabelFactory;
  }

  function mockIdiomFactory($injector) {
    Mock.IdiomFactory = $injector.get('IdiomFactory');
    spyOn(Mock.IdiomFactory, 'fromJson').and.returnValue({});
    return Mock.IdiomFactory;
  }

});
