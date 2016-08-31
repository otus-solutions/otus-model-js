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
      _setupConditions(route, routeData);
      navigation.updateRoute(route);
      return route;
    }

    function _setupConditions(route, routeData) {
      routeData.conditionSet.forEach(function(conditionData) {
        var condition = RouteConditionFactory.create(conditionData.name);
        _setupRules(condition, conditionData);
        route.addCondition(condition);
      });
    }

    function _setupRules(condition, conditionData) {
      conditionData.rules.forEach(function(ruleData) {
        var rule = RuleFactory.create(ruleData.when.customID, ruleData.operator.type);
        _setupAnswer(rule, ruleData);
        condition.addRule(rule);
      });
    }

    function _setupAnswer(rule, ruleData) {
      if (ruleData.answer instanceof Object) {
        rule[ruleData.operator.type](ruleData.answer.option.value);
      } else {
        rule[ruleData.operator.type](ruleData.answer);
      }
    }
  }
}());
