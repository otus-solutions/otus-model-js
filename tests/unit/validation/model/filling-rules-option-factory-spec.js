describe('FillingRulesOptionFactory', function() {
  var Mock = {};
  var factory;

  beforeEach(function() {
    module('otusjs');

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

    it('returned object should have an empty options attribute', function() {
      expect(fillingRulesOption.options).toEqual({});
    });

  });

  describe('fromJson method', function() {

    it("should create a object equals Mock.jsonWithOptions", function () {
      fillingRulesOption = factory.fromJson(Mock.jsonWithOptions);

      expect(JSON.stringify(fillingRulesOption)).toBe(JSON.stringify(Mock.jsonWithOptions));
    });

    it("should create a object equals Mock.jsonWithoutOptions", function () {
      fillingRulesOption = factory.fromJson(Mock.jsonWithoutOptions);

      expect(JSON.stringify(fillingRulesOption)).toBe(JSON.stringify(Mock.jsonWithoutOptions));
    });

    it("should throw a error if the method receive a string", function() {
      expect(function() {
        factory.fromJson(JSON.stringify(Mock.jsonWithOptions));
      }).toThrowError("otusjs.model.misc.model.FillingRulesOptionFactory.fromJson() " +
        "method expects to receive a object instead a String");
    });

  });

  function mockJsons() {
    Mock.jsonWithOptions = {
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
            "maxTime": {"extends": "StudioObject","objectType": "Rule","validatorType": "maxTime","data": {"reference": "Mon Aug 29 2016 23:30:00 GMT-0300 (BRT)"}}
        }
    };

  Mock.jsonWithoutOptions =  {
      extends: 'StudioObject',
      objectType: 'FillingRules',
      options: {}
    };
  }

});
