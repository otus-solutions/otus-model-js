(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.exam')
    .factory('otusjs.laboratory.exam.ExamLotFactory', Factory);

  Factory.$inject = [
    'otusjs.laboratory.WorkAliquotFactory'
  ];

  function Factory(WorkAliquot) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamLot(WorkAliquot, {});
    }

    function fromJson(lotInfo) {
      return new ExamLot(WorkAliquot, lotInfo);
    }

    return self;
  }

  function ExamLot(WorkAliquot, lotInfo) {
    var self = this;

    self.objectType = 'ExamLot';
    self.code = lotInfo.code || '';
    self.aliquotName = lotInfo.aliquotName || '';
    self.fieldCenter = lotInfo.fieldCenter || '';
    self.aliquotList = WorkAliquot.fromJson(lotInfo.aliquotList);
    self.realizationDate = lotInfo.realizationDate || new Date();
    self.operator = lotInfo.operator || '';

    self.insertAliquot = insertAliquot;
    self.removeAliquotByIndex = removeAliquotByIndex;
    self.getAliquotsToCsv = getAliquotsToCsv;

    self.toJSON = toJSON;


    function insertAliquot(aliquotInfo) {
      var newAliquot = WorkAliquot.create(aliquotInfo);
      self.aliquotList.push(newAliquot);
      return newAliquot;
    }

    function removeAliquotByIndex(index) {
      return self.aliquotList.splice(index, 1);
    }

    function getAliquotsToCsv() {
      return self.aliquotList.map(function(aliquot){
        return aliquot.getAliquotToCsv();
      });
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        aliquotName: self.aliquotName,
        fieldCenter: self.fieldCenter,
        realizationDate: self.realizationDate,
        operator: self.operator,
        aliquotList: self.aliquotList
      };

      return json;
    }
  }
}());
