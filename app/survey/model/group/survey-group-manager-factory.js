(function () {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('otusjs.survey.GroupManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.survey.GroupFactory'
  ];

  function Factory(GroupFactory) {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(groupList) {
      return new SurveyGroupManager(GroupFactory, groupList);
    }


    return self;
  }

  function SurveyGroupManager(GroupFactory, groups) {
    let self = this;
    let groupStructure = _buildGroupStructure(groups);

    self.objectType = 'SurveyGroupManager';

    /* Public methods */
    self.createGroup = createGroup;
    self.getGroup = getGroup;
    self.getGroupList = getGroupList;
    self.getGroupNames = getGroupNames;
    self.getGroupSurveys = getGroupSurveys;
    self.getSurveyGroups = getSurveyGroups;
    self.toJSON = toJSON;

    function createGroup(name, surveys) {
      if (getGroup(name)) {
        throw new Error("Group already exists");
      }
      let group = GroupFactory.create(name, surveys);
      groupStructure[name] = group;
      return group;
    }

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
