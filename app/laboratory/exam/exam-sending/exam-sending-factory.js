(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamSendingFactory', Factory);

  Factory.$inject = [
    'otusjs.laboratory.exam.sending.ExamResultLot',
  ];

  function Factory(ExamResultLot) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamSending(ExamResultLot, {});
    }

    function fromJson(examSendingInfo) {
      return new ExamSending(ExamResultLot, examSendingInfo);
    }

    return self;
  }

  function ExamSending(ExamResultLot, examSendingInfo) {
    var self = this;

    self.operator = examSendingInfo.operator || '';
    self.fileName = examSendingInfo.fileName || '';
    self.realizationDate = examSendingInfo.realizationDate || '';
    self.resultsQuantity = examSendingInfo.resultsQuantity || '';
    self.fieldCenter = examSendingInfo.fieldCenter || '';
    self.examResults = ExamResultLot.fromJson(examSendingInfo.examResults);

    /* Public methods */
    self.toJSON = toJSON;
    self.insertResult = insertResult;
    self.removeResultByIndex = removeResultByIndex;

    function insertResult(result) {
      var newResult = ExamResultLot.create(result);
      self.examResults.push(newResult);
      return newResult;
    }

    function removeResultByIndex(index) {
      return self.examResults.splice(index, 1);
    }

    function toJSON() {
      var json = {
        operator: self.operator,
        fileName: self.fileName,
        realizationDate: self.realizationDate,
        resultsQuantity: self.resultsQuantity,
        fieldCenter: self.fieldCenter,
        examResults: self.examResults
      };

      return json;
    }

  }

}());