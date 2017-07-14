xdescribe('moment type manager factory', function(a) {
   //ignorado por dificultade de injeção de mocks
  var Mock = {};
  var manager;
  var $scope;

  beforeEach(function() {
    module('otusjs.laboratory');

    inject(function(_$injector_, $q, _$rootScope_) {
      var injections = {
        '$q': $q
      };
      $scope = _$rootScope_.$new();
      factory = _$injector_.get('otusjs.laboratory.MomentTypeManagerFactory', injections);
      mockParticipantTubeFactory(_$injector_);
    });

    mockParticipantLaboratory();
    mockSingleTube();
    mockAnsweredAliquot();
    mockLoggedUser();

    manager = factory.create(Mock.singleTube);
    console.log(Mock.singleTube);
    Mock.singleTube = Mock.ParticipanTubeFactory.create(Mock.singleTube, Mock.loggedUser);
    manager.addTube(Mock.singleTube);
  });

  it('should persist', function() {
    manager.persist(Mock.AnsweredAliquots, true)
      .then(function(asd) {
        console.log('asd');
      });
    $scope.$apply();
  });

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
    Mock.loggedUser = Test.utils.data.loggedUser;
  }

  function mockTubeCollectionDataFactory(_$injector_) {
    Mock.ParticipanTubeFactory = _$injector_.get('otusjs.laboratory.TubeCollectionDataFactory');
  }

  function mockParticipantAliquotFactory(_$injector_) {
    Mock.ParticipanTubeFactory = _$injector_.get('otusjs.laboratory.ParticipantAliquotFactory');
  }

  function mockLaboratoryConfigurationService(_$injector_) {
    Mock.ParticipanTubeFactory = _$injector_.get('otusjs.laboratory.LaboratoryConfigurationService');
  }

  function mockParticipantTubeFactory(_$injector_) {
    Mock.ParticipanTubeFactory = _$injector_.get('otusjs.laboratory.ParticipanTubeFactory');
  }

  function mockAnsweredAliquot() {
    Mock.AnsweredAliquots = [
      {
        "aliquotCode": "342002521",
        "tubeCode": "341002263",
        "container": "",
        "placeholder": "341002263",
        "aliquotMessage": "",
        "tubeMessage": "",
        "isSaved": false,
        "name": "PCR",
        "label": "PCR",
        "aliquotId": "examAliquot1",
        "tubeId": "examTube1",
        "role": "exam",
        "index": 1
  },
      {
        "aliquotCode": "342002522",
        "tubeCode": "341002263",
        "container": "",
        "placeholder": "341002263",
        "aliquotMessage": "",
        "tubeMessage": "",
        "isSaved": false,
        "name": "FASTING_INSULINE",
        "label": "Insulina Jejum",
        "aliquotId": "examAliquot2",
        "tubeId": "examTube2",
        "role": "exam",
        "index": 2
  },
      {
        "aliquotCode": "342002523",
        "tubeCode": "341002263",
        "container": "",
        "placeholder": "341002263",
        "aliquotMessage": "",
        "tubeMessage": "",
        "isSaved": false,
        "name": "STORAGE",
        "label": "Armazenamento",
        "aliquotId": "storageAliquot2",
        "tubeId": "storageTube2",
        "role": "storage",
        "index": 2
  }
];

  }
});
