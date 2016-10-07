(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('LowerCaseValidatorFactory', LowerCaseValidatorFactory);

    function LowerCaseValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new LowerCaseValidator(value);
        }

        return self;
    }

    function LowerCaseValidator(value) {
        var self = this;

        self.reference = true;
    }

}());
