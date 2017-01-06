(function() {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('SurveyMetaInfoFactory', SurveyMetaInfoFactory);

  function SurveyMetaInfoFactory() {
    var self = this;
    
    self.OBJECT_TYPE = 'SurveyMetaInfo';

    /* Public interdace */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function fromJsonObject(jsonObject) {
      if (typeof jsonObject === 'string') {
        throw new Error("otusjs.model.survey.model.SurveyMetaInfoFactory.fromJsonObject() method expects to receive a object instead a String");
      }
      return new SurveyMetaInfo(jsonObject.creationDatetime);
    }

    function create() {
      var now = Date.now();
      return new SurveyMetaInfo(now);
    }

    return self;
  }

  function SurveyMetaInfo(creationDatetime) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'SurveyMetaInfo';
    self.creationDatetime = creationDatetime;
    self.otusStudioVersion = '';

    self.toJson = toJson;

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.creationDatetime = self.creationDatetime;
      json.otusStudioVersion = self.otusStudioVersion;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
