(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .factory('otusjs.laboratory.transportation.LotFactory', factory);

  factory.$inject = [
    'otusjs.laboratory.WorkAliquotFactory'
  ];

  function factory(WorkAliquot) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new TransportationLot(WorkAliquot, {});
    }

    function fromJson(lotInfo) {
      return new TransportationLot(WorkAliquot, lotInfo);
    }

    return self;
  }

  function TransportationLot(WorkAliquot, lotInfo) {
    var self = this;

    self.objectType = 'TransportationLot';
    self.code = lotInfo.code || '';
    self.fieldCenter = lotInfo.fieldCenter || '';
    self.aliquotList = WorkAliquot.fromJson(lotInfo.aliquotList);
    self.shipmentDate = lotInfo.shipmentDate || '';
    self.processingDate = lotInfo.processingDate || '';
    self.operator = lotInfo.operator || '';

    self.insertAliquot = insertAliquot;
    self.removeAliquotByIndex = removeAliquotByIndex;

    self.toJSON = toJSON;


    function insertAliquot(aliquotInfo) {
      var newAliquot = WorkAliquot.create(aliquotInfo);
      self.aliquotList.push(newAliquot);
      return newAliquot;
    }

    function removeAliquotByIndex(index) {
      return self.aliquotList.splice(index, 1);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        fieldCenter: self.fieldCenter,
        shipmentDate: self.shipmentDate,
        processingDate: self.processingDate,
        operator: self.operator,
        aliquotList: self.aliquotList
      };

      return json;
    }
  }
}());
