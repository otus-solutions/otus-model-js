(function() {
    'use strict';

    angular
        .module('otusjs.staticVariable')
        .service('otusjs.staticVariable.UpdateStaticVariableService', UpdateStaticVariableService);

    function UpdateStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, index, variable) {
            return survey.updateStaticVariable(index, variable);
        }
    }

}());
