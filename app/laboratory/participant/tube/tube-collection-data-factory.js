(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.participant')
    .factory('otusjs.laboratory.participant.TubeCollectionDataFactory', factory);

  function factory() {
    var self = this;

    self.create = create;

    function create(collectionInfo) {
      return new TubeCollectionData(collectionInfo);
    }

    return self;
  }

  function TubeCollectionData(collectionInfo) {
    var self = this;

    self.objectType = 'TubeCollectionData';
    self.isCollected = collectionInfo.isCollected;
    self.metadata = collectionInfo.metadata;
    self.operator = collectionInfo.operator;
    self.time = collectionInfo.time;
    self.customMetadata = collectionInfo.customMetadata || [];
    self.dynamicMetadata = collectionInfo.dynamicMetadata

    self.fill = fill;
    self.pushCustomMetadata = pushCustomMetadata;
    self.removeCustomMetadata = removeCustomMetadata;
    self.toJSON = toJSON;

    function fill(operator) {
      self.isCollected = true;
      self.metadata = "";
      self.operator = operator.email;
      self.time = new Date().toISOString();
      self.customMetadata = [];
      self.dynamicMetadata = "";
    }

    function pushCustomMetadata(customMetadataId) {
      self.customMetadata.push(customMetadataId);
    }

    function removeCustomMetadata(customMetadataId){
      self.customMetadata = self.customMetadata.filter(id => id !== customMetadataId);
    }

    function toJSON() {
      return {
        objectType: self.objectType,
        isCollected: self.isCollected,
        metadata: self.metadata,
        operator: self.operator,
        time: self.time,
        customMetadata: self.customMetadata,
        dynamicMetadata: self.dynamicMetadata
      };
    }
  }
}());
