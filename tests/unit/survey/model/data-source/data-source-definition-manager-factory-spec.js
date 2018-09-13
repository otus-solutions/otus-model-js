describe("DataSourceDefinitionManager", function() {

  var DATA_SOURCE_1 = "Lista de Medicamentos";
  var DATA_SOURCE_2 = "Lista de Tubos";
  var DATA_SOURCE_3 = "Lista de Participantes";
  var ITEM_1 = "ID_1";
  var ITEM_2 = "ID_2";
  var ITEM_3 = "ID_3";
  var Mock = {};
  var dataSourceDefinitionManager;
  var dataSourceDefinition;

  beforeEach(function() {
    angular.mock.module('otusjs.survey');

    inject(function(_$injector_) {
      dataSourceDefinition = _$injector_.get('otusjs.model.survey.DataSourceDefinitionFactory').create(DATA_SOURCE_1);
      var factory = _$injector_.get('otusjs.model.survey.DataSourceDefinitionManagerFactory', {
        'otusjs.model.survey.DataSourceDefinitionFactory': mockDataSourceDefinitionFactory(_$injector_)
      });

      dataSourceDefinitionManager = factory.create();
    });
  });

  describe("getDataSourceDefinition method", function() {
    beforeEach(function() {
      dataSourceDefinitionManager.getDataSourceDefinition(DATA_SOURCE_1);
    });

    it("should create a new instance of DataSourceDefinition if does not exists", function() {
      expect(Mock.DataSourceDefinitionFactory.create).toHaveBeenCalled();
    });

    it("should return an existing instance of DataSourceDefinition if exists", function() {
      dataSourceDefinitionManager.getDataSourceDefinition(DATA_SOURCE_1);
      expect(Mock.DataSourceDefinitionFactory.create).toHaveBeenCalledTimes(1);
    });
  });

  describe("toJSON method", function() {
    beforeEach(function() {
      dataSourceDefinition.performBind(ITEM_1);
      dataSourceDefinitionManager.loadJsonData([dataSourceDefinition]);
    });

    it("should return Array", function() {
      expect(Array.isArray(dataSourceDefinitionManager.toJSON())).toBe(true);
    });

    it("should return an existing instance of DataSourceDefinition if exists", function() {
      expect(JSON.stringify(dataSourceDefinitionManager.toJSON()[0])).toEqual(JSON.stringify(dataSourceDefinition));
    });
  });

  function mockDataSourceDefinitionFactory($injector) {
    Mock.DataSourceDefinitionFactory = $injector.get('otusjs.model.survey.DataSourceDefinitionFactory');
    spyOn(Mock.DataSourceDefinitionFactory, "create").and.callThrough();
    return Mock.DataSourceDefinitionFactory;
  }

});
