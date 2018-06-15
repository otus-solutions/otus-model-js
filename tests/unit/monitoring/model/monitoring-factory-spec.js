describe('the monitoring factory', function() {
  var Mock = {};
  var injections;

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

  function mockMonitoring() {
    return [{
      "acronym": "CISE",
      "fieldCenter": "BA",
      "month": 5,
      "sum": "9337",
      "year": 2018
    }];
  }

  function mockMonitoringEmpty() {
    return {
      "acronym": null,
      "fieldCenter": null,
      "month": null,
      "sum": null,
      "year": null
    };
  }

});
