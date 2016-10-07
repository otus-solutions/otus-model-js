(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinTimeValidatorFactory', MinTimeValidatorFactory);

    function MinTimeValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinTimeValidator(value);
        }

        return self;
    }

    function MinTimeValidator(value) {
        var self = this;

        self.reference = '';
    }

}());
