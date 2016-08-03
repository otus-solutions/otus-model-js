(function() {
    'use strict';

    angular
        .module('utils')
        .service('ValidatorIDService', ValidatorIDService);

    ValidatorIDService.$inject = ['SurveyItemFactory'];

    function ValidatorIDService(SurveyItemFactory){
        var self = this;

        self.isAvailable = isAvailable;

        function isAvailable(questionID) {
            return(getValidatorID(questionID)) ? true : false;
        }

        function getValidatorID() {
            //pegar elemento da tela.
        }
    }
}());
