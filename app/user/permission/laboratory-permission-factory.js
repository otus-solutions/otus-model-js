(function () {
  'use strict';

  angular
    .module("otusjs.user.permission")
    .factory("otusjs.user.permission.LaboratoryPermissionFactory", Factory);

  function Factory() {
    let self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      return new LaboratoryPermission(permissionJson, userEmail);
    }

    return self;

    function LaboratoryPermission(permissionJson, userEmail) {
      let self = this;
      let _email = userEmail || permissionJson.email;

      self.objectType = "LaboratoryPermission";
      self.access = permissionJson.access || false;


      self.toJSON = toJSON;

      function toJSON() {
        let json = {};

        json.objectType = self.objectType;
        json.email = _email;
        json.access = self.access;

        return json;
      }


      return self;
    }

  }

}());
