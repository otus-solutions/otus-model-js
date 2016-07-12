(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('RulesFactory', RulesFactory);

    function RulesFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(type) {
            return new Rule(type);
        }

        return self;
    }

    function Rule(type) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'Rule';
        // self.type = type;
        // self.data = FactoryDataRule.create(type)
    }

}());
