fdescribe('ParticipantAliquotFactory', function() {
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
    mockLabParticipant();
    mockSingleTube();
    mockAliquotInfo();
    Mock.LaboratoryConfigurationService.initialize(Mock.LabDescriptors, Mock.SelectedParticipant);
  });
  describe('the creation method', function() {
    it('should create an aliquote typed object', function() {
      var aliquote = factory.create(Mock.aliquotInfo, Mock.singleTube);

      expect(aliquote.objectType).toEqual('Aliquot');
    });

    it('should generate the same values for this fields', function() {
      var aliquote = factory.create(Mock.aliquotInfo, Mock.singleTube);

      expect(aliquote.objectType).toEqual(Mock.aliquotInfo.objectType);
      expect(aliquote.code).toEqual(Mock.aliquotInfo.code);
      expect(aliquote.name).toEqual(Mock.aliquotInfo.name);
      expect(aliquote.container).toEqual(Mock.aliquotInfo.container);
      expect(aliquote.role).toEqual(Mock.aliquotInfo.role);
    });

    it('should not call the AliquotCollectionDataFactory when any collectionData is given', function() {
      //TODO check what to do when collectionData comes empty
      Mock.aliquotInfo.collectionData = null;
      var aliquote = factory.create(Mock.aliquotInfo, Mock.singleTube);
      expect(Mock.AliquotCollectionDataFactory.create).not.toHaveBeenCalled();
    });


  });

  describe('the fromJSON method', function() {
    it('should call AliquotCollectionDataFactory.create', function() {
      Mock.aliquotInfo.collectionData = {
        time: '2017-06-26T05:50:19.434Z',
        operator: 'lalala@gmail.com'
      };
      var aliquote = factory.create(Mock.aliquotInfo, Mock.singleTube);
      expect(Mock.AliquotCollectionDataFactory.create).toHaveBeenCalledWith(Mock.aliquotInfo.collectionData);
    });
  });

  describe('the Aliquot descriptor filler', function() {
     var aliquot;
     var aliquotDescriptor;
     beforeEach(function(){
        aliquot = factory.create(Mock.aliquotInfo, Mock.singleTube);
        aliquotDescriptor = Mock.LaboratoryConfigurationService
                           .getAliquotDescriptor(Mock.aliquotInfo.name, Mock.singleTube.moment,
                                                Mock.singleTube.type, Mock.singleTube.groupName);
     });

    it('should attrib the right label for the given aliquot', function() {
      expect(aliquot.label).toEqual(aliquotDescriptor.label);
      expect(aliquot.quantity).toEqual(aliquotDescriptor.quantity);
    });

    it('should attrib the right quantity for the given aliquot', function() {
      expect(aliquot.quantity).toEqual(aliquotDescriptor.quantity);
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

  function mockLabParticipant() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }

  function mockSingleTube() {
    Mock.singleTube = Mock.ParticipantLaboratory.tubes[0];
  }

  function mockAliquotInfo() {
     Mock.aliquotInfo = Mock.singleTube.aliquotes[0];
  }
});
