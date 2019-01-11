(function() {
  'use strict';

  angular
    .module('otusjs.model.revision')
    .factory('otusjs.model.revision.ActivityRevisionFactory', Factory);
  
  Factory.$inject = [
    'otusjs.model.revision.RevisionFactory'
  ];
  

  function Factory(RevisionFactory) {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new ActivityRevision();
    }


    function fromJsonObject(activityId, revisionList) {
      var history = [];
      if(Array.isArray(revisionList)){
        revisionList.map(function(revision) {
          history.push(RevisionFactory.fromJsonObject(revision));
        });
      }

      var statusHistoryManager = new ActivityRevision(activityId);
      statusHistoryManager.init(history);
      return statusHistoryManager;
    }

    return self;
  }

  function ActivityRevision(activityId) {
    var self = this;

    var REVISION = "Revision";
    self.objectType = 'ActivityRevision';
    self.activityId = activityId || "";


    /* Public methods */
    self.toJSON = toJSON;
    self.init = init;
    self.setRevision = setRevision;

    self.revisionHistory = self.revisionHistory ? self.revisionHistory : [];
    
    function init(history) {
      self.revisionHistory = history || [];
    }

    function setRevision(revision) {
      if(revision.objectType === REVISION){
        self.revisionHistory.push(revision);
      }
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
