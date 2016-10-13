(function() {
    'use strict';

    angular
        .module('otusjs.validation')
        .factory('FillingRulesDataFactory', FillingRulesDataFactory);

    FillingRulesDataFactory.$inject = [
        'AlphanumericValidatorFactory',
        'DistinctValidatorFactory',
        'FutureDateValidatorFactory',
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
        'ParameterValidatorFactory',
        'PastDateValidatorFactory',
        'PrecisionValidatorFactory',
        'RangeDateValidatorFactory',
        'ScaleValidatorFactory',
        'SpecialsValidatorFactory',
        'UpperCaseValidatorFactory',
        'UpperLimitValidatorFactory'
    ];

    function FillingRulesDataFactory(AlphanumericValidatorFactory, DistinctValidatorFactory, FutureDateValidatorFactory, InValidatorFactory, LowerCaseValidatorFactory, LowerLimitValidatorFactory, MandatoryValidatorFactory, MaxDateValidatorFactory, MaxLengthValidatorFactory, MaxTimeValidatorFactory, MinDateValidatorFactory, MinLengthValidatorFactory, MinTimeValidatorFactory, ParameterValidatorFactory, PastDateValidatorFactory, PrecisionValidatorFactory, RangeDateValidatorFactory, ScaleValidatorFactory, SpecialsValidatorFactory, UpperCaseValidatorFactory, UpperLimitValidatorFactory) {
        var self = this;

        /* Public interface */
        self.create = create;

        function create(validator) {
          return validatorsTemplates[validator].create();
        }

        var validatorsTemplates = {
            alphanumeric: AlphanumericValidatorFactory,
            distinct: DistinctValidatorFactory,
            futureDate: FutureDateValidatorFactory,
            in: InValidatorFactory,
            lowerLimit: LowerLimitValidatorFactory,
            lowerCase: LowerCaseValidatorFactory,
            mandatory: MandatoryValidatorFactory,
            maxDate: MaxDateValidatorFactory,
            maxLength: MaxLengthValidatorFactory,
            maxTime: MaxTimeValidatorFactory,
            minDate: MinDateValidatorFactory,
            minLength: MinLengthValidatorFactory,
            minTime: MinTimeValidatorFactory,
            parameter: ParameterValidatorFactory,
            pastDate: PastDateValidatorFactory,
            precision: PrecisionValidatorFactory,
            rangeDate: RangeDateValidatorFactory,
            scale: ScaleValidatorFactory,
            specials: SpecialsValidatorFactory,
            upperCase: UpperCaseValidatorFactory,
            upperLimit: UpperLimitValidatorFactory
        };

        return self;

    }

}());
