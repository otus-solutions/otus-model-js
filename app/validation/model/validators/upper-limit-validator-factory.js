(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('UpperLimitValidatorFactory', UpperLimitValidatorFactory);

    UpperLimitValidatorFactory.$inject = ['LabelFactory'];

    function UpperLimitValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new UpperLimitValidator(value, LabelFactory);
        }

        return self;
    }

    function UpperLimitValidator(value, LabelFactory) {
        var self = this;

        self.reference = null;
    }

}());
