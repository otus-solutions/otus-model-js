(function() {
  'use strict';

  angular
    .module('otusjs.surveyItem')
    .service('UpdateSurveyItemCustomID', UpdateSurveyItemCustomID);

  function UpdateSurveyItemCustomID() {
    var self = this;

    self.execute = execute;

    function execute(item, id, survey) {
      // it needs a service to validate if is a valid or available id
      item.customID = id;
    }
  }
}());
