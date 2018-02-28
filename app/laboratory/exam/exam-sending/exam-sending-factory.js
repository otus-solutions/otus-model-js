(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamSendingFactory', Factory);

  Factory.$inject = [
    'otusjs.laboratory.exam.sending.ExamLot',
    'otusjs.laboratory.exam.sending.Exam'
  ];

  function Factory(ExamLot, Exams) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamSending(ExamLot, Exams, {}, {});
    }

    function fromJson(examLot, exams) {
      return new ExamSending(ExamLot, Exams, examLot, exams);
    }

    return self;
  }

  function ExamSending(ExamLot, Exams, examLot, exams) {
    var self = this;

    self.examLot = ExamLot.fromJson(examLot);
    self.exams = Exams.fromJson(exams);

    /* Public methods */
    self.insertExam = insertExam;
    self.removeExamByIndex = removeExamByIndex;
    self.toJSON = toJSON;
    self.getExamList = getExamList;

    function insertExam(exam) {
      var newExam = ExamLot.create(exam);
      self.exams.push(newExam);
      return newExam;
    }

    function removeExamByIndex(index) {
      return self.exams.splice(index, 1);
    }

    function toJSON() {
      var json = {
        examLot: self.examLot,
        exams: self.exams,
      };

      return json;
    }

    function getExamList() {
      var _examList = [];
      self.exams.forEach(function(exam) {
        exam.examResults.forEach(function(result) {
          var _json = {
            aliquotCode: result.aliquotCode,
            examName: result.examName,
            resultName: result.resultName,
            value: result.value,
            releaseDate: result.releaseDate,
            aliquotValid: result.aliquotValid
          };
          _examList.push(_json);
        });
      });

      return _examList;
    }
  }

}());
