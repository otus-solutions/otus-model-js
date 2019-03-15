(function () {
  'use strict';

  angular
    .module('otusjs.user.permission')
    .factory('otusjs.user.permission.SurveyGroupPermissionFactory', Factory);

  function Factory() {
    let self = this;

    self.create = create;

    function create(permissionJson) {
      return new SurveyGroupPermission(permissionJson);
    }

    return self;

    function SurveyGroupPermission(permissionJson) {
      let self = this;

      self.objectType = permissionJson.objectType;
      self.email = permissionJson.email;
      self.groups = permissionJson.groups;

      return self;
    }

  }

}());
