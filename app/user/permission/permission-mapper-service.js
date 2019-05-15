(function () {
  'use strict';

  angular
    .module('otusjs.user.permission')
    .service('otusjs.user.permission.PermissionMapper', Service);

  Service.$inject = [
    'otusjs.user.permission.SurveyGroupPermissionFactory',
    'otusjs.user.permission.LaboratoryPermissionFactory'
  ];

  function Service(SurveyGroupPermissionFactory, LaboratoryPermissionFactory) {
    var self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      switch (permissionJson.objectType) {
        case "SurveyGroupPermission":
          return SurveyGroupPermissionFactory.create(permissionJson, userEmail);

        case "LaboratoryPermission":
          return LaboratoryPermissionFactory.create(permissionJson, userEmail);

        default:
          throw Error("Undefined object type");
      }
    }

  }


}());
