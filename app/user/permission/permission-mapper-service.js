(function () {
  'use strict';

  angular
    .module('otusjs.user.permission')
    .service('otusjs.user.permission.PermissionMapper', Service);

  Service.$inject = [
    'otusjs.user.permission.SurveyGroupPermissionFactory',
    'otusjs.user.permission.LaboratoryPermissionFactory',
    'otusjs.user.permission.ActivityPermissionFactory',
    'otusjs.user.permission.MonitoringPermissionFactory',
    'otusjs.user.permission.ParticipantPermissionFactory'
  ];

  function Service(SurveyGroupPermissionFactory, LaboratoryPermissionFactory, ActivityPermissionFactory, MonitoringPermissionFactory, ParticipantPermissionFactory) {
    var self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      switch (permissionJson.objectType) {
        case "SurveyGroupPermission":
          return SurveyGroupPermissionFactory.create(permissionJson, userEmail);

        case "LaboratoryPermission":
          return LaboratoryPermissionFactory.create(permissionJson, userEmail);

        case "ActivityPermission":
          return ActivityPermissionFactory.create(permissionJson, userEmail);

        case "ParticipantPermission":
          return ParticipantPermissionFactory.create(permissionJson, userEmail);

        case "MonitoringPermission":
          return MonitoringPermissionFactory.create(permissionJson, userEmail);

        default:
          throw Error("Undefined object type");
      }
    }

  }


}());
