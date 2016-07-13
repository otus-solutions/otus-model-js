(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MinLengthValidatorFactory', MinLengthValidatorFactory);

    MinLengthValidatorFactory.$inject = ['LabelFactory'];

    function MinLengthValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MinLengthValidator(value, LabelFactory);
        }

        return self;
    }

    function MinLengthValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'MinLengthValidator';
        self.dataType = 'Integer';
        self.value = value;
    }

}());
