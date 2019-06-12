(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.ValidationTypeService', Service);

  function Service() {
    var self = this;

    self.isValid = isValid;

    function isValid(dataType, value) {
      var _validation = false;
      switch (dataType) {
        case "String":
          let dateInvalid = new Date(value);
          _validation = typeof value === "string" && Number.isNaN(dateInvalid.getDate());
          break;
        case "Integer":
          let numberInt = new Number(value);
          _validation = typeof value === "number" && Number.isInteger(numberInt.valueOf()) && !Number.isNaN(numberInt);
          break;
        case "Boolean":
          _validation = typeof value === "boolean";
          break;
        case "Array":
          _validation = Array.isArray(value);
          break;
        case "LocalDate":
        case "LocalTime":
          let anyNumber = typeof value === "number" && !Number.isNaN(new Number(value));
          let isBoolean = typeof value === "boolean";
          let date = new Date(value);
          _validation = !Number.isNaN(date.getDate()) && date instanceof Date && typeof date === "object" && !anyNumber && !isBoolean;
          break;
        case "Decimal":
          let numberDecimal = new Number(value);
          _validation = typeof value === "number" && !Number.isInteger(numberDecimal.valueOf()) && !Number.isNaN(numberDecimal);
          break;
        case "Binary":
          _validation = true;
          break;
        default:
          _validation = false;
      }

      return _validation
    }
  }

})();
