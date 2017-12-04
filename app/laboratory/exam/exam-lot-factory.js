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
    self.examType = lotInfo.examType || '';
    self.fieldCenter = lotInfo.fieldCenter || '';
    self.aliquotList = WorkAliquot.fromJson(lotInfo.aliquotList);
    self.currentDate = lotInfo.currentDate || new Date();
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
        examType: self.examType,
        fieldCenter: self.fieldCenter,
        currentDate: self.currentDate,
        operator: self.operator,
        aliquotList: self.aliquotList
      };

      return json;
    }
  }
}());
