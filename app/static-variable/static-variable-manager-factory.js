(function () {
  'use strict';

  angular
    .module('otusjs.staticVariable')
    .service('otusjs.staticVariable.StaticVariableManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.staticVariable.SurveyStaticVariableFactory'
  ];


  function Factory(SurveyStaticVariable) {
    var self = this;

    self.create = create;

    function create() {
      return new StaticVariableManager(SurveyStaticVariable);
    }
    return self;
  }

  function StaticVariableManager(SurveyStaticVariable) {
    var self = this;
    var _items = [];

    /* Public interface */
    self.create = create;
    self.add = add;
    self.remove = remove;
    self.update = update;
    self.getStaticVariableList = getStaticVariableList;
    self.loadJsonData = loadJsonData;

    function loadJsonData(itemsArray) {
      itemsArray.forEach(item=> {
        try {
          add(SurveyStaticVariable.fromJson(item));
        } catch (e) {}

      });
    }

    function create() {
      return SurveyStaticVariable.create();
    }

    function add(variable) {
      _validateInsertion(variable);

      _findVariableIndex(variable.name, variable.sending);
      _items.push(variable);
    }

    function remove(index) {
      _items.splice(index, 1);
    }

    function update(index, variable) {
      _validateInsertion(variable);

      _items[index] = variable;
    }

    function getStaticVariableList() {
      return _items;
    }

    function _findVariableIndex(name, sending) {
      return _items.findIndex(item => {
        return item.name === name && item.sending === sending;
      });
    }

    function _validateInsertion(variable) {
      if (!variable.name) {
        throw new Error("Variable with empty name can't be added");
      }

      if (!variable.sending) {
        throw new Error("Variable with empty sending id can't be added");
      }
    }

    function fillVariableValues(variableArray) {

    }


  }
}());
