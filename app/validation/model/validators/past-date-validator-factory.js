(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('PastDateValidatorFactory', PastDateValidatorFactory);

    function PastDateValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new PastDateValidator(value);
        }

        return self;
    }

    function PastDateValidator(value) {
        var self = this;

        self.reference = false;
    }

}());
