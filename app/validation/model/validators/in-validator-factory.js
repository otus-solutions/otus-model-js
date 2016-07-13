(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('InValidatorFactory', InValidatorFactory);

    InValidatorFactory.$inject = ['LabelFactory'];

    function InValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new InValidator(value, LabelFactory);
        }

        return self;
    }

    function InValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'InValidator';
        self.dataType = 'Array';
        self.value = value;
    }

}());
