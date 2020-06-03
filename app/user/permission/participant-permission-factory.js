(function () {
  'use strict';

  angular
    .module("otusjs.user.permission")
    .factory("otusjs.user.permission.ParticipantPermissionFactory", Factory);

  function Factory() {
    let self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      return new ParticipantPermission(permissionJson, userEmail);
    }

    return self;

    function ParticipantPermission(permissionJson, userEmail) {
      let self = this;
      let _email = userEmail || permissionJson.email;

      self.objectType = "ParticipantPermission";
      self.participantListAccess = permissionJson.participantListAccess || false;
      self.participantCreateAccess = permissionJson.participantCreateAccess || false;
      self.anonymousParticipantAccess = permissionJson.anonymousParticipantAccess || false;

      self.toJSON = toJSON;

      function toJSON() {
        let json = {};

        json.objectType = self.objectType;
        json.email = _email;
        json.participantListAccess = self.participantListAccess;
        json.participantCreateAccess = self.participantCreateAccess;
        json.anonymousParticipantAccess = self.anonymousParticipantAccess;

        return json;
      }


      return self;
    }

  }

}());
