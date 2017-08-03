(function() {
  angular
    .module('otusjs.laboratory.configuration')
    .service('otusjs.laboratory.configuration.LaboratoryConfigurationService', service);

  function service() {
    var self = this;
    var _laboratoryDescriptor;
    var _aliquotsDescriptors;
    var _selectedParticipant;
    var _participantCQ;

    /* Public Interface */
    self.initializeParticipantConfiguration = initializeParticipantConfiguration;
    self.initializeLaboratoryConfiguration = initializeLaboratoryConfiguration;
    self.initializeAliquotsDescriptors = initializeAliquotsDescriptors;

    self.getLaboratoryConfiguration = getLaboratoryConfiguration;
    self.getAliquotsDescriptors = getAliquotsDescriptors;

    // TODO: review
    self.getAliquotDescriptor = getAliquotDescriptor;
    self.getAliquotDescriptorNewWay = getAliquotDescriptorNewWay;




    self.getAvaiableAliquots = getAvaiableAliquots;
    self.getTubeDescriptor = getTubeDescriptor;
    self.getMomentDescriptor = getMomentDescriptor;
    self.getAliquotContainer = getAliquotContainer;
    self.validateAliquotWave = validateAliquotWave;

    function initializeParticipantConfiguration(selectedParticipant, participantCQ) {
      _selectedParticipant = selectedParticipant;
      _participantCQ = participantCQ;
    }

    function initializeLaboratoryConfiguration(labDescriptor) {
      _laboratoryDescriptor = labDescriptor;

      //filling sub-descriptors
      _aliquotsDescriptors = _laboratoryDescriptor.aliquotsDescriptors;
    }

    function initializeAliquotsDescriptors(aliquotsDescriptor) {
      _aliquotsDescriptors = aliquotsDescriptor;
    }

    function getAliquotsDescriptors(aliquotsDescriptor) {
      return _aliquotsDescriptors;
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

    function getAvaiableAliquots(momentName, tubeType) {
      try {
        var centerDescriptor = _laboratoryDescriptor.aliquotConfiguration
          .aliquotCenterDescriptors
          .find(function(centerDescriptor) {
            return centerDescriptor.name === _selectedParticipant.fieldCenter.acronym;
          });

        var groupDescriptor = centerDescriptor
          .aliquotGroupDescriptors
          .find(function(groupDescriptor) {
            return groupDescriptor.name === _participantCQ;
          });

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

          // TODO: run getAliquotsDescriptors

      } catch (e) {
        var msg = 'Configuração incompleta para: \n' + _selectedParticipant.recruitmentNumber + ' - ' + _selectedParticipant.fieldCenter.acronym + ' - ' + _participantCQ + ' - ' + momentName + ' - ' + tubeType;
        throw new Error(msg);
      }
    }

    function getAliquotDescriptor(aliquotName, momentName, tubeType) {
      try {
        var aliquotDescriptor = getAvaiableAliquots(momentName, tubeType)
          .find(function(aliquotDescriptor) {
            return aliquotDescriptor.name === aliquotName;
          });
        return aliquotDescriptor;
      } catch (e) {
        var msg = 'Configuração incompleta para: \n' + _selectedParticipant.recruitmentNumber + ' - ' + _selectedParticipant.fieldCenter.acronym + ' - ' + ' - ' + aliquotName + ' - ' + momentName + ' - ' + tubeType + ' - ' + _participantCQ;
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

    function getAliquotDescriptorNewWay(aliquotName) {
      if (_aliquotsDescriptors) {
        var found = _aliquotsDescriptors.find(function(aliquotDescriptor) {
          return aliquotDescriptor.name == aliquotName;
        });
        if (found) {
          return found;
        } else {
          var msg = 'Configuração incompleta para: ' + aliquotName;
          throw new Error(msg);
        }
     }else {
        //fetch aliquotsDescriptors
     }
    }

    return self;
  }
}());
