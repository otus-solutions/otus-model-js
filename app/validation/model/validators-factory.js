(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('ValidatorFactory', ValidatorFactory);

    ValidatorFactory.$inject = [
        'AlphanumericValidatorFactory',
        'DistinctValidatorFactory',
        'FuturedateValidatorFactory',
        'InValidatorFactory',
        'LowerCaseValidatorFactory',
        'LowerLimitValidatorFactory',
        'MandatoryValidatorFactory',
        'MaxDateValidatorFactory',
        'MaxLengthValidatorFactory',
        'MaxTimeValidatorFactory',
        'MinDateValidatorFactory',
        'MinLengthValidatorFactory',
        'MinTimeValidatorFactory',
        'PastdateValidatorFactory',
        'PrecisionValidatorFactory',
        'RangedateValidatorFactory',
        'ScaleValidatorFactory',
        'SpecialsValidatorFactory',
        'UpperCaseValidatorFactory',
        'UpperLimitValidatorFactory'
    ];

    function ValidatorFactory(AlphanumericValidatorFactory, DistinctValidatorFactory, FuturedateValidatorFactory, InValidatorFactory, LowerCaseValidatorFactory, LowerLimitValidatorFactory, MandatoryValidatorFactory, MaxTimeValidatorFactory, MaxDateValidatorFactory, MaxLengthValidatorFactory, MinTimeValidatorFactory, MinDateValidatorFactory, MinLengthValidatorFactory, PastdateValidatorFactory, PrecisionValidatorFactory, RangedateValidatorFactory, ScaleValidatorFactory, SpecialsValidatorFactory, UpperCaseValidatorFactory, UpperLimitValidatorFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create() {
            // _Validator()f
        }

        return self;

    }

}());
