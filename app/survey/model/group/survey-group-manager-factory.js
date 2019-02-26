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
    self.getGroupList = getGroupList;
    self.getGroupNames = getGroupNames;
    self.getGroupSurveys = getGroupSurveys;
    self.getSurveyGroups = getSurveyGroups;
    self.toJSON = toJSON;

    //should create a new group and add it to structure
    function createGroup(name, surveys) {
      if (groupStructure.getName()) {
        throw new Error("Group already exists");
      }
      let group = GroupFactory.create(name, surveys);
      groupStructure[name] = group;
      return group;
    }

    //should return grouplist
    function getGroupList() {
      return Object.values(groupStructure);
    }

    function getGroupNames() {
      return Object.keys(groupStructure);
    }

    //should return the groups survey array
    function getGroupSurveys(name) {
      let found = groupStructure[name];
      if (found) {
        return found.getSurveys();
      }

      return []; //todo: should this throw error?
    }

    //given survey, get groups in which is present
    function getSurveyGroups(surveyAcronym) {
      return getGroupList().filter(group => {
        return group.getSurveys().includes(surveyAcronym)
      });
    }

    function toJSON() {
      return getGroupList();
    }

    function _buildGroupStructure(groups) {
      let json = {};

      groups.forEach(jsonGroup => {
        let group = new GroupFactory(jsonGroup);
        json[group.getName()] = group;
      });

      return json;
    }
  }

}());
