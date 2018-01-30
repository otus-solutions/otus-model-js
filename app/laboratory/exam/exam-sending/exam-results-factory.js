(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamResults', Factory);

  Factory.$inject = [
    'otusjs.laboratory.exam.sending.Observations'
  ];

  function Factory(Observations) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create(result, examName) {
      return new ExamResults(result, examName, Observations);
    }

    function fromJson(resultInfoArray, examName) {
      if (Array.isArray(resultInfoArray, Observations)) {
        return resultInfoArray.map(function(result) {
          return new ExamResults(result, examName, Observations);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ExamResults(result, examName, Observations) {
    var self = this;

    self.observations = Observations.fromJson(result.observations)

    self.objectType = 'ExamResults';
    self.examName = examName || '';
    self.aliquotCode = result.aliquotCode || '';
    self.resultName = result.resultName || '';
    self.value = result.value || '';
    self.releaseDate = result.releaseDate || '';

    /* Public methods */
    self.toJSON = toJSON;
    self.insertObservation = insertObservation;
    self.removeObservationByIndex = removeObservationByIndex;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        aliquotCode: self.aliquotCode,
        resultName: self.resultName,
        value: self.value,
        releaseDate: self.releaseDate,
        observations: self.observations
      };

      if (!self.value) {
        var msg = "Result not found";
        throw new Error(msg);
      }

      return json;
    }

    function insertObservation(observation) {
      var newObservation = Observations.create(result);
      self.observations.push(newObservation);
      return newObservation;
    }

    function removeObservationByIndex(index) {
      return self.observations.splice(index, 1);
    }

  }


}());
