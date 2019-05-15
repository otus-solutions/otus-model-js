(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.participant')
    .factory('otusjs.laboratory.participant.aliquot.HistoryRoleFactory', factory);

  function factory() {

    var self = this;

    self.create = create;
    self.createHistoryArray = createHistoryArray;

    function create(historyInfo) {
      return new HistoryData(historyInfo);
    }

    function createHistoryArray(historyArray) {
      if (Array.isArray(historyArray)) {
        return historyArray.map(function (history) {
          return new HistoryData(history).toJSON();
        });
      } else {
        return [new HistoryData(historyArray).toJSON()];
      }
    }
    return self;
  }

  function HistoryData(historyInfo) {
    var self = this;

    self.toJSON = toJSON;

    self.objectType = 'AliquotHistory';
    self.type = historyInfo.type || '';
    self.userEmail = historyInfo.userEmail || '';
    self.description = historyInfo.description || '';
    self.date = historyInfo.date || new Date().toISOString();

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