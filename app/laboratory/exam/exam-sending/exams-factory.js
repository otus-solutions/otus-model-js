(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.Exams', Factory);

    Factory.$inject = [
      'otusjs.laboratory.exam.sending.ExamResults',
      'otusjs.laboratory.exam.sending.Observations'
    ];

  function Factory(ExamResults, Observations) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create(exam, ExamResults, Observations) {
      return new Exams(exam, ExamResults, Observations);
    }

    function fromJson(examInfoArray, ExamResults, Observations) {
      if (Array.isArray(examInfoArray)) {
        return examInfoArray.map(function (exam) {
          return new Exams(exam, ExamResults);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function Exams(exam, ExamResults, Observations) {
    var self = this;

    self.examResults = ExamResults.fromJson(exam.examResults);
    self.observations = Observations.fromJson(exam.observations);

    self.objectType = 'Exam';
    self.examName = exam.examName || '';
    self.conversionDate = exam.conversionDate || '';

    /* Public methods */
    self.toJSON = toJSON;
    self.insertObservations = insertObservations;
    self.insertResult = insertResult;
    self.removeResultByIndex = removeResultByIndex;
    self.removeObservationByIndex = removeObservationByIndex;

    function insertObservations(observation) {
      var newObservation = Observations.create(result);
      self.observations.push(newObservation);
      return newObservation;
    }

    function insertResult(result) {
      var newResult = ExamResults.create(result);
      self.examResults.push(newResult);
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
        examName: self.examName,
        ExamResults: self.examResults,
        observations: self.observations
      };

      return json;
    }

  }


}());
