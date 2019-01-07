(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityStatusFactory', Factory);

  function Factory() {
    var self = this;

    self.OBJECT_TYPE = 'ActivityStatus';

    /* Public methods */
    self.createCreatedStatus = createCreatedStatus;
    self.createInitializedOfflineStatus = createInitializedOfflineStatus;
    self.createInitializedOnlineStatus = createInitializedOnlineStatus;
    self.createOpenedStatus = createOpenedStatus;
    self.createSavedStatus = createSavedStatus;
    self.createFinalizedStatus = createFinalizedStatus;
    self.fromJsonObject = fromJsonObject;

    function createCreatedStatus(user) {
      return new ActivityStatus('CREATED', user);
    }

    function createInitializedOfflineStatus(offlineData) {
      return new ActivityStatus('INITIALIZED_OFFLINE', offlineData.checker, offlineData.realizationDate);
    }

    function createInitializedOnlineStatus(user) {
      return new ActivityStatus('INITIALIZED_ONLINE', user);
    }

    function createOpenedStatus(user) {
      return new ActivityStatus('OPENED', user);
    }

    function createSavedStatus(user) {
      return new ActivityStatus('SAVED', user);
    }

    function createFinalizedStatus(user) {
      return new ActivityStatus('FINALIZED', user);
    }

    function fromJsonObject(jsonObject) {
      var status = new ActivityStatus(jsonObject.name, jsonObject.user);
      status.date = new Date(jsonObject.date);
      return status;
    }

    return self;
  }

  function ActivityStatus(name, user, statusDate) {
    var self = this;

    self.objectType = 'ActivityStatus';
    self.name = name;
    self.date = statusDate || new Date();
    self.user = user;

    /* Public methods */
    self.toJSON = toJSON;
    self.setUser = setUser;


    function setUser(user) {
      if(self.name === 'INITIALIZED_OFFLINE'){
        self.user = angular.copy(user);
      }
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.date = self.date;
      json.user = self.user;

      return json;
    }
  }

}());
