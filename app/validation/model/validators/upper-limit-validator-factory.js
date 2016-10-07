(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('UpperLimitValidatorFactory', UpperLimitValidatorFactory);

    function UpperLimitValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new UpperLimitValidator(value);
        }

        return self;
    }

    function UpperLimitValidator(value) {
        var self = this;

        self.reference = null;
    }

}());
