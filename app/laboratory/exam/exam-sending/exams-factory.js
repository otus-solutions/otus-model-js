(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.Exams', Factory);

    Factory.$inject = [
      'otusjs.laboratory.exam.sending.ExamResults'
    ];

  function Factory(ExamResults) {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create(exam, ExamResults) {
      return new Exams(exam, ExamResults);
    }

    function fromJson(examInfoArray) {
      if (Array.isArray(examInfoArray)) {
        return examInfoArray.map(function (exam) {
          return new Exams(exam);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function Exams(exam) {
    var self = this;

    self.objectType = 'Exams';
    self.examName = exam.examName || '';
    self.observations = exam.observations || '';
    self.conversionDate = exam.conversionDate || '';



    /* Public methods */
    self.toJSON = toJSON;
    self.insertObservations = insertObservations;


    function toJSON() {
      var json = {
        objectType: self.objectType,
        examName: self.examName,
        ExamResults: self.examResults,
        observations: self.observations
      };

      return json;
    }
    //TODO: Método para criar um resultado de exame
    // retornando o objeto para inserir as observações
    function createResult(result) {
      if(result){
        var _result = ExamResults.create(result);
        self.examResults.push(_result);
        return _result;
      }
    }

    function insertObservations(observation) {
      self.observations.push(observation);
    }


  }


}());
