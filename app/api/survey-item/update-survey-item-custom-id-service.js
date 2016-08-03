(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('UpdateSurveyItemCustomID', UpdateSurveyItemCustomID);

    function UpdateSurveyItemCustomID() {
        var self = this;
        var itemList = [];

        self.init = init;
        self.execute = execute;

        init();

        function init() {
            itemList = [];
        }

        function execute(item, id) {
            // it needs a service to validate if is a valid or available id
            item.customID = id;
        }

        }
    }

}());
