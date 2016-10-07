(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxLengthValidatorFactory', MaxLengthValidatorFactory);

    function MaxLengthValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxLengthValidator(value);
        }

        return self;
    }

    function MaxLengthValidator(value) {
        var self = this;

        self.reference = null;
    }

}());
