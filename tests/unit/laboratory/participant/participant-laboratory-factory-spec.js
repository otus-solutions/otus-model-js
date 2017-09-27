describe('participant laboratory factory', function() {
  var Mock = {};
  var factory;
  var service;

  beforeEach(function() {
    angular.mock.module('otusjs.laboratory');

    mockSelectedParticipant();
    mockParticipantLaboratory();
    mockLabDescriptors();
    mockSingleTube();
    mockLoggedUser();

    inject(function(_$injector_) {
      var injections = {
        'ParticipanTubeFactory': mockParticipanTubeFactory(_$injector_),
        'LaboratoryConfigurationService': mockLaboratoryConfigurationService(_$injector_)
      };
      factory = _$injector_.get('otusjs.laboratory.participant.ParticipantLaboratoryFactory', injections);
      service = _$injector_.get('otusjs.laboratory.configuration.LaboratoryConfigurationService', {});
      service.initializeLaboratoryConfiguration(Mock.LabDescriptors);
      service.initializeParticipantConfiguration(Mock.SelectedParticipant, Mock.ParticipantLaboratory.collectGroupName);
    });
  });

  it('should create an ParticipantLaboratory object', function() {
    var object = factory.create(Mock.ParticipantLaboratory, Mock.LoggedUser, Mock.SelectedParticipant);
    expect(object.objectType).toEqual("ParticipantLaboratory");
  });

  it('should reload the original tube list', function() {
    var object = factory.create(Mock.ParticipantLaboratory, Mock.LoggedUser, Mock.SelectedParticipant);
    delete object.tubes;
    expect(object.tubes).toBe(undefined);
    object.reloadTubeList();
    expect(object.tubes).not.toBe(undefined);
  });

  it('should update the backup tube list and restore with the new array', function() {
    var object = factory.create(Mock.ParticipantLaboratory,  Mock.LoggedUser, Mock.SelectedParticipant);
    object.tubes = [];
    expect(object.tubes.length).toBe(0);

    object.updateTubeList();

    object.tubes = [1,2,3];
    object.reloadTubeList();
    expect(object.tubes.length).toBe(0);
  });

  it('should export the right fields', function() {
     var object = factory.create(Mock.ParticipantLaboratory,  Mock.LoggedUser, Mock.SelectedParticipant);
     spyOn(object, 'toJSON').and.callThrough();

     var json = JSON.stringify(object);

     expect(object.toJSON).toHaveBeenCalled();
     var parsed = JSON.parse(json);

     // TODO: find out why we need to parse twice

     expect(parsed.objectType).toBeDefined();
     expect(parsed.recruitmentNumber).toBeDefined();
     expect(parsed.collectGroupName).toBeDefined();
     expect(parsed.tubes).toBeDefined();
     expect(parsed.exams).toBeDefined();
  });



  function mockParticipanTubeFactory(_$injector_) {
    var injections = {
      'TubeCollectionDataFactory': mockTubeCollectionDataFactory(
        _$injector_),
      'ParticipantAliquotFactory': mockParticipantAliquotFactory(
        _$injector_),
      'LaboratoryConfigurationService': mockLaboratoryConfigurationService(
        _$injector_)
    };
    Mock.ParticipanTubeFactory = _$injector_.get(
      'otusjs.laboratory.participant.ParticipanTubeFactory',
      injections);

    spyOn(Mock.ParticipanTubeFactory, 'create').and.callThrough();
    spyOn(Mock.ParticipanTubeFactory, 'buildFromArray').and.callThrough();
    return Mock.ParticipanTubeFactory;
  }

  function mockLaboratoryConfigurationService(_$injector_) {
    Mock.LaboratoryConfigurationService = _$injector_.get('otusjs.laboratory.configuration.LaboratoryConfigurationService');
    return Mock.LaboratoryConfigurationService;
  }

  function mockTubeCollectionDataFactory(_$injector_) {
    Mock.TubeCollectionDataFactory = _$injector_.get(
      'otusjs.laboratory.participant.TubeCollectionDataFactory');
    spyOn(Mock.TubeCollectionDataFactory, 'create').and.callThrough();
    // spyOn(Mock.TubeCollectionDataFactory, 'TubeCollectionData').and.callThrough(); //private method
    return Mock.TubeCollectionDataFactory;
  }

  function mockParticipantAliquotFactory(_$injector_) {
    Mock.ParticipantAliquotFactory = _$injector_.get(
      'otusjs.laboratory.participant.ParticipantAliquotFactory');
    spyOn(Mock.ParticipantAliquotFactory, 'create').and.callThrough();
    return Mock.ParticipantAliquotFactory;

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

  function mockLoggedUser() {
    Mock.LoggedUser = Test.utils.data.otusLoggedUser;
  }
});
