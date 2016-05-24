(function() {
    'use strict';

    angular
        .module('otusjs.metadata')
        .service('RemoveMetadataOptionService', RemoveMetadataOptionService);

    function RemoveMetadataOptionService() {
        var self = this;

        self.execute = execute;

        function execute(item) {
            item.metadata.removeLastOption();
        }
    }

}());
