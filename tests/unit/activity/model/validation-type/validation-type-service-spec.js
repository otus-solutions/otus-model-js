describe("Validation Type Service Tests", function () {
  var Mock = {};
  var service;
  const STRING = "String";
  const INTEGER = "Integer";
  const LOCAL_DATE = "LocalDate";
  const LOCAL_TIME = "LocalTime";
  const BINARY = "Binary";
  const BOOLEAN = "Boolean";
  const DECIMAL = "Decimal";
  const ARRAY = "Array";

  beforeEach(function () {
    mockData();
    angular.mock.module('otusjs.model.activity');
    inject(function (_$injector_) {
      service = _$injector_.get('otusjs.model.activity.ValidationTypeService');
    });
  });

  it('should instance service', function () {
    expect(service).toBeDefined();
    expect(service.isValid).toBeDefined();
    expect(typeof service.isValid == "function").toBeTruthy();
  });

  it('should validate Integer value', function () {
    expect(service.isValid(INTEGER, Mock.numberInteger)).toBeTruthy();
    expect(service.isValid(INTEGER, Mock.numberDecimal)).toBeFalsy();
    expect(service.isValid(INTEGER, Mock.boolean)).toBeFalsy();
    expect(service.isValid(INTEGER, Mock.text)).toBeFalsy();
    expect(service.isValid(INTEGER, Mock.dateTime)).toBeFalsy();
    expect(service.isValid(INTEGER, Mock.arrayValue)).toBeFalsy();
    expect(service.isValid(INTEGER, jasmine.anything())).toBeFalsy();
  });

  it('should validate String value', function () {
    expect(service.isValid(STRING, Mock.numberInteger)).toBeFalsy();
    expect(service.isValid(STRING, Mock.numberDecimal)).toBeFalsy();
    expect(service.isValid(STRING, Mock.boolean)).toBeFalsy();
    expect(service.isValid(STRING, Mock.text)).toBeTruthy();
    expect(service.isValid(STRING, Mock.dateTime)).toBeFalsy();
    expect(service.isValid(STRING, Mock.arrayValue)).toBeFalsy();
    expect(service.isValid(STRING, jasmine.anything())).toBeFalsy();
  });

  it('should validate LocalDate value', function () {
    expect(service.isValid(LOCAL_DATE, Mock.numberInteger)).toBeFalsy();
    expect(service.isValid(LOCAL_DATE, Mock.numberDecimal)).toBeFalsy();
    expect(service.isValid(LOCAL_DATE, Mock.boolean)).toBeFalsy();
    expect(service.isValid(LOCAL_DATE, Mock.text)).toBeFalsy();
    expect(service.isValid(LOCAL_DATE, Mock.dateTime)).toBeTruthy();
    expect(service.isValid(LOCAL_DATE, Mock.arrayValue)).toBeFalsy();
    expect(service.isValid(LOCAL_DATE, jasmine.anything())).toBeFalsy();
  });

  it('should validate LocalTime value', function () {
    expect(service.isValid(LOCAL_TIME, Mock.numberInteger)).toBeFalsy();
    expect(service.isValid(LOCAL_TIME, Mock.numberDecimal)).toBeFalsy();
    expect(service.isValid(LOCAL_TIME, Mock.boolean)).toBeFalsy();
    expect(service.isValid(LOCAL_TIME, Mock.text)).toBeFalsy();
    expect(service.isValid(LOCAL_TIME, Mock.dateTime)).toBeTruthy();
    expect(service.isValid(LOCAL_TIME, Mock.arrayValue)).toBeFalsy();
    expect(service.isValid(LOCAL_TIME, jasmine.anything())).toBeFalsy();
  });

  it('should validate Boolean value', function () {
    expect(service.isValid(BOOLEAN, Mock.numberInteger)).toBeFalsy();
    expect(service.isValid(BOOLEAN, Mock.numberDecimal)).toBeFalsy();
    expect(service.isValid(BOOLEAN, Mock.boolean)).toBeTruthy();
    expect(service.isValid(BOOLEAN, Mock.text)).toBeFalsy();
    expect(service.isValid(BOOLEAN, Mock.dateTime)).toBeFalsy();
    expect(service.isValid(BOOLEAN, Mock.arrayValue)).toBeFalsy();
    expect(service.isValid(BOOLEAN, jasmine.anything())).toBeFalsy();
  });

  it('should validate Array value', function () {
    expect(service.isValid(ARRAY, Mock.numberInteger)).toBeFalsy();
    expect(service.isValid(ARRAY, Mock.numberDecimal)).toBeFalsy();
    expect(service.isValid(ARRAY, Mock.boolean)).toBeFalsy();
    expect(service.isValid(ARRAY, Mock.text)).toBeFalsy();
    expect(service.isValid(ARRAY, Mock.dateTime)).toBeFalsy();
    expect(service.isValid(ARRAY, Mock.arrayValue)).toBeTruthy();
    expect(service.isValid(ARRAY, jasmine.anything())).toBeFalsy();
  });

  it('should validate Decimal value', function () {
    expect(service.isValid(DECIMAL, Mock.numberInteger)).toBeFalsy();
    expect(service.isValid(DECIMAL, Mock.numberDecimal)).toBeTruthy();
    expect(service.isValid(DECIMAL, Mock.boolean)).toBeFalsy();
    expect(service.isValid(DECIMAL, Mock.text)).toBeFalsy();
    expect(service.isValid(DECIMAL, Mock.dateTime)).toBeFalsy();
    expect(service.isValid(DECIMAL, Mock.arrayValue)).toBeFalsy();
    expect(service.isValid(DECIMAL, jasmine.anything())).toBeFalsy();
  });

  it('should validate Binary value', function () {
    expect(service.isValid(BINARY, Mock.numberInteger)).toBeTruthy();
    expect(service.isValid(BINARY, Mock.numberDecimal)).toBeTruthy();
    expect(service.isValid(BINARY, Mock.boolean)).toBeTruthy();
    expect(service.isValid(BINARY, Mock.text)).toBeTruthy();
    expect(service.isValid(BINARY, Mock.dateTime)).toBeTruthy();
    expect(service.isValid(BINARY, Mock.arrayValue)).toBeTruthy();
    expect(service.isValid(BINARY, jasmine.anything())).toBeTruthy();
  });

  function mockData() {
    Mock.numberInteger = 1;
    Mock.numberDecimal = 1.2;
    Mock.boolean = true;
    Mock.text = "otus";
    Mock.dateTime = new Date();
    Mock.arrayValue = [];
  }
});