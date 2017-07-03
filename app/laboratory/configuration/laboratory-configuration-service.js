(function() {
  angular
    .module('otusjs.laboratory')
    .service('otusjs.laboratory.LaboratoryConfigurationService', service);

  function service() {
    var self = this;
    var _laboratoryDescriptor;
    var _selectedParticipant;

    /* Public Interface */
    self.initialize = initialize;
    self.getLaboratoryConfiguration = getLaboratoryConfiguration;
    self.getAliquotDescriptor = getAliquotDescriptor;
    self.getAvaiableAliquots = getAvaiableAliquots;
    self.getTubeDescriptor = getTubeDescriptor;
    self.getMomentDescriptor = getMomentDescriptor;

    function initialize(labDescriptor, selectedParticipant) {
      _laboratoryDescriptor = labDescriptor;
      _selectedParticipant = selectedParticipant;
    }

    function getLaboratoryConfiguration() {
      return _laboratoryDescriptor;
    }

    function getTubeDescriptor(type) {
      return _laboratoryDescriptor.tubeConfiguration.tubeDescriptors.find(function(descriptor) {
        return descriptor.name == type;
      });
    }

    function getMomentDescriptor(momentName) {
      return _laboratoryDescriptor.collectMomentConfiguration.momentDescriptors.find(function(descriptor) {
        return descriptor.name == momentName;
      });
    }

    function getAvaiableAliquots(momentName, tubeType, groupName) {
      return _laboratoryDescriptor.aliquotConfiguration
        .aliquotCenterDescriptors
        .find(function(centerDescriptor) {
          return centerDescriptor.name === _selectedParticipant.fieldCenter.acronym;
        })
        .aliquotGroupDescriptors
        .find(function(groupDescriptor) {
          return groupDescriptor.name === groupName;
        })
        .aliquotMomentDescriptors
        .find(function(momentDescriptor) {
          return momentDescriptor.name === momentName;
        })
        .aliquotTypesDescriptors
        .find(function(typeDescriptor) {
          return typeDescriptor.name === tubeType;
        })
        .aliquots;
    }

    function getAliquotDescriptor(aliquotName, momentName, tubeType, groupName) {
      return _laboratoryDescriptor.aliquotConfiguration
        .aliquotCenterDescriptors
        .find(function(centerDescriptor) {
          return centerDescriptor.name === _selectedParticipant.fieldCenter.acronym;
        })
        .aliquotGroupDescriptors
        .find(function(groupDescriptor) {
          return groupDescriptor.name === groupName;
        })
        .aliquotMomentDescriptors
        .find(function(momentDescriptor) {
          return momentDescriptor.name === momentName;
        })
        .aliquotTypesDescriptors
        .find(function(typeDescriptor) {
          return typeDescriptor.name === tubeType;
        })
        .aliquots
        .find(function(aliquotDescriptor) {
          return aliquotDescriptor.name === aliquotName;
        });
    }

    return self;
  }
}());
