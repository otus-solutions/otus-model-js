(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.ParticipantAliquotFactory', factory);

  factory.$inject = [
      'otusjs.laboratory.AliquotCollectionDataFactory'
   ];

  function factory(AliquotCollectionDataFactory) {
    var self = this;

    self.create = create;
    self.fromJSON = fromJSON;

    function create(aliquoteInfo) {
      return new ParticipantAliquote(AliquotCollectionDataFactory, aliquoteInfo);
    }

    function fromJSON(aliquotesArray) {
      return aliquotesArray.map(function(aliquoteInfo) {
        return new ParticipantAliquote(AliquotCollectionDataFactory, aliquoteInfo);
      });
    }

    return self;
  }

  function ParticipantAliquote(AliquotCollectionDataFactory, aliquoteInfo) {
    var self = this;

    /* Public Interface*/
    self.objectType = "Aliquote";
    self.code = aliquoteInfo.code;
    self.name = aliquoteInfo.name;
    self.collectionData = AliquotCollectionDataFactory.create(aliquoteInfo.collectionData);
    self.container = aliquoteInfo.container;
    self.role = aliquoteInfo.role;

    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        role: self.role,
        container: self.container
      };

      return json;
    }

  }
}());
