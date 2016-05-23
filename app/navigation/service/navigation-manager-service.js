(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('NavigationManagerService', NavigationManagerService);

    NavigationManagerService.$inject = [
        'NavigationContainerService',
        'NavigationAddService',
        'NavigationRemoveService'
    ];

    function NavigationManagerService(NavigationContainerService, NavigationAddService, NavigationRemoveService) {
        var self = this;

        /* Public interface */
        self.init = init;
        self.getNavigationList = getNavigationList;
        self.getNavigationByOrigin = getNavigationByOrigin;
        self.addNavigation = addNavigation;
        self.removeNavigation = removeNavigation;

        function init() {
            NavigationContainerService.init();
        }

        function getNavigationList() {
            return NavigationContainerService.getNavigationList();
        }

        function getNavigationByOrigin(origin) {
            return NavigationContainerService.getNavigationByOrigin(origin);
        }

        function addNavigation() {
            NavigationAddService.execute();
        }

        function removeNavigation(templateID) {
            NavigationRemoveService.execute(templateID);
        }
    }

}());
