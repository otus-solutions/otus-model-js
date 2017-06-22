(function() {
  'use strict';

  angular
    .module('otusjs.misc')
    .factory('LabelFactory', LabelFactory);

  LabelFactory.$inject = ['IdiomFactory'];

  function LabelFactory(IdiomFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      var labelObject = {};

      labelObject.ptBR = IdiomFactory.create();
      labelObject.enUS = IdiomFactory.create();
      labelObject.esES = IdiomFactory.create();

      return labelObject;
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LabelFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var labelObject = {};

      labelObject.ptBR = IdiomFactory.fromJsonObject(jsonObject.ptBR);
      labelObject.enUS = IdiomFactory.fromJsonObject(jsonObject.enUS);
      labelObject.esES = IdiomFactory.fromJsonObject(jsonObject.esES);

      return labelObject;
    }

    return self;
  }

}());
