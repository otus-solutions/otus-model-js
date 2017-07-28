(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .service('otusjs.laboratory.transportation.TransportationService', service);

  service.$inject = [
     'otusjs.laboratory.transportation.LotFactory',
     '$http'
  ];

  function service(LotFactory, $http) {
    var self = this;

    self.createAliquotLot = createAliquotLot;
    self.buildAliquotLotFromJson = buildAliquotLotFromJson;

    onInit();

    function onInit() {

    }

    function createAliquotLot() {
       return LotFactory.create();
    }

    function buildAliquotLotFromJson(lotJson) {
      return LotFactory.fromJson(lotJson);
    }

    return self;
  }
}());
