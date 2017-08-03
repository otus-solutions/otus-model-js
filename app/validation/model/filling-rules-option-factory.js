(function() {
  'use strict';

  angular
    .module('otusjs.validation')
    .factory('FillingRulesOptionFactory', FillingRulesOptionFactory);

  FillingRulesOptionFactory.$inject = ['RulesFactory'];

  function FillingRulesOptionFactory(RulesFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new FillingRules(RulesFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.FillingRulesOptionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var fillingRules = new FillingRules(RulesFactory);
      for (var rule in jsonObject.options) {
        fillingRules.options[rule] = RulesFactory.fromJsonObject(jsonObject.options[rule]);
      }
      return fillingRules;
    }

    return self;
  }

  function FillingRules(RulesFactory) {
    var self = this;

    self.extends = 'StudioObject';
    self.objectType = 'FillingRules';
    self.options = {};

    /* Public methods */
    self.createOption = createOption;
    self.removeFillingRules = removeFillingRules;

    _init();

    function _init() {
      self.createOption('mandatory');
    }

    function createOption(type) {
      var option = RulesFactory.create(type);
      self.options[type] = option;
      return option;
    }

    function removeFillingRules(type) {
      delete self.options[type];
    }

  }

}());
