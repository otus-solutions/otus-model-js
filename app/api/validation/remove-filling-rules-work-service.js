(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .service('RemoveFillingRulesWorkService', RemoveFillingRulesWorkService);

    function RemoveFillingRulesWorkService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            item.fillingRules.removeLastValidator();
        }
    }

}());
