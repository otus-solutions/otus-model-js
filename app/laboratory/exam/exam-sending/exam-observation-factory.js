(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamObservation', Factory);


  function Factory() {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamObservation({});
    }

    function fromJson(observationInfoArray) {
      if (Array.isArray(observationInfoArray)) {
        return observationInfoArray.map(function(observation) {
          return new ExamObservation(observation);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ExamObservation(observation) {
    var self = this;

    self.name = observation.name || '';
    self.value = observation.value || '';

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        name: self.name,
        value: self.value
      };

      return json;
    }

  }

}());
