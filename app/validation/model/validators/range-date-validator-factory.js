(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('RangeDateValidatorFactory', RangeDateValidatorFactory);

    RangeDateValidatorFactory.$inject = ['LabelFactory'];

    function RangeDateValidatorFactory(LabelFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(value) {
            return new RangeDateValidator(value, LabelFactory);
        }

        return self;
    }

    function RangeDateValidator(value, LabelFactory) {
        var self = this;

        self.extends = 'StudioObject';
        self.objectType = 'RangeDateValidator';
        self.dataType = 'Array';
        self.value = [];
    }

}());
