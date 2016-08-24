(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.RouteConditionFactory', factory);

  factory.$inject = [
    'otusjs.model.navigation.RuleFactory'
  ];

  function factory(RuleFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(name) {
      return new RouteCondition(name);
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var condition = new RouteCondition(jsonObj.name);

      jsonObj.rules.forEach(function(rule) {
        var newRule = RuleFactory.fromJson(JSON.stringify(rule));
        condition.addRule(newRule);
      });

      return condition;
    }

    return self;
  }

  function RouteCondition(conditionName) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'RouteCondition';
    self.name = conditionName;
    self.rules = [];

    /* Public methods */
    self.listRules = listRules;
    self.addRule = addRule;
    self.removeRule = removeRule;
    self.toJson = toJson;

    function listRules() {
      var clone = [];

      self.rules.forEach(function(rule) {
        clone.push(rule);
      });

      return clone;
    }

    function addRule(rule) {
      var ruleNotExist = (self.rules.indexOf(rule) === -1);
      if (ruleNotExist) {
        self.rules.push(rule);
      }
    }

    function removeRule(rule) {
      var indexToRemove = self.rules.indexOf(rule);
      self.rules.splice(indexToRemove, 1);
    }

    function toJson() {
      var json = {};

      json.extents = 'StudioObject';
      json.objectType = 'RouteCondition';
      json.name = self.name;
      json.rules = [];

      self.rules.forEach(function(rule) {
        json.rules.push(rule.toJson());
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }
}());
