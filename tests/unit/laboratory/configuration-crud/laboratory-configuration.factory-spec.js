describe('the laboratory config factory', function() {
  var Mock = {};
  var service;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    inject(function(_$injector_) {
      var injections = {};
      mockLaboratoryFactory(_$injector_, injections);
      mockCreateLaboratoryConfig();
      initLaboratoryMocks();
      mockLaboratoryBuild();
    });
  });

  describe('createLab method', function() {

    beforeEach(function() {
      spyOn(Mock.LaboratoryFactory, "create");
      Mock.LaboratoryFactory.create();
    });

    it('check if laboratory created', function() {
      expect(Mock.LaboratoryFactory.create).toHaveBeenCalled();
      expect(Mock.LaboratoryFactory.create).not.toBeNull();
    });
  });

  describe('verify laboratory toJson', function () {
    beforeEach(function() {
      spyOn(Mock.laboratoryConfigFactory, "toJSON");
      Mock.emptyJson = Mock.laboratoryConfigFactory.toJSON();
    });

    it('method toJson should be called', function () {
      expect(Mock.laboratoryConfigFactory.toJSON).toHaveBeenCalled();
    });

  })

  describe('Build Laboratory configuration test', function () {
    beforeEach(function () {
      spyOn(Mock.laboratoryConfigFactory, 'buildLaboratory');
      mockLaboratoryBuild();
    })

    it('Build should be called', function () {
      expect(Mock.laboratoryConfigFactory.buildLaboratory).toHaveBeenCalled();
    })

    it('tubeConfiguration should be filled', function () {
      expect(Mock.laboratoryConfigFactory.tubeConfiguration).toEqual(Mock.tubeConfiguration);
    })

    it('collectMomentConfiguration should be filled', function () {
      expect(Mock.laboratoryConfigFactory.collectMomentConfiguration).toEqual(Mock.collectMomentConfiguration);
    })

    it('collectGroupConfiguration should be filled', function () {
      expect(Mock.laboratoryConfigFactory.collectGroupConfiguration).toEqual(Mock.collectGroupConfiguration);
    })

    it('codeConfiguration should be filled', function () {
      expect(Mock.laboratoryConfigFactory.codeConfiguration).toEqual(Mock.codeConfiguration);
    })

    it('aliquotDescriptors should be filled', function () {
      expect(Mock.laboratoryConfigFactory.aliquotConfiguration.aliquotDescriptors).toEqual(Mock.aliquots);
    })

    it('aliquotCenterDescriptors should be filled', function () {
      expect(Mock.laboratoryConfigFactory.aliquotConfiguration.aliquotCenterDescriptors)
        .toEqual(Mock.aliquotCenterDescriptorMock);
    })
  });

  function mockLaboratoryFactory(_$injector_, injections) {
    Mock.LaboratoryFactory = _$injector_.get(
      'otusjs.laboratory.laboratoryCrud.LaboratoryConfigurationFactory', injections);
  }

  function mockCreateLaboratoryConfig() {
    Mock.laboratoryConfigFactory = Mock.LaboratoryFactory.create();
  }

  function mockLaboratoryBuild() {
    Mock.laboratoryConfigFactory.buildLaboratory(Mock.groups,
      Mock.tubes,
      Mock.moments,
      Mock.aliquots,
      Mock.codeConfiguration,
      Mock.aliquotCenterDescriptors,
      Mock.laboratoryMaterialConfigs);
  }

  function initLaboratoryMocks() {
    _mockGroups();
    _mockTubes();
    _mockMoments();
    _mockAliquots();
    _mockCodeConfiguration();
    _mockAliquotCenterDescriptors();
    _mockLaboratoryMaterialConfigurations();
    _mockFakeTubeConfiguration();
    _mockFakeCollectMomentConfiguration();
    _mockFakeCollectGroupConfiguration();
    _mockFakeAliquotCenterDescriptors();
  }

  function _mockGroups() {
    Mock.groups = Test.utils.data.laboratoryCrudConfig.groups;
  }

  function _mockTubes() {
    Mock.tubes = Test.utils.data.laboratoryCrudConfig.tubes;
  }

  function _mockMoments() {
    Mock.moments = Test.utils.data.laboratoryCrudConfig.moments;
  }

  function _mockAliquots() {
    Mock.aliquots = Test.utils.data.laboratoryCrudConfig.aliquots;
  }

  function _mockCodeConfiguration() {
    Mock.codeConfiguration = Test.utils.data.laboratoryCrudConfig.codeConfiguration;
  }

  function _mockAliquotCenterDescriptors() {
    Mock.aliquotCenterDescriptors = Test.utils.data.laboratoryCrudConfig.aliquotCenterDescriptors;
  }

  function _mockLaboratoryMaterialConfigurations() {
    Mock.laboratoryMaterialConfigs = Test.utils.data.laboratoryCrudConfig.laboratoryMaterialConfigs;
  }

  function _mockFakeTubeConfiguration() {
    Mock.tubeConfiguration = {
      tubeDescriptors: Mock.tubes
    };
  }

  function _mockFakeCollectMomentConfiguration() {
    Mock.collectMomentConfiguration = {
      momentDescriptors : [
        {
          "name" : "NONE",
          "label" : "Nenhum"
        }
      ]
    }
  }

  function _mockFakeCollectGroupConfiguration() {
    Mock.collectGroupConfiguration = {
      groupDescriptors : [
        {
          "name" : "DEFAULT",
          "type" : "DEFAULT",
          "tubeSet" : [
            {
              "count" : 8.0,
              "type" : "DBS",
              "moment" : "NONE",
              "group" : "DEFAULT"
            },
            {
              "count" : 2.0,
              "type" : "CRYOTUBE",
              "moment" : "NONE",
              "group" : "DEFAULT"
            },
            {
              "count" : 2.0,
              "type" : "MICROTAINER",
              "moment" : "NONE",
              "group" : "DEFAULT"
            }
          ]
        }
      ]
    }
  }

  function _mockFakeAliquotCenterDescriptors() {
    Mock.aliquotCenterDescriptorMock = [
        {
          objectType: 'AliquotCenterDescriptor',
          name: 'ATITUDE',
          aliquotCodeSizes: [
            9
          ],
          aliquotGroupDescriptors: [
            {
              objectType: 'AliquotGroupDescriptor',
              name: 'DEFAULT',
              aliquotMomentDescriptors: [
                {
                  objectType: 'AliquotMomentDescriptor',
                  name: 'NONE',
                  aliquotTypesDescriptors: [
                    {
                      objectType: 'AliquotTypesDescriptor',
                      name: 'Cryotube',
                      aliquots: [
                        {
                          name: 'TDHA syphilis',
                          role: 'exam'
                        },
                        {
                          name: 'TDHA syphilis',
                          role: 'exam'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
  }

});
