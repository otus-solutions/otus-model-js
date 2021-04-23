(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.laboratoryCrud')
    .factory('otusjs.laboratory.laboratoryCrud.LaboratoryConfigurationFactory', factory);

  factory.$inject = [
    // 'otusjs.laboratory.participant.ParticipanTubeFactory',
    // 'otusjs.laboratory.configuration.LaboratoryConfigurationService'
  ];

  function factory() {
    var self = this;

    self.create = create;
    self.fromJson = fromJson;

    function create() {
      return new LaboratoryConfiguration({});
    }

    function fromJson(laboratoryConfig) {
      return new LaboratoryConfiguration(JSON.parse(laboratoryConfig));
    }
    return self;

  }

  function LaboratoryConfiguration(participantLaboratory) {
    var self = this;

    /* attributes */
    self._id = participantLaboratory._id || "";
    self.objectType = participantLaboratory.objectType || 'LaboratoryConfiguration';
    self.codeConfiguration = participantLaboratory.codeConfiguration || {};
    self.aliquotConfiguration = participantLaboratory.aliquotConfiguration || {};
    self.tubeConfiguration = participantLaboratory.tubeConfiguration || {};
    self.collectMomentConfiguration = participantLaboratory.collectMomentConfiguration || {};
    self.collectGroupConfiguration = participantLaboratory.collectGroupConfiguration || {};
    self.labelPrintConfiguration = participantLaboratory.labelPrintConfiguration || {};
    self.metadataConfiguration = participantLaboratory.metadataConfiguration || {};
    self.lotConfiguration = participantLaboratory.lotConfiguration || {};

    /* methods */
    self.toJSON = toJSON;

    function toJSON() {
      var json = {
        objectType: self.objectType,
        codeConfiguration: self.codeConfiguration,
        aliquotConfiguration: self.aliquotConfiguration,
        collectMomentConfiguration: self.collectMomentConfiguration,
        collectGroupConfiguration: self.collectGroupConfiguration,
        labelPrintConfiguration: self.labelPrintConfiguration,
        metadataConfiguration: self.metadataConfiguration ,
        lotConfiguration: self.lotConfiguration
      };
      return json;
    }

    function buildLaboratory(groups, tubes,
                             moments, aliquots,
                             codeConfiguration, aliquotCenterDescriptors,
                             materialConfiguration) {
      _buildConfigurations(groups, tubes, moments, aliquots, codeConfiguration);
      _buildAliquotConfiguration(aliquotCenterDescriptors, materialConfiguration)
    }

    function _buildConfigurations(codeConfiguration, groups, tubes, moments, aliquots) {
      _buildCodeConfiguration(codeConfiguration);
      _buildGroupConfiguration(groups);
      _buildTubeConfiguration(tubes);
      _buildMomentConfiguration(moments);
      _buildAliquotsDescriptors(aliquots);
    }

    function _buildCodeConfiguration(codeConfiguration) {
      self.codeConfiguration = codeConfiguration;
    }

    function _buildGroupConfiguration(groups) {
      self.collectGroupConfiguration.groupDescriptors = groups;
    }

    function _buildTubeConfiguration(tubes) {
      self.tubeConfiguration = {
        tubeDescriptors: tubes
      }
    }

    function _buildMomentConfiguration(moments) {
      self.collectMomentConfiguration = {
        momentDescriptors: moments
      }
    }

    function _buildAliquotsDescriptors(aliquots) {
      aliquots = aliquots.map(aliquot => {
        return {
          objectType: "AliquotDescriptor",
          name: aliquot.name,
          label: aliquot.label
        }
      });
      self.aliquotConfiguration.aliquotDescriptors = aliquots;
    }

    function _buildAliquotConfiguration(aliquotCenterDescriptors, materialConfigurations) {
      self.aliquotConfiguration.objectType = "AliquotConfiguration";
      _buildAliquotCenterDescriptors(aliquotCenterDescriptors);
      _buildAliquotGroupDescriptors(materialConfigurations)
    }

    function _buildAliquotCenterDescriptors(aliquotCenterDescriptors) {
      self.aliquotConfiguration.aliquotCenterDescriptors = aliquotCenterDescriptors.map(descriptor => {
        return {
          objectType: "AliquotCenterDescriptor",
          name: descriptor.name,
          aliquotCodeSizes: descriptor.aliquotCodeSize,
          aliquotGroupDescriptors: []
        }
      });
    }

    //Todo finalizar build, verificar se group sera associado a aliquotCenter antes;
    function _buildAliquotGroupDescriptors(materialConfigurations) {
      materialConfigurations.forEach(materialConfig => {
        self.aliquotConfiguration.aliquotCenterDescriptors.forEach(aliquotCenterDesc => {
          if(materialConfig.center === aliquotCenterDesc.name) {

          }
        })
      })
    }
  }
}());
