(function() {
  angular
    .module('otusjs.laboratory')
    .service('otusjs.laboratory.LaboratoryConfigurationService', service);

  function service() {
    var self = this;
    var _laboratoryDescriptor;

    /* Public Interface */
    self.initialize = initialize;
    self.getLaboratoryConfiguration = getLaboratoryConfiguration;
    self.getAliquotDescriptor = getAliquotDescriptor;
    self.getAvaiableAliquots = getAvaiableAliquots;
    self.getTubeDescriptor = getTubeDescriptor;
    self.getMomentDescriptor = getMomentDescriptor;

    function initialize(labDescriptor) {
      _laboratoryDescriptor = labDescriptor;
    }

    function getLaboratoryConfiguration() {
      return _laboratoryDescriptor;
    }

    function getTubeDescriptor(type) {
      console.log(_laboratoryDescriptor);
      return _laboratoryDescriptor.tubeConfiguration.tubeDescriptors.find(function(descriptor) {
        return descriptor.name == type;
      });
    }

    function getMomentDescriptor(momentName) {
      console.log(_laboratoryDescriptor);
      return _laboratoryDescriptor.collectMomentConfiguration.momentDescriptors.find(function(descriptor) {
        return descriptor.name == momentName;
      });
    }

    function getAvaiableAliquots(momentName, tubeType, groupName) {
      return _laboratoryDescriptor.aliquotConfiguration
        .aliquotMomentDescriptors
        .find(function(momentDescriptor) {
          return momentDescriptor.name === momentName;
        })
        .aliquotTypesDescriptors
        .find(function(typeDescriptor) {
          return typeDescriptor.name === tubeType;
        })
        .aliquoteGroupDescriptors
        .find(function(groupDescriptor) {
          return groupDescriptor.name === groupName;
        })
        .aliquots;
    }

    function getAliquotDescriptor(aliquotName, momentName, tubeType, groupName) {      
      return _laboratoryDescriptor.aliquotConfiguration
        .aliquotMomentDescriptors
        .find(function(momentDescriptor) {
          return momentDescriptor.name === momentName;
        })
        .aliquotTypesDescriptors
        .find(function(typeDescriptor) {
          return typeDescriptor.name === tubeType;
        })
        .aliquoteGroupDescriptors
        .find(function(groupDescriptor) {
          return groupDescriptor.name === groupName;
        })
        .aliquots
        .find(function(aliquotDescriptor) {
          return aliquotDescriptor.name === aliquotName;
        });
    }

    return self;
  }
}());
