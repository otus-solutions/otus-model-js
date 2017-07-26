(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .factory('otusjs.laboratory.transportation.LotFactory', factory);

  function factory() {
    var self = this;
    self.create = create;

    function create(lotInfo) {
      return new TransportationLot(lotInfo);
    }

    return self;
  }

  function TransportationLot(lotInfo) {
    var self = this;

    self.code = lotInfo.code;
    self.aliquotList = lotInfo.aliquotList;
    self.shipmentDate = lotInfo.shipmentDate;
    self.processingDate = lotInfo.processingDate;
    self.operator = lotInfo.operator;

    self.toJSON = toJSON;

    function toJSON() {
       var json = {
          code: self.code
       };

       return json;
    }

  }
}());
