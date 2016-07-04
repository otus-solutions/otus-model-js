(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .service('AddValidationService', AddValidationService);


    function AddValidationService(){
        var self = this;

        self.execute = execute;

        function execute(item) {
            return item.validate.createOption();
        }
    }

}());
