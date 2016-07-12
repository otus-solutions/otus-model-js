(function() {
    'use strict';

    angular
        .module('otusjs.activity')
        .factory('ActivitySurveyFactory', ActivitySurveyFactory);

    ActivitySurveyFactory.$inject = [
        'StatusHistoryManagerService',
        'FillingManagerService'
    ];

    function ActivitySurveyFactory(StatusHistoryManagerService, FillingManagerService) {
        var self = this;

        self.create = create;

        function create(category, group, templateOID, user) {
            StatusHistoryManagerService.newCreatedRegistry(user);
            return new ActivitySurvey(category, group, templateOID, StatusHistoryManagerService, FillingManagerService);
        }

        return self;
    }

    function ActivitySurvey(category, group, templateOID, StatusHistoryManagerService, FillingManagerService) {
        var self = this;

        self.objectType = 'Activity';
        //TODO: O modo de utilização deve ser revisto
        self.activityID = 1;
        self.category = category;
        self.group = group;
        self.templateOID = templateOID;
        self.fillContainer = FillingManagerService;
        self.statusHistory = StatusHistoryManagerService;

        /* Public methods */
        self.toJson = toJson;

        function toJson() {
            var json = {};

            json.objectType = self.objectType;
            json.activityID = self.activityID;
            json.category = self.category;
            json.group = self.group;
            json.templateOID = self.templateOID;
            json.fillContainer = self.fillContainer;
            json.statusHistory = self.statusHistory;

            return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
        }
    }

}());
