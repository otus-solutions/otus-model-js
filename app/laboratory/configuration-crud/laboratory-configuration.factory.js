(function() {
  'use strict';

  angular
    .module('otusjs.laboratory.laboratoryCrud')
    .factory('otusjs.laboratory.laboratoryCrud.LaboratoryConfigurationFactory', factory);

  factory.$inject = [
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
    self.buildLaboratory = buildLaboratory;

    function toJSON() {
      return {
        objectType: self.objectType,
        codeConfiguration: self.codeConfiguration,
        aliquotConfiguration: self.aliquotConfiguration,
        collectMomentConfiguration: self.collectMomentConfiguration,
        collectGroupConfiguration: self.collectGroupConfiguration,
        labelPrintConfiguration: self.labelPrintConfiguration,
        metadataConfiguration: self.metadataConfiguration,
        lotConfiguration: self.lotConfiguration
      };
    }

    function buildLaboratory(groups,
                             tubes,
                             moments,
                             aliquots,
                             codeConfiguration,
                             aliquotCenterDescriptors,
                             laboratoryMaterialConfiguration) {
      _buildConfigurations(codeConfiguration, groups, tubes, moments, aliquots);
      _buildAliquotConfiguration(aliquotCenterDescriptors, groups, laboratoryMaterialConfiguration);
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

    function _buildAliquotConfiguration(aliquotCenterDescriptors, groups, laboratoryMaterialConfigs) {
      self.aliquotConfiguration.objectType = "AliquotConfiguration";
      _buildAliquotCenterDescriptors(aliquotCenterDescriptors);
      _buildAliquotGroupDescriptors(groups);
      _buildAliquotMomentDescriptors(groups);
      _buildAliquotTypesDescriptors(laboratoryMaterialConfigs);
    }

    function _buildAliquotCenterDescriptors(aliquotCenterDescriptors) {
      self.aliquotConfiguration.aliquotCenterDescriptors = aliquotCenterDescriptors.map(descriptor => {
        return {
          objectType: "AliquotCenterDescriptor",
          name: descriptor.name,
          aliquotCodeSizes: descriptor.aliquotCodeSizes,
          aliquotGroupDescriptors: []
        }
      });
    }

    function _buildAliquotGroupDescriptors(groups) {
      const aliquotGroupDescriptor = groups.map(group => {
        return {
          objectType: "AliquotGroupDescriptor",
          name: group.name,
          aliquotMomentDescriptors: []
        }
      });
      self.aliquotConfiguration.aliquotCenterDescriptors.forEach(centerDescriptor => {
        centerDescriptor.aliquotGroupDescriptors = aliquotGroupDescriptor;
      })
    }

    function _buildAliquotMomentDescriptors(groups) {
      const groupMoments = groups.map(group => {
        return {
          name: group.type,
          moments: _distinct(group.tubeSet, 'moment')
        }
      });
      self.aliquotConfiguration.aliquotCenterDescriptors.forEach(aliquotCenter => {
        aliquotCenter.aliquotGroupDescriptors.forEach(aliquotGroup => {
          groupMoments.forEach(groupMoment => {
            if(aliquotGroup.name === groupMoment.name) {
              aliquotGroup.aliquotMomentDescriptors = groupMoment.moments.map(moment => {
                return {
                  objectType: "AliquotMomentDescriptor",
                  name: moment,
                  aliquotTypesDescriptors: []
                }
              });
            }
          })
        });
      })
    }

    function _buildAliquotTypesDescriptors(laboratoryMaterialConfigs) {
      laboratoryMaterialConfigs.forEach(laboratoryMaterialConfig => {
        self.aliquotConfiguration.aliquotCenterDescriptors.forEach(center => {
          center.aliquotGroupDescriptors.forEach(group => {
            if(group.name === laboratoryMaterialConfig.group.name) {
              group.aliquotMomentDescriptors.forEach(moment => {
                if(moment.name === laboratoryMaterialConfig.moment.name) {
                  moment.aliquotTypesDescriptors.push(_structAliquotTypesDescriptor(laboratoryMaterialConfig));
                }
              })
            }
          });
        });
      })
    }

    function _structAliquotTypesDescriptor(laboratoryMaterialConfig) {
      return {
        objectType: "AliquotTypesDescriptor",
        name: laboratoryMaterialConfig.tube.type,
        aliquots: laboratoryMaterialConfig.tube.aliquots.map(aliquot => {
          return {
            name: aliquot.name,
            role: aliquot.type
          }
        })
      };
    }

    function _distinct(arr, key) {
      return Object.keys(
        arr.reduce((acc, curr) => {
          (acc[curr[key]] = acc[curr[key]] || []).push(curr);
          return acc;
        }, {})
      )
    }
  }
}());
