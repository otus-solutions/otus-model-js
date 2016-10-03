(function() {

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationApiService', service);

  service.$inject = [
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RuleFactory'
  ];

  function service(RouteFactory, RouteConditionFactory, RuleFactory) {
    var self = this;

    /* Public methods */
    self.addRoute = addRoute;
    self.addRouteCondition = addRouteCondition;
    self.addConditionRule = addConditionRule;
    self.removeRoute = removeRoute;
    self.removeRouteCondition = removeRouteCondition;
    self.removeConditionRule = removeConditionRule;

    function addRoute(routeData, navigation) {
      var route = RouteFactory.create(routeData.name, routeData.origin, routeData.destination);
      navigation.addRoute(route);
      return route;
    }

    function addRouteCondition(conditionName, route) {
      var routeCondition = RouteConditionFactory.create(conditionName);
      route.addCondition(routeCondition);
      return routeCondition;
    }

    function addConditionRule(ruleData, routeCondition) {
      var newRule = RuleFactory.create(ruleData.when, ruleData.operator, ruleData.answer);
      routeCondition.addRule(newRule);
      return newRule;
    }

    function removeRoute() {
      routeData.parentNavigation.removeRoute(routeData.name);
    }

    function removeRouteCondition() {

    }

    function removeConditionRule() {
      route.conditions[0].removeRule(rule);
    }
  }
})();
