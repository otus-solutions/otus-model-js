(function () {
  'use strict';

  angular
    .module('otusjs.surveyItemGroup')
    .service('otusjs.surveyItemGroup.SurveyItemGroupManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.survey.ManagerCenterService',
    'otusjs.surveyItemGroup.SurveyItemGroupFactory'
  ];


  function Factory(ManagerCenterService, SurveyItemGroupFactory) {
    var self = this;

    self.create = create;

    function create() {
      return new SurveyItemGroupManager(ManagerCenterService, SurveyItemGroupFactory);
    }

    return self;
  }

  function SurveyItemGroupManager(ManagerCenterService, SurveyItemGroupFactory) {
    var self = this;
    var _groups = [];

    /* Public interface */
    self.loadJsonData = loadJsonData;
    self.allowItemMovement = allowItemMovement;
    self.removeItemFromGroup = removeItemFromGroup;

    self.getSurveyItemGroupList = getSurveyItemGroupList;
    self.getGroupByStart = getGroupByStart;
    self.getGroupByMember = getGroupByMember;

    self.createGroup = createGroup;
    self.deleteGroup = deleteGroup;
    self.getGroupCandidates = getGroupCandidates;

    function loadJsonData(groupsArray) {
      if (groupsArray) {
        _groups = groupsArray.map(groupJson => SurveyItemGroupFactory.fromJson(groupJson));
      } else {
        _groups = [];
      }
    }

    function allowItemMovement(item, position) {
      let lastItemInPosition = ManagerCenterService.getSurveyItemManager().getItemByPosition(position);
      let groupCheck = getGroupByMember(lastItemInPosition);

      if (groupCheck) {
        let member = groupCheck.getMember(lastItemInPosition.templateID);
        if (member) {
          if (member.position !== 'start') {
            throw new Error("Cannot move item to inside of an existing group");
          }
        }
      }
      removeItemFromGroup(item.templateID);

    }

    function removeItemFromGroup(templateID) {
      let group = getGroupByMember(templateID);
      if (group) {
        if (group && group.members.length <= 2) {
          deleteGroup(group.start);
        } else {
          group.removeMember(templateID);
        }
      }

    }

    function getSurveyItemGroupList() {
      return _groups;
    }

    function getGroupByStart(startName) {
      return _groups.find(group => {
        return group.start === startName;
      });
    }

    function getGroupByMember(id) {
      let alreadyMember;

      for (let group of _groups) {
        if (group.hasMember(id)) {
          alreadyMember = group;
          break;
        }
      }

      return alreadyMember;
    }


    function createGroup(members) {
      validateGroupMembers(members);

      let group = SurveyItemGroupFactory.create(members);
      let existentGroup = getGroupByStart(group.start);

      if (!existentGroup) {
        _groups.push(group);
      } else {
        existentGroup.rewrite(group);
      }

      return group;
    }


    function deleteGroup(start) {
      let ix = _groups.findIndex(group => {
        return group.start === start;
      });

      if (ix > -1) {
        _groups.splice(ix, 1);
        return true;
      }
    }

    function validateGroupMembers(members) {
      if (members.length < 2) {
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
      let navigation = ManagerCenterService.getNavigationManager().getNavigationByOrigin(startingPointID);
      let originalGroup = getGroupByMember(startingPointID);


      if (_allowedAsFirstMember(navigation)) {
        return chainGroupCandidates(originalGroup, navigation.getDefaultRoute().destination, [startingPointID]);
      } else {
        return [startingPointID];
      }
    }

    function chainGroupCandidates(originalGroup, origin, candidatesChain) {
      let navigation = ManagerCenterService.getNavigationManager().getNavigationByOrigin(origin);
      let group = getGroupByMember(origin);

      if (group) {
        if ((!originalGroup || originalGroup.start !== group.start)) {
          return candidatesChain;
        }
      }

      if (_allowedAsMiddleMember(navigation)) {
        candidatesChain.push(origin);
        return chainGroupCandidates(originalGroup, navigation.getDefaultRoute().destination, candidatesChain);
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

  }
}());
