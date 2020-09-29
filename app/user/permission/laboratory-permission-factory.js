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
      self.participantLaboratoryAccess = permissionJson.participantLaboratoryAccess || false;
      self.sampleTransportationAccess = permissionJson.sampleTransportationAccess || false;
      self.examLotsAccess = permissionJson.examLotsAccess || false;
      self.examSendingAccess = permissionJson.examSendingAccess || false;
      self.unattachedLaboratoriesAccess = permissionJson.unattachedLaboratoriesAccess || false;
      self.laboratoryMaterialManagerAccess = permissionJson.laboratoryMaterialManagerAccess || false;

      self.toJSON = toJSON;

      function toJSON() {
        let json = {};

        json.objectType = self.objectType;
        json.email = _email;
        json.participantLaboratoryAccess = self.participantLaboratoryAccess;
        json.sampleTransportationAccess = self.sampleTransportationAccess;
        json.examLotsAccess = self.examLotsAccess;
        json.examSendingAccess = self.examSendingAccess;
        json.unattachedLaboratoriesAccess = self.unattachedLaboratoriesAccess;
        json.laboratoryMaterialManagerAccess = self.laboratoryMaterialManagerAccess;

        return json;
      }


      return self;
    }

  }

}());
