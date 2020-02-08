(function () {
  'use strict';

  angular
    .module('otusjs.model.outcome')
    .factory('otusjs.model.outcome.ActivityAutoFillEventFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new ActivityAutoFillEvent( {});
    }

    function fromJson(json) {
      return new ActivityAutoFillEvent(json)
    }

    function fromArray(jsonObjects) {
      if (Array.isArray(jsonObjects)) {
        return jsonObjects.map(function (json) {
          return new ActivityAutoFillEvent(json);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ActivityAutoFillEvent(JsonObject) {
    var self = this;

    self._id = JsonObject._id || null;
    self.objectType = "ActivityAutoFillEvent";
    self.icon = "home_work";
    self.name = JsonObject.name || '';
    self.order = JsonObject.order;
    self.acronym = JsonObject.acronym || '';
    self.activityId = JsonObject.activityId || '';
    self.description = JsonObject.description || '';
    self.participantEvents = JsonObject.participantEvents || [];

    self.toJSON = toJSON;

    function toJSON() {
      let json = {};

      json._id = self._id;
      json.objectType = self.objectType;
      json.name = self.name;
      json.order = self.order;
      json.acronym = self.acronym;
      json.activityId = self.activityId;
      json.description = self.description;

      return json;
    }

    return self;
  }


}());