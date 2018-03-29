(function() {
    'use strict';

    angular
        .module('otusjs.surveyItem')
        .service('RemoveOptionItemService', RemoveOptionItemService);

    function RemoveOptionItemService() {
        var self = this;

        self.execute = execute;

        function execute(item, optionName) {
            item.options.removeOption(optionName);
        }
    }

}());
