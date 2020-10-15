(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.participant')
    .factory('otusjs.laboratory.participant.ParticipantAliquotFactory', factory);

  factory.$inject = [
    'otusjs.laboratory.participant.AliquotCollectionDataFactory',
    'otusjs.laboratory.participant.aliquot.AliquotHistoryFactory',
    'otusjs.laboratory.configuration.LaboratoryConfigurationService'
  ];

  function factory(AliquotCollectionDataFactory, AliquotHistoryFactory, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJSON = fromJSON;

    function fromJSON(aliquotsArray, tubeInfo) {
      //builds the aliquots array that comes along with the tube from base
      return aliquotsArray.map(function(aliquotInfo) {
        return new ParticipantAliquot(AliquotCollectionDataFactory, AliquotHistoryFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo);
      });
    }

    function create(aliquotInfo, tubeInfo) {
      //used to build an filled aliquot
      var newInfo = angular.copy(aliquotInfo);
      return new ParticipantAliquot(AliquotCollectionDataFactory, AliquotHistoryFactory, LaboratoryConfigurationService, newInfo, tubeInfo);
    }
    return self;
  }

  function ParticipantAliquot(AliquotCollectionDataFactory, AliquotHistoryFactory, LaboratoryConfigurationService, aliquotInfo, tubeInfo) {
    var self = this;
    var _aliquotDescriptor;

    /* Public Interface*/
    self.objectType = "Aliquot";
    self.name = aliquotInfo.name;
    self.role = aliquotInfo.role;
    self.code = aliquotInfo.code || aliquotInfo.aliquotCode; //.aliquotCode
    self.container = aliquotInfo.container;
    self.locationPoint = aliquotInfo.locationPoint;

    self.aliquotCollectionData = AliquotCollectionDataFactory.create(aliquotInfo.aliquotCollectionData);
    self.aliquotHistory = AliquotHistoryFactory.fromArray(aliquotInfo.aliquotHistory);

    self.collect = collect;
    self.convertStorage = convertStorage;
    self.getHistoryByType = getHistoryByType;
    self.toJSON = toJSON;

    //Custom
    self.tubeCode = tubeInfo.code;

    onInit();

    function onInit() {
      _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptor(self.name);
      _runDescriptors(_aliquotDescriptor);
      _convertHistory();
    }

    function getHistoryByType(type){
      return self.aliquotHistory.filter(function (history) {
        return history.type === type
      })
    }

    function _runDescriptors(aliquotDescriptor) {
      self.label = aliquotDescriptor.label;
    }

    function collect(operator, processing, locationPoint) {
      self.aliquotCollectionData.fill(operator, processing);
      self.locationPoint = locationPoint;
    }

    function convertStorage(operator,description, type) {
      self.aliquotHistory.push(AliquotHistoryFactory.create(operator,description));
      self.role = "EXAM";
      self.name = type;
      self.isConverted = true;
    }

    function _convertHistory() {
      self.isConverted = self.aliquotHistory.filter(function (history) {
        return history.type === "CONVERTED_STORAGE"
      }).length > 0
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        name : self.name,
        container: self.container,
        role: self.role,
        aliquotCollectionData: self.aliquotCollectionData,
        aliquotHistory: self.aliquotHistory,
        locationPoint: self.locationPoint
      };
      return json;
    }
  }
}());
