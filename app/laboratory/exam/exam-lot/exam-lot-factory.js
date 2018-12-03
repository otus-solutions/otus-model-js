(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam')
    .factory('otusjs.laboratory.exam.ExamLotFactory', Factory);

  Factory.$inject = [
    '$filter',
    'otusjs.laboratory.configuration.LaboratoryConfigurationService'
  ];

  function Factory($filter, LaboratoryConfigurationService) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamLot($filter, LaboratoryConfigurationService, {});
    }

    function fromJson(lotInfo) {
      return new ExamLot($filter, LaboratoryConfigurationService, lotInfo);
    }

    return self;
  }

  function ExamLot($filter,LaboratoryConfigurationService, lotInfo) {
    var self = this;
    var _aliquotDescriptor;

    self.objectType = 'ExamLot';
    self._id = lotInfo._id || '';
    self.code = lotInfo.code || '';
    self.aliquotName = lotInfo.aliquotName || '';
    self.aliquotList = lotInfo.aliquotList || null;
    self.aliquotLabel = lotInfo.aliquotLabel || '';
    self.fieldCenter = lotInfo.fieldCenter || '';
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
      _fixAliquots();
    }

    function _fixAliquots() {
      if(self.aliquotList){
        if(self.aliquotList.length > 0){
          self.aliquotList.map(aliquot => {
            aliquot.label = self.aliquotLabel;
            aliquot.containerLabel = aliquot.container.toUpperCase() === "CRYOTUBE" ? "Criotubo" : "Palheta";
            aliquot.roleLabel = aliquot.role.toUpperCase() === "EXAM" ? "Exame" : "Armazenamento";
          })
        }
      }
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


    function insertAliquot(aliquot) {
      self.aliquotList.push(aliquot);
      return aliquot;
    }

    function removeAliquotByIndex(index) {
      return self.aliquotList.splice(index, 1);
    }

    function getAliquotsToCsv(){
      return self.aliquotList.map(function (aliquot) {
        let formattedDate = $filter('date')(new Date(aliquot.birthdate.value), 'dd/MM/yyyy');

        return {
          aliquota: aliquot.code,
          sexo: aliquot.sex,
          nascimento: formattedDate
        };
      });
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        _id: self._id,
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
