(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('SpecialsValidatorFactory', SpecialsValidatorFactory);

    function SpecialsValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new SpecialsValidator(value);
        }

        return self;
    }

    function SpecialsValidator(value) {
        var self = this;

        self.reference = true;

    }

}());
