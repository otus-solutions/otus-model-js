(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('FuturedateValidatorFactory', FuturedateValidatorFactory);

    FuturedateValidatorFactory.$inject = ['LabelFactory'];

    function FuturedateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new FuturedateValidator(value, LabelFactory);
        }

        return self;
    }

    function FuturedateValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'FuturedateValidator';
        self.dataType = 'String';
        self.value = value;
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());
