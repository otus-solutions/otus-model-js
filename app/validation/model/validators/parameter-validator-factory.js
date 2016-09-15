(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ParameterValidatorFactory', ParameterValidatorFactory);

    function ParameterValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new ParameterValidator(value);
        }

        return self;
    }

    function ParameterValidator(value) {
        var self = this;

        self.reference = '';
    }

}());
