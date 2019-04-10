(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .service('MoveSurveyItemService', MoveSurveyItemService);

  function MoveSurveyItemService() {
    var self = this;

    self.execute = execute;

    function execute(survey, item, position) {
      survey.moveItem(item, position);
    }
  }

}());
