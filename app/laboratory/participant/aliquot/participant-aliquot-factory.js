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
    self.buildEmptyAliquots = buildEmptyAliquots;

    function create(aliquotInfo, tubeInfo) {
      return new ParticipantAliquote(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo);
    }

    function fromJSON(aliquotsArray, tubeInfo) {
      console.log(JSON.stringify(aliquotsArray));
      return aliquotsArray.map(function(aliquotInfo) {
        return new ParticipantAliquote(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo);
      });
    }

    function buildEmptyAliquots(aliquotConfigArray) {
      return aliquotConfigArray.map(function(aliquotConfig) {
        return new EmptyParticipantAliquot(aliquotConfig);
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
    self.container = aliquotInfo.container || ''; //TODO get container by aliquot code
    self.collectionData = AliquotCollectionDataFactory.create(aliquotInfo.collectionData);
    // self.toJSON = toJSON;

    //Custom
    self.tubeCode = tubeInfo.code;



    onInit();

    function onInit() {
      _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(self.name, tubeInfo.moment, tubeInfo.type, tubeInfo.groupName);
      _runDescriptors(_aliquotDescriptor);
    }

    function _runDescriptors(aliquotDescriptor) {
      self.label = aliquotDescriptor.label;
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

  function EmptyParticipantAliquot(aliquotConfig) {
    var self = this;
    var _aliquotDescriptor;

    /* Public Interface*/
    self.objectType = aliquotConfig.objectType || "Aliquot";
    self.name = aliquotConfig.name;
    self.role = aliquotConfig.role;
    self.collectionData = {};
    self.toAliquot = toAliquot;

    function onInit() {

    }

    function _runDescriptors(aliquotDescriptor) {
      self.label = aliquotDescriptor.label;
    }

    function toAliquot(tube, code) {
      self.tubeCode = tube.code;
      //TODO implement
      // self.container = LaboratoryConfigurationService.getAliquotContainer(code);
    }

    function fillAliquotInfo(operator) {

    }
  }
}());
