(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.UpdateRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RuleFactory'
  ];

  function service(RouteFactory, RouteConditionFactory, RuleFactory) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      var route = RouteFactory.create(routeData.origin, routeData.destination);
      route.isDefault = routeData.isDefault;
      _setupConditions(route, routeData);
      navigation.updateRoute(route);
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
