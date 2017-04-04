(function() {
  'use strict';
  angular
    .module('utils')
    .service('otusjs.utils.DatasourceService', service);

  service.$inject = [
      '$q'
   ];

  function service($q) {
    var self = this;
    var _datasources,
        _provided,
        _dsAddress = function(){}; //this will teach player where to get the ds on otus db

    /* Public Methods */
    //  self.getDatasources = getDatasources;
    self.fetchDatasources = fetchDatasources;
    self.provideDatasourcesAddress = provideDatasourcesAddress;


    function fetchDatasources(namesList) {
      var deferred = $q.defer();
      _datasources = _dsAddress();
      if (_provided) {
         if (_datasources) {
            deferred.resolve(_getDatasourceByArray(namesList));
         }else {
            deferred.reject();
         }
      } else {
         deferred.resolve(_getFakeList());
      }
      return deferred.promise;
    }


    function _getDatasourceByArray(dsArr){
      var _arrayResult = [];
      dsArr.forEach(function(id){
         _arrayResult = _arrayResult.concat(_datasources[id].data);
      });
      return _arrayResult;
   }

    function provideDatasourcesAddress(dsAddress) {
      _dsAddress = dsAddress;
      _provided = true;
    }

    function _getFakeList() {
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
