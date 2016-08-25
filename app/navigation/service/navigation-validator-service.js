(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationValidatorService', service);

  service.$inject = [
    'SurveyItemContainerService',
    'otusjs.model.navigation.ExceptionService'
  ];

  function service(SurveyItemContainerService, ExceptionService) {
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
        throw new ExceptionService.InvalidStateError('Rota que refere-se a si mesma diretamente');
      } else {
        var origenInList = _searchByID(origin);
        var destinationInList = _searchByID(destination);
        if (origenInList.index < destinationInList.index) {
          return true;
        } else {
          throw new ExceptionService.InvalidStateError('A nova rota não deve referenciar questões anteriores');
        }
      }
    }

    function _searchByID(questionID) {
      var result;

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
