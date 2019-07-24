(function() {
    'use strict';

    angular
        .module('otusjs.staticVariable')
        .service('otusjs.staticVariable.RemoveStaticVariableService', RemoveStaticVariableService);

    function RemoveStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, index) {
            return survey.removeStaticVariable(index);
        }
    }

}());
