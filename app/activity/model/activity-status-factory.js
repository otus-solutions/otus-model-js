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

        function createCreatedStatus(user) {
            return new ActivityStatus('CREATED', user);
        }

        function createInitializedOfflineStatus(user) {
            return new ActivityStatus('INITIALIZED_OFFLINE', user);
        }

        function createInitializedOnlineStatus(user) {
            return new ActivityStatus('INITIALIZED_ONLINE', user);
        }

        return self;
    }

    function ActivityStatus(name, user) {
        var self = this;

        self.objectType = 'ActivityStatus';
        self.name = name;
        self.date = Date.now();
        self.user = user;

    }

}());
