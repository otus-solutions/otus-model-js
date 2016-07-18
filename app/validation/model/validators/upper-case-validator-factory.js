(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('UpperCaseValidatorFactory', UpperCaseValidatorFactory);

    UpperCaseValidatorFactory.$inject = ['LabelFactory'];

    function UpperCaseValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new UpperCaseValidator(value, LabelFactory);
        }

        return self;
    }

    function UpperCaseValidator(value, LabelFactory) {
        var self = this;

        self.reference = true;
    }

}());
