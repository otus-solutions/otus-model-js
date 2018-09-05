(function() {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('otusjs.model.survey.DataSourceDefinitionFactory', Factory);

  function Factory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(name) {
      return new DataSourceDefinition(name);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.DataSourceDefinitionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var dataSource = new DataSourceDefinition(jsonObject.name);
      jsonObject.bindTo.forEach(function(itemID) {
        dataSource.performBind(itemID);
      });
      return dataSource;
    }

    return self;
  }

  function DataSourceDefinition(name) {
    var self = this;

    var _objectType = 'DataSourceDefinition';
    var _id;
    var _name = name;
    var _bindTo = [];

    /* Public methods */
    self.isBinded = isBinded;
    self.getID = getID;
    self.getName = getName;
    self.performBind = performBind;
    self.removeBind = removeBind;
    self.getBindedItems = getBindedItems;
    self.toJson = toJson;

    _init();

    function _init() {
      /**
        TODO

        When the Studio is connected with Otus Domain, the ID property must be the OID of the Document on MongoDB.
        For a while the ID will be the attribute name without blank spaces and lower case.
        Example:
          Lista de Medicamentos
          _id = listademedicamentos
      */
      _id = name.toLowerCase().replace(/\s/g, '');
    }

    function isBinded() {
      return _bindTo.length > 0 ? true : false;
    }

    function getID() {
      return _id;
    }

    function getName() {
      return _name;
    }

    function performBind(templateID) {
      _bindTo.push(templateID);
    }

    function removeBind(templateID) {
      var idx = _bindTo.indexOf(templateID);
      _bindTo.splice(idx, 1);
    }

    function getBindedItems() {
      return _bindTo;
    }

    function toJson() {
      var json = {};

      json.objectType = _objectType;
      json.id = _id;
      json.name = _name;
      json.bindTo = _bindTo;

      return JSON.stringify(json);
    }
  }

}());
