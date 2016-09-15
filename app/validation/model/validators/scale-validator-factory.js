(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ScaleValidatorFactory', ScaleValidatorFactory);

    function ScaleValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new ScaleValidator(value);
        }

        return self;
    }

    function ScaleValidator(value) {
        var self = this;

        self.reference = null;
    }

}());
