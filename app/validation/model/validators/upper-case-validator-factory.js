(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('UpperCaseValidatorFactory', UpperCaseValidatorFactory);

    UpperCaseValidatorFactory.$inject = ['LabelFactory'];

    function UpperCaseValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new UpperCaseValidator(value, LabelFactory);
        }

        return self;
    }

    function UpperCaseValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'UpperCaseValidator';
        self.dataType = 'Boolean';
        self.value = value;
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());
