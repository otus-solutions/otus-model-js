(function () {
  'use strict';

  angular.module('otusjs.model.activity')
    .constant('ACTIVITY_CONSTANTS', {

      MODE: {
        AUTOFILL: 'AUTOFILL',
        ONLINE: 'ONLINE',
        PAPER: 'PAPER',
        OFFLINE: 'OFFLINE'
      },

      STATUS: {
        CREATED: 'CREATED',
        INITIALIZED_OFFLINE: 'INITIALIZED_OFFLINE',
        INITIALIZED_ONLINE: 'INITIALIZED_ONLINE',
        OPENED: 'OPENED',
        SAVED: 'SAVED',
        FINALIZED: 'FINALIZED',
        REOPENED: 'REOPENED'
      }

    });

})();
