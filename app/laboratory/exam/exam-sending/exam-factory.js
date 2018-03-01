(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.Exam', Factory);

    Factory.$inject = [
      'otusjs.laboratory.exam.sending.ExamResults',
      'otusjs.laboratory.exam.sending.ExamObservation'
    ];

  function Factory(ExamResults, ExamObservation) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new Exam(ExamResults, ExamObservation, {});
    }

    function fromJson(examInfoArray) {
      if (Array.isArray(examInfoArray)) {
        return examInfoArray.map(function (exam) {
          return new Exam(ExamResults, ExamObservation, exam);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function Exam(ExamResults, ExamObservation, exam){
    var self = this;

    self.examResults = ExamResults.fromJson(exam.examResults);
    self.observations = ExamObservation.fromJson(exam.observations);

    self.objectType = 'Exam';
    self.name = exam.name || '';

    /* Public methods */
    self.toJSON = toJSON;
    self.insertObservation = insertObservation;
    self.insertResult = insertResult;
    self.removeResultByIndex = removeResultByIndex;
    self.removeObservationByIndex = removeObservationByIndex;

    function insertObservation(observation) {
      var newObservation = ExamObservation.fromJson([observation]);
      self.observations.push(newObservation[0]);
      return newObservation;
    }

    function insertResult(result) {
      var newResult = ExamResults.fromJson([result]);
      self.examResults.push(newResult[0]);
      return newResult;
    }

    function removeResultByIndex(index) {
      return self.examResults.splice(index, 1);
    }

    function removeObservationByIndex(index) {
      return self.observations.splice(index, 1);
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        name: self.name,
        examResults: self.examResults,
        observations: self.observations
      };

      return json;
    }

  }


}());
