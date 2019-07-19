(function() {
    'use strict';

    angular
        .module('otusjs.staticVariable')
        .service('otusjs.staticVariable.UpdateStaticVariableService', UpdateStaticVariableService);

    function UpdateStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, variable) {
            return survey.updateStaticVariable(variable);
        }
    }

}());
