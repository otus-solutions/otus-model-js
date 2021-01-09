(function () {
  'use strict';

  angular
    .module('otusjs.model.participant')
    .factory('otusjs.model.participant.ParticipantContactAttemptFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;

    function create(attemptData) {
      return new ParticipantContactAttempt(attemptData);
    }

    function fromJson(attemptData) {
      return new ParticipantContactAttempt(attemptData);
    }

    return self;
  }

  function ParticipantContactAttempt(contactType, attemptData) {
    var self = this;
    self.objectType = attemptData.objectType ? attemptData.objectType : "";
    self._id = attemptData._id ? attemptData._id : "";
    self.recruitmentNumber = attemptData.recruitmentNumber ? attemptData.recruitmentNumber : "";
    self.address = attemptData.address ? attemptData.address : "";
    self.attemptStatus = attemptData.attemptStatus ? attemptData.attemptStatus : "";
    self.attemptDateTime = attemptData.attemptDateTime ? attemptData.attemptDateTime : "";
    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json._id = self._id;
      json.recruitmentNumber = self.recruitmentNumber;
      json.address = self.address;
      json.attemptStatus = self.attemptStatus;
      json.attemptDateTime = self.attemptDateTime;

      return json;
    }

    return self;
  }

}());