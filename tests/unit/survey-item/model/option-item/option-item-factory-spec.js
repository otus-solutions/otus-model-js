describe('OptionItemFactory', function() {

  var factory, option;
  var Mock = {};

  /* @BeforeScenario */
  beforeEach(function() {
    angular.mock.module('otusjs.surveyItem');

    inject(function(_$injector_) {
      factory = _$injector_.get('OptionItemFactory');
    });

  });

  describe('create method', function() {

    beforeEach(function() {
      option = factory.create(true);
    });

    it('should return an option with property reference with value false', function() {
      expect(option.value).toBe(true);
    });

  });

  describe("fromJsonObject method", function() {

    beforeEach(function() {
      option = factory.fromJsonObject(Mock.jsonObject.data.disabledButton);
    });

    it('should return an option with reference equal to json value property', function() {
      expect(option).not.toBe(null);
    });

  });

  describe("fromJsonObject method empty", function() {

    beforeEach(function() {
      var options = {
        data: []
      }
      option = factory.fromJsonObject(options);
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJsonObject(options);
      }).toEqual(jasmine.any(Function));
    });

  });

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
