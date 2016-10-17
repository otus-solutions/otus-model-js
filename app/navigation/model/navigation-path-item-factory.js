(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.NavigationPathItemFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(options) {
      return new NavigationStackItem(options);
    }

    return self;
  }

  function NavigationStackItem(options) {
    var self = this;

    var _id = options.id;
    var _label = options.label || '';
    var _type = options.type;
    var _answer = options.answer;
    var _metadata = options.metadata;

    var _previous = null;
    var _next = null;

    /* Public methods */
    self.getID = getID;
    self.getLabel = getLabel;
    self.getType = getType;
    self.getAnswer = getAnswer;
    self.getMetadata = getMetadata;
    self.getNext = getNext;
    self.setNext = setNext;
    self.getPrevious = getPrevious;
    self.setPrevious = setPrevious;

    function getID() {
      return _id;
    }

    function getLabel() {
      return _label;
    }

    function getType() {
      return _type;
    }

    function getAnswer() {
      return _answer;
    }

    function getMetadata() {
      return _metadata;
    }

    function getNext() {
      return _next;
    }

    function setNext(item) {
      return _next = item;
    }

    function getPrevious() {
      return _previous;
    }

    function setPrevious(item) {
      return _previous = item;
    }
  }
}());
