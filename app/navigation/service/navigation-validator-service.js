(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationValidatorService', service);

  service.$inject = [
    'SurveyItemContainerFactory'
  ];

  function service(SurveyItemContainerService) {
    var self = this;
    var itemList = [];

    /* Public methods */
    self.init = init;
    self.isRouteValid = isRouteValid;

    init();

    function init() {
      itemList = SurveyItemContainerService.getItemList();
    }

    function isRouteValid(origin, destination) {
      if (origin === destination) {
        return false;
      } else {
        var origenInList = _searchByID(origin);
        var destinationInList = _searchByID(destination);
        if (origenInList.index < destinationInList.index) {
          return true;
        } else {
          return false;
        }
      }
    }

    function _searchByID(questionID) {
      var result = null;

      itemList.forEach(function(question, index) {
        if (question.customID === questionID) {
          result = {};
          result.question = question;
          result.index = index;
        }
      });
      return result;
    }
  }

}());
