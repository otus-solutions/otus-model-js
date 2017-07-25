(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.ParticipantLaboratoryFactory', factory);

  factory.$inject = [
    'otusjs.laboratory.ParticipanTubeFactory',
    'otusjs.laboratory.LaboratoryConfigurationService'
   ];

  function factory(ParticipanTubeFactory, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(labParticipant, labConfig, loggedUser, selectedParticipant) {
      return new ParticipantLaboratory(ParticipanTubeFactory, LaboratoryConfigurationService, labParticipant, labConfig, loggedUser, selectedParticipant);
    }

    function fromJson(labParticipant, labConfig, loggedUser, selectedParticipant) {
      return new ParticipantLaboratory(ParticipanTubeFactory, LaboratoryConfigurationService, JSON.parse(labParticipant), labConfig, loggedUser, selectedParticipant);
    }
    return self;

  }

  function ParticipantLaboratory(ParticipanTubeFactory, LaboratoryConfigurationService, labParticipant, labConfig, loggedUser, selectedParticipant) {
    var self = this;
    var _backupJSON;


    self.objectType = labParticipant.objectType || 'ParticipantLaboratory';
    self.recruitmentNumber = labParticipant.recruitmentNumber;
    self.collectGroupName = labParticipant.collectGroupName; //CQ

    //tube handling
    self.tubes = [];
    self.exams = labParticipant.exams; //not in use yet

    self.reloadTubeList = reloadTubeList;
    self.updateTubeList = updateTubeList;
    self.toJSON = toJSON;

    onInit();

    function onInit() {
      _backupJSON = angular.copy(labParticipant);
      LaboratoryConfigurationService.initialize(labConfig, selectedParticipant, self.collectGroupName);
      _tubeHandling();
    }

    function _tubeHandling() {
      self.tubes = ParticipanTubeFactory.buildFromArray(labParticipant.tubes, loggedUser);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        recruitmentNumber: self.recruitmentNumber,
        collectGroupName: self.collectGroupName,
        tubes: self.tubes,
        exams: self.exams
      };

      return JSON.stringify(json);
    }

    function reloadTubeList() {
      delete self.tubes;
      self.tubes = ParticipanTubeFactory.buildFromArray(angular.copy(_backupJSON.tubes), loggedUser);
    }

    function updateTubeList() {
      delete _backupJSON.tubes;
      _backupJSON.tubes = angular.copy(self.tubes);
    }
  }


}());
