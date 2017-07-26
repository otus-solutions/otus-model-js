xdescribe('ParticipantAliquotFactory', function() {
  var Mock = {};

  beforeEach(function() {
    module('otusjs.laboratory');

    inject(function(_$injector_) {
      var injections = {
        'AliquotCollectionDataFactory': mockAliquoteCollectionDataFactory(_$injector_),
        'LaboratoryConfigurationService': mockLaboratoryConfigurationService(_$injector_)
      };
      factory = _$injector_.get('otusjs.laboratory.ParticipantAliquotFactory', injections);
    });

    mockSelectedParticipant();
    mockLabDescriptors();
    mockParticipantLaboratory();
    mockSingleTube();
    mockAliquotInfo();
    Mock.LaboratoryConfigurationService.initialize(Mock.LabDescriptors, Mock.SelectedParticipant);
  });
  describe('the creation method', function() {
    it('should create an aliquot typed object', function() {
      var aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);

      expect(aliquot.objectType).toEqual('Aliquot');
    });

    it('should generate the same values for this fields', function() {
      var aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);
      expect(aliquot.objectType).toEqual(Mock.aliquotInfo.objectType);
      expect(aliquot.code).toEqual(Mock.aliquotInfo.code);
      expect(aliquot.name).toEqual(Mock.aliquotInfo.name);
      expect(aliquot.container).toEqual(Mock.aliquotInfo.container);
      expect(aliquot.role).toEqual(Mock.aliquotInfo.role);
    });

    it('should not call the AliquotCollectionDataFactory when any collectionData is given', function() {
      //TODO check what to do when collectionData comes empty
      Mock.aliquotInfo.collectionData = null;
      var aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);
      expect(Mock.AliquotCollectionDataFactory.create).toHaveBeenCalled();
    });


  });

  describe('the fromJSON method', function() {
    it('should call AliquotCollectionDataFactory.create', function() {
      Mock.aliquotInfo.collectionData = {
        time: '2017-06-26T05:50:19.434Z',
        operator: 'lalala@gmail.com'
      };
      var aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);
      expect(Mock.AliquotCollectionDataFactory.create).toHaveBeenCalled();
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
    Mock.AliquotCollectionDataFactory = _$injector_.get('otusjs.laboratory.AliquotCollectionDataFactory');
    spyOn(Mock.AliquotCollectionDataFactory, 'create').and.callThrough();
    return Mock.AliquotCollectionDataFactory;
  }

  function mockLaboratoryConfigurationService(_$injector_) {
    Mock.LaboratoryConfigurationService = _$injector_.get('otusjs.laboratory.LaboratoryConfigurationService');
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
});
