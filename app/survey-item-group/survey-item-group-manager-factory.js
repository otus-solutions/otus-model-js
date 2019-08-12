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
    var _surveyItemManager;
    var _navigationManager;

    /* Public interface */
    self.loadJsonData = loadJsonData;
    self.setNavigationManager = setNavigationManager;
    self.setSurveyItemManager = setSurveyItemManager;
    self.getSurveyItemGroupList = getSurveyItemGroupList;

    self.getGroupCandidates = getGroupCandidates;

    function loadJsonData(groupsArray) {
      _groups = groupsArray;
    }

    function setNavigationManager(manager) {
      _navigationManager = manager;
    }

    function setSurveyItemManager(manager) {
      _surveyItemManager = manager;
    }

    function getSurveyItemGroupList() {
      return _groups;
    }

    function getGroupCandidates(startingPointID) {
      //getItemIndex
      //getCandidatesFromNavigationList
    }


    let groups = [
      {
        name:'group 1',
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
        name:'group 2',
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
        name:'group 3',
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
