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


    let UserPermission = {

    };

    let ActivityGroupPermission = {};


    function create() {
      return new UserPermissionManager();
    }


    return self;
  }

  function ActivityGroupPermission(info) {
    var self = this;


    self.objectType = "ActivityGroupPermission"; // ||info.objectType todo: decide??


    return self;
  }


  //this should be a service?
  function PermissionMapper(permissionJson) {
    switch (permissionJson.objectType) {
      case "ActivityGroupPermission":
        break;

      default:
        throw Error("undefined object type"); //todo rewrite
    }
  }

  function UserPermissionManager(permissions) {
    let self = this;
    let groupStructure = _buildGroupStructure(permissions);

    self.objectType = 'UserPermissionManager';

    /* Public methods */
    self.getGroup = getGroup;
    self.getGroupList = getGroupList;
    self.getGroupNames = getGroupNames;
    self.getGroupSurveys = getGroupSurveys;
    self.getSurveyGroups = getSurveyGroups;
    self.toJSON = toJSON;

    function getGroupList() {
      return Object.values(groupStructure);
    }

    function getGroup(name) {
      return groupStructure[name];
    }

    function getGroupNames() {
      return Object.keys(groupStructure);
    }

    function getGroupSurveys(name) {
      let found = getGroup(name);
      if (!found) {
        throw new Error("Group not found");
      }
      return found.getSurveys();
    }

    function getSurveyGroups(surveyAcronym) {
      return getGroupList().filter(group => {
        return group.getSurveys().includes(surveyAcronym)
      }).map(group => group.getName());
    }

    function toJSON() {
      return self.getGroupList();
    }

    function _buildGroupStructure(groups) {
      let structure = {};


      if (groups) {
        groups.forEach(groupJson => {
          let group = GroupFactory.fromJson(groupJson);
          structure[group.getName()] = group;
        });
      }

      return structure;
    }
  }

}());
