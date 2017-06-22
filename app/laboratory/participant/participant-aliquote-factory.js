(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.ParticipantAliquoteFactory', factory);

  function factory() {
    var self = this;

    self.create = create;
    self.fromJSON = fromJSON;

    function create(aliquoteInfo) {
      return new ParticipantAliquote(aliquoteInfo);
    }

    function fromJSON(aliquotesArray) {
      return aliquotesArray.map(function(aliquoteInfo){
         return new ParticipantAliquote(aliquoteInfo);
      });
    }

    return self;
  }

  function ParticipantAliquote(aliquoteInfo) {
    var self = this;
  }
}());
