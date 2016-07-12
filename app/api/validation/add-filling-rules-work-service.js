(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .service('AddFillingRulesService', AddFillingRulesService);


    function AddFillingRulesService(){
        var self = this;

        self.execute = execute;

        function execute(item, validatorType) {
            return item.validate.createOption(validatorType);
        }
    }

}());
