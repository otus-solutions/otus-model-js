describe('the fieldCenter factory', function() {
  var Mock = {};
  var injections;

  beforeEach(function() {
    angular.mock.module("otusjs.model.fieldCenter");
  });

  beforeEach(function() {
    inject(function(_$injector_) {
      Mock.factory = _$injector_.get('otusjs.model.fieldCenter.FieldCenterFactory');
      mockFieldCenter();
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
    });
  });

  describe("expect method fromJsonObject been called", function() {
    beforeEach(function() {
      spyOn(Mock.factory, "fromJsonObject").and.callThrough();
      Mock.jsonObject = Mock.factory.fromJsonObject(mockFieldCenter());
    });

    it("should build a factory", function() {
      expect(Mock.factory.fromJsonObject).toHaveBeenCalledWith(mockFieldCenter());
      expect(Mock.factory.fromJsonObject).toBeDefined();
      expect(Mock.factory.fromJsonObject).not.toBeNull();
      expect(JSON.stringify(Mock.jsonObject)).toEqual(JSON.stringify(mockFieldCenter()));
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
      expect(Mock.json.toJSON()).toEqual(mockFieldCenterEmpty());
    });

  });

  function mockFieldCenter() {
    return [{
      "_id": "4d4fsf874ef48/7feehgh5",
      "name": "Minas Gerais",
      "code": 3,
      "acronym": "MG",
      "country": "Brazil",
      "state": null,
      "address": null,
      "complement": null,
      "zip": null,
      "phone": null,
      "backgroundColor": "rgba(255, 99, 132, 0.2)",
      "borderColor": "rgba(255, 99, 132, 1)"
    }];
  }

  function mockFieldCenterEmpty() {
    return {
      "_id": null,
      "name": null,
      "code": null,
      "acronym": null,
      "country": null,
      "state": null,
      "address": null,
      "complement": null,
      "zip": null,
      "phone": null,
      "backgroundColor": null,
      "borderColor": null
    };
  }

});
