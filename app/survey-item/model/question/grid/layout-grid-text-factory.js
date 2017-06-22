(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.LayoutGridTextFactory', LayoutGridTextFactory);

  LayoutGridTextFactory.$inject = [];

  function LayoutGridTextFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(width) {
      return new LayoutGridText(width);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LayoutGridTextFactory.fromJsonObject() method expects to receive a object instead a String");
      }

      var width = jsonObject.width;
      var layoutGridText = new LayoutGridText(width);

      return layoutGridText;
    }

    return self;
  }

  function LayoutGridText(width) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = "LayoutGridText";
    self.width = width || 100;

    /* Public methods */
    self.setWidth = setWidth;
    self.getWidth = getWidth;
    self.toJson = toJson;

    function setWidth(width) {
      self.width = width;
    }

    function getWidth() {
      return self.width;
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.width = self.width;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
