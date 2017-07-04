(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.ParticipantLaboratoryFactory', factory);

  factory.$inject = [
    'otusjs.laboratory.ParticipanTubeFactory',
    'otusjs.laboratory.AliquotManagerFactory',
    'otusjs.laboratory.LaboratoryConfigurationService'
   ];

  function factory(ParticipanTubeFactory, AliquotManagetFactory, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(labParticipant, labConfig, loggedUser, selectedParticipant) {
      return new ParticipantLaboratory(ParticipanTubeFactory, AliquotManagetFactory, LaboratoryConfigurationService, labParticipant, labConfig, loggedUser, selectedParticipant);
    }
    function fromJson(labParticipant, labConfig, loggedUser, selectedParticipant) {
      return new ParticipantLaboratory(ParticipanTubeFactory, AliquotManagetFactory, LaboratoryConfigurationService, JSON.parse(labParticipant), labConfig, loggedUser, selectedParticipant);
    }
    return self;

  }

  function ParticipantLaboratory(ParticipanTubeFactory, AliquotManagetFactory, LaboratoryConfigurationService, labParticipant, labConfig, loggedUser, selectedParticipant) {
    var self = this;
    var _backupJSON;

    onInit();

    self.objectType = 'ParticipantLaboratory';
    self.recruitmentNumber = labParticipant.recruitmentNumber;
    self.collectGroupName = labParticipant.collectGroupName;

    //tube handling
    self.tubes = ParticipanTubeFactory.buildFromArray(labParticipant.tubes, labConfig, loggedUser);
    AliquotManagetFactory.initialize(self.tubes);
    self.exams = labParticipant.exams;

    self.reloadTubeList = reloadTubeList;
    self.updateTubeList = updateTubeList;
    self.toJSON = toJSON;


    function onInit() {
      console.log(selectedParticipant);
      LaboratoryConfigurationService.initialize(labConfig, selectedParticipant);
      _backupJSON = angular.copy(labParticipant);
    }

    function toJSON() {
      var json = {
        recruitmentNumber: self.recruitmentNumber,
        collectGroupName: self.collectGroupName,
        tubes: self.tubes,
        exams: self.exams
      };

      return JSON.stringify(json);
    }

    function reloadTubeList() {
      delete self.tubes;
      self.tubes = ParticipanTubeFactory.buildFromArray(angular.copy(_backupJSON.tubes), labConfig, loggedUser);
    }

    function updateTubeList(){
      delete _backupJSON.tubes;
      _backupJSON.tubes = angular.copy(self.tubes);
   }
  }


}());
