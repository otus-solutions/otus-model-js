(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationContainerService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationFactory'
  ];

  function service(NavigationFactory) {
    var self = this;
    var _navigationList = []; // TODO: To implement Immutable collection

    /* Public methods */
    self.init = init;
    self.loadJsonData = loadJsonData;
    self.manageNavigation = manageNavigation;
    self.getNavigationByOrigin = getNavigationByOrigin;
    self.getNavigationByPosition = getNavigationByPosition;
    self.getNavigationPosition = getNavigationPosition;
    self.getNavigationList = getNavigationList;
    self.getNavigationListSize = getNavigationListSize;
    self.getOrphanNavigations = getOrphanNavigations;
    self.existsNavigationTo = existsNavigationTo;
    self.createNavigationTo = createNavigationTo;
    self.removeNavigationOf = removeNavigationOf;
    self.removeNavigationByIndex = removeNavigationByIndex;
    self.removeCurrentLastNavigation = removeCurrentLastNavigation;
    self.setInitialNodes = setInitialNodes;
    self.getPreviousOf = getPreviousOf;

    function init() {
      _navigationList = [];
    }

    function loadJsonData(data) {
      _navigationList = _navigationList.slice(0, 2);
      data.forEach(function(navigationData) {
         console.log(navigationData.inNavigations);
        var inNavigations = navigationData.inNavigations.map(function(inNavigation) {
          return getNavigationByOrigin(inNavigation.origin);
        });
        _navigationList.push(NavigationFactory.fromJson(navigationData, inNavigations));
      });
    }

    function manageNavigation(navigationToManage) {
      _navigationList = navigationToManage;
    }

    function getNavigationList() {
      return _navigationList;
    }

    function getNavigationListSize() {
      return _navigationList.length;
    }

    function getNavigationByOrigin(origin) {
      var filter = _navigationList.filter(function(navigation) {
        return findByOrigin(navigation, origin);
      });

      return filter[0];
    }

    function getPreviousOf(index) {
      return getNavigationByPosition(index - 1);
    }

    function getNavigationByPosition(position) {
      return _navigationList[position];
    }

    function getNavigationPosition(origin) {
      var navigation = getNavigationByOrigin(origin);
      if (navigation) {
        return _navigationList.indexOf(navigation);
      } else {
        return null;
      }
    }

    function getOrphanNavigations() {
      var orphans = _navigationList.filter(function(navigation) {
        return navigation.isOrphan();
      });

      return orphans;
    }

    function existsNavigationTo(origin) {
      return (getNavigationByOrigin(origin)) ? true : false;
    }

    function createNavigationTo(origin, destination) {
      var newNavigation = NavigationFactory.create(origin, destination);
      newNavigation.index = _navigationList.length;
      _addElementsPreviousTheNavigation(newNavigation);
      //updateFinalIns();   //TODO
      _navigationList.push(newNavigation);
      return newNavigation;
    }

    function setInitialNodes(origin, destination) {
      var beginNavigation = NavigationFactory.createInitial('BEGIN NODE', 'END NODE');
      var endNavigation = NavigationFactory.createInitial('END NODE', 'BEGIN NODE');

      _navigationList.unshift(endNavigation);
      _navigationList.unshift(beginNavigation);
    }

    function _addElementsPreviousTheNavigation(navigation) {
      if (_navigationList.length) {
        var previous = _navigationList[_navigationList.length - 1];
        navigation.addInNavigation(previous);
      }
    }

    function removeNavigationOf(questionID) {
      var navigationToRemove = _navigationList.filter(function(navigation) {
        return findByOrigin(navigation, questionID);
      });
      removeCurrentLastNavigationndexOf(navigationToRemove[0]);
      if (indexToRemove > -1) {
        _navigationList.splice(indexToRemove, 1);
      }
    }

    function removeNavigationByIndex(indexToRemove) {
      _navigationList.splice(indexToRemove, 1);
    }

    function removeCurrentLastNavigation() {
      _navigationList.splice(-1, 1);
    }

    /* Private methods */
    function findByOrigin(navigation, questionID) {
      return navigation.origin === questionID;
    }
  }
}());
