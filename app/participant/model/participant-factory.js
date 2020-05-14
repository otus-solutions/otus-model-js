(function () {
  'use strict';

  angular
    .module('otusjs.model.participant')
    .factory('otusjs.model.participant.ParticipantFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new Participant({});
    }
    function fromJson(json) {
      return new Participant(json)
    }

    function fromArray(jsonObjects) {
      if (Array.isArray(jsonObjects)) {
        return jsonObjects.map(function (json) {
          return new Participant(json).toJSON();
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function Participant(participant) {
    var self = this;

    self.objectType = 'Participant';
    self.recruitmentNumber = participant.recruitmentNumber || "";
    self.name = participant.name || "";
    self.sex = participant.sex || "";
    self.birthdate = participant.birthdate || "";
    self.fieldCenter = participant.fieldCenter || {};
    self.email = participant.email || "";
    self.password = participant.password || "";
    self.registeredBy = participant.registeredBy;
    self.late = participant.late || false;
    self.identified = participant.identified;

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.recruitmentNumber = self.recruitmentNumber;
      if (self.name) json.name = self.name;
      if (self.sex) json.sex = self.sex;
      if (self.birthdate) json.birthdate = self.birthdate;
      if (self.email) json.email = self.email;
      json.fieldCenter = self.fieldCenter;
      json.late = self.late;
      json.identified = self.identified || !!(self.name && self.sex && self.birthdate);

      return json;
    }

    return self;
  }

}());
