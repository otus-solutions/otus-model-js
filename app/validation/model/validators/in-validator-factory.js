(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('InValidatorFactory', InValidatorFactory);

    function InValidatorFactory() {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new InValidator(value);
        }

        return self;
    }

    function InValidator(value) {
        var self = this;

        self.reference = {'initial':null, 'end': null};
    }

}());
