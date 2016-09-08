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
      condition.rules = jsonObj.rules.map(_mapRules);
      return condition;
    }

    function _mapRules(ruleJson) {
      return RuleFactory.fromJson(JSON.stringify(ruleJson))
    }

    return self;
  }

  function RouteCondition(name) {
    var self = this;

    self.extents = 'SurveyTemplateObject';
    self.objectType = 'RouteCondition';
    self.name = name;
    self.rules = [];

    /* Public methods */
    self.addRule = addRule;
    self.removeRule = removeRule;
    self.listRules = listRules;
    self.getRuleByIndex = getRuleByIndex;

    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJson = toJson;

    function addRule(newRule) {
      if (!_ruleExists(newRule)) {
        self.rules.push(newRule);
      }
    }

    function removeRule(rule) {
      var index = self.rules.indexOf(rule);
      if (index > -1) {
        self.rules.splice(index, 1);
      }
    }

    function listRules() {
      var clone = [];

      self.rules.forEach(function(rule) {
        clone.push(rule.clone());
      });

      return clone;
    }

    function getRuleByIndex(index) {
      return self.rules[index];
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.name !== self.name) {
        return false;
      }

      if (other.rules.length === self.rules.length) {
        var hasEqualRules = other.rules.some(function(rule, index) {
          return self.rules[index].equals(rule);
        });
        if (!hasEqualRules) {
          return false;
        }
      } else {
        return false;
      }

      return true;
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function clone() {
      return Object.assign(new RouteCondition(), self);
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

    function _ruleExists(newRule) {
      return self.rules.some(function(rule) {
        return newRule.equals(rule);
      });
    }
  }
}());
