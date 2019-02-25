(function () {
  'use strict';

  angular
    .module('otusjs.survey')
    .factory('otusjs.survey.BlockFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;

    function create(name, surveyAcronyms) {
      return new SurveyBlock(name, surveyAcronyms);
    }

    return self;
  }

  function SurveyBlock(name, surveyAcronyms) {
    var self = this;

    self.objectType = 'SurveyBlock';
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
      return surveys;
    }

    function addSurvey(acronym) {
      if (surveys.indexOf(acronym) !== -1) {
        throw new Error("Survey already in the block");
      }
      self.surveys.push(acronym);
      return self;
    }

    function removeSurvey(acronym) {
      let index = surveys.indexOf(acronym);

      if (index === -1) {
        throw new Error("Survey not found in the block");
      }
      self.surveys.splice(acronym);

      return self;
    }

  }

}());
