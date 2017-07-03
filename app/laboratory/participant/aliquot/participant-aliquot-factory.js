(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.ParticipantAliquotFactory', factory);

  factory.$inject = [
      'otusjs.laboratory.AliquotCollectionDataFactory',
      'otusjs.laboratory.LaboratoryConfigurationService'
   ];

  function factory(AliquotCollectionDataFactory, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJSON = fromJSON;

    function create(aliquotInfo, tubeInfo) {
      return new ParticipantAliquote(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo);
    }

    function fromJSON(aliquotsArray, tubeInfo) {
      return aliquotsArray.map(function(aliquotInfo) {
        return new ParticipantAliquote(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo);
      });
    }

    return self;
  }

  function ParticipantAliquote(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo) {
    var self = this;
    var _aliquotDescriptor;

    /* Public Interface*/
    self.objectType = aliquotInfo.objectType || "Aliquot";
    self.name = aliquotInfo.name;
    self.role = aliquotInfo.role;

    // -------

    self.code = aliquotInfo.code || '';
    self.container = aliquotInfo.container || '';
    //TODO check what to do when aliquotInfo is empty
    self.collectionData = aliquotInfo.collectionData ? AliquotCollectionDataFactory.create(aliquotInfo.collectionData) : {};
    self.fillFromJson = fillFromJson;
    // self.toJSON = toJSON;

    onInit();

    function onInit() {
      _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(self.name, tubeInfo.moment, tubeInfo.type, tubeInfo.groupName);
      _runDescriptors(_aliquotDescriptor);
    }

    function _runDescriptors(aliquotDescriptor) {
      self.label = aliquotDescriptor.label;
      self.quantity = aliquotDescriptor.quantity;
    }

    function fillFromJson(jsonAliquot){
      // console.log(self);
      // console.log(jsonAliquot);
    }

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
