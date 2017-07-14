fdescribe('a test', function() {
  var Mock = {};

  beforeEach(function() {
    module('otusjs.laboratory');

    inject(function(_$injector_) {
      var injections = {};
      service = _$injector_.get('otusjs.laboratory.LaboratoryConfigurationService', injections);
    });


    mockLabDescriptors();
    mockParticipantLaboratory();
    mockSingleTube();
    mockAliquotInfo();

    service.initialize(Mock.LabDescriptors);
  });

  it('should get return the right container given an aliquot code', function() {
    var code = 321425120;
    var container = service.getAliquotContainer(code);

    expect(container).toEqual('tube');
  });

  //--------
  // Mock Functions
  function mockLabDescriptors() {
    Mock.LabDescriptors = Test.utils.data.laboratoryConfiguration; //json-importer.js
  }

  function mockParticipantLaboratory() {
    Mock.ParticipantLaboratory = Test.utils.data.participantLaboratory; //json-importer.js
  }

  function mockSingleTube() {
    Mock.singleTube = Mock.ParticipantLaboratory.tubes[0];
  }

  function mockAliquotInfo() {
    Mock.aliquotInfo = Mock.singleTube.aliquots[0];
  }
});
