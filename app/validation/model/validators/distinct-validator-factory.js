(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('DistinctValidatorFactory', DistinctValidatorFactory);

    function DistinctValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new DistinctValidatorFactory(value);
        }

        return self;
    }

    function DistinctValidator(value) {
        var self = this;

        self.reference = null;
    }

}());
