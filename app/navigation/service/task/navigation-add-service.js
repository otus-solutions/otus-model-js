(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationAddService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService',
    'SurveyItemContainerService'
  ];

  function service(NavigationContainerService, SurveyItemContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute() {
      var itemCount = SurveyItemContainerService.getItemListSize();

      if (itemCount > 1) {
        var origin = SurveyItemContainerService.getItemByPosition(itemCount - 2);
        var destination = SurveyItemContainerService.getItemByPosition(itemCount - 1);

        NavigationContainerService.createNavigationTo(origin.templateID, destination.templateID);
      }
    }
  }
}());
