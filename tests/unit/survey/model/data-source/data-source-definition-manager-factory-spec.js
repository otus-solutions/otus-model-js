xdescribe("DataSourceDefinitionManager", function() {

  var DATA_SOURCE_1 = "Lista de Medicamentos";
  var DATA_SOURCE_2 = "Lista de Tubos";
  var DATA_SOURCE_3 = "Lista de Participantes";
  var ITEM_1 = "ID_1";
  var ITEM_2 = "ID_2";
  var ITEM_3 = "ID_3";
  var Mock = {};
  var dataSourceDefinitionManager;

  beforeEach(function() {
    angular.mock.module('otusjs.survey');

    inject(function(_$injector_) {
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

  describe("getDataSourcesByItemID method", function() {

    var dataSourceDefinition;

    beforeEach(function() {
      dataSourceDefinition_1 = dataSourceDefinitionManager.getDataSourceDefinition(DATA_SOURCE_1);
      dataSourceDefinition_2 = dataSourceDefinitionManager.getDataSourceDefinition(DATA_SOURCE_2);
      dataSourceDefinition_3 = dataSourceDefinitionManager.getDataSourceDefinition(DATA_SOURCE_3);

      dataSourceDefinition_1.performBind(ITEM_1);
      dataSourceDefinition_2.performBind(ITEM_1);
      dataSourceDefinition_1.performBind(ITEM_2);
    });

    it("should return the DataSources Definition that contain a passed ItemID", function() {
      expect(dataSourceDefinitionManager.getDataSourcesByItemID(ITEM_1))
        .toEqual([dataSourceDefinition_1, dataSourceDefinition_2]);
    });

    it("should return an empty array if a passed ItemID does not binded with none DataSource Definition", function() {
      expect(dataSourceDefinitionManager.getDataSourcesByItemID(ITEM_3)).toEqual([]);
    });
  });

  function mockDataSourceDefinitionFactory($injector) {
    Mock.DataSourceDefinitionFactory = $injector.get('otusjs.model.survey.DataSourceDefinitionFactory');
    spyOn(Mock.DataSourceDefinitionFactory, "create").and.callThrough();
    return Mock.DataSourceDefinitionFactory;
  }

});
