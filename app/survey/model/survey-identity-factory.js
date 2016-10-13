(function() {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('SurveyIdentityFactory', SurveyIdentityFactory);

  function SurveyIdentityFactory() {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function fromJson(json) {
      if (typeof json === 'string') {
        throw new Error("otusjs.model.survey.model.SurveyIdentityFactory.fromJson() method expects to receive a object instead a String");
      }
      var surveyIdentity = new SurveyIdentity(json.name, json.acronym, json.version);

      surveyIdentity.recommendedTo = json.recommendedTo;
      surveyIdentity.description = json.description;
      surveyIdentity.keywords = json.keywords;

      return surveyIdentity;
    }

    function create(name, acronym, version) {
      return new SurveyIdentity(name, acronym, version);
    }

    return self;
  }

  function SurveyIdentity(name, acronym) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'SurveyIdentity';
    self.name = name;
    self.acronym = acronym;
    self.recommendedTo = '';
    self.description = '';
    self.keywords = [];

    self.toJson = toJson;

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.name = self.name;
      json.acronym = self.acronym;
      json.recommendedTo = self.recommendedTo;
      json.description = self.description;
      json.keywords = self.keywords;

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }

}());
