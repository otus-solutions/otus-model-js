 (function() {
     'use strict';

     angular
         .module('utils')
         .service('SurveyUUIDGenerator', SurveyUUIDGenerator);

     SurveyUUIDGenerator.$inject = ['$window', 'UUIDService'];

     function SurveyUUIDGenerator($window, UUIDService) {
         var self = this;

         self.generateSurveyUUID = generateSurveyUUID;

         function generateSurveyUUID() {
             var userUUID = "userUUID:[" + $window.sessionStorage.userUUID + "]";
             var surveyUUID = "surveyUUID:[" + UUIDService.generateUUID() + "]";
             var repositoryUUID = "repositoryUUID:[ Not done yet ]";
             return Base64.encode(userUUID + surveyUUID + repositoryUUID);
         }
     }

 }());
