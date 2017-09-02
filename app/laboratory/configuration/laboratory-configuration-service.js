(function() {
  angular
    .module('otusjs.laboratory.configuration')
    .service('otusjs.laboratory.configuration.LaboratoryConfigurationService', service);

  function service() {
    var self = this;
    var _laboratoryDescriptor;
    var _aliquotConfiguration;
    var _aliquotsDescriptors;
    var _selectedParticipant;
    var _participantCQ;

    /* Public Interface */
    self.initializeParticipantConfiguration = initializeParticipantConfiguration;
    self.initializeLaboratoryConfiguration = initializeLaboratoryConfiguration;
    self.initializeAliquotsDescriptors = initializeAliquotsDescriptors;

    self.checkLaboratoryConfiguration = checkLaboratoryConfiguration;
    self.checkAliquotsDescriptors = checkAliquotsDescriptors;

    self.getAvaiableAliquots = getAvaiableAliquots;
    self.getAliquotDescriptor = getAliquotDescriptor;
    self.getTubeDescriptor = getTubeDescriptor;
    self.getMomentDescriptor = getMomentDescriptor;
    self.getAliquotContainer = getAliquotContainer;
    self.validateAliquotWave = validateAliquotWave;
    self.getCodeConfiguration = getCodeConfiguration;
    self.getAliquotLength = getAliquotLength;

    function initializeParticipantConfiguration(selectedParticipant, participantCQ) {
      _selectedParticipant = selectedParticipant;
      _participantCQ = participantCQ;
    }

    function initializeLaboratoryConfiguration(labDescriptor) {
      _laboratoryDescriptor = labDescriptor;

      //filling sub-descriptors
      _aliquotConfiguration = _laboratoryDescriptor.aliquotConfiguration;
      _aliquotsDescriptors = _aliquotConfiguration.aliquotDescriptors;
    }

    function initializeAliquotsDescriptors(aliquotsDescriptor) {
      _aliquotsDescriptors = aliquotsDescriptor;
    }

    function checkAliquotsDescriptors(aliquotsDescriptor) {
      return !!_aliquotsDescriptors;
    }

    function checkLaboratoryConfiguration() {
      return !!_laboratoryDescriptor;
    }

    function getTubeDescriptor(type) {
      if (_laboratoryDescriptor) {
        return _laboratoryDescriptor.tubeConfiguration.tubeDescriptors.find(function(descriptor) {
          return descriptor.name == type;
        });
      } else {
        _descriptorErrorMessenger('laboratório');
      }
    }

    function getMomentDescriptor(momentName) {
      if (_laboratoryDescriptor) {
        return _laboratoryDescriptor.collectMomentConfiguration.momentDescriptors.find(function(descriptor) {
          return descriptor.name == momentName;
        });
      } else {
        _descriptorErrorMessenger('laboratório');
      }
    }

    function getAvaiableAliquots(momentName, tubeType) {
      if (_laboratoryDescriptor) {
        try {
          var centerDescriptor = _getCenterDescriptor();

          var groupDescriptor = centerDescriptor
            .aliquotGroupDescriptors
            .find(function(groupDescriptor) {
              return groupDescriptor.name === _participantCQ;
            });

          var aliquotsList = groupDescriptor
            .aliquotMomentDescriptors
            .find(function(momentDescriptor) {
              return momentDescriptor.name === momentName;
            })
            .aliquotTypesDescriptors
            .find(function(typeDescriptor) {
              return typeDescriptor.name === tubeType;
            })
            .aliquots;
          return aliquotsList.map(function(avaiableAliquot) {
            var aliqDescriptor = getAliquotDescriptor(avaiableAliquot.name);
            aliqDescriptor.role = avaiableAliquot.role;
            return aliqDescriptor;
          });

        } catch (e) {
          var msg = 'Configuração incompleta para: \n' + _selectedParticipant.recruitmentNumber + ' - ' + _selectedParticipant.fieldCenter.acronym + ' - ' + _participantCQ + ' - ' + momentName + ' - ' + tubeType;
          throw new Error(msg);
        }
      } else {
        _descriptorErrorMessenger('laboratório');
      }
    }

    function getAliquotDescriptor(aliquotName) {
      if (_aliquotsDescriptors) {
        var found = _aliquotsDescriptors.find(function(aliquotDescriptor) {
          return aliquotDescriptor.name == aliquotName;
        });
        if (found) {
          var completeAliquot = angular.copy(found);
          return completeAliquot;
        } else {
          var msg = 'Configuração incompleta para: ' + aliquotName;
          throw new Error(msg);
        }
      } else {
        _descriptorErrorMessenger('alíquota');
      }
    }

    function validateAliquotWave(aliquotCode) {
      var waveToken = _laboratoryDescriptor.codeConfiguration.waveNumberToken;
      var WAVE_TOKEN_POSITION = 0;
      var stringfiedCode = String(aliquotCode);
      return stringfiedCode[WAVE_TOKEN_POSITION] == waveToken;
    }

    //given the aliquot code, return the aliquot container
    function getAliquotContainer(code) {
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

    function getCodeConfiguration() {
      return _laboratoryDescriptor.codeConfiguration;
    }

    function getAliquotLength() {
      var centerDescriptor = _getCenterDescriptor();
      return centerDescriptor.aliquotCodeSize;
    }

    //private methods
    function _getCenterDescriptor() {
      return _aliquotConfiguration.aliquotCenterDescriptors
        .find(function(centerDescriptor) {
          return centerDescriptor.name === _selectedParticipant.fieldCenter.acronym;
        });
    }

    function _descriptorErrorMessenger(type) {
      var msg = 'Descritores de ' + type + ' não inicializados';
      throw new Error(msg);
    }
    return self;
  }
}());
