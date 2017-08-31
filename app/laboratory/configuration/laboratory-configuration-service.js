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

    self.checkLaboratoryConfiguration = checkLaboratoryConfiguration;
    self.checkAliquotsDescriptors = checkAliquotsDescriptors;

    self.getAliquotDescriptor = getAliquotDescriptor;

    self.getAvaiableAliquots = getAvaiableAliquots;
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
      _aliquotsDescriptors = _removeASAP(); //really really ASAP
      // _aliquotsDescriptors = _laboratoryDescriptor.aliquotsDescriptors;
    }

    function _removeASAP() {
      var newArr = [];

      _laboratoryDescriptor.aliquotConfiguration.aliquotCenterDescriptors.forEach(function(centerDesc) {
        centerDesc.aliquotGroupDescriptors.forEach(function(groupDesc) {
          groupDesc.aliquotMomentDescriptors.forEach(function(momentDesc) {
            momentDesc.aliquotTypesDescriptors.forEach(function(typeDesc) {
              typeDesc.aliquots.forEach(function(aliquot) {
                _add(angular.copy(aliquot));
                delete(aliquot.label);
                delete(aliquot.role);
              });
            });
          });
        });
      });

      return newArr;
      function _add(aliquot) {
        var aliq = newArr.find(function(arrAliq) {
          return arrAliq.name === aliquot.name;
        });
        if (!aliq) {
          newArr.push(angular.copy(aliquot));
        }
      }
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
            return getAliquotDescriptor(avaiableAliquot.name);
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
          return found;
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

    function getCodeConfiguration(){
      return _laboratoryDescriptor.codeConfiguration;
    }

    // TODO: This implementation is temporary and should return the information contained in the database
    function getAliquotLength(){
      return _selectedParticipant.fieldCenter.acronym === "RS" ? 10 : 9;
    }
    
    function _descriptorErrorMessenger(type) {
      var msg = 'Descritores de ' + type + ' não inicializados';
      throw new Error(msg);
    }
    return self;
  }
}());
