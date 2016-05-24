(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('NavigationAddService', NavigationAddService);

    NavigationAddService.$inject = [
        'NavigationContainerService',
        'SurveyItemContainerService'
    ];

    function NavigationAddService(NavigationContainerService, SurveyItemContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute() {
            var itemCount = SurveyItemContainerService.getItemListSize();

            if (itemCount > 1) {
                var origin = SurveyItemContainerService.getItemByPosition(itemCount - 2);
                var destination = SurveyItemContainerService.getItemByPosition(itemCount - 1);

                NavigationContainerService.createNavigationTo(origin.templateID, destination.templateID);
            }
        }
    }

}());
