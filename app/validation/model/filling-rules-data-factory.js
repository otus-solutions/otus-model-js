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
    'UpperLimitValidatorFactory',
    'otusjs.model.validation.MinSelectedValidatorFactory',
    'otusjs.model.validation.MaxSelectedValidatorFactory',
    'otusjs.model.validation.QuantityValidatorFactory'
  ];

  function FillingRulesDataFactory(AlphanumericValidatorFactory, DistinctValidatorFactory, FutureDateValidatorFactory, InValidatorFactory, LowerCaseValidatorFactory, LowerLimitValidatorFactory, MandatoryValidatorFactory, MaxDateValidatorFactory, MaxLengthValidatorFactory, MaxTimeValidatorFactory, MinDateValidatorFactory, MinLengthValidatorFactory, MinTimeValidatorFactory, ParameterValidatorFactory, PastDateValidatorFactory, PrecisionValidatorFactory, RangeDateValidatorFactory, ScaleValidatorFactory, SpecialsValidatorFactory, UpperCaseValidatorFactory, UpperLimitValidatorFactory, MinSelectedValidatorFactory, MaxSelectedValidatorFactory, QuantityValidatorFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(validator) {
      return validatorsTemplates[validator].create();
    }

    function fromJsonObject(jsonObject) {
      return validatorsTemplates[jsonObject.validatorType].fromJsonObject(jsonObject.data);
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
      upperLimit: UpperLimitValidatorFactory,
      minSelected: MinSelectedValidatorFactory,
      maxSelected: MaxSelectedValidatorFactory,
      quantity: QuantityValidatorFactory
    };

    return self;

  }

}());
