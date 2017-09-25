describe('FillingRulesOptionFactory', function() {
  var Mock = {};
  var factory, fillingRulesOption;

  beforeEach(function() {
    angular.mock.module('otusjs');

    mockJsons();

    inject(function(_$injector_) {
      factory = _$injector_.get('FillingRulesOptionFactory');
    });
  });


  describe('create method', function() {

    beforeEach(function() {
      fillingRulesOption = factory.create();
    });

    it("should return well formatted object", function() {
      expect(fillingRulesOption).toBeDefined();
    });

    it('returned object should extends StudioObject', function() {
      expect(fillingRulesOption.extends).toBe("StudioObject");
    });

    it('returned object type should be FillingRules', function() {
      expect(fillingRulesOption.objectType).toBe("FillingRules");
    });

  });

  describe('fromJsonObject method', function() {

    it("should create a object equals Mock.jsonObjectWithOptions", function () {
      fillingRulesOption = factory.fromJsonObject(Mock.jsonObjectWithOptions);

      expect(JSON.stringify(fillingRulesOption)).toBe(JSON.stringify(Mock.jsonObjectWithOptions));
    });

    it("should create a object equals Mock.jsonObjectWithoutOptions", function () {
      fillingRulesOption = factory.fromJsonObject(Mock.jsonObjectWithoutOptions);

      expect(JSON.stringify(fillingRulesOption)).toBe(JSON.stringify(Mock.jsonObjectWithoutOptions));
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJsonObject(JSON.stringify(Mock.jsonObjectWithOptions));
      }).toThrowError("otusjs.model.misc.model.FillingRulesOptionFactory.fromJsonObject() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockJsons() {
    Mock.jsonObjectWithOptions = {
        "extends": "StudioObject",
        "objectType": "FillingRules",
        "options": {
            "mandatory": {"extends": "StudioObject","objectType": "Rule","validatorType": "mandatory","data": {"reference": true}},
            /* CalendarQuestion */
            "rangeDate": {"extends": "StudioObject","objectType": "Rule","validatorType": "rangeDate","data": {"reference": {"initial": "2016-09-01T03:00:00.000Z","end": "2016-10-01T03:00:00.000Z"}}},
            "minDate": {"extends": "StudioObject","objectType": "Rule","validatorType": "minDate","data": {"reference": "2016-07-01T03:00:00.000Z"}},
            "maxDate": {"extends": "StudioObject","objectType": "Rule","validatorType": "maxDate","data": {"reference": "2016-12-01T02:00:00.000Z"}},
            "futureDate": {"extends": "StudioObject","objectType": "Rule","validatorType": "futureDate","data": {"reference": true}},
            "pastDate": {"extends": "StudioObject","objectType": "Rule","validatorType": "pastDate","data": {"reference": true}},
            /* Numeric Questions */
            "distinct": {"extends": "StudioObject","objectType": "Rule","validatorType": "distinct","data": {"reference": 1}},
            "lowerLimit": {"extends": "StudioObject","objectType": "Rule","validatorType": "lowerLimit","data": {"reference": 1}},
            "upperLimit": {"extends": "StudioObject","objectType": "Rule","validatorType": "upperLimit","data": {"reference": 12}},
            "precision": {"extends": "StudioObject","objectType": "Rule","validatorType": "precision","data": {"reference": 1}},
            "in": {"extends": "StudioObject","objectType": "Rule","validatorType": "in","data": {"reference": {"initial": 1,"end": 11}}},
            "scale": {"extends": "StudioObject","objectType": "Rule","validatorType": "scale","data": {"reference": 2}},
            /* Text Question */
            "alphanumeric": {"extends": "StudioObject","objectType": "Rule","validatorType": "alphanumeric","data": {"reference": true}},
            "lowerCase": {"extends": "StudioObject","objectType": "Rule","validatorType": "lowerCase","data": {"reference": true}},
            "upperCase": {"extends": "StudioObject","objectType": "Rule","validatorType": "upperCase","data": {"reference": false}},
            "specials": {"extends": "StudioObject","objectType": "Rule","validatorType": "specials","data": {"reference": true}},
            "minLength": {"extends": "StudioObject","objectType": "Rule","validatorType": "minLength","data": {"reference": 5}},
            "maxLength": {"extends": "StudioObject","objectType": "Rule","validatorType": "maxLength","data": {"reference": 20}},
            /* TimecQuestion */
            "minTime": {"extends": "StudioObject","objectType": "Rule","validatorType": "minTime","data": {"reference": "Wed Mar 25 2015 01:30:00 GMT-0300 (BRT)"}},
            "maxTime": {"extends": "StudioObject","objectType": "Rule","validatorType": "maxTime","data": {"reference": "Mon Aug 29 2016 23:30:00 GMT-0300 (BRT)"}},
            /* Array */
            "minSelected": {"extends": "StudioObject","objectType": "Rule","validatorType": "minSelected","data": {"reference": 5}},
            "maxSelected": {"extends": "StudioObject","objectType": "Rule","validatorType": "maxSelected","data": {"reference": 5}},
            "quantity": {"extends": "StudioObject","objectType": "Rule","validatorType": "quantity","data": {"reference": 5}},

        }
    };

  Mock.jsonObjectWithoutOptions =  {
      extends: 'StudioObject',
      objectType: 'FillingRules',
      options: {
        "mandatory": {
          "extends": "StudioObject",
          "objectType": "Rule",
          "validatorType": "mandatory",
          "data": {
            "canBeIgnored": false,
            "reference": true
          }
        }
      }
    };
  }

});
