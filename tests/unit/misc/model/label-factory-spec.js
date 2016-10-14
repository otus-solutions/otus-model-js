describe('LabelFactory suite:', function() {
  var factory;
  var Mock = {};

  /* @BeforeScenario */
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

  describe('fromJson method', function() {

    beforeEach(function() {
      label = factory.fromJson(Mock.json);
    });

    it("should call IdiomFactory.fromJson method 3 times", function() {
      expect(Mock.IdiomFactory.fromJson).toHaveBeenCalledTimes(3);
    });

    it("should call IdiomFactory.fromJson method with Mock.json.label.ptBR", function() {
      expect(Mock.IdiomFactory.fromJson).toHaveBeenCalledWith(Mock.ptBR);
    });

    it("should call IdiomFactory.fromJson method with Mock.json.label.enUS", function() {
      expect(Mock.IdiomFactory.fromJson).toHaveBeenCalledWith(Mock.enUS);
    });

    it("should call IdiomFactory.fromJson method with Mock.json.label.esES", function() {
      expect(Mock.IdiomFactory.fromJson).toHaveBeenCalledWith(Mock.esES);
    });

    it("should return a object equal to Mock.json", function() {
      expect(JSON.stringify(label)).toBe(JSON.stringify(Mock.json));
    });

    it("should throw a error when receives a String", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.json));
      }).toThrowError("otusjs.model.misc.model.LabelFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockIdiomFactory($injector) {
    Mock.IdiomFactory = $injector.get('IdiomFactory');

    spyOn(Mock.IdiomFactory, "create").and.callThrough();
    spyOn(Mock.IdiomFactory, "fromJson").and.callThrough();

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

    Mock.json = {
      "ptBR": Mock.ptBR,
      "enUS": Mock.enUS,
      "esES": Mock.esES
    };
  }

});
