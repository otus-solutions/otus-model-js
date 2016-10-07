(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxDateValidatorFactory', MaxDateValidatorFactory);

    function MaxDateValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxDateValidator(value);
        }

        return self;
    }

    function MaxDateValidator(value) {
        var self = this;

        self.reference = new Date();
    }

}());
