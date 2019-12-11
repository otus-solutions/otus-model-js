(function () {
  'use strict';

  angular
    .module('otusjs.model.outcome')
    .factory('otusjs.model.outcome.ActivityAutoFillEventFactory', Factory);

  Factory.$inject = [
    'otusjs.model.outcome.StatusEventFactory'
  ];

  function Factory(StatusEventFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;
    self.fromArray = fromArray;

    function create() {
      return new ActivityAutoFillEvent(StatusEventFactory, {});
    }

    function fromJson(json) {
      return new ActivityAutoFillEvent(StatusEventFactory, json)
    }

    function fromArray(jsonObjects) {
      if (Array.isArray(jsonObjects)) {
        return jsonObjects.map(function (json) {
          return new ActivityAutoFillEvent(StatusEventFactory, json);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ActivityAutoFillEvent(StatusEventFactory, JsonObject) {
    var self = this;

    self._id = JsonObject._id || '';
    self.objectType = "ActivityAutoFillEvent";
    self.activityId = JsonObject.activityId || null;
    self.participant = JsonObject.participant || null;
    self.status = JsonObject.status ? StatusEventFactory.fromJson(JsonObject.status) : StatusEventFactory.create();

    self.setActivity = setActivity;
    self.getActivity = getActivity;
    self.setParticipant = setParticipant;
    self.getParticipant = getParticipant;
    self.toJSON = toJSON;

    function setActivity(id) {
      self.activityId = angular.copy(id);
    }

    function getActivity() {
      return angular.copy(self.activityId);
    }

    function setParticipant(rn) {
      self.participant = angular.copy(rn);
    }

    function getParticipant() {
      return angular.copy(self.participant);
    }

    function toJSON() {
      let json = {};

      json._id = self._id;
      json.objectType = self.objectType;
      json.activityId = self.activityId;
      json.participant = self.participant;
      json.status = self.status.toJSON();

      return json;
    }

    return self;
  }


}());