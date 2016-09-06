(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.RemoveRouteTaskService', service);

  function service() {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      navigation.removeRoute(routeData.name);
    }
  }
}());
