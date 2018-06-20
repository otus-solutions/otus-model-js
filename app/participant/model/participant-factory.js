(function () {
  'use strict';

  angular
    .module('otusjs.model.participant')
    .factory('otusjs.model.participant.ParticipantFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(participant) {
      return new Participant(participant);
    }

    return self;
  }

  function Participant(participant) {
    var self = this;

    self.objectType = 'Participant';
    self.recruitmentNumber = participant.recruitmentNumber;
    self.name = participant.name;
    self.sex = participant.sex;
    self.birthdate = participant.birthdate;
    self.fieldCenter = participant.fieldCenter;
    self.late = participant.late;

    /* Public methods */
    self.toJson = toJson;

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.recruitmentNumber = self.recruitmentNumber;
      json.name = self.name;
      json.sex = self.sex;
      json.birthdate = self.birthdate;
      json.fieldCenter = self.fieldCenter;
      json.late = self.late;

      return JSON.stringify(json);
    }
  }

}());
