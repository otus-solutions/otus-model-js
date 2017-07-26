xdescribe('the laboratory configuration service', function() {
  var Mock = {};

  beforeEach(function() {
    module('otusjs.laboratory');

    inject(function(_$injector_) {
      var injections = {};
      service = _$injector_.get('otusjs.laboratory.LaboratoryConfigurationService', injections);
    });


    mockLabDescriptors();
    mockSelectedParticipant();
    mockParticipantLaboratory();
    mockSingleTube();
    mockAliquotInfo();
    mockLoggedUser();

    service.initialize(Mock.LabDescriptors, Mock.SelectedParticipant, Mock.ParticipantLaboratory.collectGroupName);
  });

  it('should get return the right container given an aliquot code', function() {
    var code = 321425120;
    var container = service.getAliquotContainer(code);

    expect(container).toEqual('TUBE');

    code = 322425120;
    container = service.getAliquotContainer(code);

    expect(container).toEqual('PALLET');

    code = 323425120;
    container = service.getAliquotContainer(code);

    expect(container).toEqual('CRYOTUBE');
  });

  it('should get avaiable aliquots', function() {
    Mock.SelectedParticipant.fieldCenter.acronym = 'RS';
    service.initialize(Mock.LabDescriptors, Mock.SelectedParticipant, 'CQ1');
    service.getAvaiableAliquots('FASTING', 'GEL');
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
