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

    function create(result, Observations) {
      return new ExamResults(result, Observations);
    }

    function fromJson(resultInfoArray, Observations) {
      if (Array.isArray(resultInfoArray, Observations)) {
        return resultInfoArray.map(function(result) {
          return new ExamResults(result, Observations);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ExamResults(result, Observations) {
    var self = this;

    self.observations = Observations.fromJson(result.observations)

    self.objectType = 'ExamResults';
    self.aliquotCode = result.aliquotCode || '';
    self.resultName = result.resultName || '';
    self.value = result.value || '';
    self.releaseDate = result.releaseDate || '';

    /* Public methods */
    self.toJSON = toJSON;
    self.insertObservations = insertObservations;
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

    function insertObservations(observation) {
      var newObservation = Observations.create(result);
      self.observations.push(newObservation);
      return newObservation;
    }

    function removeObservationByIndex(index) {
      return self.observations.splice(index, 1);
    }

  }


}());
