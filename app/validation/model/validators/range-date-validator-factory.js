(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

    RangeDateValidatorFactory.$inject = ['LabelFactory'];

    function RangeDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new RangeDateValidator(value, LabelFactory);
        }

        return self;
    }

    function RangeDateValidator(value, LabelFactory) {
        var self = this;

        self.reference = {'initial': new Date(), 'end': new Date()};
    }

}());
