(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.AliquotCollectionDataFactory', factory);

  function factory() {
    var self = this;

    self.create = create;

    function create(collectionInfo) {
      var _collectionInfo = collectionInfo || {};
      return new AliquotCollectionData(_collectionInfo);
    }

    return self;
  }

  function AliquotCollectionData(collectionInfo) {
    var self = this;

    self.objectType = 'AliquotCollectionData';
    self.metadata = collectionInfo.metadata || '';
    self.operator = collectionInfo.operator || '';
    self.time = collectionInfo.time || '';


    self.fill = fill;
    self.toJSON = toJSON;

    function fill(operator) {
      self.metadata = "";  // TODO:
      self.operator = operator.email;
      self.time = new Date().toISOString();
    }

    function toJSON() {
      return {
        objectType: self.objectType,
        metadata: self.metadata,
        operator: self.operator,
        time: self.time
      };
    }
  }
}());
