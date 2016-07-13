(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ScaleValidatorFactory', ScaleValidatorFactory);

    ScaleValidatorFactory.$inject = ['LabelFactory'];

    function ScaleValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new ScaleValidator(value, LabelFactory);
        }

        return self;
    }

    function ScaleValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'ScaleValidator';
        self.dataType = 'Integer';
        self.value = value;
    }

}());
