(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.RevisionFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;
    self.fromJsonObject = fromJsonObject;

    function create(activityID, revisionDate) {
      validateRevision(activityID);
      return new Revision(activityID, revisionDate);
    }


    function fromJson(jsonArray) {
      if (Array.isArray(jsonArray)) {
        return jsonArray.map(function (revision) {
          return self.fromJsonObject(revision);
        });
      } else {
        throw new Error("Validation error: Malformed array");
      }

    }

    function fromJsonObject(jsonObject) {
      validateRevision(jsonObject.activityID);
      return new Revision(jsonObject.activityID, jsonObject.revisionDate, jsonObject.user);
    }


    function validateRevision(activityID) {
      if(!activityID){
        throw new Error("Validation error: Activity ID not found");
      }
    }

    return self;
  }

  function Revision(activityID, statusDate, user) {
    var self = this;

    self.objectType = 'ActivityRevision';
    self.activityID = activityID || '';
    self.revisionDate = statusDate || new Date();
    self.user = user || null;

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.activityID = self.activityID;
      json.revisionDate = self.revisionDate;

      return json;
    }
   }

}());
