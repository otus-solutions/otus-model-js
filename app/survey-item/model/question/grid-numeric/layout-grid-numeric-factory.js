(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .factory('otusjs.model.question.LayoutGridNumericFactory', LayoutGridNumericFactory);

  LayoutGridNumericFactory.$inject = [];

  function LayoutGridNumericFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(width) {
      return new LayoutGridNumeric(width);
    }

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.misc.model.LayoutGridNumericFactory.fromJsonObject() method expects to receive a object instead a String");
      }

      var width = jsonObject.width;
      var layoutGridNumeric = new LayoutGridNumeric(width);

      return layoutGridNumeric;
    }

    return self;
  }

  function LayoutGridNumeric(width) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = "LayoutGridNumeric";
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
