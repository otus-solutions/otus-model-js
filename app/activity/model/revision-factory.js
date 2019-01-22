(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.RevisionFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;

    self.fromJsonObject = fromJsonObject;

    function create(activityId, user, revisionDate) {
      return new Revision(activityId, user, revisionDate);
    }

    function fromJsonObject(jsonObject) {
      var revision = new Revision(jsonObject.user, jsonObject.date);
      return revision;
    }

    return self;
  }

  function Revision(activityId, user, revisionDate) {
    var self = this;

    self.objectType = 'Revision';
    self.activityId = activityId;
    self.date = revisionDate;
    self.user = user;

    if(!self.user){
      throw new Error("Invalid user for revision.");
    }

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.date = self.date;
      json.user = self.user;

      return json;
    }
   }

}());
