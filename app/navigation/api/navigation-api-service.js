(function() {

  angular
    .module('otusjs.model.navigation')
    .service('otusjs.model.navigation.NavigationApiService', service);

  function service() {
    var self = this;

    /* Public methods */
    self.resolveNavigation = resolveNavigation;

    function resolveNavigation(currentQuestion, navigation) {
      var totalRoutes = navigation.routes.length;

      if (totalRoutes === 1) {
        return navigation.routes[0].destination;
      } else {
        var index = 1;
        var route;

        for (index; index < totalRoutes; index++) {
          route = navigation.routes[index];
          _checkConditions(route.conditions, currentQuestion.filling);
        }
      }
    }

    function _checkConditions(conditions, questionFilling) {
      conditions.some(function(condition) {

        condition.rules.every(function(rule) {
          return _checkRule(rule, questionFilling);
        });

      });
    }

    function _checkRule(rule, questionFilling) {

    }
  }

  function RuleChecker() {
    var self = this;
    var _filling;

    self.answer = answer;
    self.equal = equal;

    function answer(filling) {
      _filling = filling;
      return self;
    }

    function equal(reference) {

    }
  }
})();
