(function () {
  'use strict';

  angular
    .module('otusjs.user.permission')
    .service('otusjs.user.permission.PermissionMapper', Service);

  Service.$inject = ['otusjs.user.permission.SurveyGroupPermissionFactory'];

  function Service(SurveyGroupPermissionFactory) {
    var self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      switch (permissionJson.objectType) {
        case "SurveyGroupPermission":
          return SurveyGroupPermissionFactory.create(permissionJson, userEmail);
        default:
          throw Error("Undefined object type"); //todo rewrite
      }
    }

  }


}());