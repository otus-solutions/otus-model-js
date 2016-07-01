(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ValidationAnswerFactory', ValidationAnswerFactory);

    ValidationAnswerFactory.$inject = ['LabelFactory'];

    function ValidationAnswerFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new ValidationAnswer(value, LabelFactory);
        }

        return self;
    }

    function ValidationAnswer(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'ValidationAnswer';
        self.dataType = 'Integer';
        self.value = value;
        self.label = {
            'ptBR': LabelFactory.create(),
            'enUS': LabelFactory.create(),
            'esES': LabelFactory.create()
        };
    }

}());
