(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('DistinctValidatorFactory', DistinctValidatorFactory);

    DistinctValidatorFactory.$inject = ['LabelFactory'];

    function DistinctValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new DistinctValidatorFactory(value, LabelFactory);
        }

        return self;
    }

    function DistinctValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'DistinctValidator';
        self.dataType = 'Integer';
        self.value = value;
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());
