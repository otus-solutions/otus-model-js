(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MandatoryValidatorFactory', MandatoryValidatorFactory);

    function MandatoryValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MandatoryValidator(value);
        }

        return self;
    }

    function MandatoryValidator(value) {
        var self = this;

        self.reference = false;
    }

}());
