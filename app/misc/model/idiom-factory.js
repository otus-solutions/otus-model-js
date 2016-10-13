(function() {
  'use strict';

  angular
    .module('otusjs.misc')
    .factory('IdiomFactory', IdiomFactory);

  function IdiomFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new Idiom();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.IdiomFactory.fromJson() method expects to receive a object instead a String");
      }
      var label = new Idiom();

      label.oid = json.oid;
      label.plainText = json.plainText;
      label.formattedText = json.formattedText;

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
