(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam')
    .factory('otusjs.laboratory.exam.ExamLotFactory', Factory);

  Factory.$inject = [
    'otusjs.laboratory.WorkAliquotFactory',
    'otusjs.laboratory.configuration.LaboratoryConfigurationService'
  ];

  function Factory(WorkAliquot, LaboratoryConfigurationService) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamLot(WorkAliquot, LaboratoryConfigurationService, {});
    }

    function fromJson(lotInfo) {
      return new ExamLot(WorkAliquot, LaboratoryConfigurationService, lotInfo);
    }

    return self;
  }

  function ExamLot(WorkAliquot, LaboratoryConfigurationService, lotInfo) {
    var self = this;
    var _aliquotDescriptor;

    self.objectType = 'ExamLot';
    self.code = lotInfo.code || '';
    self.aliquotName = lotInfo.aliquotName || '';
    self.aliquotLabel = lotInfo.aliquotLabel || '';
    self.fieldCenter = lotInfo.fieldCenter || '';
    self.aliquotList = WorkAliquot.fromJson(lotInfo.aliquotList);
    self.realizationDate = lotInfo.realizationDate || new Date();
    self.operator = lotInfo.operator || '';

    self.setAliquotName = setAliquotName;
    self.insertAliquot = insertAliquot;
    self.removeAliquotByIndex = removeAliquotByIndex;
    self.getAliquotsToCsv = getAliquotsToCsv;

    self.toJSON = toJSON;



    onInit();

    function onInit() {
      _updateAliquotLabel();
    }

    function _updateAliquotLabel(){
      if(self.aliquotName.length) {
        _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(self.aliquotName);
        self.aliquotLabel = _aliquotDescriptor.label;
      }
    }

    function setAliquotName(aliquotName) {
      self.aliquotName = aliquotName;
      _updateAliquotLabel();
    }

    function insertAliquot(aliquotInfo) {
      var newAliquot = WorkAliquot.create(aliquotInfo);
      self.aliquotList.push(newAliquot);
      return newAliquot;
    }

    function removeAliquotByIndex(index) {
      return self.aliquotList.splice(index, 1);
    }

    function getAliquotsToCsv() {
      return self.aliquotList.map(function (aliquot) {
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
