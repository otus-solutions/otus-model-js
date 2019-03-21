(function () {
  'use strict';

  angular
    .module("otusjs.user.permission")
    .factory("otusjs.user.permission.SurveyGroupPermissionFactory", Factory);

  function Factory() {
    let self = this;

    self.create = create;

    function create(permissionJson, userEmail) {
      return new SurveyGroupPermission(permissionJson, userEmail);
    }

    return self;

    function SurveyGroupPermission(permissionJson, userEmail) {
      let self = this;
      let _email = userEmail || permissionJson.email;

      self.objectType = "SurveyGroupPermission";
      self.groups = permissionJson.groups || [];

      /* Public Methods */
      self.addGroup = addGroup;
      self.removeGroupByName = removeGroupByName;
      self.removeGroupByPosition = removeGroupByPosition;
      self.toJSON = toJSON;

      function addGroup(groupName) {
        self.groups.push(groupName);
      }

      function removeGroupByName(groupName) {
        let index = self.groups.indexOf(groupName);
        removeGroupByPosition(index);
        return self;
      }

      function removeGroupByPosition(index) {
        if (index === -1) {
          throw new Error("Group not found");
        }
        self.groups.splice(index, 1);

        return self;
      }

      function toJSON() {
        let json = {};
        json.objectType = self.objectType;
        json.email = _email;
        json.groups = self.groups;

        return json;
      }


      return self;
    }

  }

}());
