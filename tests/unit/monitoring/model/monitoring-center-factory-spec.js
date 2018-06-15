describe('the MonitoringCenter factory', function() {
  var Mock = {};
  var injections;

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
      Mock.factory.create();
    });

    it("should build a factory", function() {
      expect(Mock.factory.create).toHaveBeenCalled();
      expect(Mock.factory.create).toBeDefined();
      expect(Mock.factory.create).not.toBeNull();
      expect(JSON.stringify(Mock.factory.create())).toEqual(JSON.stringify(mockMonitoringCenterEmpty()));
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
      Mock.json = Mock.factory.create();
    });

    it("should build a factory", function() {
      expect(Mock.json.toJson()).toEqual(JSON.stringify(mockMonitoringCenterEmpty()));
    });

  });

  function mockMonitoringCenter() {
    return [{
      "name": "Minas Gerais",
      "goal": 3025,
      "backgroundColor": "rgba(255, 99, 132, 0.2)",
      "borderColor": "rgba(153, 102, 255, 1)"
    }];
  }

  function mockMonitoringCenterEmpty() {
    return {
      "name": null,
      "goal": null,
      "backgroundColor": null,
      "borderColor": null
    };
  }

});
