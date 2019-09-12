(function () {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationTrackerFactory', Factory);

  Factory.$inject = [
    'otusjs.model.navigation.NavigationTrackingItemFactory'
  ];

  function Factory(NavigationTrackingItemFactory) {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    /**
     * Creates a NavigationTracker. A NavigationTracker must have at least one item to track.
     * @param {array} itemsToTrack - the items that will be tracked
     * @returns {NavigationTracker}
     * @throws An error when no items are passed as parameter
     * @memberof NavigationTrackerFactory
     */
    function create(itemsToTrack, startIndex) {
      var validatedData = _applyPolicies(itemsToTrack, startIndex);
      var trackingItems = validatedData.itemsToTrack.map(_toNavigationTrackingItems);
      trackingItems.push(_buildEngNodeTrackingItem(trackingItems.length));
      return new NavigationTracker(trackingItems, validatedData.startIndex);
    }

    function fromJsonObject(jsonObject) {
      return create(jsonObject.items, jsonObject.lastVisitedIndex);
    }

    // TODO: Move these methods to another object
    function _applyPolicies(itemsToTrack, startIndex) {
      _applyAtLeastOneItemToTrackPolicy(itemsToTrack);

      try {
        _applyValidStartIndexPolicy(startIndex, itemsToTrack.length - 1);
      } catch (error) {
        startIndex = null;
      }

      return {
        itemsToTrack: itemsToTrack,
        startIndex: startIndex
      };
    }

    function _applyAtLeastOneItemToTrackPolicy(itemsToTrack) {
      if (!itemsToTrack || !itemsToTrack.length) {
        throw new Error('No item to track is detected.', 'navigation-tracker-factory.js', 51);
      }
    }

    function _applyValidStartIndexPolicy(value, maxIndex) {
      if (!value || isNaN(value) || value < 0 || maxIndex < value) {
        throw new Error('An invalid start index has passed to NavigationTracker.', 'navigation-tracker-factory.js', 57);
      }
    }

    function _toNavigationTrackingItems(itemToTrack, index) {
      var item = {};
      item.index = index;
      item.id = itemToTrack.id || itemToTrack.origin;
      item.state = itemToTrack.state;
      item.previous = itemToTrack.previous;
      item.inputs = itemToTrack.inputs || _buildInputs(itemToTrack);
      item.outputs = itemToTrack.outputs || _buildOutputs(itemToTrack);
      return NavigationTrackingItemFactory.create(item);
    }

    function _buildEngNodeTrackingItem(index) {
      return _toNavigationTrackingItems({
        id: "END NODE",
      }, index);
    }

    function _buildInputs(itemToTrack) {
      if (itemToTrack.inNavigations) {
        return itemToTrack.inNavigations
          .filter(function (navigation) {
            return navigation.origin !== 'BEGIN NODE';
          })
          .map(function (navigation) {
            return navigation.origin;
          });
      } else {
        return [];
      }
    }

    function _buildOutputs(itemToTrack) {
      if (itemToTrack.inNavigations) {
        return itemToTrack.listRoutes()
          .filter(function (route) {
            return route.getDestination() !== 'END NODE';
          })
          .map(function (route) {
            return route.getDestination();
          });
      } else {
        return [];
      }
    }

    return self;
  }

  function NavigationTracker(items, startIndex) {
    var self = this;
    var _objectType = 'NavigationTracker';
    var _currentItemGroup = [];
    var _currentItemGroupLength = 0;
    var _items = null;
    var _size = 0;

    /* Public methods */
    self.getObjectType = getObjectType;
    self.getItems = getItems;
    self.getCurrentItemGroup = getCurrentItemGroup;
    self.getCurrentIndex = getCurrentIndex;
    self.getItemCount = getItemCount;
    self.getSkippedItems = getSkippedItems;
    self.visitGroup = visitGroup;
    self.updateCurrentGroup = updateCurrentGroup;
    self.hasPreviousItem = hasPreviousItem;
    self.toJSON = toJSON;

    (function constructor() {
      _items = _createNavigationTrackingItemContainer(items);
      _size = items.length;
    }());

    function _createNavigationTrackingItemContainer(items) {
      var container = {};

      items.forEach(function (item, index) {
        container[item.getID()] = item;
      });

      return container;
    }

    /**
     * Returns the object type of instance.
     * @returns {String}
     * @memberof NavigationTracker
     */
    function getObjectType() {
      return _objectType;
    }

    /**
     * Returns all items that are on tracking.
     * @returns {Map}
     * @memberof NavigationTracker
     */
    function getItems() {
      return _items;
    }

    /**
     * Returns the item being visited.
     * @returns {NavigationTrackingItem}
     * @memberof NavigationTracker
     */
    function getCurrentItemGroup() {
      return _currentItemGroup;
    }

    /**
     * Returns the index of item being visited.
     * @returns {Integer}
     * @memberof NavigationTracker
     */
    function getCurrentIndex() {
      if (_currentItemGroupLength) {
        return _currentItemGroup[_currentItemGroupLength - 1].getIndex();
      } else {
        return null;
      }
    }

    /**
     * Returns count of all items on tracking.
     * @returns {Integer}
     * @memberof NavigationTracker
     */
    function getItemCount() {
      return _size;
    }

    /**
     * Returns all items that are currently skipped.
     * @returns {Array}
     * @memberof NavigationTracker
     */
    function getSkippedItems() {
      var skippedItems = [];

      for (var itemID in _items) {
        if (_items[itemID].isSkipped()) {
          skippedItems.push(_items[itemID]);
        }
      }

      return skippedItems;
    }

    /**
     * @memberof NavigationTracker
     */
    function visitGroup(idsToVisit) {
      if (_isMovingForward(idsToVisit)) {
        _setCurrentAsPrevious(idsToVisit);
        _move(idsToVisit);
        // _resolveJumps(); //todo
      } else {
        _move(idsToVisit);
      }
    }

    /**
     * @memberof NavigationTracker
     */
    function updateCurrentGroup(itemsFilling) {
      _currentItemGroup.forEach(item => {
        let itemFilling = itemsFilling[item.getID()];
        if (itemFilling && itemFilling.isFilled) {
          if (itemFilling.isFilled()) {
            item.setAsAnswered();
          } else if (itemFilling.isIgnored()) {
            item.setAsIgnored();
          }
        }

      });
    }

    function hasPreviousItem() {
      if (!_currentItemGroupLength) {
        return false;
      } else {
        return _currentItemGroup[0].getIndex() > 0;
      }
    }

    /**
     * Returns the representation of instance in JSON format.
     * @returns {JSON}
     * @memberof NavigationTracker
     */
    function toJSON() {
      var json = {};

      json.objectType = _objectType;

      if (_currentItemGroupLength) {
        json.lastVisitedIndex = _currentItemGroup[_currentItemGroupLength -1].getIndex();
      } else {
        json.lastVisitedIndex = null;
      }

      json.items = [];
      Object.keys(_items).forEach(function (itemID) {
        if (itemID !== "END NODE") {
          json.items.push(_items[itemID]);
        }
      });

      return json;
    }

    function _isMovingForward(idsToVisit) {
      if (!_currentItemGroupLength) {
        return true;
      }

      return (_currentItemGroup[_currentItemGroupLength - 1].getIndex() < _items[idsToVisit].getIndex());
    }

    function _move(idsToVisit) {
      _currentItemGroup = idsToVisit.map(idToVisit => {
        _items[idToVisit].setAsVisited();
        return _items[idToVisit]
      });
      _currentItemGroupLength = _currentItemGroup.length;
    }

    function _setCurrentAsPrevious(idsToVisit) {
      if (_currentItemGroupLength) {
        idsToVisit.forEach(id => {
          _items[id].setPrevious(_currentItemGroup[_currentItemGroupLength - 1].getID());
        });
      }
    }

    //---------------------------------------------------------------------------------------------
    // Skipping service
    //---------------------------------------------------------------------------------------------
    function _resolveJumps() {
      if (_existsSiblings()) {
        _skipUnreachableSiblings();
      }
    }

    function _existsSiblings() {
      if (!_currentItemGroup[0].getPrevious()) {
        return false;
      }

      return _items[_currentItemGroup[0].getPrevious()].getOutputs() !== 1;
    }

    function _skipUnreachableSiblings() {
      let previousItemId = _currentItemGroup[0].getPrevious();
      _items[previousItemId]
        .getOutputs()
        .forEach(function (siblingID) {
          if (!_isItemReachable(siblingID)) {
            _skipItem(siblingID);
            _tryPropagateSkip(siblingID);
          }
        });
    }

    function _isItemReachable(itemID) {
      if (_currentItemGroup.getID() === itemID) {
        return true;
      }
      return _currentItemGroup.getOutputs().some(function (outputID) {
        return outputID === itemID;
      });
    }

    function _tryPropagateSkip(skipedID) {
      _items[skipedID].getOutputs().forEach(function (outputID) {
        if (_isNotCurrentItem(outputID) && _isNotChildOfCurrentItem(outputID) && _isNotChildOfOriginItem(outputID)) {
          if (!_isOnPathOf(_currentItemGroup.getID(), outputID, skipedID)) {
            _skipItem(outputID);
            _tryPropagateSkip(outputID);
          }
        }
      });
    }

    function _isNotCurrentItem(itemID) {
      return _currentItemGroup.getID() !== itemID;
    }

    function _isNotChildOfCurrentItem(itemID) {
      return _currentItemGroup.getOutputs().indexOf !== itemID;
    }

    function _isNotChildOfOriginItem(itemID) {
      return _items[_currentItemGroup.getPrevious()].getOutputs().indexOf(itemID) === -1;
    }

    function _isOnPathOf(referenceID, idToTest, idToIgnore) {
      // If idToTest not comes after of the referenceID... is out of the way
      if (_items[idToTest].getIndex() <= _items[referenceID].getIndex()) {
        return false;
      }

      // If idToTest has direct access to referenceID... is on the way
      if (_items[idToTest].getInputs().indexOf(referenceID) !== -1) {
        return true;
      }

      // Verify if some input of idToTest is on the path of referenceID
      return _items[idToTest].getInputs().some(function (inputID) {
        if (idToIgnore !== inputID) {
          return _isOnPathOf(referenceID, inputID);
        }
      });
    }

    function _skipItem(itemID) {
      _items[itemID].setAsSkipped();
    }
  }
}());
