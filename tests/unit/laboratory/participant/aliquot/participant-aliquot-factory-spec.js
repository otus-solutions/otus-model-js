describe('ParticipantAliquotFactory', function() {
  var Mock = {};
  var factory;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    inject(function(_$injector_) {
      var injections = {
        'AliquotCollectionDataFactory': mockAliquoteCollectionDataFactory(_$injector_),
        'LaboratoryConfigurationService': mockLaboratoryConfigurationService(_$injector_)
      };
      factory = _$injector_.get('otusjs.laboratory.participant.ParticipantAliquotFactory', injections);
    });

    mockSelectedParticipant();
    mockLabDescriptors();
    mockParticipantLaboratory();
    mockSingleTube();
    mockAliquotInfo();
    Mock.LaboratoryConfigurationService.initializeLaboratoryConfiguration(Mock.LabDescriptors);
  });

  describe('the creation method', function() {

    beforeEach(function() {
      mockAliquotInfo();
      mockAliquot();
    });

    it('should create an aliquot typed object', function() {
      expect(Mock.aliquot.objectType).toEqual('Aliquot');
    });

    it('should generate the same values for this fields', function() {
      expect(Mock.aliquot.objectType).toEqual(Mock.aliquotInfo.objectType);
      expect(Mock.aliquot.code).toEqual(Mock.aliquotInfo.code);
      expect(Mock.aliquot.name).toEqual(Mock.aliquotInfo.name);
      expect(Mock.aliquot.container).toEqual(Mock.aliquotInfo.container);
      expect(Mock.aliquot.role).toEqual(Mock.aliquotInfo.role);
    });
  });

  describe('the fromJSON method', function() {
    beforeEach(function() {
      mockAliquotFromJson();
    });

    it('should create an aliquot typed object', function() {
      expect(Mock.AliquotFromJson[0].objectType).toEqual('Aliquot');
    });

    it('should generate the same values for this fields', function() {
      expect(Mock.AliquotFromJson[0].objectType).toEqual(Mock.aliquotInfo.objectType);
      expect(Mock.AliquotFromJson[0].code).toEqual(Mock.aliquotInfo.code);
      expect(Mock.AliquotFromJson[0].name).toEqual(Mock.aliquotInfo.name);
      expect(Mock.AliquotFromJson[0].container).toEqual(Mock.aliquotInfo.container);
      expect(Mock.AliquotFromJson[0].role).toEqual(Mock.aliquotInfo.role);
    });
  });

  describe('the Aliquot descriptor filler', function() {
    var aliquot;
    var aliquotDescriptor;
    beforeEach(function() {
      aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);
      aliquotDescriptor = Mock.LaboratoryConfigurationService
        .getAliquotDescriptor(Mock.aliquotInfo.name, Mock.singleTube.moment,
          Mock.singleTube.type, Mock.singleTube.groupName);
    });

    it('should attrib the right label for the given aliquot', function() {
      expect(aliquot.label).toEqual(aliquotDescriptor.label);
    });

  });

  function mockAliquoteCollectionDataFactory(_$injector_) {
    Mock.AliquotCollectionDataFactory = _$injector_.get('otusjs.laboratory.participant.AliquotCollectionDataFactory');
    spyOn(Mock.AliquotCollectionDataFactory, 'create').and.callThrough();
    return Mock.AliquotCollectionDataFactory;
  }

  function mockLaboratoryConfigurationService(_$injector_) {
    Mock.LaboratoryConfigurationService = _$injector_.get('otusjs.laboratory.configuration.LaboratoryConfigurationService');
    return Mock.LaboratoryConfigurationService;
  }
 
  function mockSelectedParticipant() {
    Mock.SelectedParticipant = angular.copy(Test.utils.data.selectedParticipant); //json-importer.js
  }

  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }

  function mockSingleTube() {
    Mock.singleTube = Mock.ParticipantLaboratory.tubes[0];
  }

  function mockAliquotInfo() {
    Mock.aliquotInfo = Mock.singleTube.aliquots[0];
  }

  function mockAliquot() {
    Mock.aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);
  }

  function mockAliquotFromJson() {
    var aliquotsArray = [Mock.ParticipantLaboratory.tubes[0].aliquots[0]];
    Mock.AliquotFromJson = factory.fromJSON(aliquotsArray, Mock.singleTube);
  }

});
