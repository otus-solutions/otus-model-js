(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.ContainerInitializationTaskService', Service);

  Service.$inject = [
    'otusjs.model.navigation.InitialNodesCreationTaskService'
  ];

  function Service(InitialNodesCreationTask) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute() {
      _container.resetData();
      InitialNodesCreationTask.execute();
    }
  }
}());
