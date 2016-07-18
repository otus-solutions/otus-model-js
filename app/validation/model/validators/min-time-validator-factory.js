(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinTimeValidatorFactory', MinTimeValidatorFactory);

    MinTimeValidatorFactory.$inject = ['LabelFactory'];

    function MinTimeValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinTimeValidator(value, LabelFactory);
        }

        return self;
    }

    function MinTimeValidator(value, LabelFactory) {
        var self = this;

        self.reference = '';
    }

}());
