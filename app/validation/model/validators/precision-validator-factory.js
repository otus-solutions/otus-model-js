(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('PrecisionValidatorFactory', PrecisionValidatorFactory);

    PrecisionValidatorFactory.$inject = ['LabelFactory'];

    function PrecisionValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new PrecisionValidator(value, LabelFactory);
        }

        return self;
    }

    function PrecisionValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'PrecisionValidator';
        self.dataType = 'Integer';
        self.value = 0;
    }

}());
