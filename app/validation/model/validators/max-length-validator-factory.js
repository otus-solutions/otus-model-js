(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MaxLengthValidatorFactory', MaxLengthValidatorFactory);

    MaxLengthValidatorFactory.$inject = ['LabelFactory'];

    function MaxLengthValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MaxLengthValidator(value, LabelFactory);
        }

        return self;
    }

    function MaxLengthValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'MaxLengthValidator';
        self.dataType = 'Integer';
        self.value = value;
    }

}());
