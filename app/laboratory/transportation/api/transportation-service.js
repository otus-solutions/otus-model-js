(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .service('otusjs.laboratory.transportation.TransportationService', service);

  service.$inject = [
     'otusjs.laboratory.transportation.LotFactory'
  ];

  function service(LotFactory) {
    var self = this;

    self.createAliquotLot = createAliquotLot;
    self.buildAliquotLotFromJson = buildAliquotLotFromJson;

    function createAliquotLot() {
       return LotFactory.create();
    }

    function buildAliquotLotFromJson(lotJson) {
      return LotFactory.fromJson(lotJson);
    }

    return self;
  }
}());
