(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationContainerFactory', Factory);

  Factory.$inject = [
    'otusjs.model.navigation.NavigationFactory'
  ];

  function Factory(NavigationFactory) {
    var self = this;

    self.create = create;

    function create() {
      return new NavigationContainer(NavigationFactory);
    }

    return self;
  }

  function NavigationContainer(NavigationFactory) {
    var self = this;
    var _navigationList = [];

    /* Public methods */
    self.resetData = resetData;
    self.loadJsonData = loadJsonData;
    self.manageNavigation = manageNavigation;
    self.getNavigationByOrigin = getNavigationByOrigin;
    self.getNavigationByPosition = getNavigationByPosition;
    self.getNavigationPosition = getNavigationPosition;
    self.getNavigationPositionByOrigin = getNavigationPositionByOrigin;
    self.getNavigationList = getNavigationList;
    self.getNavigationListSize = getNavigationListSize;
    self.getOrphanNavigations = getOrphanNavigations;
    self.getLastNavigation = getLastNavigation;
    self.existsNavigationTo = existsNavigationTo;
    self.createNavigationTo = createNavigationTo;
    self.removeNavigationOf = removeNavigationOf;
    self.removeNavigationByIndex = removeNavigationByIndex;
    self.removeCurrentLastNavigation = removeCurrentLastNavigation;
    self.setInitialNodes = setInitialNodes;
    self.getPreviousOf = getPreviousOf;
    self.getEmptyNavigation = getEmptyNavigation;

    function resetData() {
      _navigationList = [];
    }

    function loadJsonData(jsonData) {
      resetData();
      // assumes previous load
      var navMap = _loadNavigations(jsonData);

      /* FIX IN NAVIGATIONS */
      var nullNavigation = NavigationFactory.createNullNavigation();
      _navigationList.forEach(function(navigation) {
        var replacer = [];
        navigation.inNavigations.forEach(function(inNav) {
          if (inNav && inNav.origin in navMap) {
            replacer.push(navMap[inNav.origin]);
          }else {
            replacer.push(nullNavigation);
          }
        });
        navigation.inNavigations = replacer.slice();
      });
    }

    function _loadNavigations(jsonData) {
      var navMap = {};
      var navigation;
      jsonData.forEach(function(newNavigation) {
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
      return filter[0];
    }

    function getEmptyNavigation(indexToRemove) {
      _navigationList[indexToRemove].routes = [];
      return _navigationList[indexToRemove];
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

    function getLastNavigation() {
      if (getNavigationListSize() === 2) {
        return getNavigationByPosition(0);
      } else {
        return getNavigationByPosition(getNavigationList().length - 1);
      }
    }

    function existsNavigationTo(origin) {
      return (getNavigationByOrigin(origin)) ? true : false;
    }

    function createNavigationTo(origin) {
      var newNavigation = NavigationFactory.create(origin);
      newNavigation.index = _navigationList.length;
      _navigationList.push(newNavigation);
      return newNavigation;
    }

    function setInitialNodes() {
      var beginNavigation = NavigationFactory.createInitial('BEGIN NODE', 'END NODE');
      var endNavigation = NavigationFactory.createInitial('END NODE', 'BEGIN NODE');

      _navigationList.unshift(endNavigation);
      _navigationList.unshift(beginNavigation);
    }

    function removeNavigationOf(questionID) {
      var navigationToRemove = _navigationList.filter(function(navigation) {
        return findByOrigin(navigation, questionID);
      });
      var indexToRemove = _navigationList.indexOf(navigationToRemove[0]);
      if (indexToRemove > -1) {
        _navigationList.splice(indexToRemove, 1);
        _removeFromInNavigations(indexToRemove, navigationToRemove[0]);
      }
    }

    function _removeFromInNavigations(indexToRemove, navigationToRemove) {
      var nullNavigation = NavigationFactory.createNullNavigation();
      var endNodeIndex = _navigationList[1].inNavigations.indexOf(navigationToRemove);
      if (endNodeIndex > -1) {
        _navigationList[1].inNavigations[endNodeIndex] = nullNavigation;
      }
      for (var i = indexToRemove; i < _navigationList.length; i++) {
        var inIndex = _navigationList[i].inNavigations.indexOf(navigationToRemove);
        if(inIndex > -1){
          _navigationList[i].inNavigations[inIndex] = nullNavigation;
        }
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
