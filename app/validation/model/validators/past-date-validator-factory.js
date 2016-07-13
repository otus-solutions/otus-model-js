(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('PastDateValidatorFactory', PastDateValidatorFactory);

    PastDateValidatorFactory.$inject = ['LabelFactory'];

    function PastDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new PastDateValidator(value, LabelFactory);
        }

        return self;
    }

    function PastDateValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'PastDateValidator';
        self.dataType = 'LocalDate';
        self.value = new Date();
    }

}());
