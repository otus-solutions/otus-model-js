(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinDateValidatorFactory', MinDateValidatorFactory);

    MinDateValidatorFactory.$inject = ['LabelFactory'];

    function MinDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinDateValidator(value, LabelFactory);
        }

        return self;
    }

    function MinDateValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'MinDateValidator';
        self.dataType = 'Date';
        self.value = value;
    }

}());
