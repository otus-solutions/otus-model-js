(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('AlphanumericValidatorFactory', AlphanumericValidatorFactory);

    function AlphanumericValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new AlphanumericValidator(value);
        }

        return self;
    }

    function AlphanumericValidator(value) {
        var self = this;

        self.reference = true;
    }

}());
