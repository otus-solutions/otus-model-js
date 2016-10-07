(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('PrecisionValidatorFactory', PrecisionValidatorFactory);

    function PrecisionValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new PrecisionValidator(value);
        }

        return self;
    }

    function PrecisionValidator(value) {
        var self = this;

        self.reference = null;
    }

}());
