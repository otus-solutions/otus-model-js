(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('AddRouteConditionService', AddRouteConditionService);

    AddRouteConditionService.$inject = [
        'RouteConditionFactory'
    ];

    function AddRouteConditionService(RouteConditionFactory) {
        var self = this;

        self.execute = execute;

        function execute(conditionName, route) {
            var routeCondition = RouteConditionFactory.create(conditionName);
            route.addCondition(routeCondition);
            return routeCondition;
        }
    }

}());
