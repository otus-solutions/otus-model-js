(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('AddOptionItemService', AddOptionItemService);


    function AddOptionItemService(){
        var self = this;

        self.execute = execute;

        function execute(item, optionName, optionValue) {
            return item.options.createOption(optionName, optionValue);
        }
    }

}());
