(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('MandatoryValidatorFactory', MandatoryValidatorFactory);

    MandatoryValidatorFactory.$inject = ['LabelFactory'];

    function MandatoryValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new MandatoryValidator(value, LabelFactory);
        }

        return self;
    }

    function MandatoryValidator(value, LabelFactory) {
        var self = this;

        self.reference = false;
    }

}());
