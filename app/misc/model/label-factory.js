(function() {
  'use strict';

  angular
    .module('otusjs.misc')
    .factory('LabelFactory', LabelFactory);

  function LabelFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new Label();
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.LabelFactory.fromJson() method expects to receive a object instead a String");
      }
      var label = new Label();

      label.oid = json.oid;
      label.plainText = json.plainText;
      label.formattedText = json.formattedText;

      return label;
    }

    return self;
  }

  function Label() {
    var self = this;

    self.extends = "StudioObject";
    self.objectType = "Label";
    self.oid = '';
    self.plainText = '';
    self.formattedText = '';

  }

}());
