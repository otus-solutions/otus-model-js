(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

    function RangeDateValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new RangeDateValidator(value);
        }

        return self;
    }

    function RangeDateValidator(value) {
        var self = this;

        self.reference = {'initial': new Date(), 'end': new Date()};
    }

}());
