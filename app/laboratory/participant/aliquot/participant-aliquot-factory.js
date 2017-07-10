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

    function fromJSON(aliquotsArray, tubeInfo) {
      //builds the aliquots array that comes along with the tube from base
      return aliquotsArray.map(function(aliquotInfo) {
        return new ParticipantAliquote(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo);
      });
    }

    function create(aliquotInfo, tubeInfo, aliquotCode) {
      //used to build an filled aliquot
      var newInfo = angular.copy(aliquotInfo);
      newInfo.code = aliquotCode;
      return new ParticipantAliquote(AliquotCollectionDataFactory, LaboratoryConfigurationService, newInfo, tubeInfo);
    }

    function buildEmptyAliquots(aliquotConfigArray) {
      return aliquotConfigArray.map(function(aliquotConfig) {
        return new EmptyParticipantAliquot(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotConfig);
      });
    }

    return self;
  }

  function ParticipantAliquote(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo) {
    var self = this;
    var _aliquotDescriptor;

    /* Public Interface*/
    self.objectType = "Aliquot";
    self.name = aliquotInfo.name;
    self.role = aliquotInfo.role;

    // -------

    self.code = aliquotInfo.code || '';
    self.container = aliquotInfo.container || ''; //TODO get container by aliquot code

    //TODO implement
    // self.container = LaboratoryConfigurationService.getAliquotContainer(code);

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

  function EmptyParticipantAliquot(AliquotCollectionDataFactory, LaboratoryConfigurationService, aliquotConfig) {
    var self = this;
    var _aliquotDescriptor;

    /* Public Interface*/
    self.objectType = aliquotConfig.objectType || "EmptyAliquot";
    self.name = aliquotConfig.name;
    self.role = aliquotConfig.role;
    self.collectionData = {};  // TODO: check how this comes empty from backend
    self.toAliquot = toAliquot;

    onInit();

    function onInit() {
      _runDescriptors();
    }

    function _runDescriptors() {
      self.label = aliquotConfig.label;
    }

    function fillAliquotInfo(operator) {

    }
  }
}());
