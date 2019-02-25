(function () {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('otusjs.survey.GroupFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(name, surveyAcronyms) {
      if (typeof name !== "string") {
        throw Error("Name should be a string");
      }

      if (surveyAcronyms && !Array.isArray(surveyAcronyms)) {
        throw Error("surveyAcronyms should be an array");
      }

      return new SurveyGroup(name, surveyAcronyms);
    }

    return self;
  }

  function SurveyGroup(name, surveyAcronyms) {
    var self = this;

    self.objectType = 'SurveyGroup';
    self.name = name;
    self.surveys = surveyAcronyms || [];

    if (!self.name) {
      throw new Error("Name should be provided");
    }

    /* Public methods */
    self.getName = getName;
    self.getSurveys = getSurveys;
    self.addSurvey = addSurvey;
    self.removeSurvey = removeSurvey;

    function getName() {
      return self.name;
    }

    function getSurveys() {
      return self.surveys;
    }

    function addSurvey(acronym) {
      if (self.surveys.indexOf(acronym) !== -1) {
        throw new Error("Survey already in the group");
      }
      self.surveys.push(acronym);
      return self;
    }

    function removeSurvey(acronym) {
      let index = self.surveys.indexOf(acronym);

      if (index === -1) {
        throw new Error("Survey not found in the group");
      }
      self.surveys.splice(acronym, 1);

      return self;
    }

  }

}());
