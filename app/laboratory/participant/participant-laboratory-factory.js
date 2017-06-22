(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.ParticipantLaboratoryFactory', factory);

  factory.$inject = [
    'otusjs.laboratory.ParticipanTubeFactory'
   ];

  function factory(ParticipanTubeFactory) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(labParticipant, labConfig, loggedUser) {
      return new ParticipantLaboratory(ParticipanTubeFactory, labParticipant, labConfig, loggedUser);
    }
    function fromJson(labParticipant, labConfig, loggedUser) {
      return new ParticipantLaboratory(ParticipanTubeFactory, JSON.parse(labParticipant), labConfig, loggedUser);
    }
    return self;

  }

  function ParticipantLaboratory(ParticipanTubeFactory, labParticipant, labConfig, loggedUser) {
    var self = this;
    var _backupJSON;

    onInit();

    self.objectType = 'ParticipantLaboratory';
    self.recruitmentNumber = labParticipant.recruitmentNumber;
    self.collectGroupName = labParticipant.collectGroupName;
    self.tubes = ParticipanTubeFactory.buildFromArray(labParticipant.tubes, labConfig, loggedUser);
    self.exams = labParticipant.exams;

    self.reloadTubeList = reloadTubeList;
    self.updateTubeList = updateTubeList;
    self.toJSON = toJSON;


    function onInit() {
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
