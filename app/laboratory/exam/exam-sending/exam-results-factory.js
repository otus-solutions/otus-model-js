(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamResults', Factory);

  function Factory() {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create(result) {
      return new ExamResults(result);
    }

    function fromJson(resultInfoArray) {
      if (Array.isArray(resultInfoArray)) {
        return resultInfoArray.map(function (result) {
          return new ExamResults(result);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function ExamResults(result) {
    var self = this;

    self.objectType = 'ExamResults';
    self.aliquotCode = result.aliquotCode || '';
    self.examName = result.examName || '';
    self.label = result.label || '';
    self.value = result.value || '';
    self.releaseDate = result.releaseDate || '';
    self.requestDate = result.requestDate || '';
    self.collectionDate = result.collectionDate || '';
    self.notes = result.notes || '';

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        aliquotCode: self.aliquotCode,
        examName: self.examName,
        resultName: self.resultName,
        value: self.value,
        label: self.label,
        releaseDate: self.releaseDate,
        requestDate: self.requestDate,
        collectionDate: self.collectionDate,
        notes: self.notes
      };

      return json;
    }

  }


}());
