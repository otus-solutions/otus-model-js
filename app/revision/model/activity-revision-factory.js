(function() {
  'use strict';

  angular
    .module('otusjs.model.revision')
    .factory('otusjs.model.revision.ActivityRevisionHistoryFactory', Factory);
  
  Factory.$inject = [
    'otusjs.model.revision.RevisionFactory'
  ];
  

  function Factory(RevisionFactory) {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new ActivityRevision({});
    }


    function fromJsonObject(json) {
      var history = [];
      if(Array.isArray(json.revisionHistory)){
        json.revisionHistory.map(function(revision) {
          history.push(RevisionFactory.fromJsonObject(revision));
        });
      }

      var statusHistoryManager = new ActivityRevision(json);
      statusHistoryManager.init(history);
      return statusHistoryManager;
    }

    return self;
  }

  function ActivityRevision(json) {
    var self = this;

    var REVISION = "Revision";
    self.objectType = 'ActivityRevision';
    self.activityId = json.activityId || "";


    /* Public methods */
    self.toJSON = toJSON;
    self.init = init;
    self.setRevision = setRevision;
    self.size = size;
    self.last = last;
    self.setActivity = setActivity;

    self.revisionHistory = self.revisionHistory ? self.revisionHistory : [];

    function init(history) {
      self.revisionHistory = history || [];
    }

    function size() {
      return self.revisionHistory.length;
    }

    function last() {
      if (self.size()){
        return self.revisionHistory[self.size()-1];
      } else {
        return {};
      }
    }

    function setRevision(revision) {
      if(revision.objectType === REVISION){
        self.revisionHistory.push(revision);
      }
    }
    function setActivity(id) {
      self.activityId = id;
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.activityId = self.activityId;
      json.revisionHistory = self.revisionHistory;

      return json;
    }
  }

}());
