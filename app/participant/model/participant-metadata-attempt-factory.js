(function () {
  'use strict';

  angular
    .module('otusjs.model.participant')
    .factory('otusjs.model.participant.ParticipantMetadataAttemptFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;

    function create(attemptMetadata) {
      return new ParticipantMetadataAttempt(attemptMetadata);
    }

    function fromJson(attemptMetadata) {
      return new ParticipantMetadataAttempt(attemptMetadata);
    }

    return self;
  }

  function ParticipantMetadataAttempt(attemptMetadata) {
    var self = this;
    self.objectType = attemptMetadata.objectType ? attemptMetadata.objectType : "";
    self._id = attemptMetadata._id ? attemptMetadata._id : "";
    self.metadataOptions = attemptMetadata.metadataOptions ? attemptMetadata.metadataOptions : [];

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};
      json.objectType = self.objectType;
      json._id = self._id;
      json.metadataOptions = self.metadataOptions;

      return json;
    }

    return self;
  }

}());