describe("DataSourceDefinition", function() {

  var DATA_SOURCE_NAME = "Lista de Medicamentos";
  var ITEM_ID_1 = "item_ID_1";
  var ITEM_ID_2 = "item_ID_2";
  var dataSourceDefinition;

  beforeEach(function() {
    angular.mock.module('otusjs.survey');

    inject(function(_$injector_) {
      dataSourceDefinition = _$injector_.get('otusjs.model.survey.DataSourceDefinitionFactory').create(DATA_SOURCE_NAME);
    });
  });

  describe("isBinded method", function() {
    it("should return false when the DataSourceDefinition has NOT a binded itemID", function() {
      expect(dataSourceDefinition.isBinded()).toBe(false);
    });
    it("should return true when has a binded itemID", function() {
      dataSourceDefinition.performBind(ITEM_ID_1);
      expect(dataSourceDefinition.isBinded()).toBe(true);
    });
  });

  describe("getID method", function() {
    it("should return the DATA_SOURCE_NAME without blank spaces and lower case", function() {
      expect(dataSourceDefinition.getID()).toBe("listademedicamentos");
    });
  });

  describe("performBind method", function() {
    beforeEach(function() {
      dataSourceDefinition.performBind(ITEM_ID_1);
    });
    it("should add an itemID on DataSourceDefinition", function() {
      expect(dataSourceDefinition.getBindedItems()).toContain(ITEM_ID_1, ITEM_ID_2);
    });
  });

  describe("removeBind method", function() {
    beforeEach(function() {
      dataSourceDefinition.performBind(ITEM_ID_1);
      dataSourceDefinition.removeBind(ITEM_ID_1);
    });
    it("should remove a itemID of list of binded items", function() {
      expect(dataSourceDefinition.getBindedItems()).toEqual([]);
    });
  });

  describe("getBindedItems method", function() {
    beforeEach(function() {
      dataSourceDefinition.performBind(ITEM_ID_1);
    });
    it("should return a list of binded itemsID", function() {
      expect(dataSourceDefinition.getBindedItems()).toEqual([ITEM_ID_1]);
    });
  });

  describe("toJson method", function () {
    var json;
    beforeEach(function () {
      json = JSON.stringify({
        "objectType": "DataSourceDefinition",
        "id": "listademedicamentos",
        "name": DATA_SOURCE_NAME,
        "bindTo": []
      });
    });
    it("should return a Json", function () {
      expect(dataSourceDefinition.toJson()).toBe(json);
    });
  });

});
