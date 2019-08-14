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

    self.getGroupCandidates = getGroupCandidates;
    self.createGroup = createGroup;

    function loadJsonData(groupsArray) {
      _groups = groupsArray;
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

    function createGroup(members) {
      validateGroupMembers(members);

      let group = SurveyItemGroupFactory.create();
      _groups.push(group);
    }

    function validateGroupMembers(members) {
      let candidates = chainGroup(members[0], []);
      members.forEach(member => {
        if (!candidates.includes(member)) {
          throw new Error(member + ' cannot be added to the group');
        }
      });
    }

    function getGroupCandidates(startingPointID) {
      //gets id, returns every id that can be grouped with
      let navigation = _navigationContainer.getNavigationByOrigin(startingPointID);

      if (_allowedAsFirstMember(navigation)) {
        return chainGroup(navigation.routes[0].destination, []);
      } else {
        return [];
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
      return !isEndNode(navigation) && !_hasMultipleOutRoute(navigation);
    }

    function _allowedAsLastMember(navigation) {
      return !_hasMultipleInNavigations(navigation);
    }

    function _allowedAsMiddleMember(navigation) {
      return !_hasMultipleOutRoute(navigation) && !_hasMultipleInNavigations(navigation);
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

    //todo: move to navigation factory
    function isEndNode(navigation) {
      return navigation.origin === "END NODE";
    }

    //todo: move to navigation factory
    function _hasMultipleInNavigations(navigation) {
      let inNavigations = navigation.inNavigations.filter(nav => {
        return nav && nav.origin !== 'NULL NAVIGATION';
      });

      return inNavigations.length > 1;
    }

    //todo: move to navigation factory
    function _hasMultipleOutRoute(navigation) {
      let routes = navigation.routes;
      return routes.length > 1;
    }

    let groups = [
      {
        name: 'group 1',
        items: [
          {
            id: "CSJ1",
            position: 'start'
          },
          {
            id: "CSJ2",
            position: 'end'
          }
        ]
      },
      {
        name: 'group 2',
        items: [
          {
            id: "CSJ3",
            position: 'start'
          },
          {
            id: "CSJ4",
            position: 'middle'
          },
          {
            id: "CSJ5",
            position: 'end'
          }
        ]
      },
      { // todo: answer: is this possible? wanted?
        name: 'group 3',
        items: [
          {
            id: "CSJ7",
            position: 'middle'
          },
          {
            id: "CSJ8",
            position: 'end'
          },
          {
            id: "CSJ6",
            position: 'start'
          }
        ]
      }
    ]


  }
}());
