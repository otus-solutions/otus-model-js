fdescribe('the aliquot manager factory', function() {
  var Mock = {};

  beforeEach(function() {

    module('otusjs.laboratory');

    mockLabParticipant();
    mockLabDescriptors();
    mockLoggedUser();
    mockSingleTube();

    inject(function(_$injector_) {
      mockLaboratoryParticipantFactory(_$injector_);
      var injections = {};
      factory = _$injector_.get('otusjs.laboratory.AliquotManagerFactory', injections);
    });

  });

  describe('the creation method', function() {
    beforeEach(function() {
      spyOn(factory, 'create').and.callThrough();
    });

    it('should be called at ParticipantLaboratory creation', function() {
      var _participantLaboratory = Mock.ParticipantLaboratoryFactory.create(Mock.ParticipantLaboratory, Mock.LabDescriptors, Mock.LoggedUser);
      console.log(Mock.LoggedUser);
      expect(factory.create).toHaveBeenCalledWith(Mock.LoggedUser.recruitmentNumber, _participantLaboratory.tubes);
    });

  });

  describe('the tube registration', function() {
    beforeEach(function() {
      spyOn(factory, 'create').and.callThrough();
    });

    it('should register a tube at tube creation', function() {

    });

  });

  function mockLaboratoryParticipantFactory(_$injector_) {
    Mock.ParticipantLaboratoryFactory = _$injector_.get('otusjs.laboratory.ParticipantLaboratoryFactory');
  }

  function mockLabParticipant() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }

  function mockLoggedUser() {
    Mock.LoggedUser = Test.utils.data.selectedParticipant; //json-importer.js
  }

  function mockSingleTube() {
    Mock.singleTube = Mock.ParticipantLaboratory.tubes[0]; //json-importer.js
  }
});
