(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationStackFactory', Factory);

  function Factory() {
    let self = this;

    /* Public methods */
    self.create = create;

    function create() {
      return new NavigationStack();
    }

    return self;
  }

  function NavigationStack() {
    let self = this;
    let _size = 0;
    let _head = null;
    let _tail = null;
    let _current = null;
    let _currentIndex = null;

    /* Public methods */
    self.add = add;
    self.ahead = ahead;
    self.back = back;
    self.getCurrentItem = getCurrentItem;
    self.getSize = getSize;

    function add(item) {
      if (!_head) {
        _head = item;
      } else {
        item.setPrevious(_current);
        _current.setNext(item);
      }

      if ( (_currentIndex < (_size - 1)) ){
        _size = _currentIndex + 2;
        ++_currentIndex;
      } else {
        ++_size;
        _currentIndex = _size - 1;
      }
      _current = item;
    }

    function ahead() {
      if (_current.getNext()) {
        _current = _current.getNext();
        ++_currentIndex;
      }
    }

    function back() {
      if (_current.getPrevious()) {
        _current = _current.getPrevious();
        --_currentIndex;
      }
    }

    function getCurrentItem() {
      return _current;
    }

    function getSize() {
      return _size;
    }
  }
}());
