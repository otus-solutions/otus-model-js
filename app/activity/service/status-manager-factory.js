(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.StatusHistoryManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.model.activity.ActivityStatusFactory'
  ];

  var Inject = {};

  function Factory(ActivityStatusFactory) {
    Inject.ActivityStatusFactory = ActivityStatusFactory;

    var self = this;
    self.OBJECT_TYPE = 'StatusHistoryManager';

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
        return new StatusHistoryManager();
    }

    function fromJsonObject(statusList) {
      var history = [];
      statusList.map(function(status) {
        history.push(Inject.ActivityStatusFactory.fromJsonObject(status));
      });

      var statusHistoryManager = create();
      statusHistoryManager.init(history);
      return statusHistoryManager;
    }

    return self;
  }

  function StatusHistoryManager() {
    var self = this;
    var _history = [];

    self.init = init;
    self.historySize = historySize;
    self.getHistory = getHistory;
    self.getLastStatus = getLastStatus;
    self.getInitializedOfflineRegistry = getInitializedOfflineRegistry;
    self.getFinalizedRegistries = getFinalizedRegistries;
    self.newCreatedRegistry = newCreatedRegistry;
    self.newInitializedOfflineRegistry = newInitializedOfflineRegistry;
    self.newInitializedOnlineRegistry = newInitializedOnlineRegistry;
    self.newOpenedRegistry = newOpenedRegistry;
    self.newSavedRegistry = newSavedRegistry;
    self.newFinalizedRegistry = newFinalizedRegistry;
    self.toJSON = toJSON;

    function init(history) {
      _history = history || [];
    }

    function getHistory() {
      return _history;
    }

    function getLastStatus() {
      return _history[_history.length - 1];
    }

    function getInitializedOfflineRegistry() {
      var registry = _history.filter(function(status) {
        return status.name === 'INITIALIZED_OFFLINE';
      });

      return registry[0];
    }

    function getFinalizedRegistries() {
      return _history.filter(function(status) {
        return status.name === 'FINALIZED';
      });
    }

    function newCreatedRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createCreatedStatus(user));
    }

    function newInitializedOfflineRegistry(offlineData) {
      _history.push(Inject.ActivityStatusFactory.createInitializedOfflineStatus(offlineData));
    }

    function newInitializedOnlineRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createInitializedOnlineStatus(user));
    }

    function newOpenedRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createOpenedStatus(user));
    }

    function newSavedRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createSavedStatus(user));
    }

    function newFinalizedRegistry(user) {
      _history.push(Inject.ActivityStatusFactory.createFinalizedStatus(user));
    }

    function historySize() {
      return _history.length;
    }

    function toJSON() {
      return _history.map(function(status) {
        return status.toJSON();
      });
    }
  }

})();
