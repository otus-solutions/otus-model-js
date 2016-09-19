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
      if (_isCurrentDefaultRoute(routeData, navigation.getDefaultRoute())) {
        throw new Error('Is not possible update a default route.', 'update-route-task-service.js', 23);
      }

      var route = RouteFactory.createAlternative(routeData.origin, routeData.destination, routeData.conditions);
      var conditions = routeData.conditions.map(_setupConditions);

      navigation.updateRoute(route);
      _notifyNextNavigation(route);
    }

    function _isCurrentDefaultRoute(routeToUpdate, currentDefaultRoute) {
      var isSameOrigin = currentDefaultRoute.origin === routeToUpdate.origin;
      var isSameDestination = currentDefaultRoute.destination === routeToUpdate.destination;
      return (isSameOrigin && isSameDestination);
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

    function _notifyNextNavigation(routeData) {
      var nextNavigation = NavigationContainerService.getNavigationByOrigin(routeData.destination);
      if (nextNavigation) {
        nextNavigation.updateInNavigation(navigation);
      }
    }
  }
}());
