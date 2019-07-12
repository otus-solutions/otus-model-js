(function() {
  'use strict';

  angular
    .module('otusjs.model.activity')
    .service('otusjs.model.activity.ValidationTypeService', Service);

  function Service() {
    var self = this;

    const STRING = "String";
    const INTEGER = "Integer";
    const LOCAL_DATE = "LocalDate";
    const LOCAL_TIME = "LocalTime";
    const BINARY = "Binary";
    const BOOLEAN = "Boolean";
    const DECIMAL = "Decimal";
    const ARRAY = "Array";

    self.isValid = isValid;

    function isValid(dataType, value) {
      var _validation = false;
      switch (dataType) {
        case STRING:
          let dateInvalid = new Date(value);
          _validation = typeof value === "string" && Number.isNaN(dateInvalid.getDate());
          break;
        case INTEGER:
          let numberInt = new Number(value);
          _validation = typeof value === "number" && Number.isInteger(numberInt.valueOf()) && !Number.isNaN(numberInt);
          break;
        case BOOLEAN:
          _validation = typeof value === "boolean";
          break;
        case ARRAY:
          _validation = Array.isArray(value);
          break;
        case LOCAL_DATE:
        case LOCAL_TIME:
          let anyNumber = typeof value === "number" && !Number.isNaN(new Number(value));
          let isBoolean = typeof value === "boolean";
          let date = new Date(value);
          _validation = !Number.isNaN(date.getDate()) && date instanceof Date && typeof date === "object" && !anyNumber && !isBoolean;
          break;
        case DECIMAL:
          let numberDecimal = new Number(value).toFixed(9);
          _validation = typeof value === "number" && !Number.isInteger(numberDecimal.valueOf()) && !Number.isNaN(numberDecimal);
          break;
        case BINARY:
          _validation = true;
          break;
        default:
          _validation = false;
      }

      return _validation
    }
  }

})();
