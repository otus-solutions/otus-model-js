(function () {
  'use strict';

  angular
    .module('otusjs.surveyItemGroup')
    .service('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.surveyItemGroup.SurveyItemGroupFactory'
  ];


  function Factory(SurveyItemGroupFactory) {
    var self = this;

    self.create = create;

    function create() {
      return new SurveyItemGroupManager(SurveyItemGroupFactory);
    }

    return self;
  }

  function SurveyItemGroupManager(SurveyItemGroupFactory) {
    var self = this;
    var _groups = [];
    var _surveyItemContainer;
    var _navigationContainer;

    /* Public interface */
    self.loadJsonData = loadJsonData;
    self.setNavigationContainer = setNavigationContainer;
    self.setSurveyItemContainer = setSurveyItemContainer;
    self.getSurveyItemGroupList = getSurveyItemGroupList;
    self.getGroupByStart = getGroupByStart;

    self.getGroupCandidates = getGroupCandidates;
    self.isGroupMember = isGroupMember;
    self.createGroup = createGroup;

    function loadJsonData(groupsArray) {
      _groups = groupsArray || [];
    }

    function setNavigationContainer(container) {
      _navigationContainer = container;
    }

    function setSurveyItemContainer(container) {
      _surveyItemContainer = container;
    }

    function getSurveyItemGroupList() {
      return _groups;
    }

    function getGroupByStart(startName) {
      return _groups.find(group => {
        return group.start === startName;
      });
    }

    function createGroup(members) {
      validateGroupMembers(members);

      let group = SurveyItemGroupFactory.create(members);
      _groups.push(group);
      return group;
    }

    function validateGroupMembers(members) {
      if(members.length < 2) {
        throw new Error('Groups should be composed of more than one member');
      }

      let candidates = getGroupCandidates(members[0], []);

      members.forEach((member, ix) => {
        if (candidates[ix] !== member) {
          throw new Error(member + ' cannot be added to the group');
        }
      });
    }

    function getGroupCandidates(startingPointID) {
      //gets id, returns every id that can be grouped with
      let navigation = _navigationContainer.getNavigationByOrigin(startingPointID);

      if (_allowedAsFirstMember(navigation)) {
        return chainGroup(navigation.routes[0].destination, [startingPointID]);
      } else {
        return [startingPointID];
      }
    }

    function chainGroup(origin, candidatesChain) {
      let navigation = _navigationContainer.getNavigationByOrigin(origin);

      if (isGroupMember(origin)) {
        return candidatesChain;
      }

      if (_allowedAsMiddleMember(navigation)) {
        candidatesChain.push(origin);
        return chainGroup(navigation.routes[0].destination, candidatesChain);
      }

      if (_allowedAsLastMember(navigation)) {
        candidatesChain.push(origin);
        return candidatesChain;
      }

      return candidatesChain;
    }

    function _allowedAsFirstMember(navigation) {
      return !navigation.isEndNode(navigation) &&
              !navigation.hasMultipleOutRoutes(navigation);
    }

    function _allowedAsLastMember(navigation) {
      return !navigation.isEndNode(navigation) &&
            !navigation.hasMultipleInNavigations(navigation);
    }

    function _allowedAsMiddleMember(navigation) {
      return !navigation.hasMultipleOutRoutes(navigation) &&
        !navigation.isEndNode(navigation) &&
              !navigation.hasMultipleInNavigations(navigation);
    }

    function isGroupMember(id) {
      let alreadyMember = false;

      for (let group of _groups) {
        alreadyMember = group.items.find(item => {
          return item.id === id;
        });

        if (alreadyMember) {
          break;
        }
      }

      return alreadyMember;
    }

  }
}());
