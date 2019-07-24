(function() {
    'use strict';

    angular
        .module('otusjs.staticVariable')
        .service('otusjs.staticVariable.UpdateStaticVariableTaskService', UpdateStaticVariableService);

    function UpdateStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, index, variable) {
            return survey.StaticVariableManager.update(index, variable);
        }
    }

}());