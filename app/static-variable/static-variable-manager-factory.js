(function () {
  'use strict';

  angular
    .module('otusjs.staticVariable')
    .service('otusjs.staticVariable.StaticVariableManagerFactory', Factory);

  Factory.$inject = [
    'otusjs.staticVariable.SurveyStaticVariable'
  ];


  function Factory(SurveyStaticVariable) {
    var self = this;

    self.create = create;
    self.loadJsonData = loadJsonData;


    function create() {
      return new StaticVariableManager();
    }

    function loadJsonData(itemsArray) {
      var manager = create();

      itemsArray.forEach(item=> {
        manager.add(SurveyStaticVariable.fromJson(item));
      });
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
    self.updateStaticVariable = updateStaticVariable;
    self.getStaticVariableList = getStaticVariableList;


    function create() {
      return SurveyStaticVariable.create();
    }

    function add(variable) {
      _findVariableIndex(variable.name, variable.sending);
      _items.push(variable);
    }

    function remove(variable) {
      _items.splice(_findVariableIndex(variable.name, variable.sending), 1);
    }

    function updateStaticVariable(variable) {
      var index = _findVariableIndex(variable.name, variable.sending);
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


  }
}());
