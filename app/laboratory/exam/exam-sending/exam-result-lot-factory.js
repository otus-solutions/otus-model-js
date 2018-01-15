(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamResultLot', Factory);

  function Factory() {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create(result) {
      return new ExamResultLot(result);
    }

    function fromJson(resultInfoArray) {
      if (Array.isArray(resultInfoArray)) {
        return resultInfoArray.map(function (result) {
          return new ExamResultLot(result);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ExamResultLot(result) {
    var self = this;

    self.aliquotCode = result.aliquotCode || '';
    self.examName = result.examName || '';
    self.resultName = result.resultName || '';
    self.value = result.value || '';
    self.releaseDate = result.releaseDate || '';

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        aliquotCode: self.aliquotCode,
        examName: self.examName,
        resultName: self.resultName,
        value: self.value,
        releaseDate: self.releaseDate
      };

      return json;
    }

  }


}());