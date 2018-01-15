(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamResultLot', Factory);

  function Factory() {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamResultLot();
    }

    function fromJson(resultLot) {
      return new ExamResultLot(resultLot);
    }


    return self;
  }

  function ExamResultLot(resultLot) {
    var self = this;

    self._id = resultLot._id || '';
    self.operator = resultLot.operator || '';
    self.fileName = resultLot.fileName || '';
    self.realizationDate = resultLot.realizationDate || '';
    self.resultsQuantity = resultLot.resultsQuantity || '';
    self.fieldCenter = resultLot.fieldCenter || '';

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        _id: self._id,
        operator: self.operator,
        fileName: self.fileName,
        realizationDate: self.realizationDate,
        resultsQuantity: self.resultsQuantity,
        fieldCenter: self.fieldCenter
      };

      return json;
    }

  }

}());