(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinDateValidatorFactory', MinDateValidatorFactory);

    function MinDateValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinDateValidator(value);
        }

        return self;
    }

    function MinDateValidator(value) {
        var self = this;

        self.reference = new Date();
    }

}());
