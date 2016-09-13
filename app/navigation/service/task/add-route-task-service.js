(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.AddRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RuleFactory',
    'otusjs.model.navigation.NavigationContainerService'
  ];

  function service(RouteFactory, RouteConditionFactory, RuleFactory, NavigationContainerService) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      var route = RouteFactory.create(routeData.origin, routeData.destination);
      if (routeData.isDefalut) {
        navigation.setupDefaultRoute(route);
      } else {
        _setupConditions(route, routeData);
        navigation.addAlternativeRoute(route);
      }

      var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
      nextNavigation.inNavigations.push(routeData.origin);
      return route;
    }

    function _setupConditions(route, routeData) {
      routeData.conditions.forEach(function(conditionData) {
        var condition = RouteConditionFactory.create(conditionData.name);
        _setupRules(condition, conditionData);
        route.addCondition(condition);
      });
    }

    function _setupRules(condition, conditionData) {
      conditionData.rules.forEach(function(ruleData) {
        var when = ruleData.when.customID || ruleData.when;
        var operator = ruleData.operator.type || ruleData.operator;
        var answer = (ruleData.answer.option) ? ruleData.answer.option.value : ruleData.answer;
        var rule = RuleFactory.create(when, operator, answer);
        condition.addRule(rule);
      });
    }
  }
}());
