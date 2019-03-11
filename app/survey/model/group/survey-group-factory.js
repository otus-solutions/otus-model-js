(function () {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('otusjs.survey.GroupFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJson = fromJson;

    function create(name, surveyAcronyms) {
      if (typeof name !== "string") {
        throw Error("Name should be a string");
      }

      if (surveyAcronyms && !Array.isArray(surveyAcronyms)) {
        throw Error("surveyAcronyms should be an array");
      }

      return new SurveyGroup(name, surveyAcronyms);
    }

    function fromJson(groupJson) {
      return create(groupJson.name, groupJson.surveyAcronyms)
    }

    return self;
  }

  function SurveyGroup(name, surveyAcronyms) {
    var self = this;

    self.objectType = 'SurveyGroup';
    self.name = name;
    self.surveyAcronyms = surveyAcronyms || [];

    if (!self.name) {
      throw new Error("Name should be provided");
    }

    /* Public methods */
    self.getName = getName;
    self.getSurveys = getSurveys;
    self.addSurvey = addSurvey;
    self.removeSurvey = removeSurvey;
    self.toJSON = toJSON;


    function getName() {
      return self.name;
    }

    function getSurveys() {
      return self.surveyAcronyms;
    }

    function addSurvey(acronym) {
      if (self.surveyAcronyms.indexOf(acronym) !== -1) {
        throw new Error("Survey already in the group");
      }
      self.surveyAcronyms.push(acronym);
      return self;
    }

    function removeSurvey(acronym) {
      let index = self.surveyAcronyms.indexOf(acronym);

      if (index === -1) {
        throw new Error("Survey not found in the group");
      }
      self.surveyAcronyms.splice(index, 1);

      return self;
    }

    function toJSON() {
      return {
        name: self.name,
        surveyAcronyms: self.surveyAcronyms
      };
    }

  }

}());
