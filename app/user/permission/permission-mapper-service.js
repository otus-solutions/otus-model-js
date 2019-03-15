(function () {
  'use strict';

  angular
    .module('otusjs.user.permission')
    .service('otusjs.user.permission.PermissionMapper', Service);

  Service.$inject = ['otusjs.user.permission.SurveyGroupPermissionFactory'];

  function Service(SurveyGroupPermissionFactory) {
    var self = this;

    self.resolve = resolve;

    function resolve(permissionJson) {
      switch (permissionJson.objectType) {
        case "SurveyGroupPermission":
          return SurveyGroupPermissionFactory.create(permissionJson);
          break;

        default:
          throw Error("undefined object type"); //todo rewrite
      }
    }



  }


}());