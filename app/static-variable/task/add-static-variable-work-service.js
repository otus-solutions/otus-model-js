(function() {
    'use strict';

    angular
        .module('otusjs.staticVariable')
        .service('otusjs.staticVariable.AddStaticVariableTaskService', AddStaticVariableService);

    function AddStaticVariableService() {
        var self = this;

        self.execute = execute;

        function execute(survey, variable) {
            return survey.StaticVariableManager.add(variable);
        }
    }

}());
