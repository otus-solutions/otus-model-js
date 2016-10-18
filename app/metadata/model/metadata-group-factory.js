(function() {
  'use strict';

  angular
    .module('otusjs.metadata')
    .factory('MetadataGroupFactory', MetadataGroupFactory);

  MetadataGroupFactory.$inject = ['MetadataAnswerFactory'];

  function MetadataGroupFactory(MetadataAnswerFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MetadataGroup(MetadataAnswerFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.MetadataGroupFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var metadaGroup = new MetadataGroup();

      jsonObject.options.forEach(function(metadataAnswerOption){
        metadaGroup.options.push(MetadataAnswerFactory.fromJsonObject(metadataAnswerOption));
      });

      return metadaGroup;
    }

    return self;
  }

  function MetadataGroup(MetadataAnswerFactory) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'MetadataGroup';
    self.options = [];

    /* Public methods */
    self.getOptionListSize = getOptionListSize;
    self.getOptionByValue = getOptionByValue;
    self.createOption = createOption;
    self.removeOption = removeOption;
    self.removeLastOption = removeLastOption;

    function getOptionListSize() {
      return self.options.length;
    }

    function getOptionByValue(value) {
      return self.options[value - 1];
    }

    function createOption() {
      var option = MetadataAnswerFactory.create(self.options.length + 1);
      self.options.push(option);
      return option;
    }

    function removeOption(value) {
      self.options.splice((value - 1), 1);
      reorderOptionValues();
    }

    function removeLastOption() {
      self.options.splice(-1, 1);
    }

    function reorderOptionValues() {
      self.options.forEach(function(option, index) {
        option.value = ++index;
      });
    }
  }

}());
