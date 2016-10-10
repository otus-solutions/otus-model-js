(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.MetadataFillFactory', MetadataFillFactory);

  function MetadataFillFactory() {
    let self = this;

    /* Public interface */
    self.create = create;

    function create(value) {
      return new MetadataFill(value);
    }

    return self;
  }

  function MetadataFill(value) {
    let self = this;

    self.objectType = 'MetadataFill';
    self.value = (value === undefined) ? null : value;

    /* Public methods */
    self.isFilled = isFilled;
    self.toJson = toJson;

    function isFilled() {
      return (self.value) ? true : false;
    }

    function toJson() {
      let json = {};

      json.objectType = self.objectType;
      json.value = self.value;

      return JSON.stringify(json);
    }
  }

}());
