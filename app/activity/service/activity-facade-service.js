(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .service('ActivityFacadeService', ActivityFacadeService);

    function ActivityFacadeService() {
        var self = this;

        /* Public interface */
        self.fillQuestion = fillQuestion;

        function fillQuestion() {
        }
    }

}());
