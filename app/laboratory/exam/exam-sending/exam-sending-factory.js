(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamSendingFactory', Factory);

  Factory.$inject = [
    'otusjs.laboratory.exam.sending.ExamResultLot',
    'otusjs.laboratory.exam.sending.Exams'
  ];

  function Factory(ExamResultLot, Exams) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamSending(ExamResultLot, Exams, {}, {});
    }

    function fromJson(examResultLot, exams) {
      return new ExamSending(ExamResultLot, Exams, examResultLot, exams);
    }

    return self;
  }

  function ExamSending(ExamResultLot, Exams, examResultLot, exams) {
    var self = this;

    self.examResultLot = ExamResultLot.fromJson(examResultLot);
    self.exams = Exams.fromJson(exams);

    /* Public methods */
    self.insertResult = insertResult;
    self.removeResultByIndex = removeResultByIndex;
    self.toJSON = toJSON;

    function insertResult(result) {
      var newResult = ExamResultLot.create(result);
      self.exams.push(newResult);
      return newResult;
    }

    function removeResultByIndex(index) {
      return self.exams.splice(index, 1);
    }

    function toJSON() {
      var json = {
        examResultLot: self.examResultLot,
        exams: self.exams,
      };

      return json;
    }

  }

}());
