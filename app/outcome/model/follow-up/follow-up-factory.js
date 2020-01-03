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
    self.windowBetween = JsonObject.windowBetween || null;
    self.time = JsonObject.time || null;
    self.events = Array.isArray(JsonObject.events) ? JsonObject.events.map(function (item) {
      return Model[item.objectType].create()
    }) : [];

    self.addEvent = addEvent;
    self.removeEvent = removeEvent;
    self.toJSON = toJSON;

    function addEvent(objectTypeEvent, data) {
      if (data){
        self.events.push(Model[objectTypeEvent].fromJson(data));
      } else {

        self.events.push(Model[objectTypeEvent].create());
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
      json.windowBetween = self.windowBetween;
      json.time = self.time;
      json.events = self.events;

      return json;
    }

    return self;
  }


}());