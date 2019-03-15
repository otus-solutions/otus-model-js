(function () {
  'use strict';

  angular
    .module('otusjs.user.permission')
    .factory('otusjs.user.permission.PermissionManagerFactory', Factory);

  Factory.$inject = [];

  function Factory(GroupFactory) {
    var self = this;

    /* Public methods */
    self.create = create;


    let UserPermissions = [
      {
        "_id" : ObjectId("5c8be4998a1a6b6f60cef893"),
        "objectType" : "SurveyGroupPermission",
        "groups" : [
          "G1",
          "G2"
        ]
      },
      {
        "_id" : ObjectId("5c8be4998a1a6b6f60cef893"),
        "objectType" : "LaboratoryPermission",
        value:false
      }
    ];

    let SurveyGroupPermission = {
      "_id" : "5c8be4998a1a6b6f60cef893",
      "objectType" : "SurveyGroupPermission",
      "groups" : [
        "G1",
        "G2"
      ]
    };


    function create() {
      return new UserPermissionManager();
    }


    return self;
  }


  function UserPermissionManager(permissions) {
    let self = this;
    let groupStructure = [];

    self.objectType = 'UserPermissionManager';

    /* Public methods */



    function _resolvePermissions(permissions) {

    }

  }

  function SurveyGroupPermission(permissioJson) {
    var self = this;


    self.objectType = "SurveyGroupPermission";

    return self;
  }


  //this should be a service!
  function PermissionMapper(permissionJson) {
    let map = {
      "SurveyGroupPermission": SurveyGroupPermissionFactory;
    }

    let objectType = "SurveyGroupPermission";

    switch (permissionJson.objectType) {
      case "SurveyGroupPermission":
        return SurveyGroupPermissionFactory;
        break;

      default:
        throw Error("undefined object type"); //todo rewrite
    }
  }


}());
