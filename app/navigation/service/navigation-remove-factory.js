(function() {
    'use strict';

    angular
        .module('otusjs.navigation')
        .service('NavigationRemoveService', NavigationRemoveService);

    NavigationRemoveService.$inject = ['NavigationContainerService'];

    function NavigationRemoveService(NavigationContainerService) {
        var self = this;

        /* Public methods */
        self.execute = execute;

        function execute(templateID) {
            if (NavigationContainerService.existsNavigationTo(templateID)) {
                var navigationToRecicle = NavigationContainerService.getNavigationByOrigin(templateID);
                var positionToRecicle = NavigationContainerService.getNavigationPosition(templateID);

                if (positionToRecicle && positionToRecicle !== 0) {
                    var navigationToUpdate = NavigationContainerService.getNavigationByPosition(positionToRecicle - 1);
                    navigationToUpdate.routes[0].destination = navigationToRecicle.routes[0].destination;
                }

                NavigationContainerService.removeNavigationOf(templateID);
            } else {
                NavigationContainerService.removeCurrentLastNavigation();
            }
        }
    }

}());
