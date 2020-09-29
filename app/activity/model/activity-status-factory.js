(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivityStatusFactory', Factory);

  Factory.inject = [
    'ACTIVITY_CONSTANTS'
  ];

  let offLineStatus = '';

  function Factory(ACTIVITY_CONSTANTS) {
    var self = this;

    self.OBJECT_TYPE = 'ActivityStatus';
    offLineStatus = ACTIVITY_CONSTANTS.STATUS.INITIALIZED_OFFLINE;

    /* Public methods */
    self.createCreatedStatus = createCreatedStatus;
    self.createInitializedOfflineStatus = createInitializedOfflineStatus;
    self.createInitializedOnlineStatus = createInitializedOnlineStatus;
    self.createOpenedStatus = createOpenedStatus;
    self.createSavedStatus = createSavedStatus;
    self.createFinalizedStatus = createFinalizedStatus;
    self.createReopenedStatus = createReopenedStatus;
    self.fromJsonObject = fromJsonObject;

    function createCreatedStatus(user) {
      return new ActivityStatus(ACTIVITY_CONSTANTS.STATUS.CREATED, user);
    }

    function createInitializedOfflineStatus(offlineData) {
      return new ActivityStatus(ACTIVITY_CONSTANTS.STATUS.INITIALIZED_OFFLINE, offlineData.checker, offlineData.realizationDate);
    }

    function createInitializedOnlineStatus(user) {
      return new ActivityStatus(ACTIVITY_CONSTANTS.STATUS.INITIALIZED_ONLINE, user);
    }

    function createOpenedStatus(user) {
      return new ActivityStatus(ACTIVITY_CONSTANTS.STATUS.OPENED, user);
    }

    function createSavedStatus(user) {
      return new ActivityStatus(ACTIVITY_CONSTANTS.STATUS.SAVED, user);
    }

    function createFinalizedStatus(user) {
      return new ActivityStatus(ACTIVITY_CONSTANTS.STATUS.FINALIZED, user);
    }

    function createReopenedStatus(user) {
      return new ActivityStatus(ACTIVITY_CONSTANTS.STATUS.REOPENED, user);
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
    self.setDate = setDate;


    function setUser(user) {
      if(self.name === offLineStatus){
        self.user = angular.copy(user);
      }
    }

    function setDate(date) {
      if(self.name === offLineStatus){
        self.date = angular.copy(date);
      }
    }

    function toJSON() {
      return {
        objectType: self.objectType,
        name: self.name,
        date: self.date,
        user: self.user
      };
    }
  }

}());
