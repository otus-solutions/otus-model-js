(function () {
  'use strict';

  angular
    .module("otusjs.user.permission")
    .factory("otusjs.user.permission.MonitoringPermissionFactory", Factory);

  function Factory() {
    let self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      return new MonitoringPermission(permissionJson, userEmail);
    }

    return self;

    function MonitoringPermission(permissionJson, userEmail) {
      let self = this;
      let _email = userEmail || permissionJson.email;

      self.objectType = "MonitoringPermission";
      self.centerActivitiesAccess = permissionJson.centerActivitiesAccess || false;
      self.activityFlagsAccess = permissionJson.activityFlagsAccess || false;
      self.laboratoryFlagsAccess = permissionJson.laboratoryFlagsAccess || false;
      self.laboratoryControlAccess = permissionJson.laboratoryControlAccess || false;
      self.pendencyVisualizerAccess = permissionJson.pendencyVisualizerAccess || false;

      self.toJSON = toJSON;

      function toJSON() {
        let json = {};

        json.objectType = self.objectType;
        json.email = _email;
        json.centerActivitiesAccess = self.centerActivitiesAccess;
        json.activityFlagsAccess = self.activityFlagsAccess;
        json.laboratoryFlagsAccess = self.laboratoryFlagsAccess;
        json.laboratoryControlAccess = self.laboratoryControlAccess;
        json.pendencyVisualizerAccess = self.pendencyVisualizerAccess;

        return json;
      }


      return self;
    }

  }

}());
