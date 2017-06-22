(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.InitialNodesCreationTaskService', Service);

  Service.$inject = [
    'otusjs.model.navigation.DefaultRouteCreationTaskService'
  ];

  function Service(DefaultRouteCreationTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(navigationContainer) {
      _container.setInitialNodes();

      var routeData = {
        'origin': _container.getNavigationList()[0].origin,
        'destination': _container.getNavigationList()[1].origin
      };

      DefaultRouteCreationTaskService.execute(routeData, _container.getNavigationList()[0]);
    }
  }
}());
