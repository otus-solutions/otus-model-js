describe('the monitoring factory', function() {
  var Mock = {};
  var injections;
  var monitoringInformation;

  beforeEach(function() {
    angular.mock.module("otusjs.model.monitoring");
  });

  beforeEach(function() {
    inject(function(_$injector_) {
      Mock.factory = _$injector_.get('otusjs.model.monitoring.MonitoringFactory');
      mockMonitoring();
    });
  });

  describe("expect method create been called", function() {

    beforeEach(function() {
      spyOn(Mock.factory, "create").and.callThrough();
      Mock.factory.create();
    });

    it("should build a factory", function() {
      expect(Mock.factory.create).toHaveBeenCalled();
      expect(Mock.factory.create).toBeDefined();
      expect(Mock.factory.create).not.toBeNull();
      expect(JSON.stringify(Mock.factory.create())).toEqual(JSON.stringify(mockMonitoringEmpty()));
    });
  });

  describe("expect method fromJsonObject been called", function() {
    beforeEach(function() {
      spyOn(Mock.factory, "fromJsonObject").and.callThrough();
      Mock.jsonObject = Mock.factory.fromJsonObject(mockMonitoring());
    });

    it("should build a factory", function() {
      expect(Mock.factory.fromJsonObject).toHaveBeenCalledWith(mockMonitoring());
      expect(Mock.factory.fromJsonObject).toBeDefined();
      expect(Mock.factory.fromJsonObject).not.toBeNull();
      expect(JSON.stringify(Mock.jsonObject)).toEqual(JSON.stringify(mockMonitoring()));
    });
  });

  describe("expect method fromJsonObject been called with empty array", function() {
    beforeEach(function() {
      spyOn(Mock.factory, "fromJsonObject").and.callThrough();
      Mock.jsonObjectEmpty = Mock.factory.fromJsonObject(jasmine.any(Array));
    });

    it("should build a factory", function() {
      expect(Mock.factory.fromJsonObject).toHaveBeenCalledWith(jasmine.any(Array));
      expect(Mock.factory.fromJsonObject).toBeDefined();
      expect(Mock.factory.fromJsonObject).not.toBeNull();
      expect(JSON.stringify(Mock.jsonObjectEmpty)).toEqual(JSON.stringify([]));
    });
  });

  describe("expect method toJson been called", function() {
    beforeEach(function() {
      spyOn(Mock.factory, "create").and.callThrough();
      Mock.json = Mock.factory.create();
    });

    it("should build a factory", function() {
      expect(Mock.json.toJson()).toEqual(JSON.stringify(mockMonitoringEmpty()));
    });

  });

  describe("expect compare values with factory", function () {
    beforeEach(function () {
      monitoringInformation = mockMonitoringEmpty();
      Mock.MonitoringInformation = Mock.factory.create(mockMonitoringEmpty());
    });

    it('should return an object with name attribute value equal to Monitoring Information objectType', function () {
      expect(Mock.MonitoringInformation.objectType).toEqual(monitoringInformation.objectType);
    });

    it('should return an object with name attribute value equal to Monitoring Information acronym', function () {
      expect(Mock.MonitoringInformation.acronym).toEqual(monitoringInformation.acronym);
    });

    it('should return an object with name attribute value equal to Monitoring Information fieldCenter', function () {
      expect(Mock.MonitoringInformation.fieldCenter).toEqual(monitoringInformation.fieldCenter);
    });

    it('should return an object with name attribute value equal to Monitoring Information month', function () {
      expect(Mock.MonitoringInformation.month).toEqual(monitoringInformation.month);
    });

    it('should return an object with name attribute value equal to Monitoring Information sum', function () {
      expect(Mock.MonitoringInformation.sum).toEqual(monitoringInformation.sum);
    });

    it('should return an object with name attribute value equal to Monitoring Information year', function () {
      expect(Mock.MonitoringInformation.year).toEqual(monitoringInformation.year);
    });
  });

  function mockMonitoring() {
    return [{
      "objectType": "MonitoringInformation",
      "acronym": "CISE",
      "fieldCenter": "BA",
      "month": 5,
      "sum": "9337",
      "year": 2018
    }];
  }

  function mockMonitoringEmpty() {
    return {
      "objectType": "MonitoringInformation",
      "acronym": null,
      "fieldCenter": null,
      "month": null,
      "sum": null,
      "year": null
    };
  }

});
