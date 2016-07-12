(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('ActivityStatusFactory', ActivityStatusFactory);

    function ActivityStatusFactory() {
        var self = this;

        /* Public interface */
        self.createCreatedStatus = createCreatedStatus;
        self.createInitializedOfflineStatus = createInitializedOfflineStatus;
        self.createInitializedOnlineStatus = createInitializedOnlineStatus;
        self.createOpenedStatus = createOpenedStatus;
        self.createSavedStatus = createSavedStatus;
        self.createFinalizedStatus = createFinalizedStatus;

        function createCreatedStatus(user) {
            return new ActivityStatus('CREATED', user);
        }

        function createInitializedOfflineStatus(user) {
            return new ActivityStatus('INITIALIZED_OFFLINE', user);
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

        return self;
    }

    function ActivityStatus(name, user) {
        var self = this;

        self.objectType = 'ActivityStatus';
        self.name = name;
        self.date = Date.now();
        self.user = user;

        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.name = self.name;
            json.date = self.date;
            json.user = self.user.toJson();

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());
