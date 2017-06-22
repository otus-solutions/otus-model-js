(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationTrackingItemFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(options) {
      return new NavigationTrackingItem(options);
    }

    function fromJsonObject(jsonObject) {
      return new NavigationTrackingItem(jsonObject);
    }

    return self;
  }

  function NavigationTrackingItem(options) {
    var self = this;

    var ANSWERED = 'ANSWERED';
    var SKIPPED = 'SKIPPED';
    var NOT_VISITED = 'NOT_VISITED';
    var VISITED = 'VISITED';
    var IGNORED = 'IGNORED';

    var _objectType = 'NavigationTrackingItem';
    var _id = options.id;
    var _index = options.index;
    var _state = options.state || NOT_VISITED;
    var _previous = options.previous || null;
    var _inputs = options.inputs || [];
    var _outputs = options.outputs || [];

    /* Public methods */
    self.getObjectType = getObjectType;
    self.getID = getID;
    self.getIndex = getIndex;
    self.getState = getState;
    self.getPrevious = getPrevious;
    self.setPrevious = setPrevious;
    self.getInputs = getInputs;
    self.getOutputs = getOutputs;
    self.setAsVisited = setAsVisited;
    self.setAsAnswered = setAsAnswered;
    self.setAsIgnored = setAsIgnored;
    self.setAsSkipped = setAsSkipped;
    self.isAnswered = isAnswered;
    self.isIgnored = isIgnored;
    self.isSkipped = isSkipped;
    self.toJson = toJson;

    /**
     * Returns the object type of instance.
     * @returns {String}
     * @memberof NavigationTrackingItem
     */
    function getObjectType() {
      return _objectType;
    }

    function getID() {
      return _id;
    }

    function getIndex() {
      return _index;
    }

    function getState() {
      return _state;
    }

    function getPrevious() {
      return _previous;
    }

    function setPrevious(item) {
      _previous = item;
    }

    function getInputs() {
      return _inputs;
    }

    function getOutputs() {
      return _outputs;
    }

    function setAsVisited() {
      _state = VISITED;
    }

    function setAsAnswered() {
      _state = ANSWERED;
    }

    function setAsIgnored() {
      _state = IGNORED;
    }

    function setAsSkipped() {
      _state = SKIPPED;
      _previous = null;
    }

    function isAnswered() {
      return (_state === ANSWERED) ? true : false;
    }

    function isIgnored() {
      return (_state === IGNORED) ? true : false;
    }

    function isSkipped() {
      return (_state === SKIPPED) ? true : false;
    }

    function toJson() {
      var json = {};

      json.objectType = _objectType;
      json.id = _id;
      json.index = _index;
      json.state = _state;
      json.previous = _previous;
      json.inputs = _inputs;
      json.outputs = _outputs;

      return json;
    }
  }
}());
