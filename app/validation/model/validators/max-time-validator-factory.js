(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxTimeValidatorFactory', MaxTimeValidatorFactory);

    MaxTimeValidatorFactory.$inject = ['LabelFactory'];

    function MaxTimeValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxTimeValidator(value, LabelFactory);
        }

        return self;
    }

    function MaxTimeValidator(value, LabelFactory) {
        var self = this;

        self.reference = '';
    }

}());
