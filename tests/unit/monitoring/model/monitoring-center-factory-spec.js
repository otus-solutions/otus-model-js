describe('the MonitoringCenter factory', function() {
  var Mock = {};
  var injections;
  var monitoringCenter = {};

  beforeEach(function() {
    angular.mock.module("otusjs.model.monitoring");
  });

  beforeEach(function() {
    inject(function(_$injector_) {
      Mock.factory = _$injector_.get('otusjs.model.monitoring.MonitoringCenterFactory');
      mockMonitoringCenter();
    });
  });

  describe("expect method create been called", function() {

    beforeEach(function() {
      spyOn(Mock.factory, "create").and.callThrough();
      Mock.factory.create(mockMonitoringCenterEmpty());
    });

    it("should build a factory", function() {
      expect(Mock.factory.create).toHaveBeenCalledWith(mockMonitoringCenterEmpty());
      expect(Mock.factory.create).toBeDefined();
      expect(Mock.factory.create).not.toBeNull();
      expect(JSON.stringify(Mock.factory.create(mockMonitoringCenterEmpty()))).toEqual(JSON.stringify(mockMonitoringCenterEmpty()));
    });
  });

  describe("expect method fromJsonObject been called", function() {
    beforeEach(function() {
      spyOn(Mock.factory, "fromJsonObject").and.callThrough();
      Mock.jsonObject = Mock.factory.fromJsonObject(mockMonitoringCenter());
    });

    it("should build a factory", function() {
      expect(Mock.factory.fromJsonObject).toHaveBeenCalledWith(mockMonitoringCenter());
      expect(Mock.factory.fromJsonObject).toBeDefined();
      expect(Mock.factory.fromJsonObject).not.toBeNull();
      expect(JSON.stringify(Mock.jsonObject)).toEqual(JSON.stringify(mockMonitoringCenter()));
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
      Mock.MonitoringCenter = Mock.factory.create(mockMonitoringCenterEmpty());
    });

    it("should build a factory", function() {
      expect(Mock.MonitoringCenter.toJson()).toEqual(JSON.stringify(mockMonitoringCenterEmpty()));
    });

  });

  describe("expect compare values with factory", function() {
    beforeEach(function() {
      monitoringCenter = mockMonitoringCenterEmpty();
      Mock.MonitoringCenter = Mock.factory.create(mockMonitoringCenterEmpty());
    });

    it('should return an object with name attribute value equal to Monitoring Center objectType', function () {
      expect(Mock.MonitoringCenter.objectType).toEqual(monitoringCenter.objectType);
    });

    it('should return an object with name attribute value equal to Monitoring Center name', function () {
      expect(Mock.MonitoringCenter.name).toEqual(monitoringCenter.name);
    });

    it('should return an object with name attribute value equal to Monitoring Center goal', function () {
      expect(Mock.MonitoringCenter.goal).toEqual(monitoringCenter.goal);
    });

    it('should return an object with name attribute value equal to Monitoring Center backgroundColor', function () {
      expect(Mock.MonitoringCenter.backgroundColor).toEqual(monitoringCenter.backgroundColor);
    });

    it('should return an object with name attribute value equal to Monitoring Center borderColor', function () {
      expect(Mock.MonitoringCenter.borderColor).toEqual(monitoringCenter.borderColor);
    });

  });

  function mockMonitoringCenter() {
    return [{
      "objectType": "MonitoringCenter",
      "name": "Minas Gerais",
      "goal": 3025,
      "backgroundColor": "rgba(255, 99, 132, 0.2)",
      "borderColor": "rgba(153, 102, 255, 1)"
    }];
  }

  function mockMonitoringCenterEmpty() {
    return {
      "objectType": "MonitoringCenter",
      "name": null,
      "goal": null,
      "backgroundColor": null,
      "borderColor": null
    };
  }

});
