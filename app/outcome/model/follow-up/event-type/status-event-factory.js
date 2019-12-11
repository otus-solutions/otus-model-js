(function () {
  'use strict';

  angular
    .module('otusjs.model.outcome')
    .factory('otusjs.model.outcome.StatusEventFactory', Factory);

  Factory.$inject = [];

  function Factory() {
    var self = this;


    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new StatusEvent({});
    }

    function fromJson(json) {
      return new StatusEvent(json);
    }

    return self;
  }

  function StatusEvent(JsonObject) {
    var self = this;

    const STATUS = ["WAITING", "STARTED", "FINALIZED", "ABORTED"];

    self._id = JsonObject._id;
    self.objectType = "StatusEvent";
    self.label = JsonObject.label || "WAITING";
    self.statusDate = JsonObject.statusDate || new Date().toISOString();

    self.toJSON = toJSON;
    self.wait = wait;
    self.start = start;
    self.finish = finish;
    self.abort = abort;

    function wait() {
      self.label = "WAITING";
      self.statusDate = new Date().toISOString();
    }

    function start() {
      self.label = "PENDING";
      self.statusDate = new Date().toISOString();
    }

    function finish() {
      self.label = "FINALIZED";
      self.statusDate = new Date().toISOString();
    }

    function abort() {
      self.label = "ABORTED";
      self.statusDate = new Date().toISOString();
    }

    function toJSON() {
      let json = {};

      json.objectType = self.objectType;
      json.label = self.label;
      json.statusDate = self.statusDate;

      return json;
    }

    return self;
  }


}());