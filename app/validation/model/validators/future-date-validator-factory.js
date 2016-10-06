(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('FutureDateValidatorFactory', FutureDateValidatorFactory);

    function FutureDateValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new FutureDateValidator(value);
        }

        return self;
    }

    function FutureDateValidator(value) {
        var self = this;

        self.reference = false;
    }

}());
