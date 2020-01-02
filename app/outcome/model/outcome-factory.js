(function () {
  'use strict';

  angular
    .module('otusjs.model.outcome')
    .factory('otusjs.model.outcome.OutcomeFactory', Factory);

  Factory.$inject = [
    'otusjs.model.outcome.FollowUpFactory'
  ];

  function Factory(FollowUpFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new Outcome({}, FollowUpFactory);
    }

    function fromJson(json) {
      return new Outcome(json, FollowUpFactory);
    }

    return self;
  }

  function Outcome(JsonObject, FollowUpFactory) {
    var self = this;
    self._id = JsonObject._id;
    self.objectType = "Outcome";
    self.description = JsonObject.description || '';
    self.followUps = JsonObject.followUps && Array.isArray(JsonObject.followUps) ? FollowUpFactory.fromArray(JsonObject.followUps) : [];


    self.addFollowUp = addFollowUp;
    self.removeFollowUp = removeFollowUp;
    self.toJSON = toJSON;

    function addFollowUp(data) {
      if(data){
        self.followUps.push(data);
      } else {
        self.followUps.push(FollowUpFactory.create());
      }
    }

    function removeFollowUp(index) {
      self.followUps.splice(index, 1)
    }

    function toJSON() {
      let json = {};

      json._id = self._id;
      json.objectType = self.objectType;
      json.description = self.description;
      json.followUps = self.followUps;

      return json;
    }

    return self;
  }


}());