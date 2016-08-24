(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationValidatorService', service);

  service.$inject = [
    'otusjs.model.navigation.NavigationContainerService',
    'otusjs.model.navigation.ExceptionService'
  ];

  function service(NavigationContainerService, ExceptionService) {
    var self = this;
    var navigationList = [];

    /* Public methods */
    self.init = init;
    self.isRouteValid = isRouteValid;

    init();

    function init() {
      navigationList = NavigationContainerService.getNavigationList();
      //console.log(NavigationContainerService.getNavigationList());
    }

    function isRouteValid(origin, destination) {
      if (origin !== destination) {
        //console.log(origin);
        //console.log(navigationList);
        //console.log(_searchByID(origin));
      } else {
        throw new ExceptionService.InvalidStateError('Rota que refere-se a si mesma diretamente');
      }
      //TODO: não é um destino que vem antes da origem
      //TODO: então é válido
    }

    function _searchByID(questionID) {
      var routes = [];
      navigationList.forEach(function(question, index) {
        if (question.templateID === questionID) {
          result = {};
          result.filling = filling;
          result.index = index;
        }
      });

      return routes;
    }

  }

}());
