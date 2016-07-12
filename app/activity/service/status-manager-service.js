(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('StatusHistoryManagerService', StatusHistoryManagerService);

    StatusHistoryManagerService.$inject = ['ActivityStatusFactory'];

    function StatusHistoryManagerService(ActivityStatusFactory) {
        var self = this;

        self.init = init;
        self.historySize = historySize;
        self.getHistory = getHistory;
        self.newCreatedRegistry = newCreatedRegistry;
        self.newInitializedOfflineRegistry = newInitializedOfflineRegistry;
        self.newInitializedOnlineRegistry = newInitializedOnlineRegistry;
        self.newOpenedRegistry = newOpenedRegistry;
        self.newSavedRegistry = newSavedRegistry;
        self.newFinalizedRegistry = newFinalizedRegistry;
        self.toJson = toJson;

        init();

        function init() {
            history = [];
        }

        function getHistory() {
            return history;
        }

        function newCreatedRegistry(user) {
            history.push(ActivityStatusFactory.createCreatedStatus(user));
        }

        function newInitializedOfflineRegistry(user) {
            history.push(ActivityStatusFactory.createInitializedOfflineStatus(user));
        }

        function newInitializedOnlineRegistry(user) {
            history.push(ActivityStatusFactory.createInitializedOnlineStatus(user));
        }

        function newOpenedRegistry(user) {
            history.push(ActivityStatusFactory.createOpenedStatus(user));
        }

        function newSavedRegistry(user) {
            history.push(ActivityStatusFactory.createSavedStatus(user));
        }

        function newFinalizedRegistry(user) {
            history.push(ActivityStatusFactory.createFinalizedStatus(user));
        }

        function historySize() {
            return history.length;
        }

        function toJson() {
            return JSON.stringify(history);
        }
    }

})();
