(function() {
    'use strict';

    angular
        .module('otusjs.staticVariable')
        .service('otusjs.staticVariable.AddStaticVariableService', AddStaticVariableService);

    function AddStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, variable) {
            return survey.addStaticVariable(variable);
        }
    }

}());
