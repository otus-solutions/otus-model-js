describe('MetadataGroupFactory', function() {
  var Mock = {};
  var factory, metadataGroup;

  beforeEach(function() {
    module('otusjs');

    mockJson();

    inject(function(_$injector_) {
      factory = _$injector_.get('MetadataGroupFactory', {
        MetadataAnswerFactory: mockMetadataAnswerFactory(_$injector_)
      });
    });

  });

  describe('create method', function() {

    beforeEach(function() {
      metadataGroup = factory.create();
    });

    it('should return an object defined', function() {
      expect(metadataGroup).toBeDefined();
    });

    it('returned object should extends StudioObject', function() {
      expect(metadataGroup.extents).toBe('StudioObject');
    });

    it('should return a MetadataGroup ObjectType', function() {
      expect(metadataGroup.objectType).toBe('MetadataGroup');
    });

    it('should return a metadataGroup options', function() {
      expect(metadataGroup.options).toEqual(jasmine.any(Object));
    });

  });

  describe("fromJson(json) method", function() {

    beforeEach(function() {
      metadataGroup = factory.fromJson(Mock.json);
    });

    it("should return a object with 2 options", function() {
      expect(metadataGroup.getOptionListSize()).toBe(2);
    });

    it("should call MetadataAnswerFactory.fromJson method 3 times ", function () {
      expect(Mock.MetadataAnswerFactory.fromJson).toHaveBeenCalledTimes(2);
    });

    it("should call MetadataAnswerFactory.fromJson with Mock.option1 ", function () {
      expect(Mock.MetadataAnswerFactory.fromJson).toHaveBeenCalledWith(Mock.option1);
    });

    it("should call MetadataAnswerFactory.fromJson with Mock.option2 ", function () {
      expect(Mock.MetadataAnswerFactory.fromJson).toHaveBeenCalledWith(Mock.option2);
    });

    it("should throw an error when receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.MetadataGroupFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockJson() {
    Mock.json = {
      "extents": "StudioObject",
      "objectType": "MetadataGroup",
      "options": [Mock.option1, Mock.option2]
    };

    Mock.option1 = {
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

    Mock.option2 = {
      "extends": "StudioObject",
      "objectType": "MetadataAnswer",
      "dataType": "Integer",
      "value": 2,
      "label": {
        "ptBR": {},
        "enUS": {},
        "esES": {}
      }
    };
  }

  function mockMetadataAnswerFactory($injector) {
    Mock.MetadataAnswerFactory = $injector.get('MetadataAnswerFactory', {
      'IdiomFactory': mockIdiomFactory($injector)
    });
    spyOn(Mock.MetadataAnswerFactory, "fromJson").and.callThrough();
    return Mock.MetadataAnswerFactory;
  }

  function mockIdiomFactory($injector) {
    Mock.IdiomFactory = $injector.get('IdiomFactory');
    spyOn(Mock.IdiomFactory, 'fromJson').and.returnValue({});
    return Mock.IdiomFactory;
  }

});
