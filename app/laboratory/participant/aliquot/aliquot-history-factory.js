(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.participant')
    .factory('otusjs.laboratory.participant.aliquot.AliquotHistoryFactory', factory);

  function factory() {

    var self = this;

    self.create = create;
    self.fromArray = fromArray;

    function create(operator,description) {
      return new HistoryData(operator,description);
    }

    function fromArray(historyArray) {
      if (Array.isArray(historyArray)) {
        return historyArray.map(function (history) {
          return new HistoryData(history.userEmail,history.description,history.type,history.date).toJSON();
        });
      } else {
        return [];
      }
    }
    return self;
  }

  function HistoryData(operator, description, type, date) {
    var self = this;

    self.toJSON = toJSON;

    self.objectType = 'AliquotHistory';
    self.type = type || 'CONVERTED_STORAGE';
    self.userEmail = operator || '';
    self.description = description || '';
    self.date = date || new Date().toISOString();

    function toJSON() {
      return {
        objectType : self.objectType,
        type : self.type,
        userEmail : self.userEmail,
        description : self.description,
        date : self.date
      }
    }
  }

})();