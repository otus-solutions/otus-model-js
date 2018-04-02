(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('QuestionOptionFactory', QuestionOptionFactory);

  QuestionOptionFactory.$inject = ['OptionItemFactory'];

  function QuestionOptionFactory(OptionItemFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new QuestionOption(OptionItemFactory);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.QuestionOptionFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      var options = new QuestionOption(OptionItemFactory);
      for (var object in jsonObject.data) {
        options.data[object] = OptionItemFactory.fromJsonObject(jsonObject.data[object]);
      }
      return options;
    }

    return self;
  }

  function QuestionOption(OptionItemFactory) {
    var self = this;

    self.extends = 'StudioObject';
    self.objectType = 'QuestionOption';
    self.data = {};

    /* Public methods */
    self.createOption = createOption;
    self.removeOption = removeOption;


    function createOption(name, value) {
      var option = OptionItemFactory.create(name, value);
      self.data[name] = option;
      return option;
    }

    function removeOption(name) {
      delete self.data[name];
    }

  }

}());
