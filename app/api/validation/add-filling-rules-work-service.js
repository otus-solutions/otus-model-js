(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .service('AddFillingRulesService', AddFillingRulesService);


    function AddFillingRulesService(){
        var self = this;

        self.execute = execute;

        function execute(item) {
            return item.validate.createOption();
        }
    }

}());
