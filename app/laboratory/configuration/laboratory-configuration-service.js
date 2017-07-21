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
    self.getAliquotContainer = getAliquotContainer;
    self.validateAliquotWave = validateAliquotWave;

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
      try {
        var centerDescriptor = _laboratoryDescriptor.aliquotConfiguration
          .aliquotCenterDescriptors
          .find(function(centerDescriptor) {
            return centerDescriptor.name === _selectedParticipant.fieldCenter.acronym;
          });

        var groupDescriptor = _getGroupDescriptor();

        return groupDescriptor
          .aliquotMomentDescriptors
          .find(function(momentDescriptor) {
            return momentDescriptor.name === momentName;
          })
          .aliquotTypesDescriptors
          .find(function(typeDescriptor) {
            return typeDescriptor.name === tubeType;
          })
          .aliquots;
      } catch (e) {
         var msg = 'Configuração incompleta para: \n' + _selectedParticipant.recruitmentNumber + ' - ' + _selectedParticipant.fieldCenter.acronym + ' - ' + ' - ' + momentName + ' - ' + tubeType + ' - ' + groupName;
         throw new Error(msg);
      }

      function _getGroupDescriptor() {
        return centerDescriptor
          .aliquotGroupDescriptors
          .find(function(groupDescriptor) {
            return groupDescriptor.name === groupName;
          }) || centerDescriptor
          .aliquotGroupDescriptors
          .find(function(groupDescriptor) {
            return groupDescriptor.name === 'DEFAULT';
          });
      }
    }

    function getAliquotDescriptor(aliquotName, momentName, tubeType, groupName) {
      try {
        var aliquotDescriptor = _laboratoryDescriptor.aliquotConfiguration
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
        return aliquotDescriptor;
      } catch (e) {
        var msg = 'Configuração incompleta para: \n' + _selectedParticipant.recruitmentNumber + ' - ' + _selectedParticipant.fieldCenter.acronym + ' - ' + ' - ' + aliquotName + ' - ' + momentName + ' - ' + tubeType + ' - ' + groupName;
        throw new Error(msg);
      }
    }

    function validateAliquotWave(aliquotCode) {
      var waveToken = _laboratoryDescriptor.codeConfiguration.waveNumberToken;
      var WAVE_TOKEN_POSITION = 0;
      var stringfiedCode = String(aliquotCode);
      return stringfiedCode[WAVE_TOKEN_POSITION] == waveToken;

    }

    function getAliquotContainer(code) {
      //given the aliquot code, return the aliquot container
      // TODO: test
      var CONTAINER_TOKEN_POSITION = 2;

      var stringfiedCode = String(code);
      var tubeToken = _laboratoryDescriptor.codeConfiguration.tubeToken;
      var palletToken = _laboratoryDescriptor.codeConfiguration.palletToken;
      var cryotubeToken = _laboratoryDescriptor.codeConfiguration.cryotubeToken;

      var token = stringfiedCode[CONTAINER_TOKEN_POSITION];

      switch (true) {
        case token == tubeToken:
          return 'TUBE';
        case token == palletToken:
          return 'PALLET';
        case token == cryotubeToken:
          return 'CRYOTUBE';
        default:
          return '';
      }
    }

    return self;
  }
}());
