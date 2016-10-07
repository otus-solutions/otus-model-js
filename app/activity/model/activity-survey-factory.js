(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.ActivitySurveyFactory', ActivitySurveyFactory);

  ActivitySurveyFactory.$inject = [
    'otusjs.model.activity.StatusHistoryManagerService',
    'otusjs.model.activity.FillingManagerService',
    'otusjs.model.navigation.NavigationPathFactory'
  ];

  function ActivitySurveyFactory(StatusHistoryManagerService, FillingManagerService, NavigationStackFactory) {
    var self = this;

    self.create = create;

    function create(template) {
      StatusHistoryManagerService.newCreatedRegistry({});
      return new ActivitySurvey(template, FillingManagerService, StatusHistoryManagerService, NavigationStackFactory);
    }

    return self;
  }

  function ActivitySurvey(template, FillingManagerService, StatusHistoryManagerService, NavigationStackFactory) {
    var self = this;

    self.objectType = 'Activity';
    //TODO: O modo de utilização deve ser revisto
    self.activityID = 1;
    self.template = template;
    self.fillContainer = FillingManagerService;
    self.statusHistory = StatusHistoryManagerService;
    self.navigationStack = NavigationStackFactory.create();

    /* Public methods */
    self.getNavigationStack = getNavigationStack;
    self.toJson = toJson;

    function getNavigationStack() {
      return self.navigationStack;
    }

    function setNavigationStack(stack) {
      return self.navigationStack = stack;
    }

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
