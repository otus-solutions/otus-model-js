(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('PastdateValidatorFactory', PastdateValidatorFactory);

    PastdateValidatorFactory.$inject = ['LabelFactory'];

    function PastdateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new PastdateValidator(value, LabelFactory);
        }

        return self;
    }

    function PastdateValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'PastdateValidator';
        self.dataType = 'String';
        self.value = value;
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());
