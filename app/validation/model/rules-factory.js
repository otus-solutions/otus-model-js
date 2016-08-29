(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('RulesFactory', RulesFactory);

    RulesFactory.$inject = [
        'FillingRulesDataFactory'
    ];

    function RulesFactory(FillingRulesDataFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(validatorType) {
            return new Rule(FillingRulesDataFactory, validatorType);
        }

        return self;
    }

    function Rule(FillingRulesDataFactory, validatorType) {
        var self = this;
        self.extends = 'StudioObject';
        self.objectType = 'Rule';
        self.validatorType = validatorType;
        self.data = FillingRulesDataFactory.create(validatorType);
    }

}());
