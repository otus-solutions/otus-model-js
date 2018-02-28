(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamLot', Factory);

  function Factory() {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamLot();
    }

    function fromJson(examLot) {
      return new ExamLot(examLot);
    }


    return self;
  }

  function ExamLot(examLot) {
    var self = this;

    self._id = examLot._id || '';

    self.objectType = 'ExamLot';
    self.operator = examLot.operator || '';
    self.fileName = examLot.fileName || '';
    self.realizationDate = examLot.realizationDate || '';
    self.resultsQuantity = examLot.resultsQuantity || '';
    self.fieldCenter = examLot.fieldCenter || '';
    //TODO: novo atributo
    self.forcedSave = false;

    /* Public methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        operator: self.operator,
        fileName: self.fileName,
        realizationDate: self.realizationDate,
        resultsQuantity: self.resultsQuantity,
        fieldCenter: self.fieldCenter,
        forcedSave: self.forcedSave
      };

      if(self._id){
        json._id = self._id
      }

      return json;
    }

  }

}());
