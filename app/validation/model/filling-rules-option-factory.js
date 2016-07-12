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

        function createOption() {
            var option = RulesFactory.create(self.options.length + 1);
            self.options.push(option);
            return option;
        }

    }

}());
