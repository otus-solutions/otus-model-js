(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('AddRouteService', AddRouteService);

    AddRouteService.$inject = [
        'RouteFactory'
    ];

    function AddRouteService(RouteFactory) {
        var self = this;

        self.execute = execute;

        function execute(routeData) {
            var route = RouteFactory.create(routeData.name, routeData.parentNavigation.origin, routeData.destination);
            routeData.parentNavigation.addRoute(route);
            return route;
        }
    }

}());
