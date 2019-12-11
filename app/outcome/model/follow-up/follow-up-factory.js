(function () {
  'use strict';

  angular
    .module('otusjs.model.outcome')
    .factory('otusjs.model.outcome.FollowUpFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new FollowUp({});
    }

    function fromJson(json) {
      return new FollowUp(json);
    }

    function fromArray(jsonObjects) {
      if (Array.isArray(jsonObjects)) {
        return jsonObjects.map(function (json) {
          return new FollowUp(json);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function FollowUp(JsonObject) {
    var self = this;
    self._id = JsonObject._id;
    self.objectType = "FollowUp";
    self.label = JsonObject.label || '';
    self.time = JsonObject.time || null;
    self.initialDate = JsonObject.initialDate || null;
    self.events = JsonObject.events || [];

    self.addEvent = addEvent;
    self.removeEvent = removeEvent;
    self.start = start;
    self.setTime = setTime;
    self.getFinalDate = getFinalDate;
    self.toJSON = toJSON;

    function setTime(time) {
      if (typeof time === "number"){
        self.time = angular.copy(Number(time));
      }
    }

    function start() {
      if (self.time) {
        var _data = new Date();
        _data.setHours(0, 0, 0, 0);
        self.initialDate = _data.toISOString();
        return true;
      } else {
        return false;
      }
    }

    function getFinalDate() {
      if (self.initialDate && self.time) {
        var _data = new Date(self.initialDate);
        _data.setDate(_data.getDate() + self.time);
        return _data.toISOString();
      }
      return null;
    }


    function addEvent(eventFollow) {
      self.events.push(eventFollow)
    }

    function removeEvent(eventFollow) {
      var _index = self.events.indexOf(eventFollow);
      if (_index > -1) {
        self.events.splice(_index, 1);
      }
    }

    function toJSON() {
      let json = {};

      json._id = self._id;
      json.objectType = self.objectType;
      json.label = self.label;
      json.time = self.time;
      json.initialDate = self.initialDate;
      json.events = self.events;

      return json;
    }

    return self;
  }


}());