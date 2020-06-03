(function () {
  'use strict';

  angular
    .module("otusjs.user.permission")
    .factory("otusjs.user.permission.ActivityPermissionFactory", Factory);

  function Factory() {
    let self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      return new ActivityPermission(permissionJson, userEmail);
    }

    return self;

    function ActivityPermission(permissionJson, userEmail) {
      let self = this;
      let _email = userEmail || permissionJson.email;

      self.objectType = "ActivityPermission";
      self.participantActivityAccess = permissionJson.participantActivityAccess || false;

      self.toJSON = toJSON;

      function toJSON() {
        let json = {};

        json.objectType = self.objectType;
        json.email = _email;
        json.participantActivityAccess = self.participantActivityAccess;

        return json;
      }


      return self;
    }

  }

}());
