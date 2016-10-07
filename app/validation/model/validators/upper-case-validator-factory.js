(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('UpperCaseValidatorFactory', UpperCaseValidatorFactory);

    function UpperCaseValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new UpperCaseValidator(value);
        }

        return self;
    }

    function UpperCaseValidator(value) {
        var self = this;

        self.reference = true;
    }

}());
