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
    self.fromJson = fromJson;

    function create() {
      var labelObject = {};

      labelObject.ptBR = IdiomFactory.create();
      labelObject.enUS = IdiomFactory.create();
      labelObject.esES = IdiomFactory.create();

      return labelObject;
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.LabelFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = {};

      labelObject.ptBR = IdiomFactory.fromJson(json.ptBR);
      labelObject.enUS = IdiomFactory.fromJson(json.enUS);
      labelObject.esES = IdiomFactory.fromJson(json.esES);

      return labelObject;
    }

    return self;
  }

}());
