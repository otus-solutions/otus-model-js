(function() {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('otusjs.model.survey.DataSourceDefinitionManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.model.survey.DataSourceDefinitionFactory'
  ];

  var Inject = {};

  function Factory(DataSourceDefinitionFactory) {
    Inject.DataSourceDefinitionFactory = DataSourceDefinitionFactory;

    var self = this;
    // Public methods
    self.create = create;

    function create() {
      return new DataSourceDefinitionManager();
    }

    return self;
  }

  function DataSourceDefinitionManager() {
    var self = this;
    var _dataSourcesDefinition = [];

    self.DataSourceDefinitionFactory = Inject.DataSourceDefinitionFactory;
    /* Public methods */
    self.getDataSourceDefinition = getDataSourceDefinition;
    self.getDataSourcesByItemID = getDataSourcesByItemID;
    self.list = list;
    self.toJson = toJson;
    self.loadJsonData = loadJsonData;

    // Returns a DataSource by name. If the required DataSource was not found then
    // it will create a new DataSource.
    function getDataSourceDefinition(name) {
      var dataSource = _findDataSource(name);
      if (!dataSource) {
        dataSource = self.DataSourceDefinitionFactory.create(name);
        _dataSourcesDefinition.push(dataSource);
      }
      return dataSource;
    }

    function getDataSourcesByItemID(id) {
      return _dataSourcesDefinition.filter(function(dataSource) {
        return dataSource.getBindedItems().includes(id);
      });
    }

    // Returns all DataSourcesDefinition
    function list() {
      return _dataSourcesDefinition;
    }

    function toJson() {
      var result = [];
      _dataSourcesDefinition.filter(_bindedDataSources).forEach(function(dataSource) {
        result.push(JSON.parse(dataSource.toJson()));
      });
      return JSON.stringify(result);
    }

    function loadJsonData(data) {
      if(data instanceof Array){
        data.forEach(function(dataSource) {
          _dataSourcesDefinition.push(self.DataSourceDefinitionFactory.fromJsonObject(dataSource));
        });
      }
    }

    // Private methods
    function _findDataSource(name) {
      return _dataSourcesDefinition.find(function(datasource) {
        return name.toLowerCase() === datasource.getName().toLowerCase();
      });
    }

    function _bindedDataSources(dataSource) {
      return dataSource.isBinded();
    }
  }

}());
