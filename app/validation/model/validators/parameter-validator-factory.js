(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ParameterValidatorFactory', ParameterValidatorFactory);

    ParameterValidatorFactory.$inject = ['LabelFactory'];

    function ParameterValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new ParameterValidator(value, LabelFactory);
        }

        return self;
    }

    function ParameterValidator(value, LabelFactory) {
        var self = this;

        self.reference = '';
    }

}());
