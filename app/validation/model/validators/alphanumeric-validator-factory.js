(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('AlphanumericValidatorFactory', AlphanumericValidatorFactory);

    AlphanumericValidatorFactory.$inject = ['LabelFactory'];

    function AlphanumericValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new AlphanumericValidator(value, LabelFactory);
        }

        return self;
    }

    function AlphanumericValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'AlphanumericValidator';
        self.dataType = 'Boolean';
        self.value = false;
    }

}());
