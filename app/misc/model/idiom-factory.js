(function() {
  'use strict';

  angular
    .module('otusjs.misc')
    .factory('IdiomFactory', IdiomFactory);

  function IdiomFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new Idiom();
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.IdiomFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var label = new Idiom();

      label.oid = jsonObject.oid;
      label.plainText = jsonObject.plainText;
      label.formattedText = jsonObject.formattedText;

      return label;
    }

    return self;
  }

  function Idiom() {
    var self = this;

    self.extends = "StudioObject";
    self.objectType = "Label";
    self.oid = '';
    self.plainText = '';
    self.formattedText = '';

  }

}());
