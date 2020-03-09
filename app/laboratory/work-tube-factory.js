(function() {
  'use strict';

  angular
    .module('otusjs.laboratory')
    .factory('otusjs.laboratory.WorkTubeFactory',
      factory);

  factory.$inject = [
    '$filter',
    'otusjs.laboratory.configuration.LaboratoryConfigurationService'
  ];

  function factory($filter, LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(tubeInfo) {
      return new WorkTube($filter, LaboratoryConfigurationService,
        tubeInfo);
    }

    function fromJson(tubeInfoArray) {
      if (Array.isArray(tubeInfoArray)) {
        return tubeInfoArray.map(function(tubeInfo) {
          return new WorkTube($filter, LaboratoryConfigurationService,
            tubeInfo);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function WorkTube($filter, LaboratoryConfigurationService, tubeInfo) {
    var self = this;
    var _tubeDescriptor, _momentDescriptor;

    /* Public Interface*/
    self.objectType = tubeInfo.objectType || 'WorkTube';
    self.type = tubeInfo.type || '';
    self.moment = tubeInfo.moment || '';
    self.code = tubeInfo.code || '';
    self.groupName = tubeInfo.groupName || '';
    self.tubeCollectionData = tubeInfo.tubeCollectionData;

    self.typeLabel = tubeInfo.typeLabel || '';
    self.momentLabel = tubeInfo.momentLabel || '';

    self.toJSON = toJSON;
    self.getTubeToCsv = getTubeToCsv;

    self.hasError = false;

    onInit();

    function onInit() {
      _tubeDescriptor = LaboratoryConfigurationService.getTubeDescriptor(self.type);
      _momentDescriptor = LaboratoryConfigurationService.getMomentDescriptor(self.moment);
      _runDescriptors(_tubeDescriptor, _momentDescriptor);
    }

    function _runDescriptors(tubeDescriptor, _momentDescriptor) {
      self.typeLabel = tubeDescriptor.label;
      self.momentLabel = _momentDescriptor.label;
    }

    function getTubeToCsv(){
      return {
        tubo: self.code,
        tipo: self.typeLabel,
        momento: self.momentLabel
      };
    }

    function toJSON() {
      var json = {
        objectType: self.objectType,
        code: self.code,
        type: self.type,
        moment: self.moment,
        groupName: self.groupName,
        tubeCollectionData: self.tubeCollectionData
      };
      return json;
    }
  }
}());
