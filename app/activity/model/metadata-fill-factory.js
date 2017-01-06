(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.MetadataFillFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'MetadataFill';

    /* Public methods */
    self.create = create;

    function create(value) {
      return new MetadataFill(value);
    }

    return self;
  }

  function MetadataFill(value) {
    var self = this;

    self.objectType = 'MetadataFill';
    self.value = (value === undefined) ? null : value;

    /* Public methods */
    self.isFilled = isFilled;
    self.clear = clear;
    self.toJson = toJson;

    function isFilled() {
      return (self.value !== null) ? true : false;
    }

    function clear() {
      self.value = null;
    }

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.value = self.value;

      return JSON.stringify(json);
    }
  }

}());
