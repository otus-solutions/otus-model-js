(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .factory('otusjs.model.activity.BlockManagerFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;
    self.fromJsonObject = fromJsonObject;


    return self;
  }

  function SurveyBlockManager() {
    var self = this;
    var blockList = [];

    self.objectType = 'SurveyBlockManager';

    /* Public methods */
    self.toJSON = toJSON;

    function getBlockName(surveyAcronym) {

    }

    function getAcronymList () {

    }

    function toJSON() {
      var json = {};


      return json;
    }
  }

}());
