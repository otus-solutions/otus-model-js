(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.UpdateRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.RuleFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.NavigationContainerService'
  ];

  function service(RuleFactory, RouteConditionFactory, RouteFactory, NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      var origin = routeData.origin;
      var destination = routeData.destination;
      var currentDefaultRoute = navigation.getDefaultRoute();
      var route = RouteFactory.createDefault(origin, destination);

      if (!currentDefaultRoute.equals(route)) {
        var conditions = routeData.conditions.map(_setupConditions);
        navigation.updateRoute(route);

        var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
        if (nextNavigation) {
          nextNavigation.updateInNavigation(navigation);
        }
        return route;
      } else {
        return currentDefaultRoute;
      }
    }

    function _setupConditions(conditionData) {
      var rules = conditionData.rules.map(_setupRules);
      return RouteConditionFactory.create(conditionData.name, rules);
    }

    function _setupRules(ruleData) {
      var when = ruleData.when.customID || ruleData.when;
      var operator = ruleData.operator.type || ruleData.operator;
      var answer = (ruleData.answer.option) ? ruleData.answer.option.value : ruleData.answer;
      return RuleFactory.create(when, operator, answer);
    }
  }
}());
