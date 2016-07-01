(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ValidationOptionFactory', ValidationOptionFactory);

    ValidationOptionFactory.$inject = ['ValidationAnswerFactory'];

    function ValidationOptionFactory(ValidationAnswerFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create() {
            return new ValidationOption(ValidationAnswerFactory);
        }

        return self;
    }

    function ValidationOption(ValidationAnswerFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'ValidationOption';
        self.options = [];

        /* Public methods */
        self.createOption = createOption;

        function createOption() {
            var option = ValidationAnswerFactory.create(self.options.length + 1);
            self.options.push(option);
            return option;
        }

    }

}());
