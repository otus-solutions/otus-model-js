(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.AddRouteTaskService', service);

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
      var newRoute = RouteFactory.create(routeData.origin, routeData.destination);
      _setupConditions(newRoute, routeData);
      navigation.addRoute(newRoute);
      return newRoute;
    }

    function _setupConditions(newRoute, routeData) {
      routeData.conditionSet.forEach(function(conditionData) {
        var newCondition = RouteConditionFactory.create(conditionData.name);
        _setupRules(newCondition, conditionData);
        newRoute.addCondition(newCondition);
      });
    }

    function _setupRules(newCondition, conditionData) {
      conditionData.rules.forEach(function(ruleData) {
        var newRule = RuleFactory.create(ruleData.when.customID, ruleData.operator.type);
        _setupAnswer(newRule, ruleData);
        newCondition.addRule(newRule);
      });
    }

    function _setupAnswer(newRule, ruleData) {
      if (ruleData.answer instanceof Object) {
        newRule[ruleData.operator.type](ruleData.answer.option.value);
      } else {
        newRule[ruleData.operator.type](ruleData.answer.option);
      }
    }
  }
}());
