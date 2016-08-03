(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxDateValidatorFactory', MaxDateValidatorFactory);

    MaxDateValidatorFactory.$inject = ['LabelFactory'];

    function MaxDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxDateValidator(value, LabelFactory);
        }

        return self;
    }

    function MaxDateValidator(value, LabelFactory) {
        var self = this;

        self.reference = new Date();
    }

}());
