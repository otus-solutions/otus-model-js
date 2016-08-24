(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.RouteAddService', service);

  service.$inject = [
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.RuleFactory'
  ];

  function service(RouteFactory, RuleFactory) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      var route = RouteFactory.create(routeData.origin, routeData.destination);
      navigation.addRoute(route);
      return route;
    }
  }
}());
