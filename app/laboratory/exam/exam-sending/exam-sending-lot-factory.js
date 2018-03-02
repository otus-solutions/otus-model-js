(function () {
  'use strict';

  angular
    .module('otusjs.laboratory.exam.sending')
    .factory('otusjs.laboratory.exam.sending.ExamSendingLot', Factory);

  function Factory() {
    var self = this;
    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new ExamSendingLot({});
    }

    function fromJson(examLot) {
      if(examLot instanceof Object){
        return new ExamSendingLot(examLot);
      } else {
        return new ExamSendingLot({});
      }
    }


    return self;
  }

  function ExamSendingLot(examLot) {
    var self = this;

    self._id = examLot._id || '';

    self.objectType = 'ExamSendingLot';
    self.operator = examLot.operator || '';
    self.fileName = examLot.fileName || '';
    self.realizationDate = examLot.realizationDate || '';
    self.resultsQuantity = examLot.resultsQuantity || '';
    self.fieldCenter = examLot.fieldCenter || '';
    self.forcedSave = examLot.forcedSave || false;

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
        json._id = self._id;
      }

      return json;
    }

  }

}());
