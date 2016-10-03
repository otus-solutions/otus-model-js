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

    function create(template) {
      StatusHistoryManagerService.newCreatedRegistry({});
      return new ActivitySurvey(template, FillingManagerService, StatusHistoryManagerService);
    }

    return self;
  }

  function ActivitySurvey(template, FillingManagerService, StatusHistoryManagerService) {
    var self = this;

    self.objectType = 'Activity';
    //TODO: O modo de utilização deve ser revisto
    self.activityID = 1;
    self.template = template;
    self.fillContainer = FillingManagerService;
    self.statusHistory = StatusHistoryManagerService;

    /* Public methods */
    self.toJson = toJson;

    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.activityID = self.activityID;
      json.template = self.template.toJson();
      json.fillContainer = self.fillContainer;
      json.statusHistory = self.statusHistory;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '').replace(/ ":/g, '":');
    }
  }

}());
