(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('LowerLimitValidatorFactory', LowerLimitValidatorFactory);

    function LowerLimitValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new LowerLimitValidator(value);
        }

        return self;
    }

    function LowerLimitValidator(value) {
        var self = this;

        self.reference = null;
    }

}());
