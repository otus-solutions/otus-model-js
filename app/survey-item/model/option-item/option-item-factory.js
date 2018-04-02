(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('OptionItemFactory', OptionItemFactory);

  function OptionItemFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(optionName, optionValue) {
      return new Option(optionName, optionValue);
    }

    function fromJsonObject(option) {
      if(option.objectType === 'OptionItem'){
          return new Option(option.name, option.value);
      } else {
        return [];
      }
    }

    return self;
  }

  function Option(name, value) {
    var self = this;
    self.extends = 'StudioObject';
    self.objectType = 'OptionItem';
    self.name = name;
    self.value = value;
  }

}());
