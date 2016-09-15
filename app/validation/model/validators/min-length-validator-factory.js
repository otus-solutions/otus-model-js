(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinLengthValidatorFactory', MinLengthValidatorFactory);

    function MinLengthValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinLengthValidator(value);
        }

        return self;
    }

    function MinLengthValidator(value) {
        var self = this;

        self.size = null;
    }

}());
