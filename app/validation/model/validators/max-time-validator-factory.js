(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxTimeValidatorFactory', MaxTimeValidatorFactory);

    function MaxTimeValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxTimeValidator(value);
        }

        return self;
    }

    function MaxTimeValidator(value) {
        var self = this;

        self.reference = '';
    }

}());
