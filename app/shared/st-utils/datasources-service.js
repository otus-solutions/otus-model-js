(function() {
  'use strict';
  angular
    .module('utils')
    .service('otusjs.utils.DatasourceService', service);

  service.$inject = [
      '$q'
   ];

  function service($q, DataSourceDefinitionManagerFactory) {
    var self = this;
    var _datasources,
      _provided,
      _fetchDatasources = function() {}; //this will teach player where to get the ds on otus db

    /* Public Methods */
    self.fetchDatasources = fetchDatasources;    
    self.provideDatasourcesAddress = provideDatasourcesAddress;


    function fetchDatasources(itemId) {
      var deferred = $q.defer();
      _datasources = _fetchDatasources();
      if (_provided) {
        if (_datasources) {
          deferred.resolve(_fetchDatasourcesByItemID(itemId));
        } else {
          deferred.reject();
        }
      } else {
        deferred.resolve(_getFakeList());
      }
      return deferred.promise;
    }

    function _fetchDatasourcesByItemID(itemId){
      var _arrayResult = [];
      Object.keys(_datasources).forEach(function(dsName){
         if (_datasources[dsName].bindedItems.includes(itemId)) {
            _arrayResult = _arrayResult.concat(_datasources[dsName].data);
         }
      });
      return _arrayResult;
   }

    function provideDatasourcesAddress(dsAddress) {
      _fetchDatasources = dsAddress;
      _provided = true;
    }

    function _getFakeList() { //for studio purposes
      return [
        {
          'value': 'Atroveran'
          },
        {
          'value': 'Paracetamol'
          },
        {
          'value': 'Dorflex'
          },
        {
          'value': 'Cataflan'
          },
        {
          'value': 'Tylenol'
          }
      ];
    }

  }
}());
