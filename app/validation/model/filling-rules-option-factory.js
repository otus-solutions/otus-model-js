(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('FillingRulesOptionFactory', FillingRulesOptionFactory);

    FillingRulesOptionFactory.$inject = ['RulesFactory'];

    function FillingRulesOptionFactory(RulesFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create() {
            return new FillingRules(RulesFactory);
        }

        return self;
    }

    function FillingRules(RulesFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'FillingRules';
        self.options = [];

        /* Public methods */
        self.createOption = createOption;
        self.removeLastValidator = removeLastValidator;

        function createOption(type) {
            var option = RulesFactory.create(type);
            self.options[type] = option;
            return option;
        }

        function removeLastValidator() {
            self.options.splice(-1, 1);
            //TODO
            //verificar se funciona para dicionario
        }

    }

}());
