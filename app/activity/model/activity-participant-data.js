(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityParticipantDataFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'ActivityParticipantData';

    /* Public methods */
    self.create = create;

    function create(participant) {
      return new ActivityParticipantData(participant);
    }

    return self;
  }

  function ActivityParticipantData(participant) {
    var self = this;

    self.objectType = 'ActivityParticipantData';
    self.recruitmentNumber = participant.recruitmentNumber;
    self.name = participant.name;
    self.fieldCenter = participant.fieldCenter;

    /* Public methods */
    self.toJson = toJson;

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.recruitmentNumber = self.recruitmentNumber;
      json.name = self.name;
      json.fieldCenter = self.fieldCenter;

      return JSON.stringify(json);
    }
  }

}());
