(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('RangedateValidatorFactory', RangedateValidatorFactory);

    RangedateValidatorFactory.$inject = ['LabelFactory'];

    function RangedateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new RangedateValidator(value, LabelFactory);
        }

        return self;
    }

    function RangedateValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'RangedateValidator';
        self.dataType = 'String';
        self.value = value;
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());
