describe('QuestionOption', function() {
  var Mock = {};
  var questionOption;
  var questionOptionJSON;
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs');

    inject(function(_$injector_) {
      factory = _$injector_.get('QuestionOptionFactory', {
        'OptionItemFactory': mockOptionItemFactory(_$injector_)
      });
      questionOption = factory.create();
      questionOptionJSON =  factory.fromJsonObject(Mock.jsonObject);
      questionOptionJSON =  factory.fromJsonObject(jasmine.any(String));
    });
  });


  describe('createOption method', function() {

    beforeEach(function() {
      questionOption.createOption("mandatory", null);
    });

    it("should call Mock.OptionItemFactory.create with mandatory", function() {
      expect(Mock.OptionItemFactory.create).toHaveBeenCalledWith("mandatory", null);
    });

    it("should populate options object", function() {
      expect(questionOption.options).not.toEqual({});
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObject));
      }).toThrowError("otusjs.model.misc.model.QuestionOptionFactory.fromJsonObject() method expects to receive a object instead a String");
    });

  });

  describe('removeOption method', function() {

    beforeEach(function() {
      Mock.OptionItemFactory.fromJsonObject(jasmine.any(String));
      questionOption.createOption("mandatory", null);
      questionOption.removeOption("mandatory");
    });

    it("should remove mandatory of options object", function() {
      expect(questionOption).not.toEqual(undefined);
    });

  });

  function mockOptionItemFactory($injector) {
    Mock.OptionItemFactory = $injector.get('OptionItemFactory');
    spyOn(Mock.OptionItemFactory, 'create').and.callThrough();
    spyOn(Mock.OptionItemFactory, 'fromJsonObject').and.callThrough();
    return Mock.OptionItemFactory;
  }

  Mock.jsonObject = {
    "extends": "StudioObject",
    "objectType": "QuestionOption",
    "data": {
      "mandatory": {
        "extends": "StudioObject",
        "objectType": "OptionItem",
        "name": "mandatory",
        "value": null
      },
      "disabledButton": {
        "extends": "StudioObject",
        "objectType": "OptionItem",
        "name": "disabledButton",
        "value": false
      }
    }
  };

});
