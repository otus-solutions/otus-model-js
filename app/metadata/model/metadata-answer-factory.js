(function() {
  'use strict';

  angular
    .module('otusjs.metadata')
    .factory('MetadataAnswerFactory', MetadataAnswerFactory);

  MetadataAnswerFactory.$inject = ['LabelFactory'];

  function MetadataAnswerFactory(LabelFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(value) {
      var labelObject = {};

      labelObject.ptBR = LabelFactory.create();
      labelObject.enUS = LabelFactory.create();
      labelObject.esES = LabelFactory.create();

      return new MetadataAnswer(value, labelObject);
    }

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.misc.model.MetadataAnswerFactory.fromJson() method expects to receive a object instead a String");
      }
      var labelObject = {};

      labelObject.ptBR = LabelFactory.fromJson(json.ptBR);
      labelObject.enUS = LabelFactory.fromJson(json.enUS);
      labelObject.esES = LabelFactory.fromJson(json.esES);

      return new MetadataAnswer(json.value, labelObject);
    }

    return self;
  }

  function MetadataAnswer(value, labelObject) {
    var self = this;

    self.extends = 'StudioObject';
    self.objectType = 'MetadataAnswer';
    self.dataType = 'Integer';
    self.value = value;
    self.label = {
      'ptBR': labelObject.ptBR,
      'enUS': labelObject.enUS,
      'esES': labelObject.esES
    };
  }

}());
