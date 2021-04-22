(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamSendingFactory', Factory);

  Factory.$inject = [
    'otusjs.laboratory.exam.sending.ExamSendingLot',
    'otusjs.laboratory.exam.sending.Exam'
  ];

  function Factory(ExamSendingLot, Exam) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamSending(ExamSendingLot, Exam, {}, {});
    }

    function fromJson(examSendingLot, exams) {
      return new ExamSending(ExamSendingLot, Exam, examSendingLot, exams);
    }

    return self;
  }

  function ExamSending(ExamSendingLot, Exam, examSendingLot, exams) {
    var self = this;


    self.examSendingLot = ExamSendingLot.fromJson(examSendingLot);
    self.exams = Exam.fromJson(exams);

    /* Public methods */
    self.insertExam = insertExam;
    self.removeExamByIndex = removeExamByIndex;
    self.toJSON = toJSON;
    self.getExamList = getExamList;

    function insertExam(exam) {
      var newExam = Exam.fromJson([exam]);
      self.exams.push(newExam[0]);
      return newExam;
    }

    function removeExamByIndex(index) {
      return self.exams.splice(index, 1);
    }

    function toJSON() {
      var json = {
        examSendingLot: self.examSendingLot,
        exams: self.exams
      };

      return json;
    }

    function getExamList() {
      var _examList = [];
      self.exams.forEach(function(exam) {
        exam.examResults.forEach(function(result) {
          var _json = {
            code: result.code,
            examName: result.examName,
            resultName: result.resultName,
            value: result.value,
            releaseDate: result.releaseDate,
            realizationDate: result.realizationDate,
            isValid: result.isValid
          };
          _examList.push(_json);
        });
      });

      return _examList;
    }
  }

}());
