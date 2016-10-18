(function() {
  'use strict';

  angular
    .module('otusjs.misc')
    .factory('UnitFactory', UnitFactory);

  function UnitFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new Unit();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.UnitFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var unit = new Unit();

      unit.oid = jsonObject.oid;
      unit.plainText = jsonObject.plainText;
      unit.formattedText = jsonObject.formattedText;

      return unit;
    }

    return self;
  }

  function Unit() {
    var self = this;

    self.extends = "StudioObject";
    self.objectType = "Unit";
    self.oid = '';
    self.plainText = '';
    self.formattedText = '';
  }

}());
