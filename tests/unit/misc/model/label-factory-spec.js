describe('LabelFactory suite:', function() {
  var factory;
  var Mock = {};

  beforeEach(function() {
    module('otusjs');

    mockJson();

    inject(function(_$injector_) {
      factory = _$injector_.get('LabelFactory', {
        'IdiomFactory': mockIdiomFactory(_$injector_)
      });
    });
  });

  describe('create method', function() {

    beforeEach(function() {
      label = factory.create();
    });

    it("should call IdiomFactory.create method 3 times", function() {
      expect(Mock.IdiomFactory.create).toHaveBeenCalledTimes(3);
    });

    it("should return a object with a property ptBR equal to Mock.emptyIdiom", function() {
      expect(JSON.stringify(label.ptBR)).toBe(JSON.stringify(Mock.emptyIdiom));
    });

    it("should return a object with a property enUS equal to Mock.emptyIdiom", function() {
      expect(JSON.stringify(label.enUS)).toBe(JSON.stringify(Mock.emptyIdiom));
    });

    it("should return a object with a property esES equal to Mock.emptyIdiom", function() {
      expect(JSON.stringify(label.esES)).toBe(JSON.stringify(Mock.emptyIdiom));
    });

  });

  describe('fromJsonObject method', function() {

    beforeEach(function() {
      label = factory.fromJsonObject(Mock.jsonObject);
    });

    it("should call IdiomFactory.fromJsonObject method 3 times", function() {
      expect(Mock.IdiomFactory.fromJsonObject).toHaveBeenCalledTimes(3);
    });

    it("should call IdiomFactory.fromJsonObject method with Mock.jsonObject.label.ptBR", function() {
      expect(Mock.IdiomFactory.fromJsonObject).toHaveBeenCalledWith(Mock.ptBR);
    });

    it("should call IdiomFactory.fromJsonObject method with Mock.jsonObject.label.enUS", function() {
      expect(Mock.IdiomFactory.fromJsonObject).toHaveBeenCalledWith(Mock.enUS);
    });

    it("should call IdiomFactory.fromJsonObject method with Mock.jsonObject.label.esES", function() {
      expect(Mock.IdiomFactory.fromJsonObject).toHaveBeenCalledWith(Mock.esES);
    });

    it("should return a object equal to Mock.jsonObject", function() {
      expect(JSON.stringify(label)).toEqual(JSON.stringify(Mock.jsonObject));
    });

    it("should throw a error when receives a String", function() {
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      }).toThrowError("otusjs.model.misc.model.LabelFactory.fromJsonObject() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockIdiomFactory($injector) {
    Mock.IdiomFactory = $injector.get('IdiomFactory');

    spyOn(Mock.IdiomFactory, "create").and.callThrough();
    spyOn(Mock.IdiomFactory, "fromJsonObject").and.callThrough();

    return Mock.IdiomFactory;
  }

  function mockJson() {
    Mock.ptBR = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "1",
      "plainText": "Qual sua data de nascimento?",
      "formattedText": "Qual sua <b>data de nascimento</b>?"
    };

    Mock.enUS = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "2",
      "plainText": "What is your birth date?",
      "formattedText": "What is your <b>birth date</b>?"
    };

    Mock.esES = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "¿Cuál es su fecha de nacimiento?",
      "formattedText": "¿Cuál es su fecha de <b>nacimiento</b>?"
    };

    Mock.emptyIdiom = {
      "extends": "StudioObject",
      "objectType": "Label",
      "oid": "",
      "plainText": "",
      "formattedText": ""
    };

    Mock.jsonObject = {
      "ptBR": Mock.ptBR,
      "enUS": Mock.enUS,
      "esES": Mock.esES
    };
  }

});
