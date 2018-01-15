(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamSendingFactory', Factory);

  Factory.$inject = [
    'otusjs.laboratory.exam.sending.ExamResultLot',
    'otusjs.laboratory.exam.sending.ExamResults'
  ];

  function Factory(ExamResultLot, ExamResults) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamSending(ExamResultLot, ExamResults, {});
    }

    function fromJson(examSendingInfo) {
      return new ExamSending(ExamResultLot, ExamResults, examSendingInfo);
    }

    return self;
  }

  function ExamSending(ExamResultLot, ExamResults, examSendingInfo) {
    var self = this;

    self.examResultLot = ExamResultLot.fromJson(examSendingInfo.examResultLot);
    self.examResults = ExamResults.fromJson(examSendingInfo.examResults);

    /* Public methods */
    self.insertResult = insertResult;
    self.removeResultByIndex = removeResultByIndex;
    self.toJSON = toJSON;

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
        examResultLot: self.examResultLot,
        examResults: self.examResults,
      };

      return json;
    }

  }

}());