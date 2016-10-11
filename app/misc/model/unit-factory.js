(function() {
  'use strict';

  angular
    .module('otusjs.misc')
    .factory('UnitFactory', UnitFactory);

  function UnitFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new Unit();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.UnitFactory.fromJson() method expects to receive a object instead a String");
      }
      var unit = new Unit();

      unit.oid = json.oid;
      unit.plainText = json.plainText;
      unit.formattedText = json.formattedText;

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
