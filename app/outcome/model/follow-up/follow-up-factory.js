(function () {
  'use strict';

  angular
    .module('otusjs.model.outcome')
    .factory('otusjs.model.outcome.FollowUpFactory', Factory);

  Factory.$inject = [
    'otusjs.model.outcome.ActivityAutoFillEventFactory'
  ];

  function Factory(ActivityAutoFillEventFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    self.Model = {
      ActivityAutoFillEvent: ActivityAutoFillEventFactory
    };

    function create() {
      return new FollowUp({}, self.Model);
    }

    function fromJson(json) {
      return new FollowUp(json, self.Model);
    }

    function fromArray(jsonObjects) {
      if (Array.isArray(jsonObjects)) {
        return jsonObjects.map(function (json) {
          return new FollowUp(json, self.Model);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function FollowUp(JsonObject, Model) {
    var self = this;
    self._id = JsonObject._id;
    self.objectType = "FollowUp";
    self.label = JsonObject.label || '';
    self.order = JsonObject.order;
    self.windowBetween = JsonObject.windowBetween || null;
    self.time = JsonObject.time || null;
    self.events = Array.isArray(JsonObject.events) ? JsonObject.events.map(function (item) {
      return Model[item.objectType].create()
    }) : [];

    self.createEvent = createEvent;
    self.removeEvent = removeEvent;
    self.toJSON = toJSON;

    function createEvent(objectTypeEvent, data) {
      if (data && objectTypeEvent){
        return Model[objectTypeEvent].fromJson(data);
      } else {
        throw new Error('Insuficients parameters');
      }
    }

    function removeEvent(index) {
      self.events.splice(index, 1);
    }

    function toJSON() {
      let json = {};

      json._id = self._id;
      json.objectType = self.objectType;
      json.label = self.label;
      json.order = self.order;
      json.windowBetween = self.windowBetween;
      json.time = self.time;

      return json;
    }

    return self;
  }


}());