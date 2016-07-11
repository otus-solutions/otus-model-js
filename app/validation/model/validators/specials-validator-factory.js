(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('SpecialsValidatorFactory', SpecialsValidatorFactory);

    SpecialsValidatorFactory.$inject = ['LabelFactory'];

    function SpecialsValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new SpecialsValidator(value, LabelFactory);
        }

        return self;
    }

    function SpecialsValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'SpecialsValidator';
        self.dataType = 'Boolean';
        self.value = value;
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());
