(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.WorkAliquotFactory',
      factory);

  factory.$inject = [
    '$filter',
    'otusjs.laboratory.configuration.LaboratoryConfigurationService'
  ];

  function factory($filter, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(aliquotInfo) {
      return new WorkAliquot($filter, LaboratoryConfigurationService,
        aliquotInfo);
    }

    function fromJson(aliquotInfoArray) {
      if (Array.isArray(aliquotInfoArray)) {
        return aliquotInfoArray.map(function(aliquotInfo) {
          return new WorkAliquot($filter, LaboratoryConfigurationService,
            aliquotInfo);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function WorkAliquot($filter, LaboratoryConfigurationService, aliquotInfo) {
    var self = this;
    var _aliquotDescriptor;
    var _participantBirthdate = aliquotInfo.birthdate;
    var _participantSex = aliquotInfo.sex;
    var _participantRecruitmentNumber = aliquotInfo.recruitmentNumber;

    /* Public Interface*/
    self.objectType = aliquotInfo.objectType || 'WorkAliquot';
    self.name = aliquotInfo.name || '';
    self.role = aliquotInfo.role || '';
    self.code = aliquotInfo.code || '';
    self.container = aliquotInfo.container || '';
    self.fieldCenter = aliquotInfo.fieldCenter || '';
    self.aliquotCollectionData = aliquotInfo.aliquotCollectionData;

    self.label = aliquotInfo.label || '';
    self.containerLabel = aliquotInfo.containerLabel || '';
    self.roleLabel = aliquotInfo.roleLabel || '';

    self.toJSON = toJSON;
    self.getAliquotToCsv = getAliquotToCsv;

    self.hasError = false;

    onInit();

    function onInit() {
      _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(
        self.name);
      _runDescriptors(_aliquotDescriptor);
    }

    function _runDescriptors(aliquotDescriptor) {
      self.label = aliquotDescriptor.label;
      self.containerLabel = self.container.toUpperCase() === "CRYOTUBE" ? "Criotubo" : "Palheta";
      self.roleLabel = self.role.toUpperCase() === "EXAM" ? "Exame" : "Armazenamento";
    }

    function getAliquotToCsv(){
      var formattedDate = $filter('date')(new Date(_participantBirthdate.value), 'dd/MM/yyyy');
      
      return {
        aliquota: self.code,
        sexo: _participantSex,
        nascimento: formattedDate
      };
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        fieldCenter: self.fieldCenter,
        name: self.name,
        container: self.container,
        role: self.role,
        sex: _participantSex,
        birthdate: _participantBirthdate,
        recruitmentNumber: _participantRecruitmentNumber,
        aliquotCollectionData: self.aliquotCollectionData
      };
      return json;
    }
  }
}());
