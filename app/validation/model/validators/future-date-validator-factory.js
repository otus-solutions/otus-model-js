(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('FutureDateValidatorFactory', FutureDateValidatorFactory);

    FutureDateValidatorFactory.$inject = ['LabelFactory'];

    function FutureDateValidatorFactory(LabelFactory) {
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
