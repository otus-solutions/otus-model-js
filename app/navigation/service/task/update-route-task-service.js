(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.UpdateRouteTaskService', service);

  service.$inject = [
    'otusjs.model.navigation.RuleFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RouteFactory'
  ];

  function service(RuleFactory, RouteConditionFactory, RouteFactory) {
    var self = this;

    /* Public methods */
    self.execute = execute;

    function execute(routeData, navigation) {
      var origin = routeData.origin;
      var destination = routeData.destination;
      var route = null;

      if (routeData.isDefault) {
        route = RouteFactory.createDefault(origin, destination);
        navigation.setupDefaultRoute(route);
      } else {
        var conditions = routeData.conditions.map(_setupConditions);
        route = RouteFactory.createAlternative(origin, destination, conditions);
      }

      return navigation.updateRoute(route);
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
