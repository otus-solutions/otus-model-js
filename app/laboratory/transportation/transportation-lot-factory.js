(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .factory('otusjs.laboratory.transportation.LotFactory', factory);

  factory.$inject = [
      'otusjs.laboratory.transportation.TransportationAliquotFactory'
   ];

  function factory(TransportationAliquotFactory) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new TransportationLot({});
    }

    function fromJson(lotInfo) {
      return new TransportationLot(lotInfo);
    }

    return self;
  }

  function TransportationLot(lotInfo) {
    var self = this;

    self.code = lotInfo.code || '';
    self.aliquotList = lotInfo.aliquotList || [];
    self.shipmentDate = lotInfo.shipmentDate || '';
    self.processingDate = lotInfo.processingDate || '';
    self.operator = lotInfo.operator || '';

    self.insertAliquot = insertAliquot;
    self.removeAliquotByIndex = removeAliquotByIndex;

    self.toJSON = toJSON;


    function insertAliquot(aliquot) {
      self.aliquotList.push(aliquot);
    }

    function removeAliquotByIndex(index) {
      return self.aliquotList.splice(index, 1);
    }

    function toJSON() {
      var json = {
        code: self.code,
        shipmentDate: self.shipmentDate,
        processingDate: self.processingDate,
        operator: self.operator,
        aliquotList: self.aliquotList
      };

      return json;
    }
  }
}());
