describe('the laboratory configuration service', function() {
  //skipped beacuse phantom-js
  //if some test fails, try updating the json-importer.js file
  var Mock = {};
  var service;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    inject(function(_$injector_) {
      var injections = {};
      service = _$injector_.get(
        'otusjs.laboratory.configuration.LaboratoryConfigurationService',
        injections);
    });


    mockLabDescriptors();
    mockSelectedParticipant();
    mockParticipantLaboratory();
    mockSingleTube();
    mockAliquotInfo();
    mockLoggedUser();

  });

  describe('data initialization', function() {
    beforeEach(function() {
      service.initializeParticipantConfiguration(Mock.SelectedParticipant,
        Mock.ParticipantLaboratory.collectGroupName);
    });

    it('should initialize full descriptors', function() {
      service.initializeLaboratoryConfiguration(Mock.LabDescriptors);
      var checkFullDescriptors = service.checkLaboratoryConfiguration();
      var checkAliquotsDescriptor = service.checkAliquotsDescriptors();
      expect(checkFullDescriptors).toBe(true);
      expect(checkAliquotsDescriptor).toBe(true);
    });

    it('should initialize aliquots descriptors', function() {
      service.initializeAliquotsDescriptors(Mock.LabDescriptors.aliquotConfiguration
        .aliquotDescriptors);
      var checkFullDescriptors = service.checkLaboratoryConfiguration();
      var checkAliquotsDescriptor = service.checkAliquotsDescriptors();
      expect(checkFullDescriptors).toBe(false);
      expect(checkAliquotsDescriptor).toBe(true);
    });

    it('should throw error when not initialized', function() {
      var checkFullDescriptors = service.checkLaboratoryConfiguration();
      var checkAliquotsDescriptor = service.checkAliquotsDescriptors();
      expect(checkFullDescriptors).toBe(false);
      expect(checkAliquotsDescriptor).toBe(false);

      var expectedError = service.getAliquotDescriptor;
      expect(expectedError).toThrowError(Error,
        "Descritores de alíquota não inicializados");

      var anotherExpectedError = service.getAvaiableAliquots;
      expect(anotherExpectedError).toThrowError(Error,
        "Descritores de laboratório não inicializados");
    });
  });

  describe('the descriptor getters', function() {

    beforeEach(function() {
      service.initializeLaboratoryConfiguration(Mock.LabDescriptors);
      service.initializeParticipantConfiguration(Mock.SelectedParticipant,
        Mock.ParticipantLaboratory.collectGroupName);
    });

    it('should get return the right container given an aliquot code',
      function() {
        var code = 321425120;
        var container = service.getAliquotContainer(code);

        expect(container).toEqual('TUBE');

        code = 324425120;
        container = service.getAliquotContainer(code);

        expect(container).toEqual('PALLET');

        code = 323425120;
        container = service.getAliquotContainer(code);

        expect(container).toEqual('CRYOTUBE');
      });

    it('should get avaiable aliquots', function() {
      Mock.SelectedParticipant.fieldCenter.acronym = 'RS';
      service.initializeParticipantConfiguration(Mock.SelectedParticipant,
        'CQ1');
      var avaiableAliquots = service.getAvaiableAliquots('FASTING',
        'GEL');
      expect(avaiableAliquots.length).not.toEqual(0);
    });
  });

  it("should validate Aliquot Wave", function() {
    beforeEach(function() {
      service.initializeLaboratoryConfiguration(Mock.LabDescriptors);
      service.initializeParticipantConfiguration(Mock.SelectedParticipant,
        Mock.ParticipantLaboratory.collectGroupName);
    });
    spyOn(service, "validateAliquotWave");
    var code = 321425120;
    var container = service.validateAliquotWave(code);
    expect(container).not.toEqual(null);
    expect(service.validateAliquotWave).toHaveBeenCalledWith(code);
  });

  //--------
  // Mock Functions
  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }

  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockLoggedUser() {
    Mock.LoggedUser = Test.utils.data.otusLoggedUser; //json-importer.js
  }

  function mockSelectedParticipant() {
    Mock.SelectedParticipant = Test.utils.data.selectedParticipant; //json-importer.js
  }

  function mockSingleTube() {
    Mock.singleTube = Mock.ParticipantLaboratory.tubes[0];
  }

  function mockAliquotInfo() {
    Mock.aliquotInfo = Mock.singleTube.aliquots[0];
  }
});
