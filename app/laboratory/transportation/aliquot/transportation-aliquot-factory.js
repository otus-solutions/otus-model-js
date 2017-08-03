(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.transportation')
    .factory('otusjs.laboratory.transportation.TransportationAliquotFactory', factory);

  factory.$inject = [
        'otusjs.laboratory.configuration.LaboratoryConfigurationService'
     ];

  function factory(LaboratoryConfigurationService) {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create(aliquotInfo) {
      return new TransportationAliquot(LaboratoryConfigurationService, aliquotInfo);
    }

    function fromJson(aliquotInfoArray) {
      if (Array.isArray(aliquotInfoArray)) {
        return aliquotInfoArray.map(function(aliquotInfo) {
          return new TransportationAliquot(LaboratoryConfigurationService, aliquotInfo);
        });
     }else {
        return [];
     }
    }

    return self;
  }

  function TransportationAliquot(LaboratoryConfigurationService, aliquotInfo) {
    var self = this;
    var _aliquotDescriptor;

    /* Public Interface*/
    self.objectType = "Aliquot";
    self.name = aliquotInfo.name;
    self.role = aliquotInfo.role;
    self.code = aliquotInfo.code; //.aliquotCode
    self.container = aliquotInfo.container; // || getFromService;

    self.aliquotCollectionData = aliquotInfo.aliquotCollectionData;
    self.toJSON = toJSON;

    onInit();

    function onInit() {
      _aliquotDescriptor = LaboratoryConfigurationService.getAliquotDescriptorNewWay(self.name);
      _runDescriptors(_aliquotDescriptor);
    }

    function _runDescriptors(aliquotDescriptor) {
      self.label = aliquotDescriptor.label;
    }

    function toJSON() {
      //TODO review
      var json = {
        objectType: self.objectType,
        code: self.code,
        name: self.name,
        container: self.container,
        role: self.role,
        aliquotCollectionData: self.aliquotCollectionData
      };
      return json;
    }
  }
}());
