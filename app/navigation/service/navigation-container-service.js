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
    self.getEmptyNavigation = getEmptyNavigation;

    function init() {
      _navigationList = [];
      console.log(' set []');
    }

    function loadJsonData(jsonData) {
      init();
      // assumes previous load
      console.log(jsonData);
      console.log(_navigationList);
      var navMap = _loadNavigations(jsonData);
      var inNavMap = _getInNavigationsMap(jsonData);
      console.log(navMap);
      console.log(inNavMap);
    }

    function _getInNavigationsMap(jsonData) {
      var inNavigationsMap = {};
      jsonData.forEach(function(navigationJson) {
        navigationJson.inNavigations.forEach(function(inNavigation) {
          if (inNavigation in inNavigationsMap) {
            inNavigationsMap[inNavigation.origin].append(navigationJson.origin);
          } else {
            inNavigationsMap[inNavigation.origin] = navigationJson.origin;
          }
        });
      });
      return inNavigationsMap;
    }

    function _loadNavigations(jsonData) {
      var navMap = {};
      var navigation;
      jsonData.forEach(function(newNavigation){
        navigation = NavigationFactory.fromJson(newNavigation);
        _navigationList.push(navigation);
        navMap[navigation.origin] = navigation;
      });
      return navMap;
    }

    function getNavigationByOrigin(origin) {
      var filter = _navigationList.filter(function(navigation) {
        return findByOrigin(navigation, origin);
      });
      console.log(filter);

      return filter[0];
    }

    // function findByOrigin(navigation, questionID) {
    //   return navigation.origin === questionID;
    // }

    function getEmptyNavigation(indexToRemove) {
      _navigationList[indexToRemove].routes = [];
      return _navigationList[indexToRemove];
    }

    function manageNavigation(navigationToManage) {
      _navigationList = navigationToManage;
      console.log('set to navigationToManage');
    }

    function getNavigationList() {
      return _navigationList;
    }

    function getNavigationListSize() {
      return _navigationList.length;
    }


    function getPreviousOf(index) {
      if (index === 2) {
        index = 1;
      }
      return getNavigationByPosition(index - 1);
    }

    function getNavigationByPosition(position) {
      return _navigationList[position];
    }

    function getNavigationPosition(navigation) {
      if (navigation) {
        return _navigationList.indexOf(navigation);
      } else {
        return null;
      }
    }

    function getNavigationPositionByOrigin(origin) {
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

    function createNavigationTo(origin) {
      var newNavigation = NavigationFactory.create(origin);
      newNavigation.index = _navigationList.length;
      // _addElementsPreviousTheNavigation(newNavigation);
      //updateFinalIns();   //TODO
      _navigationList.push(newNavigation);
      console.log('alterou');
      return newNavigation;
    }

    function setInitialNodes() {
      var beginNavigation = NavigationFactory.createInitial('BEGIN NODE', 'END NODE');
      var endNavigation = NavigationFactory.createInitial('END NODE', 'BEGIN NODE');

      _navigationList.unshift(endNavigation);
      _navigationList.unshift(beginNavigation);
      console.log('alterou');
    }

    //  function _addElementsPreviousTheNavigation(navigation) {
    //    if (_navigationList.length) {
    //      var previous = _navigationList[_navigationList.length - 1];
    //      navigation.addInNavigation(previous);
    //    }
    //  }

    function removeNavigationOf(questionID) {
      var navigationToRemove = _navigationList.filter(function(navigation) {
        return findByOrigin(navigation, questionID);
      });
      var indexToRemove = _navigationList.indexOf(navigationToRemove[0]);
      if (indexToRemove > -1) {
        _navigationList.splice(indexToRemove, 1);
        console.log('removeNavigationOf');
      }
    }

    function removeNavigationByIndex(indexToRemove) {
      _navigationList.splice(indexToRemove, 1);
      console.log('alterou');
    }

    function removeCurrentLastNavigation() {
      _navigationList.splice(-1, 1);
      console.log('alterou');
    }

    /* Private methods */
    function findByOrigin(navigation, questionID) {
      return navigation.origin === questionID;
    }
  }
}());
