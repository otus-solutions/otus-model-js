(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.BlockFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;
    self.fromJsonObject = fromJsonObject;


    return self;
  }

  function SurveyBlock() {
    var self = this;

    self.objectType = 'SurveyBlock';

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {};


      return json;
    }
  }

}());
