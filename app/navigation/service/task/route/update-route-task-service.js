(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.RouteUpdateTaskService', Service);

  Service.$inject = [
    'otusjs.model.navigation.RuleFactory',
    'otusjs.model.navigation.RouteConditionFactory',
    'otusjs.model.navigation.RouteFactory',
    'otusjs.model.navigation.DefaultRouteCreationTaskService'
  ];

  function Service(RuleFactory, RouteConditionFactory, RouteFactory, DefaultRouteCreationTaskService) {
    var self = this;
    var _container = null;

    /* Public methods */
    self.setContainer = setContainer;
    self.execute = execute;

    function setContainer(container) {
      _container = container;
    }

    function execute(routeData, navigation) {
      if (_isCurrentDefaultRoute(routeData, navigation.getDefaultRoute())) {
        throw new Error('Is not possible update a default route.', 'update-route-task-service.js', 23);
      } else if (routeData.isDefault) {
        DefaultRouteCreationTaskService.execute(routeData, navigation);
      } else {
        var conditions = routeData.conditions.map(_setupConditions);
        var route = RouteFactory.createAlternative(routeData.origin, routeData.destination, conditions);
        navigation.updateRoute(route);
        _notifyNextNavigation(route, navigation);
      }
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
      var answer = ruleData.answer;
      return RuleFactory.create(when, operator, answer, ruleData.isMetadata, ruleData.isCustom);
    }

    function _notifyNextNavigation(routeData, navigation) {
      var nextNavigation = _container.getNavigationByOrigin(routeData.destination);
      if (nextNavigation) {
        nextNavigation.updateInNavigation(navigation);
      }
    }
  }
}());
