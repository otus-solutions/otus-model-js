(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('LowerCaseValidatorFactory', LowerCaseValidatorFactory);

    LowerCaseValidatorFactory.$inject = ['LabelFactory'];

    function LowerCaseValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new LowerCaseValidator(value, LabelFactory);
        }

        return self;
    }

    function LowerCaseValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'LowerCaseValidator';
        self.dataType = 'Boolean';
        self.value = value;
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());
